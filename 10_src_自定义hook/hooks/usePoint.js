import { reactive, onBeforeMount, onUnmounted } from 'vue'
export default function () {
    let point = reactive({
        x: 0,
        y: 0
    })
    function savaPoint(event) {
        point.x = event.pageX
        point.y = event.pageY
        // console.log(event.pageX, event.pageY)
    }
    onBeforeMount(() => {
        window.addEventListener('click', savaPoint)
    })
    onUnmounted(() => {
        window.removeEventListener('click', savaPoint)
    })

    return point
}