function InputField(props) {
    const className = props.className;
    const type = props.type;
    const label = props.label;

    function handleChange(event) {
        console.log(event.target.value);
    }
    
    return (
        <div className={className}>
            <label>{label}</label>        
            <input type={type} onChange={handleChange}/>
        </div>
    )
}

export default InputField;