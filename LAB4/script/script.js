const n = 11;
const targetIndex = (n % 10) + 1;

function toggleColor(element, colorClass) {
    element.classList.toggle(colorClass);
}

document.addEventListener('DOMContentLoaded', () => {
    const targetElementId = document.getElementById(`item-${targetIndex}`);
    const nextElement = document.querySelector(`#item-${targetIndex + 1}`);

    if (targetElementId) {
        targetElementId.addEventListener('click', () => {
            toggleColor(targetElementId, 'bg-color-1');
        });
    }

    if (nextElement) {
        nextElement.addEventListener('click', () => {
            toggleColor(nextElement, 'bg-color-2');
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.querySelector('a[href="https://www.viennasightseeing.at/touren?gad_source=1&gclid=CjwKCAjw0t63BhAUEiwA5xP54Uh49SfPkzCxyduRQpU7L7JSqp2DRcWMQzjK0v68g-LyQUOlpx3cGxoCmgYQAvD_BwE"]');

    const addImage = () => {
        if (!document.getElementById('image')) {
            const newImage = document.createElement('img');
            newImage.id = 'image';
            newImage.src = '../LAB1/image/vienna-1.jpg.avif';
            newImage.alt = 'Відень';
            newImage.width = 700;
            newImage.height = 300;
            imageContainer.appendChild(newImage);
        }
    };

    const increaseImage = () => {
        const image = document.getElementById('image');
        if (image) {
            image.width += 50;
        }
    };

    const decreaseImage = () => {
        const image = document.getElementById('image');
        if (image && image.width > 50) {
            image.width -= 50;
        }
    };

    const removeImage = () => {
        const image = document.getElementById('image');
        if (image) {
            image.remove();
        }
    };

    document.getElementById('add').addEventListener('click', addImage);
    document.getElementById('increase').addEventListener('click', increaseImage);
    document.getElementById('decrease').addEventListener('click', decreaseImage);
    document.getElementById('remove').addEventListener('click', removeImage);
});