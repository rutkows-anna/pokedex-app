import ClipLoader from "react-spinners/ClipLoader";

const Loader = ({ loading }) => {
    return (
        <ClipLoader size={100} color={"#F06072"} loading={loading} />
    )
}

export default Loader;