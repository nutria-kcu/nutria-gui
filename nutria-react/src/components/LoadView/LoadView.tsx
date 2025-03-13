import { Spinner } from "@heroui/spinner";

const LoadView = () => {
	return (
		<Spinner classNames={{ label: "text-white opacity-80 mt-4" }} color="danger" label="Loading" variant="wave" />
	)
}

export default LoadView;