import * as masks from "./masks";
import MASKS from "./constants";

const maskInput = (maskType, inputValue, input) => {
    return masks[maskType](inputValue, input);
}

export {
    MASKS
}

export default maskInput;