interface SignalLike {
	Connect(callback: (...args: Array<any>) => void): void;
}

type InferSignalParameters<S> = S extends SignalLike ? Parameters<Parameters<S["Connect"]>[0]> : never;

export function useEvent<I extends Instance, E extends InstanceEventNames<I>>(
	instance: I,
	event: E,
): IterableFunction<LuaTuple<[id: number, ...rest: InferSignalParameters<InstanceEvents<I>[E]>]>>;

export function useEvent<E extends SignalLike>(
	discriminator: string,
	event: E,
): IterableFunction<LuaTuple<[id: number, ...rest: InferSignalParameters<E>]>>;
