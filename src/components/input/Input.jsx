export function Input(
    { 
    type="text",
    name="",
    placeholder="",
    value="",
    className="" ,
    onChange=()=>{}
    }){
    return (
        <input 
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        className={`${className}`}
        onChange={onChange}
        />
    )
}