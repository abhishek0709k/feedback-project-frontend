export function Textarea(
    { 
        name="feedback",
        placeholder="Your Feedback",
        value="",
        onChange=()=>{},
        rows=5,
        className="",
    }){
    return (
        <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        className={`${className}`}
        />
    )
}