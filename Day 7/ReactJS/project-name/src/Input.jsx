// component
// props act as an attriubute of an component
function Input({ label }){
    return (
        <div className="input">
            <label htmlFor="">{label}</label>
            <br />
            <input type="text" />
        </div>
    )
}

export default Input;