import Highway from '@dogstudio/highway';

class CustomTransition extends Highway.Transition {
    // Built-in methods
    in({ from, to, trigger, done }) {
        // [...]
        if (trigger === "popstate") {
            from.remove()
        }
        window.setTimeout(() => {
            from.remove()
            done()
        }, 1500)

    }

    out({ from, trigger, done }) {
        // [...]
        done()
    }
}

// Don`t forget to export your transition
export default CustomTransition;
