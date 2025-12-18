document.addEventListener('DOMContentLoaded', function () {
    // resizer-sidebar is now controlling the RIGHT sidebar, so dragging left (negative delta) should INCREASE width.
    // We set invertDelta = true.
    initResizer('resizer-sidebar', 'aside.left-sidebar', 'width', true, true);

    // logic for others remains the same
    initResizer('resizer-top', '.conclusion-box', 'width', true, false);
    initResizer('resizer-main-v', '.top-section', 'height', false, false);

    function initResizer(resizerId, targetSelector, dimension, isHorizontal, invertDelta = false) {
        const resizer = document.getElementById(resizerId);
        const target = document.querySelector(targetSelector);

        if (!resizer || !target) return;

        resizer.addEventListener('mousedown', function (e) {
            e.preventDefault();

            const startX = e.clientX;
            const startY = e.clientY;
            // Use getComputedStyle for more accurate initial reading if needed, 
            // but offsetWidth/Height is generally fine for pixel values.
            const startDim = isHorizontal ? target.offsetWidth : target.offsetHeight;

            resizer.classList.add('dragging');
            document.body.style.cursor = isHorizontal ? 'col-resize' : 'row-resize';

            function onMouseMove(e) {
                let delta;
                if (isHorizontal) {
                    delta = e.clientX - startX;
                } else {
                    delta = e.clientY - startY;
                }

                if (invertDelta) {
                    delta = -delta;
                }

                let newDim = startDim + delta;

                // Apply constraints if needed (CSS min-width/min-height will also help)
                target.style[dimension] = newDim + 'px';

                // Trigger global resize event for ECharts and ArcGIS
                window.dispatchEvent(new Event('resize'));
            }

            function onMouseUp() {
                resizer.classList.remove('dragging');
                document.body.style.cursor = 'default';
                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);

                // Final resize trigger
                window.dispatchEvent(new Event('resize'));
            }

            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        });
    }
});
