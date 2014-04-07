var MongoSupport = {
    ensureId: function(o) {
        if (typeof o == "object") {
            if (o._id) {
            	if (typeof o._id != "string" && isNaN(o._id))
                    o._id = o._id.toString();
            }
        } else {
            o = { _id: o.toString() }
        }
        return o;
    },
    createBDObject: function(obj, ensureId) {
        obj = obj || {};
        return new Packages.com.mongodb.BasicDBObject(ensureId ? this.ensureId(obj) : obj);
    },
    extend: function( dst , src , deep ) {
        for (var k in src){
            var v = src[k];
            if (deep && typeof(v) == "object")
                v = Support.extend(typeof(v.length) == "number" ? [] : {} , v , true);
            dst[k] = v;
        }
        return dst;
    }
};

if (typeof exports != "undefined")
    exports.MongoSupport = MongoSupport;
