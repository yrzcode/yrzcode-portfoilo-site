"use client";

import Lottie from "react-lottie";
import animationData from "../../../../data/animationData.json";
import { useState } from "react";
import { BackgroundGradientAnimation } from "../../../ui";
import { MagicButton } from "../../../ui/MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const ContactCell = () => {
	const [copied, setCopied] = useState(false);

	function handleCopy(): void {
		navigator.clipboard.writeText("yang123@example.com");
		setCopied(true);
	}

	return (
		<>
			{/* <BackgroundGradientAnimation /> */}

			<div className="relative">
				<div className="absolute ring-0 -bottom-2">
					<Lottie
						options={{
							loop: copied,
							autoplay: copied,
							animationData,
							rendererSettings: {
								preserveAspectRatio: "xMidYMid slice",
							},
						}}
						isClickToPauseDisabled={true}
						style={{ cursor: "auto" }}
					/>
				</div>

				<MagicButton
					title={copied ? "Email Copied" : "Copy My Email"}
					icon={<IoCopyOutline />}
					position="left"
					otherClasses="!bg-[#161a31]"
					handleClick={handleCopy}
				/>
			</div>
		</>
	);
};
