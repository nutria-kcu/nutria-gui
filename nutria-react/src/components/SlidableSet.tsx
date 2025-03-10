import { Slider } from "@heroui/slider";

interface SlidableSetProps {
	color?: "foreground" | "primary" | "secondary" | "success" | "warning" | "danger";
}

const SlidableSet = (props: SlidableSetProps) => {
	const colors = ["foreground", "primary", "secondary", "success", "warning", "danger"]
	return (
    <Slider
      className="max-w-md"
      defaultValue={40}
			minValue={100}
			maxValue={300}
      //formatOptions={}
      label="HP"
      showTooltip={true}
			color={props.color || "danger"}
      //tooltipValueFormatOptions={}
    />
	)
}

export default SlidableSet;