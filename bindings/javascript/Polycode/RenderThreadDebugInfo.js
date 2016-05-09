function RenderThreadDebugInfo() {
	Object.defineProperties(this, {
		'buffersProcessed': { enumerable: true, configurable: true, get: RenderThreadDebugInfo.prototype.__get_buffersProcessed, set: RenderThreadDebugInfo.prototype.__set_buffersProcessed},
		'drawCallsProcessed': { enumerable: true, configurable: true, get: RenderThreadDebugInfo.prototype.__get_drawCallsProcessed, set: RenderThreadDebugInfo.prototype.__set_drawCallsProcessed},
		'timeTaken': { enumerable: true, configurable: true, get: RenderThreadDebugInfo.prototype.__get_timeTaken, set: RenderThreadDebugInfo.prototype.__set_timeTaken}
	})
}
RenderThreadDebugInfo.prototype.__get_buffersProcessed = function() {
	return Polycode.RenderThreadDebugInfo__get_buffersProcessed(this.__ptr)
}

RenderThreadDebugInfo.prototype.__set_buffersProcessed = function(val) {
	Polycode.RenderThreadDebugInfo__set_buffersProcessed(this.__ptr, val)
}

RenderThreadDebugInfo.prototype.__get_drawCallsProcessed = function() {
	return Polycode.RenderThreadDebugInfo__get_drawCallsProcessed(this.__ptr)
}

RenderThreadDebugInfo.prototype.__set_drawCallsProcessed = function(val) {
	Polycode.RenderThreadDebugInfo__set_drawCallsProcessed(this.__ptr, val)
}

RenderThreadDebugInfo.prototype.__get_timeTaken = function() {
	return Polycode.RenderThreadDebugInfo__get_timeTaken(this.__ptr)
}

RenderThreadDebugInfo.prototype.__set_timeTaken = function(val) {
	Polycode.RenderThreadDebugInfo__set_timeTaken(this.__ptr, val)
}
