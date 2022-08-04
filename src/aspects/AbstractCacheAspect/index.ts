import { IMetadata, IAspect, IPointcuts } from "@caiofeiertag/aspectts";

export abstract class AbstractCacheAspect implements IAspect {
	abstract pointcuts: IPointcuts;

	before(metadata: IMetadata) {
		const key = this._getCacheKey(metadata);
		if (this._cache[key]) {
			metadata.result = this._cache[key];
			metadata.interrupted = true;
			console.log("Retornou resultado cacheado!");
		}
	}
	after(metadata: IMetadata) {
		const key = this._getCacheKey(metadata);
		if (!this._cache[key]) {
			Promise.resolve(metadata.result).then((result) => {
				this._cache[key] = result;
				console.log("Salvou resultado no cache!");
			});
		}
	}

	private _cache: Record<string, any> = {};
	private _getCacheKey(metadata: IMetadata) {
		return `${metadata.className}.${metadata.methodName}`;
	}
}
