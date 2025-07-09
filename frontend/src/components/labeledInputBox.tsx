export const LabelledInputBox = ({ name, id, placeholder, type }: { name: string; id: string; placeholder: string; type: string }) => {
    return (
        <div className="flex flex-col w-full">
            <label
                className="md:text-lg font-semibold text-balance"
                htmlFor={name}
            >
                {name}
            </label>
            <input 
                required
                id={id}
                name={name}
                placeholder={placeholder}
                type={type} 
                className="focus:outline-1 outline-0 outline-blue-400 rounded-lg p-1 border text-sm md:text-lg"
            />
        </div>
    )
}