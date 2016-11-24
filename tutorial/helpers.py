class surrogate_meta(type):
    def __new__(mcls, name, wrapped_bases, dct):
        (surrogate,) = wrapped_bases
        return surrogate.metaclass(name, surrogate.bases, dct)

    @classmethod
    def extender(mcls, bases, metaclass):
        return type.__new__(mcls, 'surrogate', (), {'bases': bases, 'metaclass': metaclass})

def extends(*bases, **kw):
    return surrogate_meta.extender(bases, **kw)

def with_metaclass(metaclass, *bases):
    return surrogate_meta.extender(bases, metaclass)

def catch_errors(func):
    from functools import wraps

    @wraps(func)
    def handle(*args, **kw):
        try:
            return func(*args, **kw)
        except Exception as e:
            return {'error': '%s: %s' % (type(e).__name__, e), 'function': func.__name__}

    return handle

def staticmethod_catch_errors(func):
    return staticmethod(catch_errors(func))