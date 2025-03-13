import { Slider} from "@heroui/slider";


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

const ArmorSlider = (props: SlidableSetProps) => {
  return (
    <Slider
      className="max-w-md"
      defaultValue={40}
      minValue={100}
      maxValue={300}
      label="Armor"
      showTooltip={true}
      color={props.color || "secondary"}
    />
  );
};

const AmmoSlider = (props: SlidableSetProps) => {
  return (
    <Slider
      className="max-w-md"
      defaultValue={40}
      minValue={100}
      maxValue={300}
      label="Ammo"
      showTooltip={true}
      color={props.color || "warning"}
    />
  );
};


export default SlidableSet;
export {ArmorSlider, AmmoSlider};