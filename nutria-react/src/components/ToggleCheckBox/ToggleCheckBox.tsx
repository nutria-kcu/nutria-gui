import { Switch, cn } from "@heroui/react";
import { useEffect, useState } from "react";
import { toggleProps } from "./@types/toggleConfig";

const ToggleCheckBox = (props: toggleProps) => {

	const [isSelected, setIsSelected] = useState(false);

  const handleSelectionChange = (newSelection: boolean) => {
    // Your custom logic when isSelected changes
    setIsSelected(newSelection);

		if (newSelection) {
			props.onSet?.(1);
		} else {
			props.onSet?.(0);
		}

    // Example: Do something when the selection changes, like updating a backend or state
  };

	return (
		<Switch
			isSelected={isSelected}
			onValueChange={handleSelectionChange}
			classNames={{
				base: cn(
					"inline-flex flex-row-reverse w-full max-w-md bg-gray-800 hover:bg-gray-700 items-center", // Darker gray background
					"justify-between cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
					"data-[selected=true]:border-gray-500", // Darker gray border for selected state
					"text-gray-200" // Ensure text color is a softer white for better readability
				),
				wrapper: "p-0 h-4 overflow-visible",
				thumb: cn(
					"w-6 h-6 border-2 shadow-lg border-gray-600", // Thumb border color
					"group-data-[hover=true]:border-gray-400", // Lighter gray on hover
					"group-data-[selected=true]:ms-6", // Margin left when selected
					"group-data-[pressed=true]:w-7", // Increase size on press
					"group-data-[selected]:group-data-[pressed]:ms-4"
				),
			}}
		>
			<div className="flex flex-col gap-1">
				<p className="text-gray-200 text-sm">Enable no Recoil</p> {/* Adjusted to lighter text */}
				<p className="text-gray-400 text-xs">
					Current version will only remove y-axis recoil
				</p>
			</div>
		</Switch>
	);
}

export default ToggleCheckBox;
