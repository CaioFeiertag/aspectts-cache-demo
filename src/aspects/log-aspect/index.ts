import { IAspect, IMetadata, IPointcuts } from "@caiofeiertag/aspectts";

export class LogAspect implements IAspect {
	pointcuts: IPointcuts = {
		joinpointType: "MethodCall",
		className: [],
		methodOrProperty: [],
	};
	before(meta: IMetadata): void {
		console.log(
			`Chamou '${meta.methodName}' da '${meta.className}' com: ${meta.arguments}`
		);
	}
	after(meta: IMetadata): void {
		console.log(
			`Retornou ${meta.result} após chamar '${meta.methodName}' da '${meta.className}'`
		);
	}
}
