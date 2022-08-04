import { IPointcuts } from "@caiofeiertag/aspectts";
import { AbstractCacheAspect } from "./AbstractCacheAspect";
import AspectTS from "@caiofeiertag/aspectts";

class CacheAspect extends AbstractCacheAspect {
	pointcuts: IPointcuts = {
		joinpointType: "MethodCall",
		className: ["CarModelApi"],
		methodOrProperty: ["getModels"],
	};
}
AspectTS.registerAspects([new CacheAspect()]);
