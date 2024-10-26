interface EmailInputProps {
	isFrontIcon?: boolean;
	isDisabled?: boolean;
	isError?: boolean;
}

const EmailInput = ({ isFrontIcon, isDisabled, isError }: EmailInputProps) => {
	return (
		<article className="flex flex-col gap-1.5 w-full">
			<label htmlFor="input-1" className="text-neutral-700">
				Email
			</label>
			<div
				className={`flex items-center gap-2 self-stretch bg-neutral-50 px-3.5 py-2.5 border border-neutral-200 rounded focus-within:ring-4 ${
					isError
						? 'focus-within:border-red-600 focus-within:ring-red-100'
						: 'focus-within:border-indigo-700 focus-within:ring-indigo-100'
				}`}
			>
				{isFrontIcon && (
					<div className="text-neutral-400">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-4 h-4"
						>
							<path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z" />
						</svg>
					</div>
				)}
				<input
					id="input-1"
					type="email"
					placeholder="name@email.com"
					className={`w-full text-sm bg-transparent outline-none placeholder:text-neutral-500 ${
						isDisabled ? 'placeholder:text-neutral-400' : ''
					}`}
					disabled={isDisabled}
				/>
				<div className={isError ? 'text-red-600' : 'text-neutral-400'}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="w-4 h-4"
					>
						<path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM13 13.3551V14H11V12.5C11 11.9477 11.4477 11.5 12 11.5C12.8284 11.5 13.5 10.8284 13.5 10C13.5 9.17157 12.8284 8.5 12 8.5C11.2723 8.5 10.6656 9.01823 10.5288 9.70577L8.56731 9.31346C8.88637 7.70919 10.302 6.5 12 6.5C13.933 6.5 15.5 8.067 15.5 10C15.5 11.5855 14.4457 12.9248 13 13.3551Z" />
					</svg>
				</div>
			</div>
			{isError ? (
				<p className="text-red-600">This is an error message</p>
			) : (
				<p className="text-neutral-500">This is a hint text</p>
			)}
		</article>
	);
};

export default EmailInput;
