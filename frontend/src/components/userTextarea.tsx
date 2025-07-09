export const UserTextarea = ({ label, name, id, placeholder }: { label: string; name: string; id: string; placeholder: string }) => {
    return (
        <>
            <label
                className="md:text-lg font-semibold text-balance"
                htmlFor={id}
            >
                {label}
            </label>
            <textarea
                required
                id={id}
                name={name}
                placeholder={placeholder}
                rows={4}
                className="block p-2 w-full text-sm sm:text-lg rounded-lg border"
            />
        </>
    )
}