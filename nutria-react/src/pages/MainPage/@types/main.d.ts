import { SliderConfig } from "../../../components/SlidableSet/@types/sliderConfig";
import { toggleProps } from "../../../components/ToggleCheckBox/@types/toggleConfig";

export interface MainProps {
    slider?: SliderConfig[];
    toggle?: toggleProps[];
}