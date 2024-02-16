import commons from "./commons";
import validations from "./validations";
import errors from "./errors";

const data = { ...commons, ...validations, ...errors };

export default data;
