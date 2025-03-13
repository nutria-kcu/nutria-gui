import { Spinner } from "@heroui/spinner";

const LoadView = () => {
	return (
		<Spinner classNames={{ label: "text-foreground mt-4" }} label="wave" variant="wave" />
	)
}

export default LoadView;