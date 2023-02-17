
const SortButton = (props) => {
  const { text, className, variant } = props
  return <button className={`px-2 py-1 mx-2 rounded ${variant == "blue" ? "bg-brand-skyblue text-white" : "bg-[rgba(197,194,194,1)]"}  ${className}`}>
    {text}
    </button>
}





export default SortButton