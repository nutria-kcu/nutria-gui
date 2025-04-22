export interface SliderConfig {
    label: string;
    min: number;
    max: number;
    color: ColorType;
    onPress?: (value: number) => void;
    disabled?: boolean;
}
