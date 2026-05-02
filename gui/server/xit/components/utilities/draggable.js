export const create = ({ move, move_start, move_end, reset, dbltap, tap }) => {
    return (div, param) => {
        let tm = new Date().getTime();
        let position = reset?.() ?? 0;
        let refPage = 0;
        let engaged = false;
        let moving = false;
        const is_double_tap = () => {
            const tm2 = new Date().getTime();
            const diff = tm2 - tm;
            tm = tm2;
            return diff < 200;
        };
        const pointer_move = (e) => {
            if (!engaged) {
                return;
            }
            if (!moving) {
                moving = true;
                move_start?.();
            }
            const page = param.vertical ? e.pageX : e.pageY;
            const delta = (page - refPage) * (param.reversed ? 1 : -1);
            position = position + delta;
            refPage = page;
            move?.(position);
        };
        const disengage = () => {
            if (!engaged) {
                return;
            }
            if (moving) {
                moving = false;
                move_end?.();
            }
            engaged = false;
        };
        const engage = (e) => {
            if (engaged) {
                return;
            }
            engaged = true;
            if (is_double_tap()) {
                dbltap?.();
                disengage();
            }
            else {
                position = reset?.() ?? 0;
                refPage = param.vertical ? e.pageX : e.pageY;
                tap?.();
            }
        };
        div.addEventListener("pointerdown", engage);
        window.addEventListener("pointerup", disengage);
        window.addEventListener("pointercancel", disengage);
        window.addEventListener("pointermove", pointer_move);
        return {
            update: (new_params) => (param = new_params),
            destroy: () => {
                div.removeEventListener("pointerdown", engage);
                window.removeEventListener("pointerup", disengage);
                window.removeEventListener("pointercancel", disengage);
                window.removeEventListener("pointermove", pointer_move);
            }
        };
    };
};
