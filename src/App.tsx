import EmailInput from './components/EmailIput';

const App = () => {
	return (
		<main className="flex flex-col items-center justify-center w-full min-h-screen py-28">
			<section className="w-[340px] text-sm flex flex-col gap-12">
				<EmailInput />
				<EmailInput isFrontIcon={true} />
				<EmailInput isDisabled={true} />
				<EmailInput isError={true} />
			</section>
		</main>
	);
};

export default App;
