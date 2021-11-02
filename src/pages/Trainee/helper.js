
export const isTouched = (value) => {
    const { touched } = value;
    const field = Object.keys(touched);
    const touchvalue = field.filter((field) => touched[field] === true);
    if (touchvalue.length === 4) {
        return true;
    }
    return false;
};

export const hasError = (value) => {
    const { errors } = value;
    const fields = Object.keys(errors);
    return fields.length;
};



