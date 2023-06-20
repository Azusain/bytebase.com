import { createRequire as __WEBPACK_EXTERNAL_createRequire } from 'module';
var __webpack_modules__ = {
  4087: (e, t, r) => {
    Object.defineProperty(t, '__esModule', { value: true });
    t.Context = void 0;
    const a = r(7147);
    const n = r(2037);
    class Context {
      constructor() {
        var e, t, r;
        this.payload = {};
        if (process.env.GITHUB_EVENT_PATH) {
          if (a.existsSync(process.env.GITHUB_EVENT_PATH)) {
            this.payload = JSON.parse(
              a.readFileSync(process.env.GITHUB_EVENT_PATH, { encoding: 'utf8' }),
            );
          } else {
            const e = process.env.GITHUB_EVENT_PATH;
            process.stdout.write(`GITHUB_EVENT_PATH ${e} does not exist${n.EOL}`);
          }
        }
        this.eventName = process.env.GITHUB_EVENT_NAME;
        this.sha = process.env.GITHUB_SHA;
        this.ref = process.env.GITHUB_REF;
        this.workflow = process.env.GITHUB_WORKFLOW;
        this.action = process.env.GITHUB_ACTION;
        this.actor = process.env.GITHUB_ACTOR;
        this.job = process.env.GITHUB_JOB;
        this.runNumber = parseInt(process.env.GITHUB_RUN_NUMBER, 10);
        this.runId = parseInt(process.env.GITHUB_RUN_ID, 10);
        this.apiUrl =
          (e = process.env.GITHUB_API_URL) !== null && e !== void 0 ? e : `https://api.github.com`;
        this.serverUrl =
          (t = process.env.GITHUB_SERVER_URL) !== null && t !== void 0 ? t : `https://github.com`;
        this.graphqlUrl =
          (r = process.env.GITHUB_GRAPHQL_URL) !== null && r !== void 0
            ? r
            : `https://api.github.com/graphql`;
      }
      get issue() {
        const e = this.payload;
        return Object.assign(Object.assign({}, this.repo), {
          number: (e.issue || e.pull_request || e).number,
        });
      }
      get repo() {
        if (process.env.GITHUB_REPOSITORY) {
          const [e, t] = process.env.GITHUB_REPOSITORY.split('/');
          return { owner: e, repo: t };
        }
        if (this.payload.repository) {
          return { owner: this.payload.repository.owner.login, repo: this.payload.repository.name };
        }
        throw new Error(
          "context.repo requires a GITHUB_REPOSITORY environment variable like 'owner/repo'",
        );
      }
    }
    t.Context = Context;
  },
  5438: function (e, t, r) {
    var a =
      (this && this.__createBinding) ||
      (Object.create
        ? function (e, t, r, a) {
            if (a === undefined) a = r;
            Object.defineProperty(e, a, {
              enumerable: true,
              get: function () {
                return t[r];
              },
            });
          }
        : function (e, t, r, a) {
            if (a === undefined) a = r;
            e[a] = t[r];
          });
    var n =
      (this && this.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, 'default', { enumerable: true, value: t });
          }
        : function (e, t) {
            e['default'] = t;
          });
    var i =
      (this && this.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null)
          for (var r in e) if (r !== 'default' && Object.hasOwnProperty.call(e, r)) a(t, e, r);
        n(t, e);
        return t;
      };
    Object.defineProperty(t, '__esModule', { value: true });
    t.getOctokit = t.context = void 0;
    const o = i(r(4087));
    const s = r(3030);
    t.context = new o.Context();
    function getOctokit(e, t, ...r) {
      const a = s.GitHub.plugin(...r);
      return new a(s.getOctokitOptions(e, t));
    }
    t.getOctokit = getOctokit;
  },
  7914: function (e, t, r) {
    var a =
      (this && this.__createBinding) ||
      (Object.create
        ? function (e, t, r, a) {
            if (a === undefined) a = r;
            Object.defineProperty(e, a, {
              enumerable: true,
              get: function () {
                return t[r];
              },
            });
          }
        : function (e, t, r, a) {
            if (a === undefined) a = r;
            e[a] = t[r];
          });
    var n =
      (this && this.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, 'default', { enumerable: true, value: t });
          }
        : function (e, t) {
            e['default'] = t;
          });
    var i =
      (this && this.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null)
          for (var r in e) if (r !== 'default' && Object.hasOwnProperty.call(e, r)) a(t, e, r);
        n(t, e);
        return t;
      };
    Object.defineProperty(t, '__esModule', { value: true });
    t.getApiBaseUrl = t.getProxyAgent = t.getAuthString = void 0;
    const o = i(r(6255));
    function getAuthString(e, t) {
      if (!e && !t.auth) {
        throw new Error('Parameter token or opts.auth is required');
      } else if (e && t.auth) {
        throw new Error('Parameters token and opts.auth may not both be specified');
      }
      return typeof t.auth === 'string' ? t.auth : `token ${e}`;
    }
    t.getAuthString = getAuthString;
    function getProxyAgent(e) {
      const t = new o.HttpClient();
      return t.getAgent(e);
    }
    t.getProxyAgent = getProxyAgent;
    function getApiBaseUrl() {
      return process.env['GITHUB_API_URL'] || 'https://api.github.com';
    }
    t.getApiBaseUrl = getApiBaseUrl;
  },
  3030: function (e, t, r) {
    var a =
      (this && this.__createBinding) ||
      (Object.create
        ? function (e, t, r, a) {
            if (a === undefined) a = r;
            Object.defineProperty(e, a, {
              enumerable: true,
              get: function () {
                return t[r];
              },
            });
          }
        : function (e, t, r, a) {
            if (a === undefined) a = r;
            e[a] = t[r];
          });
    var n =
      (this && this.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, 'default', { enumerable: true, value: t });
          }
        : function (e, t) {
            e['default'] = t;
          });
    var i =
      (this && this.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null)
          for (var r in e) if (r !== 'default' && Object.hasOwnProperty.call(e, r)) a(t, e, r);
        n(t, e);
        return t;
      };
    Object.defineProperty(t, '__esModule', { value: true });
    t.getOctokitOptions = t.GitHub = t.defaults = t.context = void 0;
    const o = i(r(4087));
    const s = i(r(7914));
    const p = r(6762);
    const d = r(3044);
    const l = r(4193);
    t.context = new o.Context();
    const m = s.getApiBaseUrl();
    t.defaults = { baseUrl: m, request: { agent: s.getProxyAgent(m) } };
    t.GitHub = p.Octokit.plugin(d.restEndpointMethods, l.paginateRest).defaults(t.defaults);
    function getOctokitOptions(e, t) {
      const r = Object.assign({}, t || {});
      const a = s.getAuthString(e, r);
      if (a) {
        r.auth = a;
      }
      return r;
    }
    t.getOctokitOptions = getOctokitOptions;
  },
  6255: function (e, t, r) {
    var a =
      (this && this.__createBinding) ||
      (Object.create
        ? function (e, t, r, a) {
            if (a === undefined) a = r;
            Object.defineProperty(e, a, {
              enumerable: true,
              get: function () {
                return t[r];
              },
            });
          }
        : function (e, t, r, a) {
            if (a === undefined) a = r;
            e[a] = t[r];
          });
    var n =
      (this && this.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, 'default', { enumerable: true, value: t });
          }
        : function (e, t) {
            e['default'] = t;
          });
    var i =
      (this && this.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null)
          for (var r in e) if (r !== 'default' && Object.hasOwnProperty.call(e, r)) a(t, e, r);
        n(t, e);
        return t;
      };
    var o =
      (this && this.__awaiter) ||
      function (e, t, r, a) {
        function adopt(e) {
          return e instanceof r
            ? e
            : new r(function (t) {
                t(e);
              });
        }
        return new (r || (r = Promise))(function (r, n) {
          function fulfilled(e) {
            try {
              step(a.next(e));
            } catch (e) {
              n(e);
            }
          }
          function rejected(e) {
            try {
              step(a['throw'](e));
            } catch (e) {
              n(e);
            }
          }
          function step(e) {
            e.done ? r(e.value) : adopt(e.value).then(fulfilled, rejected);
          }
          step((a = a.apply(e, t || [])).next());
        });
      };
    Object.defineProperty(t, '__esModule', { value: true });
    t.HttpClient =
      t.isHttps =
      t.HttpClientResponse =
      t.HttpClientError =
      t.getProxyUrl =
      t.MediaTypes =
      t.Headers =
      t.HttpCodes =
        void 0;
    const s = i(r(3685));
    const p = i(r(5687));
    const d = i(r(9835));
    const l = i(r(4294));
    var m;
    (function (e) {
      e[(e['OK'] = 200)] = 'OK';
      e[(e['MultipleChoices'] = 300)] = 'MultipleChoices';
      e[(e['MovedPermanently'] = 301)] = 'MovedPermanently';
      e[(e['ResourceMoved'] = 302)] = 'ResourceMoved';
      e[(e['SeeOther'] = 303)] = 'SeeOther';
      e[(e['NotModified'] = 304)] = 'NotModified';
      e[(e['UseProxy'] = 305)] = 'UseProxy';
      e[(e['SwitchProxy'] = 306)] = 'SwitchProxy';
      e[(e['TemporaryRedirect'] = 307)] = 'TemporaryRedirect';
      e[(e['PermanentRedirect'] = 308)] = 'PermanentRedirect';
      e[(e['BadRequest'] = 400)] = 'BadRequest';
      e[(e['Unauthorized'] = 401)] = 'Unauthorized';
      e[(e['PaymentRequired'] = 402)] = 'PaymentRequired';
      e[(e['Forbidden'] = 403)] = 'Forbidden';
      e[(e['NotFound'] = 404)] = 'NotFound';
      e[(e['MethodNotAllowed'] = 405)] = 'MethodNotAllowed';
      e[(e['NotAcceptable'] = 406)] = 'NotAcceptable';
      e[(e['ProxyAuthenticationRequired'] = 407)] = 'ProxyAuthenticationRequired';
      e[(e['RequestTimeout'] = 408)] = 'RequestTimeout';
      e[(e['Conflict'] = 409)] = 'Conflict';
      e[(e['Gone'] = 410)] = 'Gone';
      e[(e['TooManyRequests'] = 429)] = 'TooManyRequests';
      e[(e['InternalServerError'] = 500)] = 'InternalServerError';
      e[(e['NotImplemented'] = 501)] = 'NotImplemented';
      e[(e['BadGateway'] = 502)] = 'BadGateway';
      e[(e['ServiceUnavailable'] = 503)] = 'ServiceUnavailable';
      e[(e['GatewayTimeout'] = 504)] = 'GatewayTimeout';
    })((m = t.HttpCodes || (t.HttpCodes = {})));
    var c;
    (function (e) {
      e['Accept'] = 'accept';
      e['ContentType'] = 'content-type';
    })((c = t.Headers || (t.Headers = {})));
    var g;
    (function (e) {
      e['ApplicationJson'] = 'application/json';
    })((g = t.MediaTypes || (t.MediaTypes = {})));
    function getProxyUrl(e) {
      const t = d.getProxyUrl(new URL(e));
      return t ? t.href : '';
    }
    t.getProxyUrl = getProxyUrl;
    const v = [
      m.MovedPermanently,
      m.ResourceMoved,
      m.SeeOther,
      m.TemporaryRedirect,
      m.PermanentRedirect,
    ];
    const T = [m.BadGateway, m.ServiceUnavailable, m.GatewayTimeout];
    const E = ['OPTIONS', 'GET', 'DELETE', 'HEAD'];
    const _ = 10;
    const w = 5;
    class HttpClientError extends Error {
      constructor(e, t) {
        super(e);
        this.name = 'HttpClientError';
        this.statusCode = t;
        Object.setPrototypeOf(this, HttpClientError.prototype);
      }
    }
    t.HttpClientError = HttpClientError;
    class HttpClientResponse {
      constructor(e) {
        this.message = e;
      }
      readBody() {
        return o(this, void 0, void 0, function* () {
          return new Promise((e) =>
            o(this, void 0, void 0, function* () {
              let t = Buffer.alloc(0);
              this.message.on('data', (e) => {
                t = Buffer.concat([t, e]);
              });
              this.message.on('end', () => {
                e(t.toString());
              });
            }),
          );
        });
      }
    }
    t.HttpClientResponse = HttpClientResponse;
    function isHttps(e) {
      const t = new URL(e);
      return t.protocol === 'https:';
    }
    t.isHttps = isHttps;
    class HttpClient {
      constructor(e, t, r) {
        this._ignoreSslError = false;
        this._allowRedirects = true;
        this._allowRedirectDowngrade = false;
        this._maxRedirects = 50;
        this._allowRetries = false;
        this._maxRetries = 1;
        this._keepAlive = false;
        this._disposed = false;
        this.userAgent = e;
        this.handlers = t || [];
        this.requestOptions = r;
        if (r) {
          if (r.ignoreSslError != null) {
            this._ignoreSslError = r.ignoreSslError;
          }
          this._socketTimeout = r.socketTimeout;
          if (r.allowRedirects != null) {
            this._allowRedirects = r.allowRedirects;
          }
          if (r.allowRedirectDowngrade != null) {
            this._allowRedirectDowngrade = r.allowRedirectDowngrade;
          }
          if (r.maxRedirects != null) {
            this._maxRedirects = Math.max(r.maxRedirects, 0);
          }
          if (r.keepAlive != null) {
            this._keepAlive = r.keepAlive;
          }
          if (r.allowRetries != null) {
            this._allowRetries = r.allowRetries;
          }
          if (r.maxRetries != null) {
            this._maxRetries = r.maxRetries;
          }
        }
      }
      options(e, t) {
        return o(this, void 0, void 0, function* () {
          return this.request('OPTIONS', e, null, t || {});
        });
      }
      get(e, t) {
        return o(this, void 0, void 0, function* () {
          return this.request('GET', e, null, t || {});
        });
      }
      del(e, t) {
        return o(this, void 0, void 0, function* () {
          return this.request('DELETE', e, null, t || {});
        });
      }
      post(e, t, r) {
        return o(this, void 0, void 0, function* () {
          return this.request('POST', e, t, r || {});
        });
      }
      patch(e, t, r) {
        return o(this, void 0, void 0, function* () {
          return this.request('PATCH', e, t, r || {});
        });
      }
      put(e, t, r) {
        return o(this, void 0, void 0, function* () {
          return this.request('PUT', e, t, r || {});
        });
      }
      head(e, t) {
        return o(this, void 0, void 0, function* () {
          return this.request('HEAD', e, null, t || {});
        });
      }
      sendStream(e, t, r, a) {
        return o(this, void 0, void 0, function* () {
          return this.request(e, t, r, a);
        });
      }
      getJson(e, t = {}) {
        return o(this, void 0, void 0, function* () {
          t[c.Accept] = this._getExistingOrDefaultHeader(t, c.Accept, g.ApplicationJson);
          const r = yield this.get(e, t);
          return this._processResponse(r, this.requestOptions);
        });
      }
      postJson(e, t, r = {}) {
        return o(this, void 0, void 0, function* () {
          const a = JSON.stringify(t, null, 2);
          r[c.Accept] = this._getExistingOrDefaultHeader(r, c.Accept, g.ApplicationJson);
          r[c.ContentType] = this._getExistingOrDefaultHeader(r, c.ContentType, g.ApplicationJson);
          const n = yield this.post(e, a, r);
          return this._processResponse(n, this.requestOptions);
        });
      }
      putJson(e, t, r = {}) {
        return o(this, void 0, void 0, function* () {
          const a = JSON.stringify(t, null, 2);
          r[c.Accept] = this._getExistingOrDefaultHeader(r, c.Accept, g.ApplicationJson);
          r[c.ContentType] = this._getExistingOrDefaultHeader(r, c.ContentType, g.ApplicationJson);
          const n = yield this.put(e, a, r);
          return this._processResponse(n, this.requestOptions);
        });
      }
      patchJson(e, t, r = {}) {
        return o(this, void 0, void 0, function* () {
          const a = JSON.stringify(t, null, 2);
          r[c.Accept] = this._getExistingOrDefaultHeader(r, c.Accept, g.ApplicationJson);
          r[c.ContentType] = this._getExistingOrDefaultHeader(r, c.ContentType, g.ApplicationJson);
          const n = yield this.patch(e, a, r);
          return this._processResponse(n, this.requestOptions);
        });
      }
      request(e, t, r, a) {
        return o(this, void 0, void 0, function* () {
          if (this._disposed) {
            throw new Error('Client has already been disposed.');
          }
          const n = new URL(t);
          let i = this._prepareRequest(e, n, a);
          const o = this._allowRetries && E.includes(e) ? this._maxRetries + 1 : 1;
          let s = 0;
          let p;
          do {
            p = yield this.requestRaw(i, r);
            if (p && p.message && p.message.statusCode === m.Unauthorized) {
              let e;
              for (const t of this.handlers) {
                if (t.canHandleAuthentication(p)) {
                  e = t;
                  break;
                }
              }
              if (e) {
                return e.handleAuthentication(this, i, r);
              } else {
                return p;
              }
            }
            let t = this._maxRedirects;
            while (
              p.message.statusCode &&
              v.includes(p.message.statusCode) &&
              this._allowRedirects &&
              t > 0
            ) {
              const o = p.message.headers['location'];
              if (!o) {
                break;
              }
              const s = new URL(o);
              if (
                n.protocol === 'https:' &&
                n.protocol !== s.protocol &&
                !this._allowRedirectDowngrade
              ) {
                throw new Error(
                  'Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.',
                );
              }
              yield p.readBody();
              if (s.hostname !== n.hostname) {
                for (const e in a) {
                  if (e.toLowerCase() === 'authorization') {
                    delete a[e];
                  }
                }
              }
              i = this._prepareRequest(e, s, a);
              p = yield this.requestRaw(i, r);
              t--;
            }
            if (!p.message.statusCode || !T.includes(p.message.statusCode)) {
              return p;
            }
            s += 1;
            if (s < o) {
              yield p.readBody();
              yield this._performExponentialBackoff(s);
            }
          } while (s < o);
          return p;
        });
      }
      dispose() {
        if (this._agent) {
          this._agent.destroy();
        }
        this._disposed = true;
      }
      requestRaw(e, t) {
        return o(this, void 0, void 0, function* () {
          return new Promise((r, a) => {
            function callbackForResult(e, t) {
              if (e) {
                a(e);
              } else if (!t) {
                a(new Error('Unknown error'));
              } else {
                r(t);
              }
            }
            this.requestRawWithCallback(e, t, callbackForResult);
          });
        });
      }
      requestRawWithCallback(e, t, r) {
        if (typeof t === 'string') {
          if (!e.options.headers) {
            e.options.headers = {};
          }
          e.options.headers['Content-Length'] = Buffer.byteLength(t, 'utf8');
        }
        let a = false;
        function handleResult(e, t) {
          if (!a) {
            a = true;
            r(e, t);
          }
        }
        const n = e.httpModule.request(e.options, (e) => {
          const t = new HttpClientResponse(e);
          handleResult(undefined, t);
        });
        let i;
        n.on('socket', (e) => {
          i = e;
        });
        n.setTimeout(this._socketTimeout || 3 * 6e4, () => {
          if (i) {
            i.end();
          }
          handleResult(new Error(`Request timeout: ${e.options.path}`));
        });
        n.on('error', function (e) {
          handleResult(e);
        });
        if (t && typeof t === 'string') {
          n.write(t, 'utf8');
        }
        if (t && typeof t !== 'string') {
          t.on('close', function () {
            n.end();
          });
          t.pipe(n);
        } else {
          n.end();
        }
      }
      getAgent(e) {
        const t = new URL(e);
        return this._getAgent(t);
      }
      _prepareRequest(e, t, r) {
        const a = {};
        a.parsedUrl = t;
        const n = a.parsedUrl.protocol === 'https:';
        a.httpModule = n ? p : s;
        const i = n ? 443 : 80;
        a.options = {};
        a.options.host = a.parsedUrl.hostname;
        a.options.port = a.parsedUrl.port ? parseInt(a.parsedUrl.port) : i;
        a.options.path = (a.parsedUrl.pathname || '') + (a.parsedUrl.search || '');
        a.options.method = e;
        a.options.headers = this._mergeHeaders(r);
        if (this.userAgent != null) {
          a.options.headers['user-agent'] = this.userAgent;
        }
        a.options.agent = this._getAgent(a.parsedUrl);
        if (this.handlers) {
          for (const e of this.handlers) {
            e.prepareRequest(a.options);
          }
        }
        return a;
      }
      _mergeHeaders(e) {
        if (this.requestOptions && this.requestOptions.headers) {
          return Object.assign(
            {},
            lowercaseKeys(this.requestOptions.headers),
            lowercaseKeys(e || {}),
          );
        }
        return lowercaseKeys(e || {});
      }
      _getExistingOrDefaultHeader(e, t, r) {
        let a;
        if (this.requestOptions && this.requestOptions.headers) {
          a = lowercaseKeys(this.requestOptions.headers)[t];
        }
        return e[t] || a || r;
      }
      _getAgent(e) {
        let t;
        const r = d.getProxyUrl(e);
        const a = r && r.hostname;
        if (this._keepAlive && a) {
          t = this._proxyAgent;
        }
        if (this._keepAlive && !a) {
          t = this._agent;
        }
        if (t) {
          return t;
        }
        const n = e.protocol === 'https:';
        let i = 100;
        if (this.requestOptions) {
          i = this.requestOptions.maxSockets || s.globalAgent.maxSockets;
        }
        if (r && r.hostname) {
          const e = {
            maxSockets: i,
            keepAlive: this._keepAlive,
            proxy: Object.assign(
              Object.assign(
                {},
                (r.username || r.password) && { proxyAuth: `${r.username}:${r.password}` },
              ),
              { host: r.hostname, port: r.port },
            ),
          };
          let a;
          const o = r.protocol === 'https:';
          if (n) {
            a = o ? l.httpsOverHttps : l.httpsOverHttp;
          } else {
            a = o ? l.httpOverHttps : l.httpOverHttp;
          }
          t = a(e);
          this._proxyAgent = t;
        }
        if (this._keepAlive && !t) {
          const e = { keepAlive: this._keepAlive, maxSockets: i };
          t = n ? new p.Agent(e) : new s.Agent(e);
          this._agent = t;
        }
        if (!t) {
          t = n ? p.globalAgent : s.globalAgent;
        }
        if (n && this._ignoreSslError) {
          t.options = Object.assign(t.options || {}, { rejectUnauthorized: false });
        }
        return t;
      }
      _performExponentialBackoff(e) {
        return o(this, void 0, void 0, function* () {
          e = Math.min(_, e);
          const t = w * Math.pow(2, e);
          return new Promise((e) => setTimeout(() => e(), t));
        });
      }
      _processResponse(e, t) {
        return o(this, void 0, void 0, function* () {
          return new Promise((r, a) =>
            o(this, void 0, void 0, function* () {
              const n = e.message.statusCode || 0;
              const i = { statusCode: n, result: null, headers: {} };
              if (n === m.NotFound) {
                r(i);
              }
              function dateTimeDeserializer(e, t) {
                if (typeof t === 'string') {
                  const e = new Date(t);
                  if (!isNaN(e.valueOf())) {
                    return e;
                  }
                }
                return t;
              }
              let o;
              let s;
              try {
                s = yield e.readBody();
                if (s && s.length > 0) {
                  if (t && t.deserializeDates) {
                    o = JSON.parse(s, dateTimeDeserializer);
                  } else {
                    o = JSON.parse(s);
                  }
                  i.result = o;
                }
                i.headers = e.message.headers;
              } catch (e) {}
              if (n > 299) {
                let e;
                if (o && o.message) {
                  e = o.message;
                } else if (s && s.length > 0) {
                  e = s;
                } else {
                  e = `Failed request: (${n})`;
                }
                const t = new HttpClientError(e, n);
                t.result = i.result;
                a(t);
              } else {
                r(i);
              }
            }),
          );
        });
      }
    }
    t.HttpClient = HttpClient;
    const lowercaseKeys = (e) =>
      Object.keys(e).reduce((t, r) => ((t[r.toLowerCase()] = e[r]), t), {});
  },
  9835: (e, t) => {
    Object.defineProperty(t, '__esModule', { value: true });
    t.checkBypass = t.getProxyUrl = void 0;
    function getProxyUrl(e) {
      const t = e.protocol === 'https:';
      if (checkBypass(e)) {
        return undefined;
      }
      const r = (() => {
        if (t) {
          return process.env['https_proxy'] || process.env['HTTPS_PROXY'];
        } else {
          return process.env['http_proxy'] || process.env['HTTP_PROXY'];
        }
      })();
      if (r) {
        return new URL(r);
      } else {
        return undefined;
      }
    }
    t.getProxyUrl = getProxyUrl;
    function checkBypass(e) {
      if (!e.hostname) {
        return false;
      }
      const t = e.hostname;
      if (isLoopbackAddress(t)) {
        return true;
      }
      const r = process.env['no_proxy'] || process.env['NO_PROXY'] || '';
      if (!r) {
        return false;
      }
      let a;
      if (e.port) {
        a = Number(e.port);
      } else if (e.protocol === 'http:') {
        a = 80;
      } else if (e.protocol === 'https:') {
        a = 443;
      }
      const n = [e.hostname.toUpperCase()];
      if (typeof a === 'number') {
        n.push(`${n[0]}:${a}`);
      }
      for (const e of r
        .split(',')
        .map((e) => e.trim().toUpperCase())
        .filter((e) => e)) {
        if (
          e === '*' ||
          n.some((t) => t === e || t.endsWith(`.${e}`) || (e.startsWith('.') && t.endsWith(`${e}`)))
        ) {
          return true;
        }
      }
      return false;
    }
    t.checkBypass = checkBypass;
    function isLoopbackAddress(e) {
      const t = e.toLowerCase();
      return (
        t === 'localhost' ||
        t.startsWith('127.') ||
        t.startsWith('[::1]') ||
        t.startsWith('[0:0:0:0:0:0:0:1]')
      );
    }
  },
  334: (e, t) => {
    Object.defineProperty(t, '__esModule', { value: true });
    const r = /^v1\./;
    const a = /^ghs_/;
    const n = /^ghu_/;
    async function auth(e) {
      const t = e.split(/\./).length === 3;
      const i = r.test(e) || a.test(e);
      const o = n.test(e);
      const s = t ? 'app' : i ? 'installation' : o ? 'user-to-server' : 'oauth';
      return { type: 'token', token: e, tokenType: s };
    }
    function withAuthorizationPrefix(e) {
      if (e.split(/\./).length === 3) {
        return `bearer ${e}`;
      }
      return `token ${e}`;
    }
    async function hook(e, t, r, a) {
      const n = t.endpoint.merge(r, a);
      n.headers.authorization = withAuthorizationPrefix(e);
      return t(n);
    }
    const i = function createTokenAuth(e) {
      if (!e) {
        throw new Error('[@octokit/auth-token] No token passed to createTokenAuth');
      }
      if (typeof e !== 'string') {
        throw new Error('[@octokit/auth-token] Token passed to createTokenAuth is not a string');
      }
      e = e.replace(/^(token|bearer) +/i, '');
      return Object.assign(auth.bind(null, e), { hook: hook.bind(null, e) });
    };
    t.createTokenAuth = i;
  },
  6762: (e, t, r) => {
    Object.defineProperty(t, '__esModule', { value: true });
    var a = r(5030);
    var n = r(3682);
    var i = r(6234);
    var o = r(8467);
    var s = r(334);
    function _objectWithoutPropertiesLoose(e, t) {
      if (e == null) return {};
      var r = {};
      var a = Object.keys(e);
      var n, i;
      for (i = 0; i < a.length; i++) {
        n = a[i];
        if (t.indexOf(n) >= 0) continue;
        r[n] = e[n];
      }
      return r;
    }
    function _objectWithoutProperties(e, t) {
      if (e == null) return {};
      var r = _objectWithoutPropertiesLoose(e, t);
      var a, n;
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) {
          a = i[n];
          if (t.indexOf(a) >= 0) continue;
          if (!Object.prototype.propertyIsEnumerable.call(e, a)) continue;
          r[a] = e[a];
        }
      }
      return r;
    }
    const p = '3.6.0';
    const d = ['authStrategy'];
    class Octokit {
      constructor(e = {}) {
        const t = new n.Collection();
        const r = {
          baseUrl: i.request.endpoint.DEFAULTS.baseUrl,
          headers: {},
          request: Object.assign({}, e.request, { hook: t.bind(null, 'request') }),
          mediaType: { previews: [], format: '' },
        };
        r.headers['user-agent'] = [e.userAgent, `octokit-core.js/${p} ${a.getUserAgent()}`]
          .filter(Boolean)
          .join(' ');
        if (e.baseUrl) {
          r.baseUrl = e.baseUrl;
        }
        if (e.previews) {
          r.mediaType.previews = e.previews;
        }
        if (e.timeZone) {
          r.headers['time-zone'] = e.timeZone;
        }
        this.request = i.request.defaults(r);
        this.graphql = o.withCustomRequest(this.request).defaults(r);
        this.log = Object.assign(
          {
            debug: () => {},
            info: () => {},
            warn: console.warn.bind(console),
            error: console.error.bind(console),
          },
          e.log,
        );
        this.hook = t;
        if (!e.authStrategy) {
          if (!e.auth) {
            this.auth = async () => ({ type: 'unauthenticated' });
          } else {
            const r = s.createTokenAuth(e.auth);
            t.wrap('request', r.hook);
            this.auth = r;
          }
        } else {
          const { authStrategy: r } = e,
            a = _objectWithoutProperties(e, d);
          const n = r(
            Object.assign(
              { request: this.request, log: this.log, octokit: this, octokitOptions: a },
              e.auth,
            ),
          );
          t.wrap('request', n.hook);
          this.auth = n;
        }
        const l = this.constructor;
        l.plugins.forEach((t) => {
          Object.assign(this, t(this, e));
        });
      }
      static defaults(e) {
        const t = class extends this {
          constructor(...t) {
            const r = t[0] || {};
            if (typeof e === 'function') {
              super(e(r));
              return;
            }
            super(
              Object.assign(
                {},
                e,
                r,
                r.userAgent && e.userAgent ? { userAgent: `${r.userAgent} ${e.userAgent}` } : null,
              ),
            );
          }
        };
        return t;
      }
      static plugin(...e) {
        var t;
        const r = this.plugins;
        const a =
          ((t = class extends this {}), (t.plugins = r.concat(e.filter((e) => !r.includes(e)))), t);
        return a;
      }
    }
    Octokit.VERSION = p;
    Octokit.plugins = [];
    t.Octokit = Octokit;
  },
  9440: (e, t, r) => {
    Object.defineProperty(t, '__esModule', { value: true });
    var a = r(3287);
    var n = r(5030);
    function lowercaseKeys(e) {
      if (!e) {
        return {};
      }
      return Object.keys(e).reduce((t, r) => {
        t[r.toLowerCase()] = e[r];
        return t;
      }, {});
    }
    function mergeDeep(e, t) {
      const r = Object.assign({}, e);
      Object.keys(t).forEach((n) => {
        if (a.isPlainObject(t[n])) {
          if (!(n in e)) Object.assign(r, { [n]: t[n] });
          else r[n] = mergeDeep(e[n], t[n]);
        } else {
          Object.assign(r, { [n]: t[n] });
        }
      });
      return r;
    }
    function removeUndefinedProperties(e) {
      for (const t in e) {
        if (e[t] === undefined) {
          delete e[t];
        }
      }
      return e;
    }
    function merge(e, t, r) {
      if (typeof t === 'string') {
        let [e, a] = t.split(' ');
        r = Object.assign(a ? { method: e, url: a } : { url: e }, r);
      } else {
        r = Object.assign({}, t);
      }
      r.headers = lowercaseKeys(r.headers);
      removeUndefinedProperties(r);
      removeUndefinedProperties(r.headers);
      const a = mergeDeep(e || {}, r);
      if (e && e.mediaType.previews.length) {
        a.mediaType.previews = e.mediaType.previews
          .filter((e) => !a.mediaType.previews.includes(e))
          .concat(a.mediaType.previews);
      }
      a.mediaType.previews = a.mediaType.previews.map((e) => e.replace(/-preview/, ''));
      return a;
    }
    function addQueryParameters(e, t) {
      const r = /\?/.test(e) ? '&' : '?';
      const a = Object.keys(t);
      if (a.length === 0) {
        return e;
      }
      return (
        e +
        r +
        a
          .map((e) => {
            if (e === 'q') {
              return 'q=' + t.q.split('+').map(encodeURIComponent).join('+');
            }
            return `${e}=${encodeURIComponent(t[e])}`;
          })
          .join('&')
      );
    }
    const i = /\{[^}]+\}/g;
    function removeNonChars(e) {
      return e.replace(/^\W+|\W+$/g, '').split(/,/);
    }
    function extractUrlVariableNames(e) {
      const t = e.match(i);
      if (!t) {
        return [];
      }
      return t.map(removeNonChars).reduce((e, t) => e.concat(t), []);
    }
    function omit(e, t) {
      return Object.keys(e)
        .filter((e) => !t.includes(e))
        .reduce((t, r) => {
          t[r] = e[r];
          return t;
        }, {});
    }
    function encodeReserved(e) {
      return e
        .split(/(%[0-9A-Fa-f]{2})/g)
        .map(function (e) {
          if (!/%[0-9A-Fa-f]/.test(e)) {
            e = encodeURI(e).replace(/%5B/g, '[').replace(/%5D/g, ']');
          }
          return e;
        })
        .join('');
    }
    function encodeUnreserved(e) {
      return encodeURIComponent(e).replace(/[!'()*]/g, function (e) {
        return '%' + e.charCodeAt(0).toString(16).toUpperCase();
      });
    }
    function encodeValue(e, t, r) {
      t = e === '+' || e === '#' ? encodeReserved(t) : encodeUnreserved(t);
      if (r) {
        return encodeUnreserved(r) + '=' + t;
      } else {
        return t;
      }
    }
    function isDefined(e) {
      return e !== undefined && e !== null;
    }
    function isKeyOperator(e) {
      return e === ';' || e === '&' || e === '?';
    }
    function getValues(e, t, r, a) {
      var n = e[r],
        i = [];
      if (isDefined(n) && n !== '') {
        if (typeof n === 'string' || typeof n === 'number' || typeof n === 'boolean') {
          n = n.toString();
          if (a && a !== '*') {
            n = n.substring(0, parseInt(a, 10));
          }
          i.push(encodeValue(t, n, isKeyOperator(t) ? r : ''));
        } else {
          if (a === '*') {
            if (Array.isArray(n)) {
              n.filter(isDefined).forEach(function (e) {
                i.push(encodeValue(t, e, isKeyOperator(t) ? r : ''));
              });
            } else {
              Object.keys(n).forEach(function (e) {
                if (isDefined(n[e])) {
                  i.push(encodeValue(t, n[e], e));
                }
              });
            }
          } else {
            const e = [];
            if (Array.isArray(n)) {
              n.filter(isDefined).forEach(function (r) {
                e.push(encodeValue(t, r));
              });
            } else {
              Object.keys(n).forEach(function (r) {
                if (isDefined(n[r])) {
                  e.push(encodeUnreserved(r));
                  e.push(encodeValue(t, n[r].toString()));
                }
              });
            }
            if (isKeyOperator(t)) {
              i.push(encodeUnreserved(r) + '=' + e.join(','));
            } else if (e.length !== 0) {
              i.push(e.join(','));
            }
          }
        }
      } else {
        if (t === ';') {
          if (isDefined(n)) {
            i.push(encodeUnreserved(r));
          }
        } else if (n === '' && (t === '&' || t === '?')) {
          i.push(encodeUnreserved(r) + '=');
        } else if (n === '') {
          i.push('');
        }
      }
      return i;
    }
    function parseUrl(e) {
      return { expand: expand.bind(null, e) };
    }
    function expand(e, t) {
      var r = ['+', '#', '.', '/', ';', '?', '&'];
      return e.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (e, a, n) {
        if (a) {
          let e = '';
          const n = [];
          if (r.indexOf(a.charAt(0)) !== -1) {
            e = a.charAt(0);
            a = a.substr(1);
          }
          a.split(/,/g).forEach(function (r) {
            var a = /([^:\*]*)(?::(\d+)|(\*))?/.exec(r);
            n.push(getValues(t, e, a[1], a[2] || a[3]));
          });
          if (e && e !== '+') {
            var i = ',';
            if (e === '?') {
              i = '&';
            } else if (e !== '#') {
              i = e;
            }
            return (n.length !== 0 ? e : '') + n.join(i);
          } else {
            return n.join(',');
          }
        } else {
          return encodeReserved(n);
        }
      });
    }
    function parse(e) {
      let t = e.method.toUpperCase();
      let r = (e.url || '/').replace(/:([a-z]\w+)/g, '{$1}');
      let a = Object.assign({}, e.headers);
      let n;
      let i = omit(e, ['method', 'baseUrl', 'url', 'headers', 'request', 'mediaType']);
      const o = extractUrlVariableNames(r);
      r = parseUrl(r).expand(i);
      if (!/^http/.test(r)) {
        r = e.baseUrl + r;
      }
      const s = Object.keys(e)
        .filter((e) => o.includes(e))
        .concat('baseUrl');
      const p = omit(i, s);
      const d = /application\/octet-stream/i.test(a.accept);
      if (!d) {
        if (e.mediaType.format) {
          a.accept = a.accept
            .split(/,/)
            .map((t) =>
              t.replace(
                /application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/,
                `application/vnd$1$2.${e.mediaType.format}`,
              ),
            )
            .join(',');
        }
        if (e.mediaType.previews.length) {
          const t = a.accept.match(/[\w-]+(?=-preview)/g) || [];
          a.accept = t
            .concat(e.mediaType.previews)
            .map((t) => {
              const r = e.mediaType.format ? `.${e.mediaType.format}` : '+json';
              return `application/vnd.github.${t}-preview${r}`;
            })
            .join(',');
        }
      }
      if (['GET', 'HEAD'].includes(t)) {
        r = addQueryParameters(r, p);
      } else {
        if ('data' in p) {
          n = p.data;
        } else {
          if (Object.keys(p).length) {
            n = p;
          } else {
            a['content-length'] = 0;
          }
        }
      }
      if (!a['content-type'] && typeof n !== 'undefined') {
        a['content-type'] = 'application/json; charset=utf-8';
      }
      if (['PATCH', 'PUT'].includes(t) && typeof n === 'undefined') {
        n = '';
      }
      return Object.assign(
        { method: t, url: r, headers: a },
        typeof n !== 'undefined' ? { body: n } : null,
        e.request ? { request: e.request } : null,
      );
    }
    function endpointWithDefaults(e, t, r) {
      return parse(merge(e, t, r));
    }
    function withDefaults(e, t) {
      const r = merge(e, t);
      const a = endpointWithDefaults.bind(null, r);
      return Object.assign(a, {
        DEFAULTS: r,
        defaults: withDefaults.bind(null, r),
        merge: merge.bind(null, r),
        parse: parse,
      });
    }
    const o = '6.0.12';
    const s = `octokit-endpoint.js/${o} ${n.getUserAgent()}`;
    const p = {
      method: 'GET',
      baseUrl: 'https://api.github.com',
      headers: { accept: 'application/vnd.github.v3+json', 'user-agent': s },
      mediaType: { format: '', previews: [] },
    };
    const d = withDefaults(null, p);
    t.endpoint = d;
  },
  8467: (e, t, r) => {
    Object.defineProperty(t, '__esModule', { value: true });
    var a = r(6234);
    var n = r(5030);
    const i = '4.8.0';
    function _buildMessageForResponseErrors(e) {
      return (
        `Request failed due to following response errors:\n` +
        e.errors.map((e) => ` - ${e.message}`).join('\n')
      );
    }
    class GraphqlResponseError extends Error {
      constructor(e, t, r) {
        super(_buildMessageForResponseErrors(r));
        this.request = e;
        this.headers = t;
        this.response = r;
        this.name = 'GraphqlResponseError';
        this.errors = r.errors;
        this.data = r.data;
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, this.constructor);
        }
      }
    }
    const o = ['method', 'baseUrl', 'url', 'headers', 'request', 'query', 'mediaType'];
    const s = ['query', 'method', 'url'];
    const p = /\/api\/v3\/?$/;
    function graphql(e, t, r) {
      if (r) {
        if (typeof t === 'string' && 'query' in r) {
          return Promise.reject(
            new Error(`[@octokit/graphql] "query" cannot be used as variable name`),
          );
        }
        for (const e in r) {
          if (!s.includes(e)) continue;
          return Promise.reject(
            new Error(`[@octokit/graphql] "${e}" cannot be used as variable name`),
          );
        }
      }
      const a = typeof t === 'string' ? Object.assign({ query: t }, r) : t;
      const n = Object.keys(a).reduce((e, t) => {
        if (o.includes(t)) {
          e[t] = a[t];
          return e;
        }
        if (!e.variables) {
          e.variables = {};
        }
        e.variables[t] = a[t];
        return e;
      }, {});
      const i = a.baseUrl || e.endpoint.DEFAULTS.baseUrl;
      if (p.test(i)) {
        n.url = i.replace(p, '/api/graphql');
      }
      return e(n).then((e) => {
        if (e.data.errors) {
          const t = {};
          for (const r of Object.keys(e.headers)) {
            t[r] = e.headers[r];
          }
          throw new GraphqlResponseError(n, t, e.data);
        }
        return e.data.data;
      });
    }
    function withDefaults(e, t) {
      const r = e.defaults(t);
      const newApi = (e, t) => graphql(r, e, t);
      return Object.assign(newApi, {
        defaults: withDefaults.bind(null, r),
        endpoint: a.request.endpoint,
      });
    }
    const d = withDefaults(a.request, {
      headers: { 'user-agent': `octokit-graphql.js/${i} ${n.getUserAgent()}` },
      method: 'POST',
      url: '/graphql',
    });
    function withCustomRequest(e) {
      return withDefaults(e, { method: 'POST', url: '/graphql' });
    }
    t.GraphqlResponseError = GraphqlResponseError;
    t.graphql = d;
    t.withCustomRequest = withCustomRequest;
  },
  4193: (e, t) => {
    Object.defineProperty(t, '__esModule', { value: true });
    const r = '2.21.3';
    function ownKeys(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, a);
      }
      return r;
    }
    function _objectSpread2(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ownKeys(Object(r), !0).forEach(function (t) {
              _defineProperty(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : ownKeys(Object(r)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
            });
      }
      return e;
    }
    function _defineProperty(e, t, r) {
      if (t in e) {
        Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true,
        });
      } else {
        e[t] = r;
      }
      return e;
    }
    function normalizePaginatedListResponse(e) {
      if (!e.data) {
        return _objectSpread2(_objectSpread2({}, e), {}, { data: [] });
      }
      const t = 'total_count' in e.data && !('url' in e.data);
      if (!t) return e;
      const r = e.data.incomplete_results;
      const a = e.data.repository_selection;
      const n = e.data.total_count;
      delete e.data.incomplete_results;
      delete e.data.repository_selection;
      delete e.data.total_count;
      const i = Object.keys(e.data)[0];
      const o = e.data[i];
      e.data = o;
      if (typeof r !== 'undefined') {
        e.data.incomplete_results = r;
      }
      if (typeof a !== 'undefined') {
        e.data.repository_selection = a;
      }
      e.data.total_count = n;
      return e;
    }
    function iterator(e, t, r) {
      const a = typeof t === 'function' ? t.endpoint(r) : e.request.endpoint(t, r);
      const n = typeof t === 'function' ? t : e.request;
      const i = a.method;
      const o = a.headers;
      let s = a.url;
      return {
        [Symbol.asyncIterator]: () => ({
          async next() {
            if (!s) return { done: true };
            try {
              const e = await n({ method: i, url: s, headers: o });
              const t = normalizePaginatedListResponse(e);
              s = ((t.headers.link || '').match(/<([^>]+)>;\s*rel="next"/) || [])[1];
              return { value: t };
            } catch (e) {
              if (e.status !== 409) throw e;
              s = '';
              return { value: { status: 200, headers: {}, data: [] } };
            }
          },
        }),
      };
    }
    function paginate(e, t, r, a) {
      if (typeof r === 'function') {
        a = r;
        r = undefined;
      }
      return gather(e, [], iterator(e, t, r)[Symbol.asyncIterator](), a);
    }
    function gather(e, t, r, a) {
      return r.next().then((n) => {
        if (n.done) {
          return t;
        }
        let i = false;
        function done() {
          i = true;
        }
        t = t.concat(a ? a(n.value, done) : n.value.data);
        if (i) {
          return t;
        }
        return gather(e, t, r, a);
      });
    }
    const a = Object.assign(paginate, { iterator: iterator });
    const n = [
      'GET /app/hook/deliveries',
      'GET /app/installations',
      'GET /applications/grants',
      'GET /authorizations',
      'GET /enterprises/{enterprise}/actions/permissions/organizations',
      'GET /enterprises/{enterprise}/actions/runner-groups',
      'GET /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations',
      'GET /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners',
      'GET /enterprises/{enterprise}/actions/runners',
      'GET /enterprises/{enterprise}/audit-log',
      'GET /enterprises/{enterprise}/secret-scanning/alerts',
      'GET /enterprises/{enterprise}/settings/billing/advanced-security',
      'GET /events',
      'GET /gists',
      'GET /gists/public',
      'GET /gists/starred',
      'GET /gists/{gist_id}/comments',
      'GET /gists/{gist_id}/commits',
      'GET /gists/{gist_id}/forks',
      'GET /installation/repositories',
      'GET /issues',
      'GET /licenses',
      'GET /marketplace_listing/plans',
      'GET /marketplace_listing/plans/{plan_id}/accounts',
      'GET /marketplace_listing/stubbed/plans',
      'GET /marketplace_listing/stubbed/plans/{plan_id}/accounts',
      'GET /networks/{owner}/{repo}/events',
      'GET /notifications',
      'GET /organizations',
      'GET /orgs/{org}/actions/cache/usage-by-repository',
      'GET /orgs/{org}/actions/permissions/repositories',
      'GET /orgs/{org}/actions/runner-groups',
      'GET /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories',
      'GET /orgs/{org}/actions/runner-groups/{runner_group_id}/runners',
      'GET /orgs/{org}/actions/runners',
      'GET /orgs/{org}/actions/secrets',
      'GET /orgs/{org}/actions/secrets/{secret_name}/repositories',
      'GET /orgs/{org}/audit-log',
      'GET /orgs/{org}/blocks',
      'GET /orgs/{org}/code-scanning/alerts',
      'GET /orgs/{org}/codespaces',
      'GET /orgs/{org}/credential-authorizations',
      'GET /orgs/{org}/dependabot/secrets',
      'GET /orgs/{org}/dependabot/secrets/{secret_name}/repositories',
      'GET /orgs/{org}/events',
      'GET /orgs/{org}/external-groups',
      'GET /orgs/{org}/failed_invitations',
      'GET /orgs/{org}/hooks',
      'GET /orgs/{org}/hooks/{hook_id}/deliveries',
      'GET /orgs/{org}/installations',
      'GET /orgs/{org}/invitations',
      'GET /orgs/{org}/invitations/{invitation_id}/teams',
      'GET /orgs/{org}/issues',
      'GET /orgs/{org}/members',
      'GET /orgs/{org}/migrations',
      'GET /orgs/{org}/migrations/{migration_id}/repositories',
      'GET /orgs/{org}/outside_collaborators',
      'GET /orgs/{org}/packages',
      'GET /orgs/{org}/packages/{package_type}/{package_name}/versions',
      'GET /orgs/{org}/projects',
      'GET /orgs/{org}/public_members',
      'GET /orgs/{org}/repos',
      'GET /orgs/{org}/secret-scanning/alerts',
      'GET /orgs/{org}/settings/billing/advanced-security',
      'GET /orgs/{org}/team-sync/groups',
      'GET /orgs/{org}/teams',
      'GET /orgs/{org}/teams/{team_slug}/discussions',
      'GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments',
      'GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions',
      'GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions',
      'GET /orgs/{org}/teams/{team_slug}/invitations',
      'GET /orgs/{org}/teams/{team_slug}/members',
      'GET /orgs/{org}/teams/{team_slug}/projects',
      'GET /orgs/{org}/teams/{team_slug}/repos',
      'GET /orgs/{org}/teams/{team_slug}/teams',
      'GET /projects/columns/{column_id}/cards',
      'GET /projects/{project_id}/collaborators',
      'GET /projects/{project_id}/columns',
      'GET /repos/{owner}/{repo}/actions/artifacts',
      'GET /repos/{owner}/{repo}/actions/caches',
      'GET /repos/{owner}/{repo}/actions/runners',
      'GET /repos/{owner}/{repo}/actions/runs',
      'GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts',
      'GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs',
      'GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs',
      'GET /repos/{owner}/{repo}/actions/secrets',
      'GET /repos/{owner}/{repo}/actions/workflows',
      'GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs',
      'GET /repos/{owner}/{repo}/assignees',
      'GET /repos/{owner}/{repo}/branches',
      'GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations',
      'GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs',
      'GET /repos/{owner}/{repo}/code-scanning/alerts',
      'GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances',
      'GET /repos/{owner}/{repo}/code-scanning/analyses',
      'GET /repos/{owner}/{repo}/codespaces',
      'GET /repos/{owner}/{repo}/codespaces/devcontainers',
      'GET /repos/{owner}/{repo}/codespaces/secrets',
      'GET /repos/{owner}/{repo}/collaborators',
      'GET /repos/{owner}/{repo}/comments',
      'GET /repos/{owner}/{repo}/comments/{comment_id}/reactions',
      'GET /repos/{owner}/{repo}/commits',
      'GET /repos/{owner}/{repo}/commits/{commit_sha}/comments',
      'GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls',
      'GET /repos/{owner}/{repo}/commits/{ref}/check-runs',
      'GET /repos/{owner}/{repo}/commits/{ref}/check-suites',
      'GET /repos/{owner}/{repo}/commits/{ref}/status',
      'GET /repos/{owner}/{repo}/commits/{ref}/statuses',
      'GET /repos/{owner}/{repo}/contributors',
      'GET /repos/{owner}/{repo}/dependabot/secrets',
      'GET /repos/{owner}/{repo}/deployments',
      'GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses',
      'GET /repos/{owner}/{repo}/environments',
      'GET /repos/{owner}/{repo}/events',
      'GET /repos/{owner}/{repo}/forks',
      'GET /repos/{owner}/{repo}/git/matching-refs/{ref}',
      'GET /repos/{owner}/{repo}/hooks',
      'GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries',
      'GET /repos/{owner}/{repo}/invitations',
      'GET /repos/{owner}/{repo}/issues',
      'GET /repos/{owner}/{repo}/issues/comments',
      'GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions',
      'GET /repos/{owner}/{repo}/issues/events',
      'GET /repos/{owner}/{repo}/issues/{issue_number}/comments',
      'GET /repos/{owner}/{repo}/issues/{issue_number}/events',
      'GET /repos/{owner}/{repo}/issues/{issue_number}/labels',
      'GET /repos/{owner}/{repo}/issues/{issue_number}/reactions',
      'GET /repos/{owner}/{repo}/issues/{issue_number}/timeline',
      'GET /repos/{owner}/{repo}/keys',
      'GET /repos/{owner}/{repo}/labels',
      'GET /repos/{owner}/{repo}/milestones',
      'GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels',
      'GET /repos/{owner}/{repo}/notifications',
      'GET /repos/{owner}/{repo}/pages/builds',
      'GET /repos/{owner}/{repo}/projects',
      'GET /repos/{owner}/{repo}/pulls',
      'GET /repos/{owner}/{repo}/pulls/comments',
      'GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions',
      'GET /repos/{owner}/{repo}/pulls/{pull_number}/comments',
      'GET /repos/{owner}/{repo}/pulls/{pull_number}/commits',
      'GET /repos/{owner}/{repo}/pulls/{pull_number}/files',
      'GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers',
      'GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews',
      'GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments',
      'GET /repos/{owner}/{repo}/releases',
      'GET /repos/{owner}/{repo}/releases/{release_id}/assets',
      'GET /repos/{owner}/{repo}/releases/{release_id}/reactions',
      'GET /repos/{owner}/{repo}/secret-scanning/alerts',
      'GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}/locations',
      'GET /repos/{owner}/{repo}/stargazers',
      'GET /repos/{owner}/{repo}/subscribers',
      'GET /repos/{owner}/{repo}/tags',
      'GET /repos/{owner}/{repo}/teams',
      'GET /repos/{owner}/{repo}/topics',
      'GET /repositories',
      'GET /repositories/{repository_id}/environments/{environment_name}/secrets',
      'GET /search/code',
      'GET /search/commits',
      'GET /search/issues',
      'GET /search/labels',
      'GET /search/repositories',
      'GET /search/topics',
      'GET /search/users',
      'GET /teams/{team_id}/discussions',
      'GET /teams/{team_id}/discussions/{discussion_number}/comments',
      'GET /teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions',
      'GET /teams/{team_id}/discussions/{discussion_number}/reactions',
      'GET /teams/{team_id}/invitations',
      'GET /teams/{team_id}/members',
      'GET /teams/{team_id}/projects',
      'GET /teams/{team_id}/repos',
      'GET /teams/{team_id}/teams',
      'GET /user/blocks',
      'GET /user/codespaces',
      'GET /user/codespaces/secrets',
      'GET /user/emails',
      'GET /user/followers',
      'GET /user/following',
      'GET /user/gpg_keys',
      'GET /user/installations',
      'GET /user/installations/{installation_id}/repositories',
      'GET /user/issues',
      'GET /user/keys',
      'GET /user/marketplace_purchases',
      'GET /user/marketplace_purchases/stubbed',
      'GET /user/memberships/orgs',
      'GET /user/migrations',
      'GET /user/migrations/{migration_id}/repositories',
      'GET /user/orgs',
      'GET /user/packages',
      'GET /user/packages/{package_type}/{package_name}/versions',
      'GET /user/public_emails',
      'GET /user/repos',
      'GET /user/repository_invitations',
      'GET /user/starred',
      'GET /user/subscriptions',
      'GET /user/teams',
      'GET /users',
      'GET /users/{username}/events',
      'GET /users/{username}/events/orgs/{org}',
      'GET /users/{username}/events/public',
      'GET /users/{username}/followers',
      'GET /users/{username}/following',
      'GET /users/{username}/gists',
      'GET /users/{username}/gpg_keys',
      'GET /users/{username}/keys',
      'GET /users/{username}/orgs',
      'GET /users/{username}/packages',
      'GET /users/{username}/projects',
      'GET /users/{username}/received_events',
      'GET /users/{username}/received_events/public',
      'GET /users/{username}/repos',
      'GET /users/{username}/starred',
      'GET /users/{username}/subscriptions',
    ];
    function isPaginatingEndpoint(e) {
      if (typeof e === 'string') {
        return n.includes(e);
      } else {
        return false;
      }
    }
    function paginateRest(e) {
      return {
        paginate: Object.assign(paginate.bind(null, e), { iterator: iterator.bind(null, e) }),
      };
    }
    paginateRest.VERSION = r;
    t.composePaginateRest = a;
    t.isPaginatingEndpoint = isPaginatingEndpoint;
    t.paginateRest = paginateRest;
    t.paginatingEndpoints = n;
  },
  3044: (e, t) => {
    Object.defineProperty(t, '__esModule', { value: true });
    function ownKeys(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        if (t) {
          a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          });
        }
        r.push.apply(r, a);
      }
      return r;
    }
    function _objectSpread2(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        if (t % 2) {
          ownKeys(Object(r), true).forEach(function (t) {
            _defineProperty(e, t, r[t]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
        } else {
          ownKeys(Object(r)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
        }
      }
      return e;
    }
    function _defineProperty(e, t, r) {
      if (t in e) {
        Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true,
        });
      } else {
        e[t] = r;
      }
      return e;
    }
    const r = {
      actions: {
        addCustomLabelsToSelfHostedRunnerForOrg: [
          'POST /orgs/{org}/actions/runners/{runner_id}/labels',
        ],
        addCustomLabelsToSelfHostedRunnerForRepo: [
          'POST /repos/{owner}/{repo}/actions/runners/{runner_id}/labels',
        ],
        addSelectedRepoToOrgSecret: [
          'PUT /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}',
        ],
        approveWorkflowRun: ['POST /repos/{owner}/{repo}/actions/runs/{run_id}/approve'],
        cancelWorkflowRun: ['POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel'],
        createOrUpdateEnvironmentSecret: [
          'PUT /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}',
        ],
        createOrUpdateOrgSecret: ['PUT /orgs/{org}/actions/secrets/{secret_name}'],
        createOrUpdateRepoSecret: ['PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}'],
        createRegistrationTokenForOrg: ['POST /orgs/{org}/actions/runners/registration-token'],
        createRegistrationTokenForRepo: [
          'POST /repos/{owner}/{repo}/actions/runners/registration-token',
        ],
        createRemoveTokenForOrg: ['POST /orgs/{org}/actions/runners/remove-token'],
        createRemoveTokenForRepo: ['POST /repos/{owner}/{repo}/actions/runners/remove-token'],
        createWorkflowDispatch: [
          'POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches',
        ],
        deleteActionsCacheById: ['DELETE /repos/{owner}/{repo}/actions/caches/{cache_id}'],
        deleteActionsCacheByKey: ['DELETE /repos/{owner}/{repo}/actions/caches{?key,ref}'],
        deleteArtifact: ['DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}'],
        deleteEnvironmentSecret: [
          'DELETE /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}',
        ],
        deleteOrgSecret: ['DELETE /orgs/{org}/actions/secrets/{secret_name}'],
        deleteRepoSecret: ['DELETE /repos/{owner}/{repo}/actions/secrets/{secret_name}'],
        deleteSelfHostedRunnerFromOrg: ['DELETE /orgs/{org}/actions/runners/{runner_id}'],
        deleteSelfHostedRunnerFromRepo: [
          'DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}',
        ],
        deleteWorkflowRun: ['DELETE /repos/{owner}/{repo}/actions/runs/{run_id}'],
        deleteWorkflowRunLogs: ['DELETE /repos/{owner}/{repo}/actions/runs/{run_id}/logs'],
        disableSelectedRepositoryGithubActionsOrganization: [
          'DELETE /orgs/{org}/actions/permissions/repositories/{repository_id}',
        ],
        disableWorkflow: ['PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable'],
        downloadArtifact: [
          'GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}',
        ],
        downloadJobLogsForWorkflowRun: ['GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs'],
        downloadWorkflowRunAttemptLogs: [
          'GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/logs',
        ],
        downloadWorkflowRunLogs: ['GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs'],
        enableSelectedRepositoryGithubActionsOrganization: [
          'PUT /orgs/{org}/actions/permissions/repositories/{repository_id}',
        ],
        enableWorkflow: ['PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable'],
        getActionsCacheList: ['GET /repos/{owner}/{repo}/actions/caches'],
        getActionsCacheUsage: ['GET /repos/{owner}/{repo}/actions/cache/usage'],
        getActionsCacheUsageByRepoForOrg: ['GET /orgs/{org}/actions/cache/usage-by-repository'],
        getActionsCacheUsageForEnterprise: ['GET /enterprises/{enterprise}/actions/cache/usage'],
        getActionsCacheUsageForOrg: ['GET /orgs/{org}/actions/cache/usage'],
        getAllowedActionsOrganization: ['GET /orgs/{org}/actions/permissions/selected-actions'],
        getAllowedActionsRepository: [
          'GET /repos/{owner}/{repo}/actions/permissions/selected-actions',
        ],
        getArtifact: ['GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}'],
        getEnvironmentPublicKey: [
          'GET /repositories/{repository_id}/environments/{environment_name}/secrets/public-key',
        ],
        getEnvironmentSecret: [
          'GET /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}',
        ],
        getGithubActionsDefaultWorkflowPermissionsEnterprise: [
          'GET /enterprises/{enterprise}/actions/permissions/workflow',
        ],
        getGithubActionsDefaultWorkflowPermissionsOrganization: [
          'GET /orgs/{org}/actions/permissions/workflow',
        ],
        getGithubActionsDefaultWorkflowPermissionsRepository: [
          'GET /repos/{owner}/{repo}/actions/permissions/workflow',
        ],
        getGithubActionsPermissionsOrganization: ['GET /orgs/{org}/actions/permissions'],
        getGithubActionsPermissionsRepository: ['GET /repos/{owner}/{repo}/actions/permissions'],
        getJobForWorkflowRun: ['GET /repos/{owner}/{repo}/actions/jobs/{job_id}'],
        getOrgPublicKey: ['GET /orgs/{org}/actions/secrets/public-key'],
        getOrgSecret: ['GET /orgs/{org}/actions/secrets/{secret_name}'],
        getPendingDeploymentsForRun: [
          'GET /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments',
        ],
        getRepoPermissions: [
          'GET /repos/{owner}/{repo}/actions/permissions',
          {},
          { renamed: ['actions', 'getGithubActionsPermissionsRepository'] },
        ],
        getRepoPublicKey: ['GET /repos/{owner}/{repo}/actions/secrets/public-key'],
        getRepoSecret: ['GET /repos/{owner}/{repo}/actions/secrets/{secret_name}'],
        getReviewsForRun: ['GET /repos/{owner}/{repo}/actions/runs/{run_id}/approvals'],
        getSelfHostedRunnerForOrg: ['GET /orgs/{org}/actions/runners/{runner_id}'],
        getSelfHostedRunnerForRepo: ['GET /repos/{owner}/{repo}/actions/runners/{runner_id}'],
        getWorkflow: ['GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}'],
        getWorkflowAccessToRepository: ['GET /repos/{owner}/{repo}/actions/permissions/access'],
        getWorkflowRun: ['GET /repos/{owner}/{repo}/actions/runs/{run_id}'],
        getWorkflowRunAttempt: [
          'GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}',
        ],
        getWorkflowRunUsage: ['GET /repos/{owner}/{repo}/actions/runs/{run_id}/timing'],
        getWorkflowUsage: ['GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing'],
        listArtifactsForRepo: ['GET /repos/{owner}/{repo}/actions/artifacts'],
        listEnvironmentSecrets: [
          'GET /repositories/{repository_id}/environments/{environment_name}/secrets',
        ],
        listJobsForWorkflowRun: ['GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs'],
        listJobsForWorkflowRunAttempt: [
          'GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs',
        ],
        listLabelsForSelfHostedRunnerForOrg: ['GET /orgs/{org}/actions/runners/{runner_id}/labels'],
        listLabelsForSelfHostedRunnerForRepo: [
          'GET /repos/{owner}/{repo}/actions/runners/{runner_id}/labels',
        ],
        listOrgSecrets: ['GET /orgs/{org}/actions/secrets'],
        listRepoSecrets: ['GET /repos/{owner}/{repo}/actions/secrets'],
        listRepoWorkflows: ['GET /repos/{owner}/{repo}/actions/workflows'],
        listRunnerApplicationsForOrg: ['GET /orgs/{org}/actions/runners/downloads'],
        listRunnerApplicationsForRepo: ['GET /repos/{owner}/{repo}/actions/runners/downloads'],
        listSelectedReposForOrgSecret: [
          'GET /orgs/{org}/actions/secrets/{secret_name}/repositories',
        ],
        listSelectedRepositoriesEnabledGithubActionsOrganization: [
          'GET /orgs/{org}/actions/permissions/repositories',
        ],
        listSelfHostedRunnersForOrg: ['GET /orgs/{org}/actions/runners'],
        listSelfHostedRunnersForRepo: ['GET /repos/{owner}/{repo}/actions/runners'],
        listWorkflowRunArtifacts: ['GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts'],
        listWorkflowRuns: ['GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs'],
        listWorkflowRunsForRepo: ['GET /repos/{owner}/{repo}/actions/runs'],
        reRunJobForWorkflowRun: ['POST /repos/{owner}/{repo}/actions/jobs/{job_id}/rerun'],
        reRunWorkflow: ['POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun'],
        reRunWorkflowFailedJobs: [
          'POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun-failed-jobs',
        ],
        removeAllCustomLabelsFromSelfHostedRunnerForOrg: [
          'DELETE /orgs/{org}/actions/runners/{runner_id}/labels',
        ],
        removeAllCustomLabelsFromSelfHostedRunnerForRepo: [
          'DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels',
        ],
        removeCustomLabelFromSelfHostedRunnerForOrg: [
          'DELETE /orgs/{org}/actions/runners/{runner_id}/labels/{name}',
        ],
        removeCustomLabelFromSelfHostedRunnerForRepo: [
          'DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels/{name}',
        ],
        removeSelectedRepoFromOrgSecret: [
          'DELETE /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}',
        ],
        reviewPendingDeploymentsForRun: [
          'POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments',
        ],
        setAllowedActionsOrganization: ['PUT /orgs/{org}/actions/permissions/selected-actions'],
        setAllowedActionsRepository: [
          'PUT /repos/{owner}/{repo}/actions/permissions/selected-actions',
        ],
        setCustomLabelsForSelfHostedRunnerForOrg: [
          'PUT /orgs/{org}/actions/runners/{runner_id}/labels',
        ],
        setCustomLabelsForSelfHostedRunnerForRepo: [
          'PUT /repos/{owner}/{repo}/actions/runners/{runner_id}/labels',
        ],
        setGithubActionsDefaultWorkflowPermissionsEnterprise: [
          'PUT /enterprises/{enterprise}/actions/permissions/workflow',
        ],
        setGithubActionsDefaultWorkflowPermissionsOrganization: [
          'PUT /orgs/{org}/actions/permissions/workflow',
        ],
        setGithubActionsDefaultWorkflowPermissionsRepository: [
          'PUT /repos/{owner}/{repo}/actions/permissions/workflow',
        ],
        setGithubActionsPermissionsOrganization: ['PUT /orgs/{org}/actions/permissions'],
        setGithubActionsPermissionsRepository: ['PUT /repos/{owner}/{repo}/actions/permissions'],
        setSelectedReposForOrgSecret: [
          'PUT /orgs/{org}/actions/secrets/{secret_name}/repositories',
        ],
        setSelectedRepositoriesEnabledGithubActionsOrganization: [
          'PUT /orgs/{org}/actions/permissions/repositories',
        ],
        setWorkflowAccessToRepository: ['PUT /repos/{owner}/{repo}/actions/permissions/access'],
      },
      activity: {
        checkRepoIsStarredByAuthenticatedUser: ['GET /user/starred/{owner}/{repo}'],
        deleteRepoSubscription: ['DELETE /repos/{owner}/{repo}/subscription'],
        deleteThreadSubscription: ['DELETE /notifications/threads/{thread_id}/subscription'],
        getFeeds: ['GET /feeds'],
        getRepoSubscription: ['GET /repos/{owner}/{repo}/subscription'],
        getThread: ['GET /notifications/threads/{thread_id}'],
        getThreadSubscriptionForAuthenticatedUser: [
          'GET /notifications/threads/{thread_id}/subscription',
        ],
        listEventsForAuthenticatedUser: ['GET /users/{username}/events'],
        listNotificationsForAuthenticatedUser: ['GET /notifications'],
        listOrgEventsForAuthenticatedUser: ['GET /users/{username}/events/orgs/{org}'],
        listPublicEvents: ['GET /events'],
        listPublicEventsForRepoNetwork: ['GET /networks/{owner}/{repo}/events'],
        listPublicEventsForUser: ['GET /users/{username}/events/public'],
        listPublicOrgEvents: ['GET /orgs/{org}/events'],
        listReceivedEventsForUser: ['GET /users/{username}/received_events'],
        listReceivedPublicEventsForUser: ['GET /users/{username}/received_events/public'],
        listRepoEvents: ['GET /repos/{owner}/{repo}/events'],
        listRepoNotificationsForAuthenticatedUser: ['GET /repos/{owner}/{repo}/notifications'],
        listReposStarredByAuthenticatedUser: ['GET /user/starred'],
        listReposStarredByUser: ['GET /users/{username}/starred'],
        listReposWatchedByUser: ['GET /users/{username}/subscriptions'],
        listStargazersForRepo: ['GET /repos/{owner}/{repo}/stargazers'],
        listWatchedReposForAuthenticatedUser: ['GET /user/subscriptions'],
        listWatchersForRepo: ['GET /repos/{owner}/{repo}/subscribers'],
        markNotificationsAsRead: ['PUT /notifications'],
        markRepoNotificationsAsRead: ['PUT /repos/{owner}/{repo}/notifications'],
        markThreadAsRead: ['PATCH /notifications/threads/{thread_id}'],
        setRepoSubscription: ['PUT /repos/{owner}/{repo}/subscription'],
        setThreadSubscription: ['PUT /notifications/threads/{thread_id}/subscription'],
        starRepoForAuthenticatedUser: ['PUT /user/starred/{owner}/{repo}'],
        unstarRepoForAuthenticatedUser: ['DELETE /user/starred/{owner}/{repo}'],
      },
      apps: {
        addRepoToInstallation: [
          'PUT /user/installations/{installation_id}/repositories/{repository_id}',
          {},
          { renamed: ['apps', 'addRepoToInstallationForAuthenticatedUser'] },
        ],
        addRepoToInstallationForAuthenticatedUser: [
          'PUT /user/installations/{installation_id}/repositories/{repository_id}',
        ],
        checkToken: ['POST /applications/{client_id}/token'],
        createFromManifest: ['POST /app-manifests/{code}/conversions'],
        createInstallationAccessToken: ['POST /app/installations/{installation_id}/access_tokens'],
        deleteAuthorization: ['DELETE /applications/{client_id}/grant'],
        deleteInstallation: ['DELETE /app/installations/{installation_id}'],
        deleteToken: ['DELETE /applications/{client_id}/token'],
        getAuthenticated: ['GET /app'],
        getBySlug: ['GET /apps/{app_slug}'],
        getInstallation: ['GET /app/installations/{installation_id}'],
        getOrgInstallation: ['GET /orgs/{org}/installation'],
        getRepoInstallation: ['GET /repos/{owner}/{repo}/installation'],
        getSubscriptionPlanForAccount: ['GET /marketplace_listing/accounts/{account_id}'],
        getSubscriptionPlanForAccountStubbed: [
          'GET /marketplace_listing/stubbed/accounts/{account_id}',
        ],
        getUserInstallation: ['GET /users/{username}/installation'],
        getWebhookConfigForApp: ['GET /app/hook/config'],
        getWebhookDelivery: ['GET /app/hook/deliveries/{delivery_id}'],
        listAccountsForPlan: ['GET /marketplace_listing/plans/{plan_id}/accounts'],
        listAccountsForPlanStubbed: ['GET /marketplace_listing/stubbed/plans/{plan_id}/accounts'],
        listInstallationReposForAuthenticatedUser: [
          'GET /user/installations/{installation_id}/repositories',
        ],
        listInstallations: ['GET /app/installations'],
        listInstallationsForAuthenticatedUser: ['GET /user/installations'],
        listPlans: ['GET /marketplace_listing/plans'],
        listPlansStubbed: ['GET /marketplace_listing/stubbed/plans'],
        listReposAccessibleToInstallation: ['GET /installation/repositories'],
        listSubscriptionsForAuthenticatedUser: ['GET /user/marketplace_purchases'],
        listSubscriptionsForAuthenticatedUserStubbed: ['GET /user/marketplace_purchases/stubbed'],
        listWebhookDeliveries: ['GET /app/hook/deliveries'],
        redeliverWebhookDelivery: ['POST /app/hook/deliveries/{delivery_id}/attempts'],
        removeRepoFromInstallation: [
          'DELETE /user/installations/{installation_id}/repositories/{repository_id}',
          {},
          { renamed: ['apps', 'removeRepoFromInstallationForAuthenticatedUser'] },
        ],
        removeRepoFromInstallationForAuthenticatedUser: [
          'DELETE /user/installations/{installation_id}/repositories/{repository_id}',
        ],
        resetToken: ['PATCH /applications/{client_id}/token'],
        revokeInstallationAccessToken: ['DELETE /installation/token'],
        scopeToken: ['POST /applications/{client_id}/token/scoped'],
        suspendInstallation: ['PUT /app/installations/{installation_id}/suspended'],
        unsuspendInstallation: ['DELETE /app/installations/{installation_id}/suspended'],
        updateWebhookConfigForApp: ['PATCH /app/hook/config'],
      },
      billing: {
        getGithubActionsBillingOrg: ['GET /orgs/{org}/settings/billing/actions'],
        getGithubActionsBillingUser: ['GET /users/{username}/settings/billing/actions'],
        getGithubAdvancedSecurityBillingGhe: [
          'GET /enterprises/{enterprise}/settings/billing/advanced-security',
        ],
        getGithubAdvancedSecurityBillingOrg: ['GET /orgs/{org}/settings/billing/advanced-security'],
        getGithubPackagesBillingOrg: ['GET /orgs/{org}/settings/billing/packages'],
        getGithubPackagesBillingUser: ['GET /users/{username}/settings/billing/packages'],
        getSharedStorageBillingOrg: ['GET /orgs/{org}/settings/billing/shared-storage'],
        getSharedStorageBillingUser: ['GET /users/{username}/settings/billing/shared-storage'],
      },
      checks: {
        create: ['POST /repos/{owner}/{repo}/check-runs'],
        createSuite: ['POST /repos/{owner}/{repo}/check-suites'],
        get: ['GET /repos/{owner}/{repo}/check-runs/{check_run_id}'],
        getSuite: ['GET /repos/{owner}/{repo}/check-suites/{check_suite_id}'],
        listAnnotations: ['GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations'],
        listForRef: ['GET /repos/{owner}/{repo}/commits/{ref}/check-runs'],
        listForSuite: ['GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs'],
        listSuitesForRef: ['GET /repos/{owner}/{repo}/commits/{ref}/check-suites'],
        rerequestRun: ['POST /repos/{owner}/{repo}/check-runs/{check_run_id}/rerequest'],
        rerequestSuite: ['POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest'],
        setSuitesPreferences: ['PATCH /repos/{owner}/{repo}/check-suites/preferences'],
        update: ['PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}'],
      },
      codeScanning: {
        deleteAnalysis: [
          'DELETE /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}{?confirm_delete}',
        ],
        getAlert: [
          'GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}',
          {},
          { renamedParameters: { alert_id: 'alert_number' } },
        ],
        getAnalysis: ['GET /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}'],
        getSarif: ['GET /repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}'],
        listAlertInstances: [
          'GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances',
        ],
        listAlertsForOrg: ['GET /orgs/{org}/code-scanning/alerts'],
        listAlertsForRepo: ['GET /repos/{owner}/{repo}/code-scanning/alerts'],
        listAlertsInstances: [
          'GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances',
          {},
          { renamed: ['codeScanning', 'listAlertInstances'] },
        ],
        listRecentAnalyses: ['GET /repos/{owner}/{repo}/code-scanning/analyses'],
        updateAlert: ['PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}'],
        uploadSarif: ['POST /repos/{owner}/{repo}/code-scanning/sarifs'],
      },
      codesOfConduct: {
        getAllCodesOfConduct: ['GET /codes_of_conduct'],
        getConductCode: ['GET /codes_of_conduct/{key}'],
      },
      codespaces: {
        addRepositoryForSecretForAuthenticatedUser: [
          'PUT /user/codespaces/secrets/{secret_name}/repositories/{repository_id}',
        ],
        codespaceMachinesForAuthenticatedUser: ['GET /user/codespaces/{codespace_name}/machines'],
        createForAuthenticatedUser: ['POST /user/codespaces'],
        createOrUpdateRepoSecret: ['PUT /repos/{owner}/{repo}/codespaces/secrets/{secret_name}'],
        createOrUpdateSecretForAuthenticatedUser: ['PUT /user/codespaces/secrets/{secret_name}'],
        createWithPrForAuthenticatedUser: [
          'POST /repos/{owner}/{repo}/pulls/{pull_number}/codespaces',
        ],
        createWithRepoForAuthenticatedUser: ['POST /repos/{owner}/{repo}/codespaces'],
        deleteForAuthenticatedUser: ['DELETE /user/codespaces/{codespace_name}'],
        deleteFromOrganization: [
          'DELETE /orgs/{org}/members/{username}/codespaces/{codespace_name}',
        ],
        deleteRepoSecret: ['DELETE /repos/{owner}/{repo}/codespaces/secrets/{secret_name}'],
        deleteSecretForAuthenticatedUser: ['DELETE /user/codespaces/secrets/{secret_name}'],
        exportForAuthenticatedUser: ['POST /user/codespaces/{codespace_name}/exports'],
        getExportDetailsForAuthenticatedUser: [
          'GET /user/codespaces/{codespace_name}/exports/{export_id}',
        ],
        getForAuthenticatedUser: ['GET /user/codespaces/{codespace_name}'],
        getPublicKeyForAuthenticatedUser: ['GET /user/codespaces/secrets/public-key'],
        getRepoPublicKey: ['GET /repos/{owner}/{repo}/codespaces/secrets/public-key'],
        getRepoSecret: ['GET /repos/{owner}/{repo}/codespaces/secrets/{secret_name}'],
        getSecretForAuthenticatedUser: ['GET /user/codespaces/secrets/{secret_name}'],
        listDevcontainersInRepositoryForAuthenticatedUser: [
          'GET /repos/{owner}/{repo}/codespaces/devcontainers',
        ],
        listForAuthenticatedUser: ['GET /user/codespaces'],
        listInOrganization: [
          'GET /orgs/{org}/codespaces',
          {},
          { renamedParameters: { org_id: 'org' } },
        ],
        listInRepositoryForAuthenticatedUser: ['GET /repos/{owner}/{repo}/codespaces'],
        listRepoSecrets: ['GET /repos/{owner}/{repo}/codespaces/secrets'],
        listRepositoriesForSecretForAuthenticatedUser: [
          'GET /user/codespaces/secrets/{secret_name}/repositories',
        ],
        listSecretsForAuthenticatedUser: ['GET /user/codespaces/secrets'],
        removeRepositoryForSecretForAuthenticatedUser: [
          'DELETE /user/codespaces/secrets/{secret_name}/repositories/{repository_id}',
        ],
        repoMachinesForAuthenticatedUser: ['GET /repos/{owner}/{repo}/codespaces/machines'],
        setRepositoriesForSecretForAuthenticatedUser: [
          'PUT /user/codespaces/secrets/{secret_name}/repositories',
        ],
        startForAuthenticatedUser: ['POST /user/codespaces/{codespace_name}/start'],
        stopForAuthenticatedUser: ['POST /user/codespaces/{codespace_name}/stop'],
        stopInOrganization: [
          'POST /orgs/{org}/members/{username}/codespaces/{codespace_name}/stop',
        ],
        updateForAuthenticatedUser: ['PATCH /user/codespaces/{codespace_name}'],
      },
      dependabot: {
        addSelectedRepoToOrgSecret: [
          'PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}',
        ],
        createOrUpdateOrgSecret: ['PUT /orgs/{org}/dependabot/secrets/{secret_name}'],
        createOrUpdateRepoSecret: ['PUT /repos/{owner}/{repo}/dependabot/secrets/{secret_name}'],
        deleteOrgSecret: ['DELETE /orgs/{org}/dependabot/secrets/{secret_name}'],
        deleteRepoSecret: ['DELETE /repos/{owner}/{repo}/dependabot/secrets/{secret_name}'],
        getOrgPublicKey: ['GET /orgs/{org}/dependabot/secrets/public-key'],
        getOrgSecret: ['GET /orgs/{org}/dependabot/secrets/{secret_name}'],
        getRepoPublicKey: ['GET /repos/{owner}/{repo}/dependabot/secrets/public-key'],
        getRepoSecret: ['GET /repos/{owner}/{repo}/dependabot/secrets/{secret_name}'],
        listOrgSecrets: ['GET /orgs/{org}/dependabot/secrets'],
        listRepoSecrets: ['GET /repos/{owner}/{repo}/dependabot/secrets'],
        listSelectedReposForOrgSecret: [
          'GET /orgs/{org}/dependabot/secrets/{secret_name}/repositories',
        ],
        removeSelectedRepoFromOrgSecret: [
          'DELETE /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}',
        ],
        setSelectedReposForOrgSecret: [
          'PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories',
        ],
      },
      dependencyGraph: {
        createRepositorySnapshot: ['POST /repos/{owner}/{repo}/dependency-graph/snapshots'],
        diffRange: ['GET /repos/{owner}/{repo}/dependency-graph/compare/{basehead}'],
      },
      emojis: { get: ['GET /emojis'] },
      enterpriseAdmin: {
        addCustomLabelsToSelfHostedRunnerForEnterprise: [
          'POST /enterprises/{enterprise}/actions/runners/{runner_id}/labels',
        ],
        disableSelectedOrganizationGithubActionsEnterprise: [
          'DELETE /enterprises/{enterprise}/actions/permissions/organizations/{org_id}',
        ],
        enableSelectedOrganizationGithubActionsEnterprise: [
          'PUT /enterprises/{enterprise}/actions/permissions/organizations/{org_id}',
        ],
        getAllowedActionsEnterprise: [
          'GET /enterprises/{enterprise}/actions/permissions/selected-actions',
        ],
        getGithubActionsPermissionsEnterprise: [
          'GET /enterprises/{enterprise}/actions/permissions',
        ],
        getServerStatistics: ['GET /enterprise-installation/{enterprise_or_org}/server-statistics'],
        listLabelsForSelfHostedRunnerForEnterprise: [
          'GET /enterprises/{enterprise}/actions/runners/{runner_id}/labels',
        ],
        listSelectedOrganizationsEnabledGithubActionsEnterprise: [
          'GET /enterprises/{enterprise}/actions/permissions/organizations',
        ],
        removeAllCustomLabelsFromSelfHostedRunnerForEnterprise: [
          'DELETE /enterprises/{enterprise}/actions/runners/{runner_id}/labels',
        ],
        removeCustomLabelFromSelfHostedRunnerForEnterprise: [
          'DELETE /enterprises/{enterprise}/actions/runners/{runner_id}/labels/{name}',
        ],
        setAllowedActionsEnterprise: [
          'PUT /enterprises/{enterprise}/actions/permissions/selected-actions',
        ],
        setCustomLabelsForSelfHostedRunnerForEnterprise: [
          'PUT /enterprises/{enterprise}/actions/runners/{runner_id}/labels',
        ],
        setGithubActionsPermissionsEnterprise: [
          'PUT /enterprises/{enterprise}/actions/permissions',
        ],
        setSelectedOrganizationsEnabledGithubActionsEnterprise: [
          'PUT /enterprises/{enterprise}/actions/permissions/organizations',
        ],
      },
      gists: {
        checkIsStarred: ['GET /gists/{gist_id}/star'],
        create: ['POST /gists'],
        createComment: ['POST /gists/{gist_id}/comments'],
        delete: ['DELETE /gists/{gist_id}'],
        deleteComment: ['DELETE /gists/{gist_id}/comments/{comment_id}'],
        fork: ['POST /gists/{gist_id}/forks'],
        get: ['GET /gists/{gist_id}'],
        getComment: ['GET /gists/{gist_id}/comments/{comment_id}'],
        getRevision: ['GET /gists/{gist_id}/{sha}'],
        list: ['GET /gists'],
        listComments: ['GET /gists/{gist_id}/comments'],
        listCommits: ['GET /gists/{gist_id}/commits'],
        listForUser: ['GET /users/{username}/gists'],
        listForks: ['GET /gists/{gist_id}/forks'],
        listPublic: ['GET /gists/public'],
        listStarred: ['GET /gists/starred'],
        star: ['PUT /gists/{gist_id}/star'],
        unstar: ['DELETE /gists/{gist_id}/star'],
        update: ['PATCH /gists/{gist_id}'],
        updateComment: ['PATCH /gists/{gist_id}/comments/{comment_id}'],
      },
      git: {
        createBlob: ['POST /repos/{owner}/{repo}/git/blobs'],
        createCommit: ['POST /repos/{owner}/{repo}/git/commits'],
        createRef: ['POST /repos/{owner}/{repo}/git/refs'],
        createTag: ['POST /repos/{owner}/{repo}/git/tags'],
        createTree: ['POST /repos/{owner}/{repo}/git/trees'],
        deleteRef: ['DELETE /repos/{owner}/{repo}/git/refs/{ref}'],
        getBlob: ['GET /repos/{owner}/{repo}/git/blobs/{file_sha}'],
        getCommit: ['GET /repos/{owner}/{repo}/git/commits/{commit_sha}'],
        getRef: ['GET /repos/{owner}/{repo}/git/ref/{ref}'],
        getTag: ['GET /repos/{owner}/{repo}/git/tags/{tag_sha}'],
        getTree: ['GET /repos/{owner}/{repo}/git/trees/{tree_sha}'],
        listMatchingRefs: ['GET /repos/{owner}/{repo}/git/matching-refs/{ref}'],
        updateRef: ['PATCH /repos/{owner}/{repo}/git/refs/{ref}'],
      },
      gitignore: {
        getAllTemplates: ['GET /gitignore/templates'],
        getTemplate: ['GET /gitignore/templates/{name}'],
      },
      interactions: {
        getRestrictionsForAuthenticatedUser: ['GET /user/interaction-limits'],
        getRestrictionsForOrg: ['GET /orgs/{org}/interaction-limits'],
        getRestrictionsForRepo: ['GET /repos/{owner}/{repo}/interaction-limits'],
        getRestrictionsForYourPublicRepos: [
          'GET /user/interaction-limits',
          {},
          { renamed: ['interactions', 'getRestrictionsForAuthenticatedUser'] },
        ],
        removeRestrictionsForAuthenticatedUser: ['DELETE /user/interaction-limits'],
        removeRestrictionsForOrg: ['DELETE /orgs/{org}/interaction-limits'],
        removeRestrictionsForRepo: ['DELETE /repos/{owner}/{repo}/interaction-limits'],
        removeRestrictionsForYourPublicRepos: [
          'DELETE /user/interaction-limits',
          {},
          { renamed: ['interactions', 'removeRestrictionsForAuthenticatedUser'] },
        ],
        setRestrictionsForAuthenticatedUser: ['PUT /user/interaction-limits'],
        setRestrictionsForOrg: ['PUT /orgs/{org}/interaction-limits'],
        setRestrictionsForRepo: ['PUT /repos/{owner}/{repo}/interaction-limits'],
        setRestrictionsForYourPublicRepos: [
          'PUT /user/interaction-limits',
          {},
          { renamed: ['interactions', 'setRestrictionsForAuthenticatedUser'] },
        ],
      },
      issues: {
        addAssignees: ['POST /repos/{owner}/{repo}/issues/{issue_number}/assignees'],
        addLabels: ['POST /repos/{owner}/{repo}/issues/{issue_number}/labels'],
        checkUserCanBeAssigned: ['GET /repos/{owner}/{repo}/assignees/{assignee}'],
        create: ['POST /repos/{owner}/{repo}/issues'],
        createComment: ['POST /repos/{owner}/{repo}/issues/{issue_number}/comments'],
        createLabel: ['POST /repos/{owner}/{repo}/labels'],
        createMilestone: ['POST /repos/{owner}/{repo}/milestones'],
        deleteComment: ['DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}'],
        deleteLabel: ['DELETE /repos/{owner}/{repo}/labels/{name}'],
        deleteMilestone: ['DELETE /repos/{owner}/{repo}/milestones/{milestone_number}'],
        get: ['GET /repos/{owner}/{repo}/issues/{issue_number}'],
        getComment: ['GET /repos/{owner}/{repo}/issues/comments/{comment_id}'],
        getEvent: ['GET /repos/{owner}/{repo}/issues/events/{event_id}'],
        getLabel: ['GET /repos/{owner}/{repo}/labels/{name}'],
        getMilestone: ['GET /repos/{owner}/{repo}/milestones/{milestone_number}'],
        list: ['GET /issues'],
        listAssignees: ['GET /repos/{owner}/{repo}/assignees'],
        listComments: ['GET /repos/{owner}/{repo}/issues/{issue_number}/comments'],
        listCommentsForRepo: ['GET /repos/{owner}/{repo}/issues/comments'],
        listEvents: ['GET /repos/{owner}/{repo}/issues/{issue_number}/events'],
        listEventsForRepo: ['GET /repos/{owner}/{repo}/issues/events'],
        listEventsForTimeline: ['GET /repos/{owner}/{repo}/issues/{issue_number}/timeline'],
        listForAuthenticatedUser: ['GET /user/issues'],
        listForOrg: ['GET /orgs/{org}/issues'],
        listForRepo: ['GET /repos/{owner}/{repo}/issues'],
        listLabelsForMilestone: ['GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels'],
        listLabelsForRepo: ['GET /repos/{owner}/{repo}/labels'],
        listLabelsOnIssue: ['GET /repos/{owner}/{repo}/issues/{issue_number}/labels'],
        listMilestones: ['GET /repos/{owner}/{repo}/milestones'],
        lock: ['PUT /repos/{owner}/{repo}/issues/{issue_number}/lock'],
        removeAllLabels: ['DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels'],
        removeAssignees: ['DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees'],
        removeLabel: ['DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels/{name}'],
        setLabels: ['PUT /repos/{owner}/{repo}/issues/{issue_number}/labels'],
        unlock: ['DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock'],
        update: ['PATCH /repos/{owner}/{repo}/issues/{issue_number}'],
        updateComment: ['PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}'],
        updateLabel: ['PATCH /repos/{owner}/{repo}/labels/{name}'],
        updateMilestone: ['PATCH /repos/{owner}/{repo}/milestones/{milestone_number}'],
      },
      licenses: {
        get: ['GET /licenses/{license}'],
        getAllCommonlyUsed: ['GET /licenses'],
        getForRepo: ['GET /repos/{owner}/{repo}/license'],
      },
      markdown: {
        render: ['POST /markdown'],
        renderRaw: [
          'POST /markdown/raw',
          { headers: { 'content-type': 'text/plain; charset=utf-8' } },
        ],
      },
      meta: {
        get: ['GET /meta'],
        getOctocat: ['GET /octocat'],
        getZen: ['GET /zen'],
        root: ['GET /'],
      },
      migrations: {
        cancelImport: ['DELETE /repos/{owner}/{repo}/import'],
        deleteArchiveForAuthenticatedUser: ['DELETE /user/migrations/{migration_id}/archive'],
        deleteArchiveForOrg: ['DELETE /orgs/{org}/migrations/{migration_id}/archive'],
        downloadArchiveForOrg: ['GET /orgs/{org}/migrations/{migration_id}/archive'],
        getArchiveForAuthenticatedUser: ['GET /user/migrations/{migration_id}/archive'],
        getCommitAuthors: ['GET /repos/{owner}/{repo}/import/authors'],
        getImportStatus: ['GET /repos/{owner}/{repo}/import'],
        getLargeFiles: ['GET /repos/{owner}/{repo}/import/large_files'],
        getStatusForAuthenticatedUser: ['GET /user/migrations/{migration_id}'],
        getStatusForOrg: ['GET /orgs/{org}/migrations/{migration_id}'],
        listForAuthenticatedUser: ['GET /user/migrations'],
        listForOrg: ['GET /orgs/{org}/migrations'],
        listReposForAuthenticatedUser: ['GET /user/migrations/{migration_id}/repositories'],
        listReposForOrg: ['GET /orgs/{org}/migrations/{migration_id}/repositories'],
        listReposForUser: [
          'GET /user/migrations/{migration_id}/repositories',
          {},
          { renamed: ['migrations', 'listReposForAuthenticatedUser'] },
        ],
        mapCommitAuthor: ['PATCH /repos/{owner}/{repo}/import/authors/{author_id}'],
        setLfsPreference: ['PATCH /repos/{owner}/{repo}/import/lfs'],
        startForAuthenticatedUser: ['POST /user/migrations'],
        startForOrg: ['POST /orgs/{org}/migrations'],
        startImport: ['PUT /repos/{owner}/{repo}/import'],
        unlockRepoForAuthenticatedUser: [
          'DELETE /user/migrations/{migration_id}/repos/{repo_name}/lock',
        ],
        unlockRepoForOrg: ['DELETE /orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock'],
        updateImport: ['PATCH /repos/{owner}/{repo}/import'],
      },
      orgs: {
        blockUser: ['PUT /orgs/{org}/blocks/{username}'],
        cancelInvitation: ['DELETE /orgs/{org}/invitations/{invitation_id}'],
        checkBlockedUser: ['GET /orgs/{org}/blocks/{username}'],
        checkMembershipForUser: ['GET /orgs/{org}/members/{username}'],
        checkPublicMembershipForUser: ['GET /orgs/{org}/public_members/{username}'],
        convertMemberToOutsideCollaborator: ['PUT /orgs/{org}/outside_collaborators/{username}'],
        createInvitation: ['POST /orgs/{org}/invitations'],
        createWebhook: ['POST /orgs/{org}/hooks'],
        deleteWebhook: ['DELETE /orgs/{org}/hooks/{hook_id}'],
        get: ['GET /orgs/{org}'],
        getMembershipForAuthenticatedUser: ['GET /user/memberships/orgs/{org}'],
        getMembershipForUser: ['GET /orgs/{org}/memberships/{username}'],
        getWebhook: ['GET /orgs/{org}/hooks/{hook_id}'],
        getWebhookConfigForOrg: ['GET /orgs/{org}/hooks/{hook_id}/config'],
        getWebhookDelivery: ['GET /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}'],
        list: ['GET /organizations'],
        listAppInstallations: ['GET /orgs/{org}/installations'],
        listBlockedUsers: ['GET /orgs/{org}/blocks'],
        listCustomRoles: ['GET /organizations/{organization_id}/custom_roles'],
        listFailedInvitations: ['GET /orgs/{org}/failed_invitations'],
        listForAuthenticatedUser: ['GET /user/orgs'],
        listForUser: ['GET /users/{username}/orgs'],
        listInvitationTeams: ['GET /orgs/{org}/invitations/{invitation_id}/teams'],
        listMembers: ['GET /orgs/{org}/members'],
        listMembershipsForAuthenticatedUser: ['GET /user/memberships/orgs'],
        listOutsideCollaborators: ['GET /orgs/{org}/outside_collaborators'],
        listPendingInvitations: ['GET /orgs/{org}/invitations'],
        listPublicMembers: ['GET /orgs/{org}/public_members'],
        listWebhookDeliveries: ['GET /orgs/{org}/hooks/{hook_id}/deliveries'],
        listWebhooks: ['GET /orgs/{org}/hooks'],
        pingWebhook: ['POST /orgs/{org}/hooks/{hook_id}/pings'],
        redeliverWebhookDelivery: [
          'POST /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts',
        ],
        removeMember: ['DELETE /orgs/{org}/members/{username}'],
        removeMembershipForUser: ['DELETE /orgs/{org}/memberships/{username}'],
        removeOutsideCollaborator: ['DELETE /orgs/{org}/outside_collaborators/{username}'],
        removePublicMembershipForAuthenticatedUser: [
          'DELETE /orgs/{org}/public_members/{username}',
        ],
        setMembershipForUser: ['PUT /orgs/{org}/memberships/{username}'],
        setPublicMembershipForAuthenticatedUser: ['PUT /orgs/{org}/public_members/{username}'],
        unblockUser: ['DELETE /orgs/{org}/blocks/{username}'],
        update: ['PATCH /orgs/{org}'],
        updateMembershipForAuthenticatedUser: ['PATCH /user/memberships/orgs/{org}'],
        updateWebhook: ['PATCH /orgs/{org}/hooks/{hook_id}'],
        updateWebhookConfigForOrg: ['PATCH /orgs/{org}/hooks/{hook_id}/config'],
      },
      packages: {
        deletePackageForAuthenticatedUser: ['DELETE /user/packages/{package_type}/{package_name}'],
        deletePackageForOrg: ['DELETE /orgs/{org}/packages/{package_type}/{package_name}'],
        deletePackageForUser: ['DELETE /users/{username}/packages/{package_type}/{package_name}'],
        deletePackageVersionForAuthenticatedUser: [
          'DELETE /user/packages/{package_type}/{package_name}/versions/{package_version_id}',
        ],
        deletePackageVersionForOrg: [
          'DELETE /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}',
        ],
        deletePackageVersionForUser: [
          'DELETE /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}',
        ],
        getAllPackageVersionsForAPackageOwnedByAnOrg: [
          'GET /orgs/{org}/packages/{package_type}/{package_name}/versions',
          {},
          { renamed: ['packages', 'getAllPackageVersionsForPackageOwnedByOrg'] },
        ],
        getAllPackageVersionsForAPackageOwnedByTheAuthenticatedUser: [
          'GET /user/packages/{package_type}/{package_name}/versions',
          {},
          { renamed: ['packages', 'getAllPackageVersionsForPackageOwnedByAuthenticatedUser'] },
        ],
        getAllPackageVersionsForPackageOwnedByAuthenticatedUser: [
          'GET /user/packages/{package_type}/{package_name}/versions',
        ],
        getAllPackageVersionsForPackageOwnedByOrg: [
          'GET /orgs/{org}/packages/{package_type}/{package_name}/versions',
        ],
        getAllPackageVersionsForPackageOwnedByUser: [
          'GET /users/{username}/packages/{package_type}/{package_name}/versions',
        ],
        getPackageForAuthenticatedUser: ['GET /user/packages/{package_type}/{package_name}'],
        getPackageForOrganization: ['GET /orgs/{org}/packages/{package_type}/{package_name}'],
        getPackageForUser: ['GET /users/{username}/packages/{package_type}/{package_name}'],
        getPackageVersionForAuthenticatedUser: [
          'GET /user/packages/{package_type}/{package_name}/versions/{package_version_id}',
        ],
        getPackageVersionForOrganization: [
          'GET /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}',
        ],
        getPackageVersionForUser: [
          'GET /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}',
        ],
        listPackagesForAuthenticatedUser: ['GET /user/packages'],
        listPackagesForOrganization: ['GET /orgs/{org}/packages'],
        listPackagesForUser: ['GET /users/{username}/packages'],
        restorePackageForAuthenticatedUser: [
          'POST /user/packages/{package_type}/{package_name}/restore{?token}',
        ],
        restorePackageForOrg: [
          'POST /orgs/{org}/packages/{package_type}/{package_name}/restore{?token}',
        ],
        restorePackageForUser: [
          'POST /users/{username}/packages/{package_type}/{package_name}/restore{?token}',
        ],
        restorePackageVersionForAuthenticatedUser: [
          'POST /user/packages/{package_type}/{package_name}/versions/{package_version_id}/restore',
        ],
        restorePackageVersionForOrg: [
          'POST /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore',
        ],
        restorePackageVersionForUser: [
          'POST /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore',
        ],
      },
      projects: {
        addCollaborator: ['PUT /projects/{project_id}/collaborators/{username}'],
        createCard: ['POST /projects/columns/{column_id}/cards'],
        createColumn: ['POST /projects/{project_id}/columns'],
        createForAuthenticatedUser: ['POST /user/projects'],
        createForOrg: ['POST /orgs/{org}/projects'],
        createForRepo: ['POST /repos/{owner}/{repo}/projects'],
        delete: ['DELETE /projects/{project_id}'],
        deleteCard: ['DELETE /projects/columns/cards/{card_id}'],
        deleteColumn: ['DELETE /projects/columns/{column_id}'],
        get: ['GET /projects/{project_id}'],
        getCard: ['GET /projects/columns/cards/{card_id}'],
        getColumn: ['GET /projects/columns/{column_id}'],
        getPermissionForUser: ['GET /projects/{project_id}/collaborators/{username}/permission'],
        listCards: ['GET /projects/columns/{column_id}/cards'],
        listCollaborators: ['GET /projects/{project_id}/collaborators'],
        listColumns: ['GET /projects/{project_id}/columns'],
        listForOrg: ['GET /orgs/{org}/projects'],
        listForRepo: ['GET /repos/{owner}/{repo}/projects'],
        listForUser: ['GET /users/{username}/projects'],
        moveCard: ['POST /projects/columns/cards/{card_id}/moves'],
        moveColumn: ['POST /projects/columns/{column_id}/moves'],
        removeCollaborator: ['DELETE /projects/{project_id}/collaborators/{username}'],
        update: ['PATCH /projects/{project_id}'],
        updateCard: ['PATCH /projects/columns/cards/{card_id}'],
        updateColumn: ['PATCH /projects/columns/{column_id}'],
      },
      pulls: {
        checkIfMerged: ['GET /repos/{owner}/{repo}/pulls/{pull_number}/merge'],
        create: ['POST /repos/{owner}/{repo}/pulls'],
        createReplyForReviewComment: [
          'POST /repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies',
        ],
        createReview: ['POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews'],
        createReviewComment: ['POST /repos/{owner}/{repo}/pulls/{pull_number}/comments'],
        deletePendingReview: [
          'DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}',
        ],
        deleteReviewComment: ['DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}'],
        dismissReview: [
          'PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals',
        ],
        get: ['GET /repos/{owner}/{repo}/pulls/{pull_number}'],
        getReview: ['GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}'],
        getReviewComment: ['GET /repos/{owner}/{repo}/pulls/comments/{comment_id}'],
        list: ['GET /repos/{owner}/{repo}/pulls'],
        listCommentsForReview: [
          'GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments',
        ],
        listCommits: ['GET /repos/{owner}/{repo}/pulls/{pull_number}/commits'],
        listFiles: ['GET /repos/{owner}/{repo}/pulls/{pull_number}/files'],
        listRequestedReviewers: [
          'GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers',
        ],
        listReviewComments: ['GET /repos/{owner}/{repo}/pulls/{pull_number}/comments'],
        listReviewCommentsForRepo: ['GET /repos/{owner}/{repo}/pulls/comments'],
        listReviews: ['GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews'],
        merge: ['PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge'],
        removeRequestedReviewers: [
          'DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers',
        ],
        requestReviewers: ['POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers'],
        submitReview: ['POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events'],
        update: ['PATCH /repos/{owner}/{repo}/pulls/{pull_number}'],
        updateBranch: ['PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch'],
        updateReview: ['PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}'],
        updateReviewComment: ['PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}'],
      },
      rateLimit: { get: ['GET /rate_limit'] },
      reactions: {
        createForCommitComment: ['POST /repos/{owner}/{repo}/comments/{comment_id}/reactions'],
        createForIssue: ['POST /repos/{owner}/{repo}/issues/{issue_number}/reactions'],
        createForIssueComment: [
          'POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions',
        ],
        createForPullRequestReviewComment: [
          'POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions',
        ],
        createForRelease: ['POST /repos/{owner}/{repo}/releases/{release_id}/reactions'],
        createForTeamDiscussionCommentInOrg: [
          'POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions',
        ],
        createForTeamDiscussionInOrg: [
          'POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions',
        ],
        deleteForCommitComment: [
          'DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}',
        ],
        deleteForIssue: [
          'DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}',
        ],
        deleteForIssueComment: [
          'DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}',
        ],
        deleteForPullRequestComment: [
          'DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}',
        ],
        deleteForRelease: [
          'DELETE /repos/{owner}/{repo}/releases/{release_id}/reactions/{reaction_id}',
        ],
        deleteForTeamDiscussion: [
          'DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}',
        ],
        deleteForTeamDiscussionComment: [
          'DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}',
        ],
        listForCommitComment: ['GET /repos/{owner}/{repo}/comments/{comment_id}/reactions'],
        listForIssue: ['GET /repos/{owner}/{repo}/issues/{issue_number}/reactions'],
        listForIssueComment: ['GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions'],
        listForPullRequestReviewComment: [
          'GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions',
        ],
        listForRelease: ['GET /repos/{owner}/{repo}/releases/{release_id}/reactions'],
        listForTeamDiscussionCommentInOrg: [
          'GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions',
        ],
        listForTeamDiscussionInOrg: [
          'GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions',
        ],
      },
      repos: {
        acceptInvitation: [
          'PATCH /user/repository_invitations/{invitation_id}',
          {},
          { renamed: ['repos', 'acceptInvitationForAuthenticatedUser'] },
        ],
        acceptInvitationForAuthenticatedUser: [
          'PATCH /user/repository_invitations/{invitation_id}',
        ],
        addAppAccessRestrictions: [
          'POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps',
          {},
          { mapToData: 'apps' },
        ],
        addCollaborator: ['PUT /repos/{owner}/{repo}/collaborators/{username}'],
        addStatusCheckContexts: [
          'POST /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts',
          {},
          { mapToData: 'contexts' },
        ],
        addTeamAccessRestrictions: [
          'POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams',
          {},
          { mapToData: 'teams' },
        ],
        addUserAccessRestrictions: [
          'POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users',
          {},
          { mapToData: 'users' },
        ],
        checkCollaborator: ['GET /repos/{owner}/{repo}/collaborators/{username}'],
        checkVulnerabilityAlerts: ['GET /repos/{owner}/{repo}/vulnerability-alerts'],
        codeownersErrors: ['GET /repos/{owner}/{repo}/codeowners/errors'],
        compareCommits: ['GET /repos/{owner}/{repo}/compare/{base}...{head}'],
        compareCommitsWithBasehead: ['GET /repos/{owner}/{repo}/compare/{basehead}'],
        createAutolink: ['POST /repos/{owner}/{repo}/autolinks'],
        createCommitComment: ['POST /repos/{owner}/{repo}/commits/{commit_sha}/comments'],
        createCommitSignatureProtection: [
          'POST /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures',
        ],
        createCommitStatus: ['POST /repos/{owner}/{repo}/statuses/{sha}'],
        createDeployKey: ['POST /repos/{owner}/{repo}/keys'],
        createDeployment: ['POST /repos/{owner}/{repo}/deployments'],
        createDeploymentStatus: ['POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses'],
        createDispatchEvent: ['POST /repos/{owner}/{repo}/dispatches'],
        createForAuthenticatedUser: ['POST /user/repos'],
        createFork: ['POST /repos/{owner}/{repo}/forks'],
        createInOrg: ['POST /orgs/{org}/repos'],
        createOrUpdateEnvironment: ['PUT /repos/{owner}/{repo}/environments/{environment_name}'],
        createOrUpdateFileContents: ['PUT /repos/{owner}/{repo}/contents/{path}'],
        createPagesSite: ['POST /repos/{owner}/{repo}/pages'],
        createRelease: ['POST /repos/{owner}/{repo}/releases'],
        createTagProtection: ['POST /repos/{owner}/{repo}/tags/protection'],
        createUsingTemplate: ['POST /repos/{template_owner}/{template_repo}/generate'],
        createWebhook: ['POST /repos/{owner}/{repo}/hooks'],
        declineInvitation: [
          'DELETE /user/repository_invitations/{invitation_id}',
          {},
          { renamed: ['repos', 'declineInvitationForAuthenticatedUser'] },
        ],
        declineInvitationForAuthenticatedUser: [
          'DELETE /user/repository_invitations/{invitation_id}',
        ],
        delete: ['DELETE /repos/{owner}/{repo}'],
        deleteAccessRestrictions: [
          'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions',
        ],
        deleteAdminBranchProtection: [
          'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins',
        ],
        deleteAnEnvironment: ['DELETE /repos/{owner}/{repo}/environments/{environment_name}'],
        deleteAutolink: ['DELETE /repos/{owner}/{repo}/autolinks/{autolink_id}'],
        deleteBranchProtection: ['DELETE /repos/{owner}/{repo}/branches/{branch}/protection'],
        deleteCommitComment: ['DELETE /repos/{owner}/{repo}/comments/{comment_id}'],
        deleteCommitSignatureProtection: [
          'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures',
        ],
        deleteDeployKey: ['DELETE /repos/{owner}/{repo}/keys/{key_id}'],
        deleteDeployment: ['DELETE /repos/{owner}/{repo}/deployments/{deployment_id}'],
        deleteFile: ['DELETE /repos/{owner}/{repo}/contents/{path}'],
        deleteInvitation: ['DELETE /repos/{owner}/{repo}/invitations/{invitation_id}'],
        deletePagesSite: ['DELETE /repos/{owner}/{repo}/pages'],
        deletePullRequestReviewProtection: [
          'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews',
        ],
        deleteRelease: ['DELETE /repos/{owner}/{repo}/releases/{release_id}'],
        deleteReleaseAsset: ['DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}'],
        deleteTagProtection: ['DELETE /repos/{owner}/{repo}/tags/protection/{tag_protection_id}'],
        deleteWebhook: ['DELETE /repos/{owner}/{repo}/hooks/{hook_id}'],
        disableAutomatedSecurityFixes: ['DELETE /repos/{owner}/{repo}/automated-security-fixes'],
        disableLfsForRepo: ['DELETE /repos/{owner}/{repo}/lfs'],
        disableVulnerabilityAlerts: ['DELETE /repos/{owner}/{repo}/vulnerability-alerts'],
        downloadArchive: [
          'GET /repos/{owner}/{repo}/zipball/{ref}',
          {},
          { renamed: ['repos', 'downloadZipballArchive'] },
        ],
        downloadTarballArchive: ['GET /repos/{owner}/{repo}/tarball/{ref}'],
        downloadZipballArchive: ['GET /repos/{owner}/{repo}/zipball/{ref}'],
        enableAutomatedSecurityFixes: ['PUT /repos/{owner}/{repo}/automated-security-fixes'],
        enableLfsForRepo: ['PUT /repos/{owner}/{repo}/lfs'],
        enableVulnerabilityAlerts: ['PUT /repos/{owner}/{repo}/vulnerability-alerts'],
        generateReleaseNotes: ['POST /repos/{owner}/{repo}/releases/generate-notes'],
        get: ['GET /repos/{owner}/{repo}'],
        getAccessRestrictions: [
          'GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions',
        ],
        getAdminBranchProtection: [
          'GET /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins',
        ],
        getAllEnvironments: ['GET /repos/{owner}/{repo}/environments'],
        getAllStatusCheckContexts: [
          'GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts',
        ],
        getAllTopics: ['GET /repos/{owner}/{repo}/topics'],
        getAppsWithAccessToProtectedBranch: [
          'GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps',
        ],
        getAutolink: ['GET /repos/{owner}/{repo}/autolinks/{autolink_id}'],
        getBranch: ['GET /repos/{owner}/{repo}/branches/{branch}'],
        getBranchProtection: ['GET /repos/{owner}/{repo}/branches/{branch}/protection'],
        getClones: ['GET /repos/{owner}/{repo}/traffic/clones'],
        getCodeFrequencyStats: ['GET /repos/{owner}/{repo}/stats/code_frequency'],
        getCollaboratorPermissionLevel: [
          'GET /repos/{owner}/{repo}/collaborators/{username}/permission',
        ],
        getCombinedStatusForRef: ['GET /repos/{owner}/{repo}/commits/{ref}/status'],
        getCommit: ['GET /repos/{owner}/{repo}/commits/{ref}'],
        getCommitActivityStats: ['GET /repos/{owner}/{repo}/stats/commit_activity'],
        getCommitComment: ['GET /repos/{owner}/{repo}/comments/{comment_id}'],
        getCommitSignatureProtection: [
          'GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures',
        ],
        getCommunityProfileMetrics: ['GET /repos/{owner}/{repo}/community/profile'],
        getContent: ['GET /repos/{owner}/{repo}/contents/{path}'],
        getContributorsStats: ['GET /repos/{owner}/{repo}/stats/contributors'],
        getDeployKey: ['GET /repos/{owner}/{repo}/keys/{key_id}'],
        getDeployment: ['GET /repos/{owner}/{repo}/deployments/{deployment_id}'],
        getDeploymentStatus: [
          'GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}',
        ],
        getEnvironment: ['GET /repos/{owner}/{repo}/environments/{environment_name}'],
        getLatestPagesBuild: ['GET /repos/{owner}/{repo}/pages/builds/latest'],
        getLatestRelease: ['GET /repos/{owner}/{repo}/releases/latest'],
        getPages: ['GET /repos/{owner}/{repo}/pages'],
        getPagesBuild: ['GET /repos/{owner}/{repo}/pages/builds/{build_id}'],
        getPagesHealthCheck: ['GET /repos/{owner}/{repo}/pages/health'],
        getParticipationStats: ['GET /repos/{owner}/{repo}/stats/participation'],
        getPullRequestReviewProtection: [
          'GET /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews',
        ],
        getPunchCardStats: ['GET /repos/{owner}/{repo}/stats/punch_card'],
        getReadme: ['GET /repos/{owner}/{repo}/readme'],
        getReadmeInDirectory: ['GET /repos/{owner}/{repo}/readme/{dir}'],
        getRelease: ['GET /repos/{owner}/{repo}/releases/{release_id}'],
        getReleaseAsset: ['GET /repos/{owner}/{repo}/releases/assets/{asset_id}'],
        getReleaseByTag: ['GET /repos/{owner}/{repo}/releases/tags/{tag}'],
        getStatusChecksProtection: [
          'GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks',
        ],
        getTeamsWithAccessToProtectedBranch: [
          'GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams',
        ],
        getTopPaths: ['GET /repos/{owner}/{repo}/traffic/popular/paths'],
        getTopReferrers: ['GET /repos/{owner}/{repo}/traffic/popular/referrers'],
        getUsersWithAccessToProtectedBranch: [
          'GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users',
        ],
        getViews: ['GET /repos/{owner}/{repo}/traffic/views'],
        getWebhook: ['GET /repos/{owner}/{repo}/hooks/{hook_id}'],
        getWebhookConfigForRepo: ['GET /repos/{owner}/{repo}/hooks/{hook_id}/config'],
        getWebhookDelivery: ['GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}'],
        listAutolinks: ['GET /repos/{owner}/{repo}/autolinks'],
        listBranches: ['GET /repos/{owner}/{repo}/branches'],
        listBranchesForHeadCommit: [
          'GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head',
        ],
        listCollaborators: ['GET /repos/{owner}/{repo}/collaborators'],
        listCommentsForCommit: ['GET /repos/{owner}/{repo}/commits/{commit_sha}/comments'],
        listCommitCommentsForRepo: ['GET /repos/{owner}/{repo}/comments'],
        listCommitStatusesForRef: ['GET /repos/{owner}/{repo}/commits/{ref}/statuses'],
        listCommits: ['GET /repos/{owner}/{repo}/commits'],
        listContributors: ['GET /repos/{owner}/{repo}/contributors'],
        listDeployKeys: ['GET /repos/{owner}/{repo}/keys'],
        listDeploymentStatuses: ['GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses'],
        listDeployments: ['GET /repos/{owner}/{repo}/deployments'],
        listForAuthenticatedUser: ['GET /user/repos'],
        listForOrg: ['GET /orgs/{org}/repos'],
        listForUser: ['GET /users/{username}/repos'],
        listForks: ['GET /repos/{owner}/{repo}/forks'],
        listInvitations: ['GET /repos/{owner}/{repo}/invitations'],
        listInvitationsForAuthenticatedUser: ['GET /user/repository_invitations'],
        listLanguages: ['GET /repos/{owner}/{repo}/languages'],
        listPagesBuilds: ['GET /repos/{owner}/{repo}/pages/builds'],
        listPublic: ['GET /repositories'],
        listPullRequestsAssociatedWithCommit: [
          'GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls',
        ],
        listReleaseAssets: ['GET /repos/{owner}/{repo}/releases/{release_id}/assets'],
        listReleases: ['GET /repos/{owner}/{repo}/releases'],
        listTagProtection: ['GET /repos/{owner}/{repo}/tags/protection'],
        listTags: ['GET /repos/{owner}/{repo}/tags'],
        listTeams: ['GET /repos/{owner}/{repo}/teams'],
        listWebhookDeliveries: ['GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries'],
        listWebhooks: ['GET /repos/{owner}/{repo}/hooks'],
        merge: ['POST /repos/{owner}/{repo}/merges'],
        mergeUpstream: ['POST /repos/{owner}/{repo}/merge-upstream'],
        pingWebhook: ['POST /repos/{owner}/{repo}/hooks/{hook_id}/pings'],
        redeliverWebhookDelivery: [
          'POST /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts',
        ],
        removeAppAccessRestrictions: [
          'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps',
          {},
          { mapToData: 'apps' },
        ],
        removeCollaborator: ['DELETE /repos/{owner}/{repo}/collaborators/{username}'],
        removeStatusCheckContexts: [
          'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts',
          {},
          { mapToData: 'contexts' },
        ],
        removeStatusCheckProtection: [
          'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks',
        ],
        removeTeamAccessRestrictions: [
          'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams',
          {},
          { mapToData: 'teams' },
        ],
        removeUserAccessRestrictions: [
          'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users',
          {},
          { mapToData: 'users' },
        ],
        renameBranch: ['POST /repos/{owner}/{repo}/branches/{branch}/rename'],
        replaceAllTopics: ['PUT /repos/{owner}/{repo}/topics'],
        requestPagesBuild: ['POST /repos/{owner}/{repo}/pages/builds'],
        setAdminBranchProtection: [
          'POST /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins',
        ],
        setAppAccessRestrictions: [
          'PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps',
          {},
          { mapToData: 'apps' },
        ],
        setStatusCheckContexts: [
          'PUT /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts',
          {},
          { mapToData: 'contexts' },
        ],
        setTeamAccessRestrictions: [
          'PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams',
          {},
          { mapToData: 'teams' },
        ],
        setUserAccessRestrictions: [
          'PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users',
          {},
          { mapToData: 'users' },
        ],
        testPushWebhook: ['POST /repos/{owner}/{repo}/hooks/{hook_id}/tests'],
        transfer: ['POST /repos/{owner}/{repo}/transfer'],
        update: ['PATCH /repos/{owner}/{repo}'],
        updateBranchProtection: ['PUT /repos/{owner}/{repo}/branches/{branch}/protection'],
        updateCommitComment: ['PATCH /repos/{owner}/{repo}/comments/{comment_id}'],
        updateInformationAboutPagesSite: ['PUT /repos/{owner}/{repo}/pages'],
        updateInvitation: ['PATCH /repos/{owner}/{repo}/invitations/{invitation_id}'],
        updatePullRequestReviewProtection: [
          'PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews',
        ],
        updateRelease: ['PATCH /repos/{owner}/{repo}/releases/{release_id}'],
        updateReleaseAsset: ['PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}'],
        updateStatusCheckPotection: [
          'PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks',
          {},
          { renamed: ['repos', 'updateStatusCheckProtection'] },
        ],
        updateStatusCheckProtection: [
          'PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks',
        ],
        updateWebhook: ['PATCH /repos/{owner}/{repo}/hooks/{hook_id}'],
        updateWebhookConfigForRepo: ['PATCH /repos/{owner}/{repo}/hooks/{hook_id}/config'],
        uploadReleaseAsset: [
          'POST /repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}',
          { baseUrl: 'https://uploads.github.com' },
        ],
      },
      search: {
        code: ['GET /search/code'],
        commits: ['GET /search/commits'],
        issuesAndPullRequests: ['GET /search/issues'],
        labels: ['GET /search/labels'],
        repos: ['GET /search/repositories'],
        topics: ['GET /search/topics'],
        users: ['GET /search/users'],
      },
      secretScanning: {
        getAlert: ['GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}'],
        listAlertsForEnterprise: ['GET /enterprises/{enterprise}/secret-scanning/alerts'],
        listAlertsForOrg: ['GET /orgs/{org}/secret-scanning/alerts'],
        listAlertsForRepo: ['GET /repos/{owner}/{repo}/secret-scanning/alerts'],
        listLocationsForAlert: [
          'GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}/locations',
        ],
        updateAlert: ['PATCH /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}'],
      },
      teams: {
        addOrUpdateMembershipForUserInOrg: [
          'PUT /orgs/{org}/teams/{team_slug}/memberships/{username}',
        ],
        addOrUpdateProjectPermissionsInOrg: [
          'PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}',
        ],
        addOrUpdateRepoPermissionsInOrg: ['PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}'],
        checkPermissionsForProjectInOrg: [
          'GET /orgs/{org}/teams/{team_slug}/projects/{project_id}',
        ],
        checkPermissionsForRepoInOrg: ['GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}'],
        create: ['POST /orgs/{org}/teams'],
        createDiscussionCommentInOrg: [
          'POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments',
        ],
        createDiscussionInOrg: ['POST /orgs/{org}/teams/{team_slug}/discussions'],
        deleteDiscussionCommentInOrg: [
          'DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}',
        ],
        deleteDiscussionInOrg: [
          'DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}',
        ],
        deleteInOrg: ['DELETE /orgs/{org}/teams/{team_slug}'],
        getByName: ['GET /orgs/{org}/teams/{team_slug}'],
        getDiscussionCommentInOrg: [
          'GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}',
        ],
        getDiscussionInOrg: ['GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}'],
        getMembershipForUserInOrg: ['GET /orgs/{org}/teams/{team_slug}/memberships/{username}'],
        list: ['GET /orgs/{org}/teams'],
        listChildInOrg: ['GET /orgs/{org}/teams/{team_slug}/teams'],
        listDiscussionCommentsInOrg: [
          'GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments',
        ],
        listDiscussionsInOrg: ['GET /orgs/{org}/teams/{team_slug}/discussions'],
        listForAuthenticatedUser: ['GET /user/teams'],
        listMembersInOrg: ['GET /orgs/{org}/teams/{team_slug}/members'],
        listPendingInvitationsInOrg: ['GET /orgs/{org}/teams/{team_slug}/invitations'],
        listProjectsInOrg: ['GET /orgs/{org}/teams/{team_slug}/projects'],
        listReposInOrg: ['GET /orgs/{org}/teams/{team_slug}/repos'],
        removeMembershipForUserInOrg: [
          'DELETE /orgs/{org}/teams/{team_slug}/memberships/{username}',
        ],
        removeProjectInOrg: ['DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}'],
        removeRepoInOrg: ['DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}'],
        updateDiscussionCommentInOrg: [
          'PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}',
        ],
        updateDiscussionInOrg: [
          'PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}',
        ],
        updateInOrg: ['PATCH /orgs/{org}/teams/{team_slug}'],
      },
      users: {
        addEmailForAuthenticated: [
          'POST /user/emails',
          {},
          { renamed: ['users', 'addEmailForAuthenticatedUser'] },
        ],
        addEmailForAuthenticatedUser: ['POST /user/emails'],
        block: ['PUT /user/blocks/{username}'],
        checkBlocked: ['GET /user/blocks/{username}'],
        checkFollowingForUser: ['GET /users/{username}/following/{target_user}'],
        checkPersonIsFollowedByAuthenticated: ['GET /user/following/{username}'],
        createGpgKeyForAuthenticated: [
          'POST /user/gpg_keys',
          {},
          { renamed: ['users', 'createGpgKeyForAuthenticatedUser'] },
        ],
        createGpgKeyForAuthenticatedUser: ['POST /user/gpg_keys'],
        createPublicSshKeyForAuthenticated: [
          'POST /user/keys',
          {},
          { renamed: ['users', 'createPublicSshKeyForAuthenticatedUser'] },
        ],
        createPublicSshKeyForAuthenticatedUser: ['POST /user/keys'],
        deleteEmailForAuthenticated: [
          'DELETE /user/emails',
          {},
          { renamed: ['users', 'deleteEmailForAuthenticatedUser'] },
        ],
        deleteEmailForAuthenticatedUser: ['DELETE /user/emails'],
        deleteGpgKeyForAuthenticated: [
          'DELETE /user/gpg_keys/{gpg_key_id}',
          {},
          { renamed: ['users', 'deleteGpgKeyForAuthenticatedUser'] },
        ],
        deleteGpgKeyForAuthenticatedUser: ['DELETE /user/gpg_keys/{gpg_key_id}'],
        deletePublicSshKeyForAuthenticated: [
          'DELETE /user/keys/{key_id}',
          {},
          { renamed: ['users', 'deletePublicSshKeyForAuthenticatedUser'] },
        ],
        deletePublicSshKeyForAuthenticatedUser: ['DELETE /user/keys/{key_id}'],
        follow: ['PUT /user/following/{username}'],
        getAuthenticated: ['GET /user'],
        getByUsername: ['GET /users/{username}'],
        getContextForUser: ['GET /users/{username}/hovercard'],
        getGpgKeyForAuthenticated: [
          'GET /user/gpg_keys/{gpg_key_id}',
          {},
          { renamed: ['users', 'getGpgKeyForAuthenticatedUser'] },
        ],
        getGpgKeyForAuthenticatedUser: ['GET /user/gpg_keys/{gpg_key_id}'],
        getPublicSshKeyForAuthenticated: [
          'GET /user/keys/{key_id}',
          {},
          { renamed: ['users', 'getPublicSshKeyForAuthenticatedUser'] },
        ],
        getPublicSshKeyForAuthenticatedUser: ['GET /user/keys/{key_id}'],
        list: ['GET /users'],
        listBlockedByAuthenticated: [
          'GET /user/blocks',
          {},
          { renamed: ['users', 'listBlockedByAuthenticatedUser'] },
        ],
        listBlockedByAuthenticatedUser: ['GET /user/blocks'],
        listEmailsForAuthenticated: [
          'GET /user/emails',
          {},
          { renamed: ['users', 'listEmailsForAuthenticatedUser'] },
        ],
        listEmailsForAuthenticatedUser: ['GET /user/emails'],
        listFollowedByAuthenticated: [
          'GET /user/following',
          {},
          { renamed: ['users', 'listFollowedByAuthenticatedUser'] },
        ],
        listFollowedByAuthenticatedUser: ['GET /user/following'],
        listFollowersForAuthenticatedUser: ['GET /user/followers'],
        listFollowersForUser: ['GET /users/{username}/followers'],
        listFollowingForUser: ['GET /users/{username}/following'],
        listGpgKeysForAuthenticated: [
          'GET /user/gpg_keys',
          {},
          { renamed: ['users', 'listGpgKeysForAuthenticatedUser'] },
        ],
        listGpgKeysForAuthenticatedUser: ['GET /user/gpg_keys'],
        listGpgKeysForUser: ['GET /users/{username}/gpg_keys'],
        listPublicEmailsForAuthenticated: [
          'GET /user/public_emails',
          {},
          { renamed: ['users', 'listPublicEmailsForAuthenticatedUser'] },
        ],
        listPublicEmailsForAuthenticatedUser: ['GET /user/public_emails'],
        listPublicKeysForUser: ['GET /users/{username}/keys'],
        listPublicSshKeysForAuthenticated: [
          'GET /user/keys',
          {},
          { renamed: ['users', 'listPublicSshKeysForAuthenticatedUser'] },
        ],
        listPublicSshKeysForAuthenticatedUser: ['GET /user/keys'],
        setPrimaryEmailVisibilityForAuthenticated: [
          'PATCH /user/email/visibility',
          {},
          { renamed: ['users', 'setPrimaryEmailVisibilityForAuthenticatedUser'] },
        ],
        setPrimaryEmailVisibilityForAuthenticatedUser: ['PATCH /user/email/visibility'],
        unblock: ['DELETE /user/blocks/{username}'],
        unfollow: ['DELETE /user/following/{username}'],
        updateAuthenticated: ['PATCH /user'],
      },
    };
    const a = '5.16.2';
    function endpointsToMethods(e, t) {
      const r = {};
      for (const [a, n] of Object.entries(t)) {
        for (const [t, i] of Object.entries(n)) {
          const [n, o, s] = i;
          const [p, d] = n.split(/ /);
          const l = Object.assign({ method: p, url: d }, o);
          if (!r[a]) {
            r[a] = {};
          }
          const m = r[a];
          if (s) {
            m[t] = decorate(e, a, t, l, s);
            continue;
          }
          m[t] = e.request.defaults(l);
        }
      }
      return r;
    }
    function decorate(e, t, r, a, n) {
      const i = e.request.defaults(a);
      function withDecorations(...a) {
        let o = i.endpoint.merge(...a);
        if (n.mapToData) {
          o = Object.assign({}, o, { data: o[n.mapToData], [n.mapToData]: undefined });
          return i(o);
        }
        if (n.renamed) {
          const [a, i] = n.renamed;
          e.log.warn(`octokit.${t}.${r}() has been renamed to octokit.${a}.${i}()`);
        }
        if (n.deprecated) {
          e.log.warn(n.deprecated);
        }
        if (n.renamedParameters) {
          const o = i.endpoint.merge(...a);
          for (const [a, i] of Object.entries(n.renamedParameters)) {
            if (a in o) {
              e.log.warn(
                `"${a}" parameter is deprecated for "octokit.${t}.${r}()". Use "${i}" instead`,
              );
              if (!(i in o)) {
                o[i] = o[a];
              }
              delete o[a];
            }
          }
          return i(o);
        }
        return i(...a);
      }
      return Object.assign(withDecorations, i);
    }
    function restEndpointMethods(e) {
      const t = endpointsToMethods(e, r);
      return { rest: t };
    }
    restEndpointMethods.VERSION = a;
    function legacyRestEndpointMethods(e) {
      const t = endpointsToMethods(e, r);
      return _objectSpread2(_objectSpread2({}, t), {}, { rest: t });
    }
    legacyRestEndpointMethods.VERSION = a;
    t.legacyRestEndpointMethods = legacyRestEndpointMethods;
    t.restEndpointMethods = restEndpointMethods;
  },
  537: (e, t, r) => {
    Object.defineProperty(t, '__esModule', { value: true });
    function _interopDefault(e) {
      return e && typeof e === 'object' && 'default' in e ? e['default'] : e;
    }
    var a = r(8932);
    var n = _interopDefault(r(1223));
    const i = n((e) => console.warn(e));
    const o = n((e) => console.warn(e));
    class RequestError extends Error {
      constructor(e, t, r) {
        super(e);
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, this.constructor);
        }
        this.name = 'HttpError';
        this.status = t;
        let n;
        if ('headers' in r && typeof r.headers !== 'undefined') {
          n = r.headers;
        }
        if ('response' in r) {
          this.response = r.response;
          n = r.response.headers;
        }
        const s = Object.assign({}, r.request);
        if (r.request.headers.authorization) {
          s.headers = Object.assign({}, r.request.headers, {
            authorization: r.request.headers.authorization.replace(/ .*$/, ' [REDACTED]'),
          });
        }
        s.url = s.url
          .replace(/\bclient_secret=\w+/g, 'client_secret=[REDACTED]')
          .replace(/\baccess_token=\w+/g, 'access_token=[REDACTED]');
        this.request = s;
        Object.defineProperty(this, 'code', {
          get() {
            i(
              new a.Deprecation(
                '[@octokit/request-error] `error.code` is deprecated, use `error.status`.',
              ),
            );
            return t;
          },
        });
        Object.defineProperty(this, 'headers', {
          get() {
            o(
              new a.Deprecation(
                '[@octokit/request-error] `error.headers` is deprecated, use `error.response.headers`.',
              ),
            );
            return n || {};
          },
        });
      }
    }
    t.RequestError = RequestError;
  },
  6234: (e, t, r) => {
    Object.defineProperty(t, '__esModule', { value: true });
    function _interopDefault(e) {
      return e && typeof e === 'object' && 'default' in e ? e['default'] : e;
    }
    var a = r(9440);
    var n = r(5030);
    var i = r(3287);
    var o = _interopDefault(r(467));
    var s = r(537);
    const p = '5.6.3';
    function getBufferResponse(e) {
      return e.arrayBuffer();
    }
    function fetchWrapper(e) {
      const t = e.request && e.request.log ? e.request.log : console;
      if (i.isPlainObject(e.body) || Array.isArray(e.body)) {
        e.body = JSON.stringify(e.body);
      }
      let r = {};
      let a;
      let n;
      const p = (e.request && e.request.fetch) || o;
      return p(
        e.url,
        Object.assign(
          { method: e.method, body: e.body, headers: e.headers, redirect: e.redirect },
          e.request,
        ),
      )
        .then(async (i) => {
          n = i.url;
          a = i.status;
          for (const e of i.headers) {
            r[e[0]] = e[1];
          }
          if ('deprecation' in r) {
            const a = r.link && r.link.match(/<([^>]+)>; rel="deprecation"/);
            const n = a && a.pop();
            t.warn(
              `[@octokit/request] "${e.method} ${
                e.url
              }" is deprecated. It is scheduled to be removed on ${r.sunset}${
                n ? `. See ${n}` : ''
              }`,
            );
          }
          if (a === 204 || a === 205) {
            return;
          }
          if (e.method === 'HEAD') {
            if (a < 400) {
              return;
            }
            throw new s.RequestError(i.statusText, a, {
              response: { url: n, status: a, headers: r, data: undefined },
              request: e,
            });
          }
          if (a === 304) {
            throw new s.RequestError('Not modified', a, {
              response: { url: n, status: a, headers: r, data: await getResponseData(i) },
              request: e,
            });
          }
          if (a >= 400) {
            const t = await getResponseData(i);
            const o = new s.RequestError(toErrorMessage(t), a, {
              response: { url: n, status: a, headers: r, data: t },
              request: e,
            });
            throw o;
          }
          return getResponseData(i);
        })
        .then((e) => ({ status: a, url: n, headers: r, data: e }))
        .catch((t) => {
          if (t instanceof s.RequestError) throw t;
          throw new s.RequestError(t.message, 500, { request: e });
        });
    }
    async function getResponseData(e) {
      const t = e.headers.get('content-type');
      if (/application\/json/.test(t)) {
        return e.json();
      }
      if (!t || /^text\/|charset=utf-8$/.test(t)) {
        return e.text();
      }
      return getBufferResponse(e);
    }
    function toErrorMessage(e) {
      if (typeof e === 'string') return e;
      if ('message' in e) {
        if (Array.isArray(e.errors)) {
          return `${e.message}: ${e.errors.map(JSON.stringify).join(', ')}`;
        }
        return e.message;
      }
      return `Unknown error: ${JSON.stringify(e)}`;
    }
    function withDefaults(e, t) {
      const r = e.defaults(t);
      const newApi = function (e, t) {
        const a = r.merge(e, t);
        if (!a.request || !a.request.hook) {
          return fetchWrapper(r.parse(a));
        }
        const request = (e, t) => fetchWrapper(r.parse(r.merge(e, t)));
        Object.assign(request, { endpoint: r, defaults: withDefaults.bind(null, r) });
        return a.request.hook(request, a);
      };
      return Object.assign(newApi, { endpoint: r, defaults: withDefaults.bind(null, r) });
    }
    const d = withDefaults(a.endpoint, {
      headers: { 'user-agent': `octokit-request.js/${p} ${n.getUserAgent()}` },
    });
    t.request = d;
  },
  7240: (e) => {
    e.exports = bail;
    function bail(e) {
      if (e) {
        throw e;
      }
    }
  },
  3682: (e, t, r) => {
    var a = r(4670);
    var n = r(5549);
    var i = r(6819);
    var o = Function.bind;
    var s = o.bind(o);
    function bindApi(e, t, r) {
      var a = s(i, null).apply(null, r ? [t, r] : [t]);
      e.api = { remove: a };
      e.remove = a;
      ['before', 'error', 'after', 'wrap'].forEach(function (a) {
        var i = r ? [t, a, r] : [t, a];
        e[a] = e.api[a] = s(n, null).apply(null, i);
      });
    }
    function HookSingular() {
      var e = 'h';
      var t = { registry: {} };
      var r = a.bind(null, t, e);
      bindApi(r, t, e);
      return r;
    }
    function HookCollection() {
      var e = { registry: {} };
      var t = a.bind(null, e);
      bindApi(t, e);
      return t;
    }
    var p = false;
    function Hook() {
      if (!p) {
        console.warn(
          '[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4',
        );
        p = true;
      }
      return HookCollection();
    }
    Hook.Singular = HookSingular.bind();
    Hook.Collection = HookCollection.bind();
    e.exports = Hook;
    e.exports.Hook = Hook;
    e.exports.Singular = Hook.Singular;
    e.exports.Collection = Hook.Collection;
  },
  5549: (e) => {
    e.exports = addHook;
    function addHook(e, t, r, a) {
      var n = a;
      if (!e.registry[r]) {
        e.registry[r] = [];
      }
      if (t === 'before') {
        a = function (e, t) {
          return Promise.resolve().then(n.bind(null, t)).then(e.bind(null, t));
        };
      }
      if (t === 'after') {
        a = function (e, t) {
          var r;
          return Promise.resolve()
            .then(e.bind(null, t))
            .then(function (e) {
              r = e;
              return n(r, t);
            })
            .then(function () {
              return r;
            });
        };
      }
      if (t === 'error') {
        a = function (e, t) {
          return Promise.resolve()
            .then(e.bind(null, t))
            .catch(function (e) {
              return n(e, t);
            });
        };
      }
      e.registry[r].push({ hook: a, orig: n });
    }
  },
  4670: (e) => {
    e.exports = register;
    function register(e, t, r, a) {
      if (typeof r !== 'function') {
        throw new Error('method for before hook must be a function');
      }
      if (!a) {
        a = {};
      }
      if (Array.isArray(t)) {
        return t.reverse().reduce(function (t, r) {
          return register.bind(null, e, r, t, a);
        }, r)();
      }
      return Promise.resolve().then(function () {
        if (!e.registry[t]) {
          return r(a);
        }
        return e.registry[t].reduce(function (e, t) {
          return t.hook.bind(null, e, a);
        }, r)();
      });
    }
  },
  6819: (e) => {
    e.exports = removeHook;
    function removeHook(e, t, r) {
      if (!e.registry[t]) {
        return;
      }
      var a = e.registry[t]
        .map(function (e) {
          return e.orig;
        })
        .indexOf(r);
      if (a === -1) {
        return;
      }
      e.registry[t].splice(a, 1);
    }
  },
  1291: (e) => {
    e.exports = ccount;
    function ccount(e, t) {
      var r = String(e);
      var a = 0;
      var n;
      if (typeof t !== 'string') {
        throw new Error('Expected character');
      }
      n = r.indexOf(t);
      while (n !== -1) {
        a++;
        n = r.indexOf(t, n + t.length);
      }
      return a;
    }
  },
  8201: (e) => {
    e.exports = collapse;
    function collapse(e) {
      return String(e).replace(/\s+/g, ' ');
    }
  },
  2194: (e, t) => {
    t.parse = parse;
    t.stringify = stringify;
    var r = ',';
    var a = ' ';
    var n = '';
    function parse(e) {
      var t = [];
      var a = String(e || n);
      var i = a.indexOf(r);
      var o = 0;
      var s = false;
      var p;
      while (!s) {
        if (i === -1) {
          i = a.length;
          s = true;
        }
        p = a.slice(o, i).trim();
        if (p || !s) {
          t.push(p);
        }
        o = i + 1;
        i = a.indexOf(r, o);
      }
      return t;
    }
    function stringify(e, t) {
      var i = t || {};
      var o = i.padLeft === false ? n : a;
      var s = i.padRight ? a : n;
      if (e[e.length - 1] === n) {
        e = e.concat(n);
      }
      return e.join(s + r + o).trim();
    }
  },
  8932: (e, t) => {
    Object.defineProperty(t, '__esModule', { value: true });
    class Deprecation extends Error {
      constructor(e) {
        super(e);
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, this.constructor);
        }
        this.name = 'Deprecation';
      }
    }
    t.Deprecation = Deprecation;
  },
  9050: (e, t, r) => {
    e.exports = detab;
    var a = r(6976);
    var n = /[\t\n\r]/g;
    function detab(e, t) {
      var r = t || 4;
      var i = [];
      var o = 0;
      var s = 0;
      var p = -1;
      var d;
      var l;
      var m;
      if (typeof e !== 'string') {
        throw new Error('detab expected string');
      }
      while (s < e.length) {
        n.lastIndex = s;
        l = n.exec(e);
        m = l ? l.index : e.length;
        if (e.charCodeAt(m) === 9) {
          d = r - ((p + m - s + 1) % r);
          i.push(e.slice(o, m), a(' ', d));
          p += m - s + d;
          o = m + 1;
        } else {
          p = -1;
        }
        s = m + 1;
      }
      i.push(e.slice(o));
      return i.join('');
    }
  },
  8212: (e) => {
    e.exports = function () {
      return /[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2694\u2696\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD79\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED0\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3]|\uD83E[\uDD10-\uDD18\uDD80-\uDD84\uDDC0]|\uD83C\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uD83C\uDDFE\uD83C[\uDDEA\uDDF9]|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDFC\uD83C[\uDDEB\uDDF8]|\uD83C\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uD83C\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF8\uDDFE\uDDFF]|\uD83C\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uD83C\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uD83C\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uD83C\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uD83C\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uD83C\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uD83C\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uD83C\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uD83C\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uD83C\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uD83C\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uD83C\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uD83C\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uD83C\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uD83C\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uD83C\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|[#\*0-9]\u20E3/g;
    };
  },
  7512: (e, t, r) => {
    var a = r(429);
    e.exports = function extend(e) {
      if (!a(e)) {
        e = {};
      }
      var t = arguments.length;
      for (var r = 1; r < t; r++) {
        var n = arguments[r];
        if (a(n)) {
          assign(e, n);
        }
      }
      return e;
    };
    function assign(e, t) {
      for (var r in t) {
        if (hasOwn(t, r)) {
          e[r] = t[r];
        }
      }
    }
    function hasOwn(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
  },
  8171: (e) => {
    var t = Object.prototype.hasOwnProperty;
    var r = Object.prototype.toString;
    var a = Object.defineProperty;
    var n = Object.getOwnPropertyDescriptor;
    var i = function isArray(e) {
      if (typeof Array.isArray === 'function') {
        return Array.isArray(e);
      }
      return r.call(e) === '[object Array]';
    };
    var o = function isPlainObject(e) {
      if (!e || r.call(e) !== '[object Object]') {
        return false;
      }
      var a = t.call(e, 'constructor');
      var n =
        e.constructor &&
        e.constructor.prototype &&
        t.call(e.constructor.prototype, 'isPrototypeOf');
      if (e.constructor && !a && !n) {
        return false;
      }
      var i;
      for (i in e) {
      }
      return typeof i === 'undefined' || t.call(e, i);
    };
    var s = function setProperty(e, t) {
      if (a && t.name === '__proto__') {
        a(e, t.name, { enumerable: true, configurable: true, value: t.newValue, writable: true });
      } else {
        e[t.name] = t.newValue;
      }
    };
    var p = function getProperty(e, r) {
      if (r === '__proto__') {
        if (!t.call(e, r)) {
          return void 0;
        } else if (n) {
          return n(e, r).value;
        }
      }
      return e[r];
    };
    e.exports = function extend() {
      var e, t, r, a, n, d;
      var l = arguments[0];
      var m = 1;
      var c = arguments.length;
      var g = false;
      if (typeof l === 'boolean') {
        g = l;
        l = arguments[1] || {};
        m = 2;
      }
      if (l == null || (typeof l !== 'object' && typeof l !== 'function')) {
        l = {};
      }
      for (; m < c; ++m) {
        e = arguments[m];
        if (e != null) {
          for (t in e) {
            r = p(l, t);
            a = p(e, t);
            if (l !== a) {
              if (g && a && (o(a) || (n = i(a)))) {
                if (n) {
                  n = false;
                  d = r && i(r) ? r : [];
                } else {
                  d = r && o(r) ? r : {};
                }
                s(l, { name: t, newValue: extend(g, d, a) });
              } else if (typeof a !== 'undefined') {
                s(l, { name: t, newValue: a });
              }
            }
          }
        }
      }
      return l;
    };
  },
  237: (e, t, r) => {
    var a = r(8212);
    e.exports = BananaSlug;
    function BananaSlug() {
      var e = this;
      if (!(e instanceof BananaSlug)) return new BananaSlug();
      e.reset();
    }
    BananaSlug.prototype.slug = function (e, t) {
      t = t === true;
      var r = this;
      var a = slugger(e, t);
      var n = r.occurrences[a];
      if (r.occurrences.hasOwnProperty(a)) {
        n++;
      } else {
        n = 0;
      }
      r.occurrences[a] = n;
      if (n) {
        a = a + '-' + n;
      }
      return a;
    };
    BananaSlug.prototype.reset = function () {
      this.occurrences = {};
    };
    var n = /\s/g;
    function lower(e) {
      return e.toLowerCase();
    }
    function slugger(e, t) {
      var r = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g;
      var i = '-';
      if (typeof e !== 'string') return '';
      if (!t) e = e.replace(/[A-Z]+/g, lower);
      return e.trim().replace(r, '').replace(a(), '').replace(n, i);
    }
  },
  5382: (e, t, r) => {
    const a = r(7147);
    const n = r(1762);
    const i = r(5256);
    const o = r(905);
    const s = r(3919);
    const p = r(3190);
    const d = r(9652);
    const l = r(9368);
    const m = r(7405);
    function matter(e, t) {
      if (e === '') {
        return { data: {}, content: e, excerpt: '', orig: e };
      }
      let r = d(e);
      const a = matter.cache[r.content];
      if (!t) {
        if (a) {
          r = Object.assign({}, a);
          r.orig = a.orig;
          return r;
        }
        matter.cache[r.content] = r;
      }
      return parseMatter(r, t);
    }
    function parseMatter(e, t) {
      const r = i(t);
      const a = r.delimiters[0];
      const o = '\n' + r.delimiters[1];
      let p = e.content;
      if (r.language) {
        e.language = r.language;
      }
      const d = a.length;
      if (!m.startsWith(p, a, d)) {
        s(e, r);
        return e;
      }
      if (p.charAt(d) === a.slice(-1)) {
        return e;
      }
      p = p.slice(d);
      const c = p.length;
      const g = matter.language(p, r);
      if (g.name) {
        e.language = g.name;
        p = p.slice(g.raw.length);
      }
      let v = p.indexOf(o);
      if (v === -1) {
        v = c;
      }
      e.matter = p.slice(0, v);
      const T = e.matter.replace(/^\s*#[^\n]+/gm, '').trim();
      if (T === '') {
        e.isEmpty = true;
        e.empty = e.content;
        e.data = {};
      } else {
        e.data = l(e.language, e.matter, r);
      }
      if (v === c) {
        e.content = '';
      } else {
        e.content = p.slice(v + o.length);
        if (e.content[0] === '\r') {
          e.content = e.content.slice(1);
        }
        if (e.content[0] === '\n') {
          e.content = e.content.slice(1);
        }
      }
      s(e, r);
      if (r.sections === true || typeof r.section === 'function') {
        n(e, r.section);
      }
      return e;
    }
    matter.engines = p;
    matter.stringify = function (e, t, r) {
      if (typeof e === 'string') e = matter(e, r);
      return o(e, t, r);
    };
    matter.read = function (e, t) {
      const r = a.readFileSync(e, 'utf8');
      const n = matter(r, t);
      n.path = e;
      return n;
    };
    matter.test = function (e, t) {
      return m.startsWith(e, i(t).delimiters[0]);
    };
    matter.language = function (e, t) {
      const r = i(t);
      const a = r.delimiters[0];
      if (matter.test(e)) {
        e = e.slice(a.length);
      }
      const n = e.slice(0, e.search(/\r?\n/));
      return { raw: n, name: n ? n.trim() : '' };
    };
    matter.cache = {};
    matter.clearCache = () => (matter.cache = {});
    e.exports = matter;
  },
  5256: (e, t, r) => {
    const a = r(3190);
    const n = r(7405);
    e.exports = function (e) {
      const t = Object.assign({}, e);
      t.delimiters = n.arrayify(t.delims || t.delimiters || '---');
      if (t.delimiters.length === 1) {
        t.delimiters.push(t.delimiters[0]);
      }
      t.language = (t.language || t.lang || 'yaml').toLowerCase();
      t.engines = Object.assign({}, a, t.parsers, t.engines);
      return t;
    };
  },
  7669: (e) => {
    e.exports = function (e, t) {
      let r = t.engines[e] || t.engines[aliase(e)];
      if (typeof r === 'undefined') {
        throw new Error('gray-matter engine "' + e + '" is not registered');
      }
      if (typeof r === 'function') {
        r = { parse: r };
      }
      return r;
    };
    function aliase(e) {
      switch (e.toLowerCase()) {
        case 'js':
        case 'javascript':
          return 'javascript';
        case 'coffee':
        case 'coffeescript':
        case 'cson':
          return 'coffee';
        case 'yaml':
        case 'yml':
          return 'yaml';
        default: {
          return e;
        }
      }
    }
  },
  3190: (module, exports, __nccwpck_require__) => {
    const yaml = __nccwpck_require__(1917);
    const engines = (exports = module.exports);
    engines.yaml = { parse: yaml.safeLoad.bind(yaml), stringify: yaml.safeDump.bind(yaml) };
    engines.json = {
      parse: JSON.parse.bind(JSON),
      stringify: function (e, t) {
        const r = Object.assign({ replacer: null, space: 2 }, t);
        return JSON.stringify(e, r.replacer, r.space);
      },
    };
    engines.javascript = {
      parse: function parse(str, options, wrap) {
        try {
          if (wrap !== false) {
            str = '(function() {\nreturn ' + str.trim() + ';\n}());';
          }
          return eval(str) || {};
        } catch (e) {
          if (wrap !== false && /(unexpected|identifier)/i.test(e.message)) {
            return parse(str, options, false);
          }
          throw new SyntaxError(e);
        }
      },
      stringify: function () {
        throw new Error('stringifying JavaScript is not supported');
      },
    };
  },
  3919: (e, t, r) => {
    const a = r(5256);
    e.exports = function (e, t) {
      const r = a(t);
      if (e.data == null) {
        e.data = {};
      }
      if (typeof r.excerpt === 'function') {
        return r.excerpt(e, r);
      }
      const n = e.data.excerpt_separator || r.excerpt_separator;
      if (n == null && (r.excerpt === false || r.excerpt == null)) {
        return e;
      }
      const i = typeof r.excerpt === 'string' ? r.excerpt : n || r.delimiters[0];
      const o = e.content.indexOf(i);
      if (o !== -1) {
        e.excerpt = e.content.slice(0, o);
      }
      return e;
    };
  },
  9368: (e, t, r) => {
    const a = r(7669);
    const n = r(5256);
    e.exports = function (e, t, r) {
      const i = n(r);
      const o = a(e, i);
      if (typeof o.parse !== 'function') {
        throw new TypeError('expected "' + e + '.parse" to be a function');
      }
      return o.parse(t, i);
    };
  },
  905: (e, t, r) => {
    const a = r(6961);
    const n = r(7669);
    const i = r(5256);
    e.exports = function (e, t, r) {
      if (t == null && r == null) {
        switch (a(e)) {
          case 'object':
            t = e.data;
            r = {};
            break;
          case 'string':
            return e;
          default: {
            throw new TypeError('expected file to be a string or object');
          }
        }
      }
      const o = e.content;
      const s = i(r);
      if (t == null) {
        if (!s.data) return e;
        t = s.data;
      }
      const p = e.language || s.language;
      const d = n(p, s);
      if (typeof d.stringify !== 'function') {
        throw new TypeError('expected "' + p + '.stringify" to be a function');
      }
      t = Object.assign({}, e.data, t);
      const l = s.delimiters[0];
      const m = s.delimiters[1];
      const c = d.stringify(t, r).trim();
      let g = '';
      if (c !== '{}') {
        g = newline(l) + newline(c) + newline(m);
      }
      if (typeof e.excerpt === 'string' && e.excerpt !== '') {
        if (o.indexOf(e.excerpt.trim()) === -1) {
          g += newline(e.excerpt) + newline(m);
        }
      }
      return g + newline(o);
    };
    function newline(e) {
      return e.slice(-1) !== '\n' ? e + '\n' : e;
    }
  },
  9652: (e, t, r) => {
    const a = r(6961);
    const n = r(905);
    const i = r(7405);
    e.exports = function (e) {
      if (a(e) !== 'object') {
        e = { content: e };
      }
      if (a(e.data) !== 'object') {
        e.data = {};
      }
      if (e.contents && e.content == null) {
        e.content = e.contents;
      }
      i.define(e, 'orig', i.toBuffer(e.content));
      i.define(e, 'language', e.language || '');
      i.define(e, 'matter', e.matter || '');
      i.define(e, 'stringify', function (t, r) {
        if (r && r.language) {
          e.language = r.language;
        }
        return n(e, t, r);
      });
      e.content = i.toString(e.content);
      e.isEmpty = false;
      e.excerpt = '';
      return e;
    };
  },
  7405: (e, t, r) => {
    const a = r(6550);
    const n = r(6961);
    t.define = function (e, t, r) {
      Reflect.defineProperty(e, t, {
        enumerable: false,
        configurable: true,
        writable: true,
        value: r,
      });
    };
    t.isBuffer = (e) => n(e) === 'buffer';
    t.isObject = (e) => n(e) === 'object';
    t.toBuffer = function (e) {
      return typeof e === 'string' ? Buffer.from(e) : e;
    };
    t.toString = function (e) {
      if (t.isBuffer(e)) return a(String(e));
      if (typeof e !== 'string') {
        throw new TypeError('expected input to be a string or buffer');
      }
      return a(e);
    };
    t.arrayify = function (e) {
      return e ? (Array.isArray(e) ? e : [e]) : [];
    };
    t.startsWith = function (e, t, r) {
      if (typeof r !== 'number') r = t.length;
      return e.slice(0, r) === t;
    };
  },
  4547: (e, t, r) => {
    var a = r(9515);
    var n = r(4589);
    var i = r(3657);
    var o = r(9640);
    var s = r(4158);
    var p = r(2194);
    var d = r(6204);
    var l = r(6);
    var m = r(4070);
    var c = m('root');
    var g = m('element');
    var v = m('text');
    var T = /-([a-z])/g;
    e.exports = wrapper;
    function wrapper(e, t, r) {
      var i = r || {};
      var o;
      var s;
      var p;
      var d;
      if (typeof e !== 'function') {
        throw new Error('h is not a function');
      }
      if (typeof i === 'string' || typeof i === 'boolean') {
        o = i;
        i = {};
      } else {
        o = i.prefix;
      }
      s = react(e);
      p = vue(e);
      d = vdom(e);
      if (o === null || o === undefined) {
        o = s === true || p === true || d === true ? 'h-' : false;
      }
      if (c(t)) {
        if (t.children.length === 1 && g(t.children[0])) {
          t = t.children[0];
        } else {
          t = { type: 'element', tagName: 'div', properties: {}, children: t.children };
        }
      } else if (!g(t)) {
        throw new Error('Expected root or element, not `' + ((t && t.type) || t) + '`');
      }
      return toH(e, t, {
        schema: i.space === 'svg' ? n : a,
        prefix: o,
        key: 0,
        react: s,
        vue: p,
        vdom: d,
        hyperscript: hyperscript(e),
      });
    }
    function toH(e, t, r) {
      var a = r.schema;
      var i = a;
      var o = t.tagName;
      var s;
      var p;
      var d;
      var m;
      var c;
      var T;
      var E;
      var _;
      var w;
      if (a.space === 'html' && o.toLowerCase() === 'svg') {
        i = n;
        r.schema = i;
      }
      if (r.vdom === true && i.space === 'html') {
        o = o.toUpperCase();
      }
      s = t.properties;
      p = {};
      for (m in s) {
        addAttribute(p, m, s[m], r);
      }
      if (typeof p.style === 'string' && (r.vdom === true || r.vue === true || r.react === true)) {
        p.style = parseStyle(p.style, o);
      }
      if (r.prefix) {
        r.key++;
        p.key = r.prefix + r.key;
      }
      if (r.vdom && i.space !== 'html') {
        p.namespace = l[i.space];
      }
      c = [];
      d = t.children;
      T = d ? d.length : 0;
      E = -1;
      while (++E < T) {
        _ = d[E];
        if (g(_)) {
          c.push(toH(e, _, r));
        } else if (v(_)) {
          c.push(_.value);
        }
      }
      w = c.length === 0 ? e(o, p) : e(o, p, c);
      r.schema = a;
      return w;
    }
    function addAttribute(e, t, r, a) {
      var n = a.hyperscript || a.vdom || a.vue;
      var d = a.schema;
      var l = i(d, t);
      var m;
      if (
        r === null ||
        r === undefined ||
        r !== r ||
        (n && r === false) ||
        (n && l.boolean && !r)
      ) {
        return;
      }
      if (r !== null && typeof r === 'object' && 'length' in r) {
        r = (l.commaSeparated ? p : s).stringify(r);
      }
      if (l.boolean && a.hyperscript === true) {
        r = '';
      }
      if (a.vue) {
        if (t !== 'style') {
          m = 'attrs';
        }
      } else if (!l.mustUseProperty) {
        if (a.vdom === true) {
          m = 'attributes';
        } else if (a.hyperscript === true) {
          m = 'attrs';
        }
      }
      if (m) {
        if (e[m] === undefined) {
          e[m] = {};
        }
        e[m][l.attribute] = r;
      } else if (a.react && l.space) {
        e[o[l.property] || l.property] = r;
      } else {
        e[l.attribute] = r;
      }
    }
    function react(e) {
      var t = e && e('div');
      return Boolean(t && ('_owner' in t || '_store' in t) && t.key === null);
    }
    function hyperscript(e) {
      return Boolean(e && e.context && e.cleanup);
    }
    function vdom(e) {
      return e && e('div').type === 'VirtualNode';
    }
    function vue(e) {
      var t = e && e('div');
      return Boolean(t && t.context && t.context._isVue);
    }
    function parseStyle(e, t) {
      var r = {};
      try {
        d(e, iterator);
      } catch (e) {
        e.message = t + '[style]' + e.message.slice('undefined'.length);
        throw e;
      }
      return r;
      function iterator(e, t) {
        r[styleCase(e)] = t;
      }
    }
    function styleCase(e) {
      if (e.slice(0, 4) === '-ms-') {
        e = 'ms-' + e.slice(4);
      }
      return e.replace(T, styleReplacer);
    }
    function styleReplacer(e, t) {
      return t.toUpperCase();
    }
  },
  8849: (e, t, r) => {
    var a = r(9515);
    var n = r(4589);
    var i = r(3657);
    var o = r(6);
    var s = r(3413);
    var p = r(7156);
    var d = r(1208);
    var l = r(1291);
    e.exports = wrapper;
    var m = {}.hasOwnProperty;
    var c = {
      '#document': root,
      '#document-fragment': root,
      '#text': text,
      '#comment': comment,
      '#documentType': doctype,
    };
    function wrapper(e, t) {
      var r = t || {};
      var i;
      if (r.messages) {
        i = r;
        r = {};
      } else {
        i = r.file;
      }
      return transform(e, {
        schema: r.space === 'svg' ? n : a,
        file: i,
        verbose: r.verbose,
        location: false,
      });
    }
    function transform(e, t) {
      var r = t.schema;
      var i = m.call(c, e.nodeName) ? c[e.nodeName] : element;
      var s;
      var p;
      var d;
      if (i === element) {
        t.schema = e.namespaceURI === o.svg ? n : a;
      }
      if (e.childNodes) {
        s = nodes(e.childNodes, t);
      }
      p = i(e, s, t);
      if (e.sourceCodeLocation && t.file) {
        d = location(p, e.sourceCodeLocation, t);
        if (d) {
          t.location = true;
          p.position = d;
        }
      }
      t.schema = r;
      return p;
    }
    function nodes(e, t) {
      var r = e.length;
      var a = -1;
      var n = [];
      while (++a < r) {
        n[a] = transform(e[a], t);
      }
      return n;
    }
    function root(e, t, r) {
      var a = { type: 'root', children: t, data: {} };
      var n;
      a.data.quirksMode = e.mode === 'quirks' || e.mode === 'limited-quirks';
      if (r.file && r.location) {
        n = String(r.file);
        a.position = {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: l(n, '\n') + 1, column: n.length - n.lastIndexOf('\n'), offset: n.length },
        };
      }
      return a;
    }
    function doctype(e) {
      return {
        type: 'doctype',
        name: e.name || '',
        public: e.publicId || null,
        system: e.systemId || null,
      };
    }
    function text(e) {
      return { type: 'text', value: e.value };
    }
    function comment(e) {
      return { type: 'comment', value: e.data };
    }
    function element(e, t, r) {
      var a = r.schema.space === 'svg' ? s : p;
      var n = e.tagName;
      var i = e.attrs;
      var o = i.length;
      var d = {};
      var l = -1;
      var m;
      var c;
      var g;
      var v;
      var T;
      var E;
      while (++l < o) {
        m = i[l];
        c = (m.prefix ? m.prefix + ':' : '') + m.name;
        d[c] = m.value;
      }
      g = a(n, d, t);
      if (n === 'template' && 'content' in e) {
        v = e.sourceCodeLocation;
        T = v && v.startTag && position(v.startTag).end;
        E = v && v.endTag && position(v.endTag).start;
        g.content = transform(e.content, r);
        if ((T || E) && r.file) {
          g.content.position = { start: T, end: E };
        }
      }
      return g;
    }
    function location(e, t, r) {
      var a = r.schema;
      var n = r.verbose;
      var o = position(t);
      var s;
      var p;
      var l;
      var m;
      var c;
      if (e.type === 'element') {
        s = e.children[e.children.length - 1];
        if (!t.endTag && s && s.position && s.position.end) {
          o.end = d(s.position.end);
        }
        if (n) {
          p = t.attrs;
          m = {};
          for (l in p) {
            c = i(a, l).property;
            m[c] = position(p[l]);
          }
          e.data = {
            position: {
              opening: position(t.startTag),
              closing: t.endTag ? position(t.endTag) : null,
              properties: m,
            },
          };
        }
      }
      return o;
    }
    function position(e) {
      var t = point({ line: e.startLine, column: e.startCol, offset: e.startOffset });
      var r = point({ line: e.endLine, column: e.endCol, offset: e.endOffset });
      return t || r ? { start: t, end: r } : null;
    }
    function point(e) {
      return e.line && e.column ? e : null;
    }
  },
  5253: (e) => {
    e.exports = parse;
    var t = /[#.]/g;
    function parse(e, r) {
      var a = e || '';
      var n = r || 'div';
      var i = {};
      var o = 0;
      var s;
      var p;
      var d;
      while (o < a.length) {
        t.lastIndex = o;
        d = t.exec(a);
        s = a.slice(o, d ? d.index : a.length);
        if (s) {
          if (!p) {
            n = s;
          } else if (p === '#') {
            i.id = s;
          } else if (i.className) {
            i.className.push(s);
          } else {
            i.className = [s];
          }
          o += s.length;
        }
        if (d) {
          p = d[0];
          o++;
        }
      }
      return { type: 'element', tagName: n, properties: i, children: [] };
    }
  },
  3233: (e, t, r) => {
    var a = r(1554);
    var n = r(1133);
    var i = r(8849);
    var o = r(2785);
    var s = r(9878);
    var p = r(6);
    var d = r(1067);
    var l = r(1208);
    e.exports = wrap;
    var m = 'IN_TEMPLATE_MODE';
    var c = 'DATA_STATE';
    var g = 'CHARACTER_TOKEN';
    var v = 'START_TAG_TOKEN';
    var T = 'END_TAG_TOKEN';
    var E = 'COMMENT_TOKEN';
    var _ = 'DOCTYPE_TOKEN';
    var w = { sourceCodeLocationInfo: true, scriptingEnabled: false };
    function wrap(e, t) {
      var r = new a(w);
      var l = d('type');
      var v;
      var T;
      var A;
      var b;
      var y;
      l.handlers.root = root;
      l.handlers.element = element;
      l.handlers.text = text;
      l.handlers.comment = comment;
      l.handlers.doctype = doctype;
      l.handlers.raw = raw;
      l.unknown = unknown;
      y = i(documentMode(e) ? document() : fragment(), t);
      if (e.type !== 'root' && y.children.length === 1) {
        return y.children[0];
      }
      return y;
      function fragment() {
        var t;
        var a;
        var n;
        t = {
          nodeName: 'template',
          tagName: 'template',
          attrs: [],
          namespaceURI: p.html,
          childNodes: [],
        };
        a = {
          nodeName: 'documentmock',
          tagName: 'documentmock',
          attrs: [],
          namespaceURI: p.html,
          childNodes: [],
        };
        n = { nodeName: '#document-fragment', childNodes: [] };
        r._bootstrap(a, t);
        r._pushTmplInsertionMode(m);
        r._initTokenizerForFragmentParsing();
        r._insertFakeRootElement();
        r._resetInsertionMode();
        r._findFormInFragmentContext();
        v = r.tokenizer;
        T = v.preprocessor;
        b = v.__mixins[0];
        A = b.posTracker;
        l(e);
        r._adoptNodes(a.childNodes[0], n);
        return n;
      }
      function document() {
        var t = r.treeAdapter.createDocument();
        r._bootstrap(t, null);
        v = r.tokenizer;
        T = v.preprocessor;
        b = v.__mixins[0];
        A = b.posTracker;
        l(e);
        return t;
      }
      function all(e) {
        var t = 0;
        var r = -1;
        if (e) {
          t = e.length;
        }
        while (++r < t) {
          l(e[r]);
        }
      }
      function root(e) {
        all(e.children);
      }
      function element(e) {
        var t = s.indexOf(e.tagName) !== -1;
        r._processToken(startTag(e), p.html);
        all(e.children);
        if (!t) {
          r._processToken(endTag(e));
          v.state = c;
        }
      }
      function text(e) {
        r._processToken({ type: g, chars: e.value, location: createParse5Location(e) });
      }
      function doctype(e) {
        var t = o(e);
        r._processToken({
          type: _,
          name: t.name,
          forceQuirks: false,
          publicId: t.publicId,
          systemId: t.systemId,
          location: createParse5Location(e),
        });
      }
      function comment(e) {
        r._processToken({ type: E, data: e.value, location: createParse5Location(e) });
      }
      function raw(e) {
        var t = n.start(e);
        var a;
        T.html = null;
        T.endOfChunkHit = false;
        T.lastChunkWritten = false;
        T.lastCharPos = -1;
        T.pos = -1;
        A.droppedBufferSize = 0;
        A.line = t.line;
        A.col = 1;
        A.offset = 0;
        A.lineStartPos = -t.column + 1;
        A.droppedBufferSize = t.offset;
        b.currentAttrLocation = null;
        b.ctLoc = createParse5Location(e);
        v.write(e.value);
        r._runParsingLoop(null);
        a = v.currentCharacterToken;
        if (a) {
          a.location.endLine = A.line;
          a.location.endCol = A.col + 1;
          a.location.endOffset = A.offset + 1;
          r._processToken(a);
        }
        v.currentToken = null;
        v.currentCharacterToken = null;
        v.currentAttr = null;
      }
    }
    function startTag(e) {
      var t = createParse5Location(e);
      t.startTag = l(t);
      return { type: v, tagName: e.tagName, selfClosing: false, attrs: attributes(e), location: t };
    }
    function attributes(e) {
      return o({ tagName: e.tagName, type: 'element', properties: e.properties }).attrs;
    }
    function endTag(e) {
      var t = createParse5Location(e);
      t.endTag = l(t);
      return { type: T, tagName: e.tagName, attrs: [], location: t };
    }
    function unknown(e) {
      throw new Error('Cannot compile `' + e.type + '` node');
    }
    function documentMode(e) {
      var t = e.type === 'root' ? e.children[0] : e;
      return t && (t.type === 'doctype' || t.tagName === 'html');
    }
    function createParse5Location(e) {
      var t = n.start(e);
      var r = n.end(e);
      return {
        startLine: t.line,
        startCol: t.column,
        startOffset: t.offset,
        endLine: r.line,
        endCol: r.column,
        endOffset: r.offset,
      };
    }
  },
  2785: (e, t, r) => {
    var a = r(1208);
    var n = r(9515);
    var i = r(4589);
    var o = r(3657);
    var s = r(4547);
    var p = r(6);
    var d = r(1067);
    e.exports = transform;
    var l = ['svg', 'html'];
    var m = d('type');
    m.handlers.root = root;
    m.handlers.element = element;
    m.handlers.text = text;
    m.handlers.comment = comment;
    m.handlers.doctype = doctype;
    function transform(e, t) {
      return m(e, t === 'svg' ? i : n);
    }
    function root(e, t) {
      var r = e.data || {};
      var a = r.quirksMode ? 'quirks' : 'no-quirks';
      return patch(e, { nodeName: '#document', mode: a }, t);
    }
    function fragment(e, t) {
      return patch(e, { nodeName: '#document-fragment' }, t);
    }
    function doctype(e, t) {
      return patch(
        e,
        {
          nodeName: '#documentType',
          name: e.name,
          publicId: e.public || '',
          systemId: e.system || '',
        },
        t,
      );
    }
    function text(e, t) {
      return patch(e, { nodeName: '#text', value: e.value }, t);
    }
    function comment(e, t) {
      return patch(e, { nodeName: '#comment', data: e.value }, t);
    }
    function element(e, t) {
      var r = t.space;
      var n = a(e, { children: [] });
      return s(h, n, { space: r });
      function h(r, a) {
        var i = [];
        var s;
        var d;
        var m;
        var c;
        var g;
        var v;
        for (c in a) {
          g = o(t, c);
          d = a[c];
          if (d === false || (g.boolean && !d)) {
            continue;
          }
          m = { name: c, value: d === true ? '' : String(d) };
          if (g.space && l.indexOf(g.space) === -1) {
            v = c.indexOf(':');
            if (v === -1) {
              m.prefix = '';
            } else {
              m.name = c.slice(v + 1);
              m.prefix = c.slice(0, v);
            }
            m.namespace = p[g.space];
          }
          i.push(m);
        }
        s = patch(e, { nodeName: r, tagName: r, attrs: i }, t);
        if (r === 'template') {
          s.content = fragment(n.content, t);
        }
        return s;
      }
    }
    function patch(e, t, r) {
      var a = r;
      var n = e.position;
      var o = e.children;
      var s = [];
      var d = o ? o.length : 0;
      var l = -1;
      var c;
      if (e.type === 'element') {
        if (a.space === 'html' && e.tagName === 'svg') {
          a = i;
        }
        t.namespaceURI = p[a.space];
      }
      while (++l < d) {
        c = m(o[l], a);
        c.parentNode = t;
        s[l] = c;
      }
      if (e.type === 'element' || e.type === 'root') {
        t.childNodes = s;
      }
      if (n && n.start && n.end) {
        t.sourceCodeLocation = {
          startLine: n.start.line,
          startCol: n.start.column,
          startOffset: n.start.offset,
          endLine: n.end.line,
          endCol: n.end.column,
          endOffset: n.end.offset,
        };
      }
      return t;
    }
  },
  3543: (e, t, r) => {
    var a = r(3657);
    var n = r(5144);
    var i = r(5253);
    var o = r(4158).parse;
    var s = r(2194).parse;
    e.exports = factory;
    var p = {}.hasOwnProperty;
    function factory(e, t, r) {
      var n = r ? createAdjustMap(r) : null;
      return h;
      function h(e, r) {
        var a = i(e, t);
        var o = Array.prototype.slice.call(arguments, 2);
        var s = a.tagName.toLowerCase();
        var d;
        a.tagName = n && p.call(n, s) ? n[s] : s;
        if (r && isChildren(r, a)) {
          o.unshift(r);
          r = null;
        }
        if (r) {
          for (d in r) {
            addProperty(a.properties, d, r[d]);
          }
        }
        addChild(a.children, o);
        if (a.tagName === 'template') {
          a.content = { type: 'root', children: a.children };
          a.children = [];
        }
        return a;
      }
      function addProperty(t, r, n) {
        var i;
        var p;
        var d;
        if (n === null || n === undefined || n !== n) {
          return;
        }
        i = a(e, r);
        p = i.property;
        d = n;
        if (typeof d === 'string') {
          if (i.spaceSeparated) {
            d = o(d);
          } else if (i.commaSeparated) {
            d = s(d);
          } else if (i.commaOrSpaceSeparated) {
            d = o(s(d).join(' '));
          }
        }
        if (p === 'style' && typeof n !== 'string') {
          d = style(d);
        }
        if (p === 'className' && t.className) {
          d = t.className.concat(d);
        }
        t[p] = parsePrimitives(i, p, d);
      }
    }
    function isChildren(e, t) {
      return typeof e === 'string' || 'length' in e || isNode(t.tagName, e);
    }
    function isNode(e, t) {
      var r = t.type;
      if (e === 'input' || !r || typeof r !== 'string') {
        return false;
      }
      if (typeof t.children === 'object' && 'length' in t.children) {
        return true;
      }
      r = r.toLowerCase();
      if (e === 'button') {
        return r !== 'menu' && r !== 'submit' && r !== 'reset' && r !== 'button';
      }
      return 'value' in t;
    }
    function addChild(e, t) {
      var r;
      var a;
      if (typeof t === 'string' || typeof t === 'number') {
        e.push({ type: 'text', value: String(t) });
        return;
      }
      if (typeof t === 'object' && 'length' in t) {
        r = -1;
        a = t.length;
        while (++r < a) {
          addChild(e, t[r]);
        }
        return;
      }
      if (typeof t !== 'object' || !('type' in t)) {
        throw new Error('Expected node, nodes, or string, got `' + t + '`');
      }
      e.push(t);
    }
    function parsePrimitives(e, t, r) {
      var a;
      var n;
      var i;
      if (typeof r !== 'object' || !('length' in r)) {
        return parsePrimitive(e, t, r);
      }
      n = r.length;
      a = -1;
      i = [];
      while (++a < n) {
        i[a] = parsePrimitive(e, t, r[a]);
      }
      return i;
    }
    function parsePrimitive(e, t, r) {
      var a = r;
      if (e.number || e.positiveNumber) {
        if (!isNaN(a) && a !== '') {
          a = Number(a);
        }
      } else if (e.boolean || e.overloadedBoolean) {
        if (typeof a === 'string' && (a === '' || n(r) === n(t))) {
          a = true;
        }
      }
      return a;
    }
    function style(e) {
      var t = [];
      var r;
      for (r in e) {
        t.push([r, e[r]].join(': '));
      }
      return t.join('; ');
    }
    function createAdjustMap(e) {
      var t = e.length;
      var r = -1;
      var a = {};
      var n;
      while (++r < t) {
        n = e[r];
        a[n.toLowerCase()] = n;
      }
      return a;
    }
  },
  3882: (e, t, r) => {
    var a = r(9515);
    var n = r(3543);
    var i = n(a, 'div');
    i.displayName = 'html';
    e.exports = i;
  },
  7156: (e, t, r) => {
    e.exports = r(3882);
  },
  3413: (e, t, r) => {
    var a = r(4589);
    var n = r(6947);
    var i = r(3543);
    var o = i(a, 'g', n);
    o.displayName = 'svg';
    e.exports = o;
  },
  4124: (e, t, r) => {
    try {
      var a = r(3837);
      if (typeof a.inherits !== 'function') throw '';
      e.exports = a.inherits;
    } catch (t) {
      e.exports = r(8544);
    }
  },
  8544: (e) => {
    if (typeof Object.create === 'function') {
      e.exports = function inherits(e, t) {
        if (t) {
          e.super_ = t;
          e.prototype = Object.create(t.prototype, {
            constructor: { value: e, enumerable: false, writable: true, configurable: true },
          });
        }
      };
    } else {
      e.exports = function inherits(e, t) {
        if (t) {
          e.super_ = t;
          var TempCtor = function () {};
          TempCtor.prototype = t.prototype;
          e.prototype = new TempCtor();
          e.prototype.constructor = e;
        }
      };
    }
  },
  3328: (e) => {
    var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
    var r = /\n/g;
    var a = /^\s*/;
    var n = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
    var i = /^:\s*/;
    var o = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
    var s = /^[;\s]*/;
    var p = /^\s+|\s+$/g;
    var d = '\n';
    var l = '/';
    var m = '*';
    var c = '';
    var g = 'comment';
    var v = 'declaration';
    e.exports = function (e, p) {
      if (typeof e !== 'string') {
        throw new TypeError('First argument must be a string');
      }
      if (!e) return [];
      p = p || {};
      var T = 1;
      var E = 1;
      function updatePosition(e) {
        var t = e.match(r);
        if (t) T += t.length;
        var a = e.lastIndexOf(d);
        E = ~a ? e.length - a : E + e.length;
      }
      function position() {
        var e = { line: T, column: E };
        return function (t) {
          t.position = new Position(e);
          whitespace();
          return t;
        };
      }
      function Position(e) {
        this.start = e;
        this.end = { line: T, column: E };
        this.source = p.source;
      }
      Position.prototype.content = e;
      var _ = [];
      function error(t) {
        var r = new Error(p.source + ':' + T + ':' + E + ': ' + t);
        r.reason = t;
        r.filename = p.source;
        r.line = T;
        r.column = E;
        r.source = e;
        if (p.silent) {
          _.push(r);
        } else {
          throw r;
        }
      }
      function match(t) {
        var r = t.exec(e);
        if (!r) return;
        var a = r[0];
        updatePosition(a);
        e = e.slice(a.length);
        return r;
      }
      function whitespace() {
        match(a);
      }
      function comments(e) {
        var t;
        e = e || [];
        while ((t = comment())) {
          if (t !== false) {
            e.push(t);
          }
        }
        return e;
      }
      function comment() {
        var t = position();
        if (l != e.charAt(0) || m != e.charAt(1)) return;
        var r = 2;
        while (c != e.charAt(r) && (m != e.charAt(r) || l != e.charAt(r + 1))) {
          ++r;
        }
        r += 2;
        if (c === e.charAt(r - 1)) {
          return error('End of comment missing');
        }
        var a = e.slice(2, r - 2);
        E += 2;
        updatePosition(a);
        e = e.slice(r);
        E += 2;
        return t({ type: g, comment: a });
      }
      function declaration() {
        var e = position();
        var r = match(n);
        if (!r) return;
        comment();
        if (!match(i)) return error("property missing ':'");
        var a = match(o);
        var p = e({
          type: v,
          property: trim(r[0].replace(t, c)),
          value: a ? trim(a[0].replace(t, c)) : c,
        });
        match(s);
        return p;
      }
      function declarations() {
        var e = [];
        comments(e);
        var t;
        while ((t = declaration())) {
          if (t !== false) {
            e.push(t);
            comments(e);
          }
        }
        return e;
      }
      whitespace();
      return declarations();
    };
    function trim(e) {
      return e ? e.replace(p, c) : c;
    }
  },
  1997: (e) => {
    e.exports = alphabetical;
    function alphabetical(e) {
      var t = typeof e === 'string' ? e.charCodeAt(0) : e;
      return (t >= 97 && t <= 122) || (t >= 65 && t <= 90);
    }
  },
  8189: (e, t, r) => {
    var a = r(1997);
    var n = r(5552);
    e.exports = alphanumerical;
    function alphanumerical(e) {
      return a(e) || n(e);
    }
  },
  5625: (e) => {
    /*!
     * Determine if an object is a Buffer
     *
     * @author   Feross Aboukhadijeh <https://feross.org>
     * @license  MIT
     */
    e.exports = function isBuffer(e) {
      return (
        e != null &&
        e.constructor != null &&
        typeof e.constructor.isBuffer === 'function' &&
        e.constructor.isBuffer(e)
      );
    };
  },
  5552: (e) => {
    e.exports = decimal;
    function decimal(e) {
      var t = typeof e === 'string' ? e.charCodeAt(0) : e;
      return t >= 48 && t <= 57;
    }
  },
  429: (e) => {
    /*!
     * is-extendable <https://github.com/jonschlinkert/is-extendable>
     *
     * Copyright (c) 2015, Jon Schlinkert.
     * Licensed under the MIT License.
     */
    e.exports = function isExtendable(e) {
      return (
        typeof e !== 'undefined' && e !== null && (typeof e === 'object' || typeof e === 'function')
      );
    };
  },
  7474: (e) => {
    e.exports = hexadecimal;
    function hexadecimal(e) {
      var t = typeof e === 'string' ? e.charCodeAt(0) : e;
      return (t >= 97 && t <= 102) || (t >= 65 && t <= 70) || (t >= 48 && t <= 57);
    }
  },
  864: (e) => {
    e.exports = (e) => {
      if (Object.prototype.toString.call(e) !== '[object Object]') {
        return false;
      }
      const t = Object.getPrototypeOf(e);
      return t === null || t === Object.prototype;
    };
  },
  3287: (e, t) => {
    Object.defineProperty(t, '__esModule', { value: true });
    /*!
     * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
     *
     * Copyright (c) 2014-2017, Jon Schlinkert.
     * Released under the MIT License.
     */ function isObject(e) {
      return Object.prototype.toString.call(e) === '[object Object]';
    }
    function isPlainObject(e) {
      var t, r;
      if (isObject(e) === false) return false;
      t = e.constructor;
      if (t === undefined) return true;
      r = t.prototype;
      if (isObject(r) === false) return false;
      if (r.hasOwnProperty('isPrototypeOf') === false) {
        return false;
      }
      return true;
    }
    t.isPlainObject = isPlainObject;
  },
  8473: (e) => {
    e.exports = whitespace;
    var t = String.fromCharCode;
    var r = /\s/;
    function whitespace(e) {
      return r.test(typeof e === 'number' ? t(e) : e.charAt(0));
    }
  },
  1623: (e) => {
    e.exports = wordCharacter;
    var t = String.fromCharCode;
    var r = /\w/;
    function wordCharacter(e) {
      return r.test(typeof e === 'number' ? t(e) : e.charAt(0));
    }
  },
  1917: (e, t, r) => {
    var a = r(916);
    e.exports = a;
  },
  916: (e, t, r) => {
    var a = r(5190);
    var n = r(3034);
    function deprecated(e) {
      return function () {
        throw new Error('Function ' + e + ' is deprecated and cannot be used.');
      };
    }
    e.exports.Type = r(967);
    e.exports.Schema = r(6514);
    e.exports.FAILSAFE_SCHEMA = r(6037);
    e.exports.JSON_SCHEMA = r(1571);
    e.exports.CORE_SCHEMA = r(2183);
    e.exports.DEFAULT_SAFE_SCHEMA = r(8949);
    e.exports.DEFAULT_FULL_SCHEMA = r(6874);
    e.exports.load = a.load;
    e.exports.loadAll = a.loadAll;
    e.exports.safeLoad = a.safeLoad;
    e.exports.safeLoadAll = a.safeLoadAll;
    e.exports.dump = n.dump;
    e.exports.safeDump = n.safeDump;
    e.exports.YAMLException = r(5199);
    e.exports.MINIMAL_SCHEMA = r(6037);
    e.exports.SAFE_SCHEMA = r(8949);
    e.exports.DEFAULT_SCHEMA = r(6874);
    e.exports.scan = deprecated('scan');
    e.exports.parse = deprecated('parse');
    e.exports.compose = deprecated('compose');
    e.exports.addConstructor = deprecated('addConstructor');
  },
  9136: (e) => {
    function isNothing(e) {
      return typeof e === 'undefined' || e === null;
    }
    function isObject(e) {
      return typeof e === 'object' && e !== null;
    }
    function toArray(e) {
      if (Array.isArray(e)) return e;
      else if (isNothing(e)) return [];
      return [e];
    }
    function extend(e, t) {
      var r, a, n, i;
      if (t) {
        i = Object.keys(t);
        for (r = 0, a = i.length; r < a; r += 1) {
          n = i[r];
          e[n] = t[n];
        }
      }
      return e;
    }
    function repeat(e, t) {
      var r = '',
        a;
      for (a = 0; a < t; a += 1) {
        r += e;
      }
      return r;
    }
    function isNegativeZero(e) {
      return e === 0 && Number.NEGATIVE_INFINITY === 1 / e;
    }
    e.exports.isNothing = isNothing;
    e.exports.isObject = isObject;
    e.exports.toArray = toArray;
    e.exports.repeat = repeat;
    e.exports.isNegativeZero = isNegativeZero;
    e.exports.extend = extend;
  },
  3034: (e, t, r) => {
    var a = r(9136);
    var n = r(5199);
    var i = r(6874);
    var o = r(8949);
    var s = Object.prototype.toString;
    var p = Object.prototype.hasOwnProperty;
    var d = 9;
    var l = 10;
    var m = 13;
    var c = 32;
    var g = 33;
    var v = 34;
    var T = 35;
    var E = 37;
    var _ = 38;
    var w = 39;
    var A = 42;
    var b = 44;
    var y = 45;
    var S = 58;
    var C = 61;
    var k = 62;
    var N = 63;
    var D = 64;
    var O = 91;
    var I = 93;
    var R = 96;
    var P = 123;
    var L = 124;
    var x = 125;
    var F = {};
    F[0] = '\\0';
    F[7] = '\\a';
    F[8] = '\\b';
    F[9] = '\\t';
    F[10] = '\\n';
    F[11] = '\\v';
    F[12] = '\\f';
    F[13] = '\\r';
    F[27] = '\\e';
    F[34] = '\\"';
    F[92] = '\\\\';
    F[133] = '\\N';
    F[160] = '\\_';
    F[8232] = '\\L';
    F[8233] = '\\P';
    var M = [
      'y',
      'Y',
      'yes',
      'Yes',
      'YES',
      'on',
      'On',
      'ON',
      'n',
      'N',
      'no',
      'No',
      'NO',
      'off',
      'Off',
      'OFF',
    ];
    function compileStyleMap(e, t) {
      var r, a, n, i, o, s, d;
      if (t === null) return {};
      r = {};
      a = Object.keys(t);
      for (n = 0, i = a.length; n < i; n += 1) {
        o = a[n];
        s = String(t[o]);
        if (o.slice(0, 2) === '!!') {
          o = 'tag:yaml.org,2002:' + o.slice(2);
        }
        d = e.compiledTypeMap['fallback'][o];
        if (d && p.call(d.styleAliases, s)) {
          s = d.styleAliases[s];
        }
        r[o] = s;
      }
      return r;
    }
    function encodeHex(e) {
      var t, r, i;
      t = e.toString(16).toUpperCase();
      if (e <= 255) {
        r = 'x';
        i = 2;
      } else if (e <= 65535) {
        r = 'u';
        i = 4;
      } else if (e <= 4294967295) {
        r = 'U';
        i = 8;
      } else {
        throw new n('code point within a string may not be greater than 0xFFFFFFFF');
      }
      return '\\' + r + a.repeat('0', i - t.length) + t;
    }
    function State(e) {
      this.schema = e['schema'] || i;
      this.indent = Math.max(1, e['indent'] || 2);
      this.noArrayIndent = e['noArrayIndent'] || false;
      this.skipInvalid = e['skipInvalid'] || false;
      this.flowLevel = a.isNothing(e['flowLevel']) ? -1 : e['flowLevel'];
      this.styleMap = compileStyleMap(this.schema, e['styles'] || null);
      this.sortKeys = e['sortKeys'] || false;
      this.lineWidth = e['lineWidth'] || 80;
      this.noRefs = e['noRefs'] || false;
      this.noCompatMode = e['noCompatMode'] || false;
      this.condenseFlow = e['condenseFlow'] || false;
      this.implicitTypes = this.schema.compiledImplicit;
      this.explicitTypes = this.schema.compiledExplicit;
      this.tag = null;
      this.result = '';
      this.duplicates = [];
      this.usedDuplicates = null;
    }
    function indentString(e, t) {
      var r = a.repeat(' ', t),
        n = 0,
        i = -1,
        o = '',
        s,
        p = e.length;
      while (n < p) {
        i = e.indexOf('\n', n);
        if (i === -1) {
          s = e.slice(n);
          n = p;
        } else {
          s = e.slice(n, i + 1);
          n = i + 1;
        }
        if (s.length && s !== '\n') o += r;
        o += s;
      }
      return o;
    }
    function generateNextLine(e, t) {
      return '\n' + a.repeat(' ', e.indent * t);
    }
    function testImplicitResolving(e, t) {
      var r, a, n;
      for (r = 0, a = e.implicitTypes.length; r < a; r += 1) {
        n = e.implicitTypes[r];
        if (n.resolve(t)) {
          return true;
        }
      }
      return false;
    }
    function isWhitespace(e) {
      return e === c || e === d;
    }
    function isPrintable(e) {
      return (
        (32 <= e && e <= 126) ||
        (161 <= e && e <= 55295 && e !== 8232 && e !== 8233) ||
        (57344 <= e && e <= 65533 && e !== 65279) ||
        (65536 <= e && e <= 1114111)
      );
    }
    function isNsChar(e) {
      return isPrintable(e) && !isWhitespace(e) && e !== 65279 && e !== m && e !== l;
    }
    function isPlainSafe(e, t) {
      return (
        isPrintable(e) &&
        e !== 65279 &&
        e !== b &&
        e !== O &&
        e !== I &&
        e !== P &&
        e !== x &&
        e !== S &&
        (e !== T || (t && isNsChar(t)))
      );
    }
    function isPlainSafeFirst(e) {
      return (
        isPrintable(e) &&
        e !== 65279 &&
        !isWhitespace(e) &&
        e !== y &&
        e !== N &&
        e !== S &&
        e !== b &&
        e !== O &&
        e !== I &&
        e !== P &&
        e !== x &&
        e !== T &&
        e !== _ &&
        e !== A &&
        e !== g &&
        e !== L &&
        e !== C &&
        e !== k &&
        e !== w &&
        e !== v &&
        e !== E &&
        e !== D &&
        e !== R
      );
    }
    function needIndentIndicator(e) {
      var t = /^\n* /;
      return t.test(e);
    }
    var B = 1,
      G = 2,
      U = 3,
      H = 4,
      V = 5;
    function chooseScalarStyle(e, t, r, a, n) {
      var i;
      var o, s;
      var p = false;
      var d = false;
      var m = a !== -1;
      var c = -1;
      var g = isPlainSafeFirst(e.charCodeAt(0)) && !isWhitespace(e.charCodeAt(e.length - 1));
      if (t) {
        for (i = 0; i < e.length; i++) {
          o = e.charCodeAt(i);
          if (!isPrintable(o)) {
            return V;
          }
          s = i > 0 ? e.charCodeAt(i - 1) : null;
          g = g && isPlainSafe(o, s);
        }
      } else {
        for (i = 0; i < e.length; i++) {
          o = e.charCodeAt(i);
          if (o === l) {
            p = true;
            if (m) {
              d = d || (i - c - 1 > a && e[c + 1] !== ' ');
              c = i;
            }
          } else if (!isPrintable(o)) {
            return V;
          }
          s = i > 0 ? e.charCodeAt(i - 1) : null;
          g = g && isPlainSafe(o, s);
        }
        d = d || (m && i - c - 1 > a && e[c + 1] !== ' ');
      }
      if (!p && !d) {
        return g && !n(e) ? B : G;
      }
      if (r > 9 && needIndentIndicator(e)) {
        return V;
      }
      return d ? H : U;
    }
    function writeScalar(e, t, r, a) {
      e.dump = (function () {
        if (t.length === 0) {
          return "''";
        }
        if (!e.noCompatMode && M.indexOf(t) !== -1) {
          return "'" + t + "'";
        }
        var i = e.indent * Math.max(1, r);
        var o = e.lineWidth === -1 ? -1 : Math.max(Math.min(e.lineWidth, 40), e.lineWidth - i);
        var s = a || (e.flowLevel > -1 && r >= e.flowLevel);
        function testAmbiguity(t) {
          return testImplicitResolving(e, t);
        }
        switch (chooseScalarStyle(t, s, e.indent, o, testAmbiguity)) {
          case B:
            return t;
          case G:
            return "'" + t.replace(/'/g, "''") + "'";
          case U:
            return '|' + blockHeader(t, e.indent) + dropEndingNewline(indentString(t, i));
          case H:
            return (
              '>' + blockHeader(t, e.indent) + dropEndingNewline(indentString(foldString(t, o), i))
            );
          case V:
            return '"' + escapeString(t, o) + '"';
          default:
            throw new n('impossible error: invalid scalar style');
        }
      })();
    }
    function blockHeader(e, t) {
      var r = needIndentIndicator(e) ? String(t) : '';
      var a = e[e.length - 1] === '\n';
      var n = a && (e[e.length - 2] === '\n' || e === '\n');
      var i = n ? '+' : a ? '' : '-';
      return r + i + '\n';
    }
    function dropEndingNewline(e) {
      return e[e.length - 1] === '\n' ? e.slice(0, -1) : e;
    }
    function foldString(e, t) {
      var r = /(\n+)([^\n]*)/g;
      var a = (function () {
        var a = e.indexOf('\n');
        a = a !== -1 ? a : e.length;
        r.lastIndex = a;
        return foldLine(e.slice(0, a), t);
      })();
      var n = e[0] === '\n' || e[0] === ' ';
      var i;
      var o;
      while ((o = r.exec(e))) {
        var s = o[1],
          p = o[2];
        i = p[0] === ' ';
        a += s + (!n && !i && p !== '' ? '\n' : '') + foldLine(p, t);
        n = i;
      }
      return a;
    }
    function foldLine(e, t) {
      if (e === '' || e[0] === ' ') return e;
      var r = / [^ ]/g;
      var a;
      var n = 0,
        i,
        o = 0,
        s = 0;
      var p = '';
      while ((a = r.exec(e))) {
        s = a.index;
        if (s - n > t) {
          i = o > n ? o : s;
          p += '\n' + e.slice(n, i);
          n = i + 1;
        }
        o = s;
      }
      p += '\n';
      if (e.length - n > t && o > n) {
        p += e.slice(n, o) + '\n' + e.slice(o + 1);
      } else {
        p += e.slice(n);
      }
      return p.slice(1);
    }
    function escapeString(e) {
      var t = '';
      var r, a;
      var n;
      for (var i = 0; i < e.length; i++) {
        r = e.charCodeAt(i);
        if (r >= 55296 && r <= 56319) {
          a = e.charCodeAt(i + 1);
          if (a >= 56320 && a <= 57343) {
            t += encodeHex((r - 55296) * 1024 + a - 56320 + 65536);
            i++;
            continue;
          }
        }
        n = F[r];
        t += !n && isPrintable(r) ? e[i] : n || encodeHex(r);
      }
      return t;
    }
    function writeFlowSequence(e, t, r) {
      var a = '',
        n = e.tag,
        i,
        o;
      for (i = 0, o = r.length; i < o; i += 1) {
        if (writeNode(e, t, r[i], false, false)) {
          if (i !== 0) a += ',' + (!e.condenseFlow ? ' ' : '');
          a += e.dump;
        }
      }
      e.tag = n;
      e.dump = '[' + a + ']';
    }
    function writeBlockSequence(e, t, r, a) {
      var n = '',
        i = e.tag,
        o,
        s;
      for (o = 0, s = r.length; o < s; o += 1) {
        if (writeNode(e, t + 1, r[o], true, true)) {
          if (!a || o !== 0) {
            n += generateNextLine(e, t);
          }
          if (e.dump && l === e.dump.charCodeAt(0)) {
            n += '-';
          } else {
            n += '- ';
          }
          n += e.dump;
        }
      }
      e.tag = i;
      e.dump = n || '[]';
    }
    function writeFlowMapping(e, t, r) {
      var a = '',
        n = e.tag,
        i = Object.keys(r),
        o,
        s,
        p,
        d,
        l;
      for (o = 0, s = i.length; o < s; o += 1) {
        l = '';
        if (o !== 0) l += ', ';
        if (e.condenseFlow) l += '"';
        p = i[o];
        d = r[p];
        if (!writeNode(e, t, p, false, false)) {
          continue;
        }
        if (e.dump.length > 1024) l += '? ';
        l += e.dump + (e.condenseFlow ? '"' : '') + ':' + (e.condenseFlow ? '' : ' ');
        if (!writeNode(e, t, d, false, false)) {
          continue;
        }
        l += e.dump;
        a += l;
      }
      e.tag = n;
      e.dump = '{' + a + '}';
    }
    function writeBlockMapping(e, t, r, a) {
      var i = '',
        o = e.tag,
        s = Object.keys(r),
        p,
        d,
        m,
        c,
        g,
        v;
      if (e.sortKeys === true) {
        s.sort();
      } else if (typeof e.sortKeys === 'function') {
        s.sort(e.sortKeys);
      } else if (e.sortKeys) {
        throw new n('sortKeys must be a boolean or a function');
      }
      for (p = 0, d = s.length; p < d; p += 1) {
        v = '';
        if (!a || p !== 0) {
          v += generateNextLine(e, t);
        }
        m = s[p];
        c = r[m];
        if (!writeNode(e, t + 1, m, true, true, true)) {
          continue;
        }
        g = (e.tag !== null && e.tag !== '?') || (e.dump && e.dump.length > 1024);
        if (g) {
          if (e.dump && l === e.dump.charCodeAt(0)) {
            v += '?';
          } else {
            v += '? ';
          }
        }
        v += e.dump;
        if (g) {
          v += generateNextLine(e, t);
        }
        if (!writeNode(e, t + 1, c, true, g)) {
          continue;
        }
        if (e.dump && l === e.dump.charCodeAt(0)) {
          v += ':';
        } else {
          v += ': ';
        }
        v += e.dump;
        i += v;
      }
      e.tag = o;
      e.dump = i || '{}';
    }
    function detectType(e, t, r) {
      var a, i, o, d, l, m;
      i = r ? e.explicitTypes : e.implicitTypes;
      for (o = 0, d = i.length; o < d; o += 1) {
        l = i[o];
        if (
          (l.instanceOf || l.predicate) &&
          (!l.instanceOf || (typeof t === 'object' && t instanceof l.instanceOf)) &&
          (!l.predicate || l.predicate(t))
        ) {
          e.tag = r ? l.tag : '?';
          if (l.represent) {
            m = e.styleMap[l.tag] || l.defaultStyle;
            if (s.call(l.represent) === '[object Function]') {
              a = l.represent(t, m);
            } else if (p.call(l.represent, m)) {
              a = l.represent[m](t, m);
            } else {
              throw new n('!<' + l.tag + '> tag resolver accepts not "' + m + '" style');
            }
            e.dump = a;
          }
          return true;
        }
      }
      return false;
    }
    function writeNode(e, t, r, a, i, o) {
      e.tag = null;
      e.dump = r;
      if (!detectType(e, r, false)) {
        detectType(e, r, true);
      }
      var p = s.call(e.dump);
      if (a) {
        a = e.flowLevel < 0 || e.flowLevel > t;
      }
      var d = p === '[object Object]' || p === '[object Array]',
        l,
        m;
      if (d) {
        l = e.duplicates.indexOf(r);
        m = l !== -1;
      }
      if ((e.tag !== null && e.tag !== '?') || m || (e.indent !== 2 && t > 0)) {
        i = false;
      }
      if (m && e.usedDuplicates[l]) {
        e.dump = '*ref_' + l;
      } else {
        if (d && m && !e.usedDuplicates[l]) {
          e.usedDuplicates[l] = true;
        }
        if (p === '[object Object]') {
          if (a && Object.keys(e.dump).length !== 0) {
            writeBlockMapping(e, t, e.dump, i);
            if (m) {
              e.dump = '&ref_' + l + e.dump;
            }
          } else {
            writeFlowMapping(e, t, e.dump);
            if (m) {
              e.dump = '&ref_' + l + ' ' + e.dump;
            }
          }
        } else if (p === '[object Array]') {
          var c = e.noArrayIndent && t > 0 ? t - 1 : t;
          if (a && e.dump.length !== 0) {
            writeBlockSequence(e, c, e.dump, i);
            if (m) {
              e.dump = '&ref_' + l + e.dump;
            }
          } else {
            writeFlowSequence(e, c, e.dump);
            if (m) {
              e.dump = '&ref_' + l + ' ' + e.dump;
            }
          }
        } else if (p === '[object String]') {
          if (e.tag !== '?') {
            writeScalar(e, e.dump, t, o);
          }
        } else {
          if (e.skipInvalid) return false;
          throw new n('unacceptable kind of an object to dump ' + p);
        }
        if (e.tag !== null && e.tag !== '?') {
          e.dump = '!<' + e.tag + '> ' + e.dump;
        }
      }
      return true;
    }
    function getDuplicateReferences(e, t) {
      var r = [],
        a = [],
        n,
        i;
      inspectNode(e, r, a);
      for (n = 0, i = a.length; n < i; n += 1) {
        t.duplicates.push(r[a[n]]);
      }
      t.usedDuplicates = new Array(i);
    }
    function inspectNode(e, t, r) {
      var a, n, i;
      if (e !== null && typeof e === 'object') {
        n = t.indexOf(e);
        if (n !== -1) {
          if (r.indexOf(n) === -1) {
            r.push(n);
          }
        } else {
          t.push(e);
          if (Array.isArray(e)) {
            for (n = 0, i = e.length; n < i; n += 1) {
              inspectNode(e[n], t, r);
            }
          } else {
            a = Object.keys(e);
            for (n = 0, i = a.length; n < i; n += 1) {
              inspectNode(e[a[n]], t, r);
            }
          }
        }
      }
    }
    function dump(e, t) {
      t = t || {};
      var r = new State(t);
      if (!r.noRefs) getDuplicateReferences(e, r);
      if (writeNode(r, 0, e, true, true)) return r.dump + '\n';
      return '';
    }
    function safeDump(e, t) {
      return dump(e, a.extend({ schema: o }, t));
    }
    e.exports.dump = dump;
    e.exports.safeDump = safeDump;
  },
  5199: (e) => {
    function YAMLException(e, t) {
      Error.call(this);
      this.name = 'YAMLException';
      this.reason = e;
      this.mark = t;
      this.message =
        (this.reason || '(unknown reason)') + (this.mark ? ' ' + this.mark.toString() : '');
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      } else {
        this.stack = new Error().stack || '';
      }
    }
    YAMLException.prototype = Object.create(Error.prototype);
    YAMLException.prototype.constructor = YAMLException;
    YAMLException.prototype.toString = function toString(e) {
      var t = this.name + ': ';
      t += this.reason || '(unknown reason)';
      if (!e && this.mark) {
        t += ' ' + this.mark.toString();
      }
      return t;
    };
    e.exports = YAMLException;
  },
  5190: (e, t, r) => {
    var a = r(9136);
    var n = r(5199);
    var i = r(5426);
    var o = r(8949);
    var s = r(6874);
    var p = Object.prototype.hasOwnProperty;
    var d = 1;
    var l = 2;
    var m = 3;
    var c = 4;
    var g = 1;
    var v = 2;
    var T = 3;
    var E =
      /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
    var _ = /[\x85\u2028\u2029]/;
    var w = /[,\[\]\{\}]/;
    var A = /^(?:!|!!|![a-z\-]+!)$/i;
    var b = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
    function _class(e) {
      return Object.prototype.toString.call(e);
    }
    function is_EOL(e) {
      return e === 10 || e === 13;
    }
    function is_WHITE_SPACE(e) {
      return e === 9 || e === 32;
    }
    function is_WS_OR_EOL(e) {
      return e === 9 || e === 32 || e === 10 || e === 13;
    }
    function is_FLOW_INDICATOR(e) {
      return e === 44 || e === 91 || e === 93 || e === 123 || e === 125;
    }
    function fromHexCode(e) {
      var t;
      if (48 <= e && e <= 57) {
        return e - 48;
      }
      t = e | 32;
      if (97 <= t && t <= 102) {
        return t - 97 + 10;
      }
      return -1;
    }
    function escapedHexLen(e) {
      if (e === 120) {
        return 2;
      }
      if (e === 117) {
        return 4;
      }
      if (e === 85) {
        return 8;
      }
      return 0;
    }
    function fromDecimalCode(e) {
      if (48 <= e && e <= 57) {
        return e - 48;
      }
      return -1;
    }
    function simpleEscapeSequence(e) {
      return e === 48
        ? '\0'
        : e === 97
        ? ''
        : e === 98
        ? '\b'
        : e === 116
        ? '\t'
        : e === 9
        ? '\t'
        : e === 110
        ? '\n'
        : e === 118
        ? '\v'
        : e === 102
        ? '\f'
        : e === 114
        ? '\r'
        : e === 101
        ? ''
        : e === 32
        ? ' '
        : e === 34
        ? '"'
        : e === 47
        ? '/'
        : e === 92
        ? '\\'
        : e === 78
        ? ''
        : e === 95
        ? ' '
        : e === 76
        ? '\u2028'
        : e === 80
        ? '\u2029'
        : '';
    }
    function charFromCodepoint(e) {
      if (e <= 65535) {
        return String.fromCharCode(e);
      }
      return String.fromCharCode(((e - 65536) >> 10) + 55296, ((e - 65536) & 1023) + 56320);
    }
    var y = new Array(256);
    var S = new Array(256);
    for (var C = 0; C < 256; C++) {
      y[C] = simpleEscapeSequence(C) ? 1 : 0;
      S[C] = simpleEscapeSequence(C);
    }
    function State(e, t) {
      this.input = e;
      this.filename = t['filename'] || null;
      this.schema = t['schema'] || s;
      this.onWarning = t['onWarning'] || null;
      this.legacy = t['legacy'] || false;
      this.json = t['json'] || false;
      this.listener = t['listener'] || null;
      this.implicitTypes = this.schema.compiledImplicit;
      this.typeMap = this.schema.compiledTypeMap;
      this.length = e.length;
      this.position = 0;
      this.line = 0;
      this.lineStart = 0;
      this.lineIndent = 0;
      this.documents = [];
    }
    function generateError(e, t) {
      return new n(t, new i(e.filename, e.input, e.position, e.line, e.position - e.lineStart));
    }
    function throwError(e, t) {
      throw generateError(e, t);
    }
    function throwWarning(e, t) {
      if (e.onWarning) {
        e.onWarning.call(null, generateError(e, t));
      }
    }
    var k = {
      YAML: function handleYamlDirective(e, t, r) {
        var a, n, i;
        if (e.version !== null) {
          throwError(e, 'duplication of %YAML directive');
        }
        if (r.length !== 1) {
          throwError(e, 'YAML directive accepts exactly one argument');
        }
        a = /^([0-9]+)\.([0-9]+)$/.exec(r[0]);
        if (a === null) {
          throwError(e, 'ill-formed argument of the YAML directive');
        }
        n = parseInt(a[1], 10);
        i = parseInt(a[2], 10);
        if (n !== 1) {
          throwError(e, 'unacceptable YAML version of the document');
        }
        e.version = r[0];
        e.checkLineBreaks = i < 2;
        if (i !== 1 && i !== 2) {
          throwWarning(e, 'unsupported YAML version of the document');
        }
      },
      TAG: function handleTagDirective(e, t, r) {
        var a, n;
        if (r.length !== 2) {
          throwError(e, 'TAG directive accepts exactly two arguments');
        }
        a = r[0];
        n = r[1];
        if (!A.test(a)) {
          throwError(e, 'ill-formed tag handle (first argument) of the TAG directive');
        }
        if (p.call(e.tagMap, a)) {
          throwError(e, 'there is a previously declared suffix for "' + a + '" tag handle');
        }
        if (!b.test(n)) {
          throwError(e, 'ill-formed tag prefix (second argument) of the TAG directive');
        }
        e.tagMap[a] = n;
      },
    };
    function captureSegment(e, t, r, a) {
      var n, i, o, s;
      if (t < r) {
        s = e.input.slice(t, r);
        if (a) {
          for (n = 0, i = s.length; n < i; n += 1) {
            o = s.charCodeAt(n);
            if (!(o === 9 || (32 <= o && o <= 1114111))) {
              throwError(e, 'expected valid JSON character');
            }
          }
        } else if (E.test(s)) {
          throwError(e, 'the stream contains non-printable characters');
        }
        e.result += s;
      }
    }
    function mergeMappings(e, t, r, n) {
      var i, o, s, d;
      if (!a.isObject(r)) {
        throwError(e, 'cannot merge mappings; the provided source object is unacceptable');
      }
      i = Object.keys(r);
      for (s = 0, d = i.length; s < d; s += 1) {
        o = i[s];
        if (!p.call(t, o)) {
          t[o] = r[o];
          n[o] = true;
        }
      }
    }
    function storeMappingPair(e, t, r, a, n, i, o, s) {
      var d, l;
      if (Array.isArray(n)) {
        n = Array.prototype.slice.call(n);
        for (d = 0, l = n.length; d < l; d += 1) {
          if (Array.isArray(n[d])) {
            throwError(e, 'nested arrays are not supported inside keys');
          }
          if (typeof n === 'object' && _class(n[d]) === '[object Object]') {
            n[d] = '[object Object]';
          }
        }
      }
      if (typeof n === 'object' && _class(n) === '[object Object]') {
        n = '[object Object]';
      }
      n = String(n);
      if (t === null) {
        t = {};
      }
      if (a === 'tag:yaml.org,2002:merge') {
        if (Array.isArray(i)) {
          for (d = 0, l = i.length; d < l; d += 1) {
            mergeMappings(e, t, i[d], r);
          }
        } else {
          mergeMappings(e, t, i, r);
        }
      } else {
        if (!e.json && !p.call(r, n) && p.call(t, n)) {
          e.line = o || e.line;
          e.position = s || e.position;
          throwError(e, 'duplicated mapping key');
        }
        t[n] = i;
        delete r[n];
      }
      return t;
    }
    function readLineBreak(e) {
      var t;
      t = e.input.charCodeAt(e.position);
      if (t === 10) {
        e.position++;
      } else if (t === 13) {
        e.position++;
        if (e.input.charCodeAt(e.position) === 10) {
          e.position++;
        }
      } else {
        throwError(e, 'a line break is expected');
      }
      e.line += 1;
      e.lineStart = e.position;
    }
    function skipSeparationSpace(e, t, r) {
      var a = 0,
        n = e.input.charCodeAt(e.position);
      while (n !== 0) {
        while (is_WHITE_SPACE(n)) {
          n = e.input.charCodeAt(++e.position);
        }
        if (t && n === 35) {
          do {
            n = e.input.charCodeAt(++e.position);
          } while (n !== 10 && n !== 13 && n !== 0);
        }
        if (is_EOL(n)) {
          readLineBreak(e);
          n = e.input.charCodeAt(e.position);
          a++;
          e.lineIndent = 0;
          while (n === 32) {
            e.lineIndent++;
            n = e.input.charCodeAt(++e.position);
          }
        } else {
          break;
        }
      }
      if (r !== -1 && a !== 0 && e.lineIndent < r) {
        throwWarning(e, 'deficient indentation');
      }
      return a;
    }
    function testDocumentSeparator(e) {
      var t = e.position,
        r;
      r = e.input.charCodeAt(t);
      if (
        (r === 45 || r === 46) &&
        r === e.input.charCodeAt(t + 1) &&
        r === e.input.charCodeAt(t + 2)
      ) {
        t += 3;
        r = e.input.charCodeAt(t);
        if (r === 0 || is_WS_OR_EOL(r)) {
          return true;
        }
      }
      return false;
    }
    function writeFoldedLines(e, t) {
      if (t === 1) {
        e.result += ' ';
      } else if (t > 1) {
        e.result += a.repeat('\n', t - 1);
      }
    }
    function readPlainScalar(e, t, r) {
      var a,
        n,
        i,
        o,
        s,
        p,
        d,
        l,
        m = e.kind,
        c = e.result,
        g;
      g = e.input.charCodeAt(e.position);
      if (
        is_WS_OR_EOL(g) ||
        is_FLOW_INDICATOR(g) ||
        g === 35 ||
        g === 38 ||
        g === 42 ||
        g === 33 ||
        g === 124 ||
        g === 62 ||
        g === 39 ||
        g === 34 ||
        g === 37 ||
        g === 64 ||
        g === 96
      ) {
        return false;
      }
      if (g === 63 || g === 45) {
        n = e.input.charCodeAt(e.position + 1);
        if (is_WS_OR_EOL(n) || (r && is_FLOW_INDICATOR(n))) {
          return false;
        }
      }
      e.kind = 'scalar';
      e.result = '';
      i = o = e.position;
      s = false;
      while (g !== 0) {
        if (g === 58) {
          n = e.input.charCodeAt(e.position + 1);
          if (is_WS_OR_EOL(n) || (r && is_FLOW_INDICATOR(n))) {
            break;
          }
        } else if (g === 35) {
          a = e.input.charCodeAt(e.position - 1);
          if (is_WS_OR_EOL(a)) {
            break;
          }
        } else if (
          (e.position === e.lineStart && testDocumentSeparator(e)) ||
          (r && is_FLOW_INDICATOR(g))
        ) {
          break;
        } else if (is_EOL(g)) {
          p = e.line;
          d = e.lineStart;
          l = e.lineIndent;
          skipSeparationSpace(e, false, -1);
          if (e.lineIndent >= t) {
            s = true;
            g = e.input.charCodeAt(e.position);
            continue;
          } else {
            e.position = o;
            e.line = p;
            e.lineStart = d;
            e.lineIndent = l;
            break;
          }
        }
        if (s) {
          captureSegment(e, i, o, false);
          writeFoldedLines(e, e.line - p);
          i = o = e.position;
          s = false;
        }
        if (!is_WHITE_SPACE(g)) {
          o = e.position + 1;
        }
        g = e.input.charCodeAt(++e.position);
      }
      captureSegment(e, i, o, false);
      if (e.result) {
        return true;
      }
      e.kind = m;
      e.result = c;
      return false;
    }
    function readSingleQuotedScalar(e, t) {
      var r, a, n;
      r = e.input.charCodeAt(e.position);
      if (r !== 39) {
        return false;
      }
      e.kind = 'scalar';
      e.result = '';
      e.position++;
      a = n = e.position;
      while ((r = e.input.charCodeAt(e.position)) !== 0) {
        if (r === 39) {
          captureSegment(e, a, e.position, true);
          r = e.input.charCodeAt(++e.position);
          if (r === 39) {
            a = e.position;
            e.position++;
            n = e.position;
          } else {
            return true;
          }
        } else if (is_EOL(r)) {
          captureSegment(e, a, n, true);
          writeFoldedLines(e, skipSeparationSpace(e, false, t));
          a = n = e.position;
        } else if (e.position === e.lineStart && testDocumentSeparator(e)) {
          throwError(e, 'unexpected end of the document within a single quoted scalar');
        } else {
          e.position++;
          n = e.position;
        }
      }
      throwError(e, 'unexpected end of the stream within a single quoted scalar');
    }
    function readDoubleQuotedScalar(e, t) {
      var r, a, n, i, o, s;
      s = e.input.charCodeAt(e.position);
      if (s !== 34) {
        return false;
      }
      e.kind = 'scalar';
      e.result = '';
      e.position++;
      r = a = e.position;
      while ((s = e.input.charCodeAt(e.position)) !== 0) {
        if (s === 34) {
          captureSegment(e, r, e.position, true);
          e.position++;
          return true;
        } else if (s === 92) {
          captureSegment(e, r, e.position, true);
          s = e.input.charCodeAt(++e.position);
          if (is_EOL(s)) {
            skipSeparationSpace(e, false, t);
          } else if (s < 256 && y[s]) {
            e.result += S[s];
            e.position++;
          } else if ((o = escapedHexLen(s)) > 0) {
            n = o;
            i = 0;
            for (; n > 0; n--) {
              s = e.input.charCodeAt(++e.position);
              if ((o = fromHexCode(s)) >= 0) {
                i = (i << 4) + o;
              } else {
                throwError(e, 'expected hexadecimal character');
              }
            }
            e.result += charFromCodepoint(i);
            e.position++;
          } else {
            throwError(e, 'unknown escape sequence');
          }
          r = a = e.position;
        } else if (is_EOL(s)) {
          captureSegment(e, r, a, true);
          writeFoldedLines(e, skipSeparationSpace(e, false, t));
          r = a = e.position;
        } else if (e.position === e.lineStart && testDocumentSeparator(e)) {
          throwError(e, 'unexpected end of the document within a double quoted scalar');
        } else {
          e.position++;
          a = e.position;
        }
      }
      throwError(e, 'unexpected end of the stream within a double quoted scalar');
    }
    function readFlowCollection(e, t) {
      var r = true,
        a,
        n = e.tag,
        i,
        o = e.anchor,
        s,
        p,
        l,
        m,
        c,
        g = {},
        v,
        T,
        E,
        _;
      _ = e.input.charCodeAt(e.position);
      if (_ === 91) {
        p = 93;
        c = false;
        i = [];
      } else if (_ === 123) {
        p = 125;
        c = true;
        i = {};
      } else {
        return false;
      }
      if (e.anchor !== null) {
        e.anchorMap[e.anchor] = i;
      }
      _ = e.input.charCodeAt(++e.position);
      while (_ !== 0) {
        skipSeparationSpace(e, true, t);
        _ = e.input.charCodeAt(e.position);
        if (_ === p) {
          e.position++;
          e.tag = n;
          e.anchor = o;
          e.kind = c ? 'mapping' : 'sequence';
          e.result = i;
          return true;
        } else if (!r) {
          throwError(e, 'missed comma between flow collection entries');
        }
        T = v = E = null;
        l = m = false;
        if (_ === 63) {
          s = e.input.charCodeAt(e.position + 1);
          if (is_WS_OR_EOL(s)) {
            l = m = true;
            e.position++;
            skipSeparationSpace(e, true, t);
          }
        }
        a = e.line;
        composeNode(e, t, d, false, true);
        T = e.tag;
        v = e.result;
        skipSeparationSpace(e, true, t);
        _ = e.input.charCodeAt(e.position);
        if ((m || e.line === a) && _ === 58) {
          l = true;
          _ = e.input.charCodeAt(++e.position);
          skipSeparationSpace(e, true, t);
          composeNode(e, t, d, false, true);
          E = e.result;
        }
        if (c) {
          storeMappingPair(e, i, g, T, v, E);
        } else if (l) {
          i.push(storeMappingPair(e, null, g, T, v, E));
        } else {
          i.push(v);
        }
        skipSeparationSpace(e, true, t);
        _ = e.input.charCodeAt(e.position);
        if (_ === 44) {
          r = true;
          _ = e.input.charCodeAt(++e.position);
        } else {
          r = false;
        }
      }
      throwError(e, 'unexpected end of the stream within a flow collection');
    }
    function readBlockScalar(e, t) {
      var r,
        n,
        i = g,
        o = false,
        s = false,
        p = t,
        d = 0,
        l = false,
        m,
        c;
      c = e.input.charCodeAt(e.position);
      if (c === 124) {
        n = false;
      } else if (c === 62) {
        n = true;
      } else {
        return false;
      }
      e.kind = 'scalar';
      e.result = '';
      while (c !== 0) {
        c = e.input.charCodeAt(++e.position);
        if (c === 43 || c === 45) {
          if (g === i) {
            i = c === 43 ? T : v;
          } else {
            throwError(e, 'repeat of a chomping mode identifier');
          }
        } else if ((m = fromDecimalCode(c)) >= 0) {
          if (m === 0) {
            throwError(
              e,
              'bad explicit indentation width of a block scalar; it cannot be less than one',
            );
          } else if (!s) {
            p = t + m - 1;
            s = true;
          } else {
            throwError(e, 'repeat of an indentation width identifier');
          }
        } else {
          break;
        }
      }
      if (is_WHITE_SPACE(c)) {
        do {
          c = e.input.charCodeAt(++e.position);
        } while (is_WHITE_SPACE(c));
        if (c === 35) {
          do {
            c = e.input.charCodeAt(++e.position);
          } while (!is_EOL(c) && c !== 0);
        }
      }
      while (c !== 0) {
        readLineBreak(e);
        e.lineIndent = 0;
        c = e.input.charCodeAt(e.position);
        while ((!s || e.lineIndent < p) && c === 32) {
          e.lineIndent++;
          c = e.input.charCodeAt(++e.position);
        }
        if (!s && e.lineIndent > p) {
          p = e.lineIndent;
        }
        if (is_EOL(c)) {
          d++;
          continue;
        }
        if (e.lineIndent < p) {
          if (i === T) {
            e.result += a.repeat('\n', o ? 1 + d : d);
          } else if (i === g) {
            if (o) {
              e.result += '\n';
            }
          }
          break;
        }
        if (n) {
          if (is_WHITE_SPACE(c)) {
            l = true;
            e.result += a.repeat('\n', o ? 1 + d : d);
          } else if (l) {
            l = false;
            e.result += a.repeat('\n', d + 1);
          } else if (d === 0) {
            if (o) {
              e.result += ' ';
            }
          } else {
            e.result += a.repeat('\n', d);
          }
        } else {
          e.result += a.repeat('\n', o ? 1 + d : d);
        }
        o = true;
        s = true;
        d = 0;
        r = e.position;
        while (!is_EOL(c) && c !== 0) {
          c = e.input.charCodeAt(++e.position);
        }
        captureSegment(e, r, e.position, false);
      }
      return true;
    }
    function readBlockSequence(e, t) {
      var r,
        a = e.tag,
        n = e.anchor,
        i = [],
        o,
        s = false,
        p;
      if (e.anchor !== null) {
        e.anchorMap[e.anchor] = i;
      }
      p = e.input.charCodeAt(e.position);
      while (p !== 0) {
        if (p !== 45) {
          break;
        }
        o = e.input.charCodeAt(e.position + 1);
        if (!is_WS_OR_EOL(o)) {
          break;
        }
        s = true;
        e.position++;
        if (skipSeparationSpace(e, true, -1)) {
          if (e.lineIndent <= t) {
            i.push(null);
            p = e.input.charCodeAt(e.position);
            continue;
          }
        }
        r = e.line;
        composeNode(e, t, m, false, true);
        i.push(e.result);
        skipSeparationSpace(e, true, -1);
        p = e.input.charCodeAt(e.position);
        if ((e.line === r || e.lineIndent > t) && p !== 0) {
          throwError(e, 'bad indentation of a sequence entry');
        } else if (e.lineIndent < t) {
          break;
        }
      }
      if (s) {
        e.tag = a;
        e.anchor = n;
        e.kind = 'sequence';
        e.result = i;
        return true;
      }
      return false;
    }
    function readBlockMapping(e, t, r) {
      var a,
        n,
        i,
        o,
        s = e.tag,
        p = e.anchor,
        d = {},
        m = {},
        g = null,
        v = null,
        T = null,
        E = false,
        _ = false,
        w;
      if (e.anchor !== null) {
        e.anchorMap[e.anchor] = d;
      }
      w = e.input.charCodeAt(e.position);
      while (w !== 0) {
        a = e.input.charCodeAt(e.position + 1);
        i = e.line;
        o = e.position;
        if ((w === 63 || w === 58) && is_WS_OR_EOL(a)) {
          if (w === 63) {
            if (E) {
              storeMappingPair(e, d, m, g, v, null);
              g = v = T = null;
            }
            _ = true;
            E = true;
            n = true;
          } else if (E) {
            E = false;
            n = true;
          } else {
            throwError(
              e,
              'incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line',
            );
          }
          e.position += 1;
          w = a;
        } else if (composeNode(e, r, l, false, true)) {
          if (e.line === i) {
            w = e.input.charCodeAt(e.position);
            while (is_WHITE_SPACE(w)) {
              w = e.input.charCodeAt(++e.position);
            }
            if (w === 58) {
              w = e.input.charCodeAt(++e.position);
              if (!is_WS_OR_EOL(w)) {
                throwError(
                  e,
                  'a whitespace character is expected after the key-value separator within a block mapping',
                );
              }
              if (E) {
                storeMappingPair(e, d, m, g, v, null);
                g = v = T = null;
              }
              _ = true;
              E = false;
              n = false;
              g = e.tag;
              v = e.result;
            } else if (_) {
              throwError(e, 'can not read an implicit mapping pair; a colon is missed');
            } else {
              e.tag = s;
              e.anchor = p;
              return true;
            }
          } else if (_) {
            throwError(
              e,
              'can not read a block mapping entry; a multiline key may not be an implicit key',
            );
          } else {
            e.tag = s;
            e.anchor = p;
            return true;
          }
        } else {
          break;
        }
        if (e.line === i || e.lineIndent > t) {
          if (composeNode(e, t, c, true, n)) {
            if (E) {
              v = e.result;
            } else {
              T = e.result;
            }
          }
          if (!E) {
            storeMappingPair(e, d, m, g, v, T, i, o);
            g = v = T = null;
          }
          skipSeparationSpace(e, true, -1);
          w = e.input.charCodeAt(e.position);
        }
        if (e.lineIndent > t && w !== 0) {
          throwError(e, 'bad indentation of a mapping entry');
        } else if (e.lineIndent < t) {
          break;
        }
      }
      if (E) {
        storeMappingPair(e, d, m, g, v, null);
      }
      if (_) {
        e.tag = s;
        e.anchor = p;
        e.kind = 'mapping';
        e.result = d;
      }
      return _;
    }
    function readTagProperty(e) {
      var t,
        r = false,
        a = false,
        n,
        i,
        o;
      o = e.input.charCodeAt(e.position);
      if (o !== 33) return false;
      if (e.tag !== null) {
        throwError(e, 'duplication of a tag property');
      }
      o = e.input.charCodeAt(++e.position);
      if (o === 60) {
        r = true;
        o = e.input.charCodeAt(++e.position);
      } else if (o === 33) {
        a = true;
        n = '!!';
        o = e.input.charCodeAt(++e.position);
      } else {
        n = '!';
      }
      t = e.position;
      if (r) {
        do {
          o = e.input.charCodeAt(++e.position);
        } while (o !== 0 && o !== 62);
        if (e.position < e.length) {
          i = e.input.slice(t, e.position);
          o = e.input.charCodeAt(++e.position);
        } else {
          throwError(e, 'unexpected end of the stream within a verbatim tag');
        }
      } else {
        while (o !== 0 && !is_WS_OR_EOL(o)) {
          if (o === 33) {
            if (!a) {
              n = e.input.slice(t - 1, e.position + 1);
              if (!A.test(n)) {
                throwError(e, 'named tag handle cannot contain such characters');
              }
              a = true;
              t = e.position + 1;
            } else {
              throwError(e, 'tag suffix cannot contain exclamation marks');
            }
          }
          o = e.input.charCodeAt(++e.position);
        }
        i = e.input.slice(t, e.position);
        if (w.test(i)) {
          throwError(e, 'tag suffix cannot contain flow indicator characters');
        }
      }
      if (i && !b.test(i)) {
        throwError(e, 'tag name cannot contain such characters: ' + i);
      }
      if (r) {
        e.tag = i;
      } else if (p.call(e.tagMap, n)) {
        e.tag = e.tagMap[n] + i;
      } else if (n === '!') {
        e.tag = '!' + i;
      } else if (n === '!!') {
        e.tag = 'tag:yaml.org,2002:' + i;
      } else {
        throwError(e, 'undeclared tag handle "' + n + '"');
      }
      return true;
    }
    function readAnchorProperty(e) {
      var t, r;
      r = e.input.charCodeAt(e.position);
      if (r !== 38) return false;
      if (e.anchor !== null) {
        throwError(e, 'duplication of an anchor property');
      }
      r = e.input.charCodeAt(++e.position);
      t = e.position;
      while (r !== 0 && !is_WS_OR_EOL(r) && !is_FLOW_INDICATOR(r)) {
        r = e.input.charCodeAt(++e.position);
      }
      if (e.position === t) {
        throwError(e, 'name of an anchor node must contain at least one character');
      }
      e.anchor = e.input.slice(t, e.position);
      return true;
    }
    function readAlias(e) {
      var t, r, a;
      a = e.input.charCodeAt(e.position);
      if (a !== 42) return false;
      a = e.input.charCodeAt(++e.position);
      t = e.position;
      while (a !== 0 && !is_WS_OR_EOL(a) && !is_FLOW_INDICATOR(a)) {
        a = e.input.charCodeAt(++e.position);
      }
      if (e.position === t) {
        throwError(e, 'name of an alias node must contain at least one character');
      }
      r = e.input.slice(t, e.position);
      if (!p.call(e.anchorMap, r)) {
        throwError(e, 'unidentified alias "' + r + '"');
      }
      e.result = e.anchorMap[r];
      skipSeparationSpace(e, true, -1);
      return true;
    }
    function composeNode(e, t, r, a, n) {
      var i,
        o,
        s,
        g = 1,
        v = false,
        T = false,
        E,
        _,
        w,
        A,
        b;
      if (e.listener !== null) {
        e.listener('open', e);
      }
      e.tag = null;
      e.anchor = null;
      e.kind = null;
      e.result = null;
      i = o = s = c === r || m === r;
      if (a) {
        if (skipSeparationSpace(e, true, -1)) {
          v = true;
          if (e.lineIndent > t) {
            g = 1;
          } else if (e.lineIndent === t) {
            g = 0;
          } else if (e.lineIndent < t) {
            g = -1;
          }
        }
      }
      if (g === 1) {
        while (readTagProperty(e) || readAnchorProperty(e)) {
          if (skipSeparationSpace(e, true, -1)) {
            v = true;
            s = i;
            if (e.lineIndent > t) {
              g = 1;
            } else if (e.lineIndent === t) {
              g = 0;
            } else if (e.lineIndent < t) {
              g = -1;
            }
          } else {
            s = false;
          }
        }
      }
      if (s) {
        s = v || n;
      }
      if (g === 1 || c === r) {
        if (d === r || l === r) {
          A = t;
        } else {
          A = t + 1;
        }
        b = e.position - e.lineStart;
        if (g === 1) {
          if (
            (s && (readBlockSequence(e, b) || readBlockMapping(e, b, A))) ||
            readFlowCollection(e, A)
          ) {
            T = true;
          } else {
            if (
              (o && readBlockScalar(e, A)) ||
              readSingleQuotedScalar(e, A) ||
              readDoubleQuotedScalar(e, A)
            ) {
              T = true;
            } else if (readAlias(e)) {
              T = true;
              if (e.tag !== null || e.anchor !== null) {
                throwError(e, 'alias node should not have any properties');
              }
            } else if (readPlainScalar(e, A, d === r)) {
              T = true;
              if (e.tag === null) {
                e.tag = '?';
              }
            }
            if (e.anchor !== null) {
              e.anchorMap[e.anchor] = e.result;
            }
          }
        } else if (g === 0) {
          T = s && readBlockSequence(e, b);
        }
      }
      if (e.tag !== null && e.tag !== '!') {
        if (e.tag === '?') {
          if (e.result !== null && e.kind !== 'scalar') {
            throwError(
              e,
              'unacceptable node kind for !<?> tag; it should be "scalar", not "' + e.kind + '"',
            );
          }
          for (E = 0, _ = e.implicitTypes.length; E < _; E += 1) {
            w = e.implicitTypes[E];
            if (w.resolve(e.result)) {
              e.result = w.construct(e.result);
              e.tag = w.tag;
              if (e.anchor !== null) {
                e.anchorMap[e.anchor] = e.result;
              }
              break;
            }
          }
        } else if (p.call(e.typeMap[e.kind || 'fallback'], e.tag)) {
          w = e.typeMap[e.kind || 'fallback'][e.tag];
          if (e.result !== null && w.kind !== e.kind) {
            throwError(
              e,
              'unacceptable node kind for !<' +
                e.tag +
                '> tag; it should be "' +
                w.kind +
                '", not "' +
                e.kind +
                '"',
            );
          }
          if (!w.resolve(e.result)) {
            throwError(e, 'cannot resolve a node with !<' + e.tag + '> explicit tag');
          } else {
            e.result = w.construct(e.result);
            if (e.anchor !== null) {
              e.anchorMap[e.anchor] = e.result;
            }
          }
        } else {
          throwError(e, 'unknown tag !<' + e.tag + '>');
        }
      }
      if (e.listener !== null) {
        e.listener('close', e);
      }
      return e.tag !== null || e.anchor !== null || T;
    }
    function readDocument(e) {
      var t = e.position,
        r,
        a,
        n,
        i = false,
        o;
      e.version = null;
      e.checkLineBreaks = e.legacy;
      e.tagMap = {};
      e.anchorMap = {};
      while ((o = e.input.charCodeAt(e.position)) !== 0) {
        skipSeparationSpace(e, true, -1);
        o = e.input.charCodeAt(e.position);
        if (e.lineIndent > 0 || o !== 37) {
          break;
        }
        i = true;
        o = e.input.charCodeAt(++e.position);
        r = e.position;
        while (o !== 0 && !is_WS_OR_EOL(o)) {
          o = e.input.charCodeAt(++e.position);
        }
        a = e.input.slice(r, e.position);
        n = [];
        if (a.length < 1) {
          throwError(e, 'directive name must not be less than one character in length');
        }
        while (o !== 0) {
          while (is_WHITE_SPACE(o)) {
            o = e.input.charCodeAt(++e.position);
          }
          if (o === 35) {
            do {
              o = e.input.charCodeAt(++e.position);
            } while (o !== 0 && !is_EOL(o));
            break;
          }
          if (is_EOL(o)) break;
          r = e.position;
          while (o !== 0 && !is_WS_OR_EOL(o)) {
            o = e.input.charCodeAt(++e.position);
          }
          n.push(e.input.slice(r, e.position));
        }
        if (o !== 0) readLineBreak(e);
        if (p.call(k, a)) {
          k[a](e, a, n);
        } else {
          throwWarning(e, 'unknown document directive "' + a + '"');
        }
      }
      skipSeparationSpace(e, true, -1);
      if (
        e.lineIndent === 0 &&
        e.input.charCodeAt(e.position) === 45 &&
        e.input.charCodeAt(e.position + 1) === 45 &&
        e.input.charCodeAt(e.position + 2) === 45
      ) {
        e.position += 3;
        skipSeparationSpace(e, true, -1);
      } else if (i) {
        throwError(e, 'directives end mark is expected');
      }
      composeNode(e, e.lineIndent - 1, c, false, true);
      skipSeparationSpace(e, true, -1);
      if (e.checkLineBreaks && _.test(e.input.slice(t, e.position))) {
        throwWarning(e, 'non-ASCII line breaks are interpreted as content');
      }
      e.documents.push(e.result);
      if (e.position === e.lineStart && testDocumentSeparator(e)) {
        if (e.input.charCodeAt(e.position) === 46) {
          e.position += 3;
          skipSeparationSpace(e, true, -1);
        }
        return;
      }
      if (e.position < e.length - 1) {
        throwError(e, 'end of the stream or a document separator is expected');
      } else {
        return;
      }
    }
    function loadDocuments(e, t) {
      e = String(e);
      t = t || {};
      if (e.length !== 0) {
        if (e.charCodeAt(e.length - 1) !== 10 && e.charCodeAt(e.length - 1) !== 13) {
          e += '\n';
        }
        if (e.charCodeAt(0) === 65279) {
          e = e.slice(1);
        }
      }
      var r = new State(e, t);
      var a = e.indexOf('\0');
      if (a !== -1) {
        r.position = a;
        throwError(r, 'null byte is not allowed in input');
      }
      r.input += '\0';
      while (r.input.charCodeAt(r.position) === 32) {
        r.lineIndent += 1;
        r.position += 1;
      }
      while (r.position < r.length - 1) {
        readDocument(r);
      }
      return r.documents;
    }
    function loadAll(e, t, r) {
      if (t !== null && typeof t === 'object' && typeof r === 'undefined') {
        r = t;
        t = null;
      }
      var a = loadDocuments(e, r);
      if (typeof t !== 'function') {
        return a;
      }
      for (var n = 0, i = a.length; n < i; n += 1) {
        t(a[n]);
      }
    }
    function load(e, t) {
      var r = loadDocuments(e, t);
      if (r.length === 0) {
        return undefined;
      } else if (r.length === 1) {
        return r[0];
      }
      throw new n('expected a single document in the stream, but found more');
    }
    function safeLoadAll(e, t, r) {
      if (typeof t === 'object' && t !== null && typeof r === 'undefined') {
        r = t;
        t = null;
      }
      return loadAll(e, t, a.extend({ schema: o }, r));
    }
    function safeLoad(e, t) {
      return load(e, a.extend({ schema: o }, t));
    }
    e.exports.loadAll = loadAll;
    e.exports.load = load;
    e.exports.safeLoadAll = safeLoadAll;
    e.exports.safeLoad = safeLoad;
  },
  5426: (e, t, r) => {
    var a = r(9136);
    function Mark(e, t, r, a, n) {
      this.name = e;
      this.buffer = t;
      this.position = r;
      this.line = a;
      this.column = n;
    }
    Mark.prototype.getSnippet = function getSnippet(e, t) {
      var r, n, i, o, s;
      if (!this.buffer) return null;
      e = e || 4;
      t = t || 75;
      r = '';
      n = this.position;
      while (n > 0 && '\0\r\n\u2028\u2029'.indexOf(this.buffer.charAt(n - 1)) === -1) {
        n -= 1;
        if (this.position - n > t / 2 - 1) {
          r = ' ... ';
          n += 5;
          break;
        }
      }
      i = '';
      o = this.position;
      while (o < this.buffer.length && '\0\r\n\u2028\u2029'.indexOf(this.buffer.charAt(o)) === -1) {
        o += 1;
        if (o - this.position > t / 2 - 1) {
          i = ' ... ';
          o -= 5;
          break;
        }
      }
      s = this.buffer.slice(n, o);
      return (
        a.repeat(' ', e) + r + s + i + '\n' + a.repeat(' ', e + this.position - n + r.length) + '^'
      );
    };
    Mark.prototype.toString = function toString(e) {
      var t,
        r = '';
      if (this.name) {
        r += 'in "' + this.name + '" ';
      }
      r += 'at line ' + (this.line + 1) + ', column ' + (this.column + 1);
      if (!e) {
        t = this.getSnippet();
        if (t) {
          r += ':\n' + t;
        }
      }
      return r;
    };
    e.exports = Mark;
  },
  6514: (e, t, r) => {
    var a = r(9136);
    var n = r(5199);
    var i = r(967);
    function compileList(e, t, r) {
      var a = [];
      e.include.forEach(function (e) {
        r = compileList(e, t, r);
      });
      e[t].forEach(function (e) {
        r.forEach(function (t, r) {
          if (t.tag === e.tag && t.kind === e.kind) {
            a.push(r);
          }
        });
        r.push(e);
      });
      return r.filter(function (e, t) {
        return a.indexOf(t) === -1;
      });
    }
    function compileMap() {
      var e = { scalar: {}, sequence: {}, mapping: {}, fallback: {} },
        t,
        r;
      function collectType(t) {
        e[t.kind][t.tag] = e['fallback'][t.tag] = t;
      }
      for (t = 0, r = arguments.length; t < r; t += 1) {
        arguments[t].forEach(collectType);
      }
      return e;
    }
    function Schema(e) {
      this.include = e.include || [];
      this.implicit = e.implicit || [];
      this.explicit = e.explicit || [];
      this.implicit.forEach(function (e) {
        if (e.loadKind && e.loadKind !== 'scalar') {
          throw new n(
            'There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.',
          );
        }
      });
      this.compiledImplicit = compileList(this, 'implicit', []);
      this.compiledExplicit = compileList(this, 'explicit', []);
      this.compiledTypeMap = compileMap(this.compiledImplicit, this.compiledExplicit);
    }
    Schema.DEFAULT = null;
    Schema.create = function createSchema() {
      var e, t;
      switch (arguments.length) {
        case 1:
          e = Schema.DEFAULT;
          t = arguments[0];
          break;
        case 2:
          e = arguments[0];
          t = arguments[1];
          break;
        default:
          throw new n('Wrong number of arguments for Schema.create function');
      }
      e = a.toArray(e);
      t = a.toArray(t);
      if (
        !e.every(function (e) {
          return e instanceof Schema;
        })
      ) {
        throw new n(
          'Specified list of super schemas (or a single Schema object) contains a non-Schema object.',
        );
      }
      if (
        !t.every(function (e) {
          return e instanceof i;
        })
      ) {
        throw new n(
          'Specified list of YAML types (or a single Type object) contains a non-Type object.',
        );
      }
      return new Schema({ include: e, explicit: t });
    };
    e.exports = Schema;
  },
  2183: (e, t, r) => {
    var a = r(6514);
    e.exports = new a({ include: [r(1571)] });
  },
  6874: (e, t, r) => {
    var a = r(6514);
    e.exports = a.DEFAULT = new a({ include: [r(8949)], explicit: [r(5914), r(9242), r(7278)] });
  },
  8949: (e, t, r) => {
    var a = r(6514);
    e.exports = new a({
      include: [r(2183)],
      implicit: [r(3714), r(1393)],
      explicit: [r(2551), r(6668), r(6039), r(9237)],
    });
  },
  6037: (e, t, r) => {
    var a = r(6514);
    e.exports = new a({ explicit: [r(2672), r(5490), r(1173)] });
  },
  1571: (e, t, r) => {
    var a = r(6514);
    e.exports = new a({ include: [r(6037)], implicit: [r(2671), r(4675), r(9963), r(5564)] });
  },
  967: (e, t, r) => {
    var a = r(5199);
    var n = [
      'kind',
      'resolve',
      'construct',
      'instanceOf',
      'predicate',
      'represent',
      'defaultStyle',
      'styleAliases',
    ];
    var i = ['scalar', 'sequence', 'mapping'];
    function compileStyleAliases(e) {
      var t = {};
      if (e !== null) {
        Object.keys(e).forEach(function (r) {
          e[r].forEach(function (e) {
            t[String(e)] = r;
          });
        });
      }
      return t;
    }
    function Type(e, t) {
      t = t || {};
      Object.keys(t).forEach(function (t) {
        if (n.indexOf(t) === -1) {
          throw new a('Unknown option "' + t + '" is met in definition of "' + e + '" YAML type.');
        }
      });
      this.tag = e;
      this.kind = t['kind'] || null;
      this.resolve =
        t['resolve'] ||
        function () {
          return true;
        };
      this.construct =
        t['construct'] ||
        function (e) {
          return e;
        };
      this.instanceOf = t['instanceOf'] || null;
      this.predicate = t['predicate'] || null;
      this.represent = t['represent'] || null;
      this.defaultStyle = t['defaultStyle'] || null;
      this.styleAliases = compileStyleAliases(t['styleAliases'] || null);
      if (i.indexOf(this.kind) === -1) {
        throw new a('Unknown kind "' + this.kind + '" is specified for "' + e + '" YAML type.');
      }
    }
    e.exports = Type;
  },
  2551: (e, t, r) => {
    var a;
    try {
      var n = require;
      a = n('buffer').Buffer;
    } catch (e) {}
    var i = r(967);
    var o = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r';
    function resolveYamlBinary(e) {
      if (e === null) return false;
      var t,
        r,
        a = 0,
        n = e.length,
        i = o;
      for (r = 0; r < n; r++) {
        t = i.indexOf(e.charAt(r));
        if (t > 64) continue;
        if (t < 0) return false;
        a += 6;
      }
      return a % 8 === 0;
    }
    function constructYamlBinary(e) {
      var t,
        r,
        n = e.replace(/[\r\n=]/g, ''),
        i = n.length,
        s = o,
        p = 0,
        d = [];
      for (t = 0; t < i; t++) {
        if (t % 4 === 0 && t) {
          d.push((p >> 16) & 255);
          d.push((p >> 8) & 255);
          d.push(p & 255);
        }
        p = (p << 6) | s.indexOf(n.charAt(t));
      }
      r = (i % 4) * 6;
      if (r === 0) {
        d.push((p >> 16) & 255);
        d.push((p >> 8) & 255);
        d.push(p & 255);
      } else if (r === 18) {
        d.push((p >> 10) & 255);
        d.push((p >> 2) & 255);
      } else if (r === 12) {
        d.push((p >> 4) & 255);
      }
      if (a) {
        return a.from ? a.from(d) : new a(d);
      }
      return d;
    }
    function representYamlBinary(e) {
      var t = '',
        r = 0,
        a,
        n,
        i = e.length,
        s = o;
      for (a = 0; a < i; a++) {
        if (a % 3 === 0 && a) {
          t += s[(r >> 18) & 63];
          t += s[(r >> 12) & 63];
          t += s[(r >> 6) & 63];
          t += s[r & 63];
        }
        r = (r << 8) + e[a];
      }
      n = i % 3;
      if (n === 0) {
        t += s[(r >> 18) & 63];
        t += s[(r >> 12) & 63];
        t += s[(r >> 6) & 63];
        t += s[r & 63];
      } else if (n === 2) {
        t += s[(r >> 10) & 63];
        t += s[(r >> 4) & 63];
        t += s[(r << 2) & 63];
        t += s[64];
      } else if (n === 1) {
        t += s[(r >> 2) & 63];
        t += s[(r << 4) & 63];
        t += s[64];
        t += s[64];
      }
      return t;
    }
    function isBinary(e) {
      return a && a.isBuffer(e);
    }
    e.exports = new i('tag:yaml.org,2002:binary', {
      kind: 'scalar',
      resolve: resolveYamlBinary,
      construct: constructYamlBinary,
      predicate: isBinary,
      represent: representYamlBinary,
    });
  },
  4675: (e, t, r) => {
    var a = r(967);
    function resolveYamlBoolean(e) {
      if (e === null) return false;
      var t = e.length;
      return (
        (t === 4 && (e === 'true' || e === 'True' || e === 'TRUE')) ||
        (t === 5 && (e === 'false' || e === 'False' || e === 'FALSE'))
      );
    }
    function constructYamlBoolean(e) {
      return e === 'true' || e === 'True' || e === 'TRUE';
    }
    function isBoolean(e) {
      return Object.prototype.toString.call(e) === '[object Boolean]';
    }
    e.exports = new a('tag:yaml.org,2002:bool', {
      kind: 'scalar',
      resolve: resolveYamlBoolean,
      construct: constructYamlBoolean,
      predicate: isBoolean,
      represent: {
        lowercase: function (e) {
          return e ? 'true' : 'false';
        },
        uppercase: function (e) {
          return e ? 'TRUE' : 'FALSE';
        },
        camelcase: function (e) {
          return e ? 'True' : 'False';
        },
      },
      defaultStyle: 'lowercase',
    });
  },
  5564: (e, t, r) => {
    var a = r(9136);
    var n = r(967);
    var i = new RegExp(
      '^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?' +
        '|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?' +
        '|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*' +
        '|[-+]?\\.(?:inf|Inf|INF)' +
        '|\\.(?:nan|NaN|NAN))$',
    );
    function resolveYamlFloat(e) {
      if (e === null) return false;
      if (!i.test(e) || e[e.length - 1] === '_') {
        return false;
      }
      return true;
    }
    function constructYamlFloat(e) {
      var t, r, a, n;
      t = e.replace(/_/g, '').toLowerCase();
      r = t[0] === '-' ? -1 : 1;
      n = [];
      if ('+-'.indexOf(t[0]) >= 0) {
        t = t.slice(1);
      }
      if (t === '.inf') {
        return r === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
      } else if (t === '.nan') {
        return NaN;
      } else if (t.indexOf(':') >= 0) {
        t.split(':').forEach(function (e) {
          n.unshift(parseFloat(e, 10));
        });
        t = 0;
        a = 1;
        n.forEach(function (e) {
          t += e * a;
          a *= 60;
        });
        return r * t;
      }
      return r * parseFloat(t, 10);
    }
    var o = /^[-+]?[0-9]+e/;
    function representYamlFloat(e, t) {
      var r;
      if (isNaN(e)) {
        switch (t) {
          case 'lowercase':
            return '.nan';
          case 'uppercase':
            return '.NAN';
          case 'camelcase':
            return '.NaN';
        }
      } else if (Number.POSITIVE_INFINITY === e) {
        switch (t) {
          case 'lowercase':
            return '.inf';
          case 'uppercase':
            return '.INF';
          case 'camelcase':
            return '.Inf';
        }
      } else if (Number.NEGATIVE_INFINITY === e) {
        switch (t) {
          case 'lowercase':
            return '-.inf';
          case 'uppercase':
            return '-.INF';
          case 'camelcase':
            return '-.Inf';
        }
      } else if (a.isNegativeZero(e)) {
        return '-0.0';
      }
      r = e.toString(10);
      return o.test(r) ? r.replace('e', '.e') : r;
    }
    function isFloat(e) {
      return (
        Object.prototype.toString.call(e) === '[object Number]' &&
        (e % 1 !== 0 || a.isNegativeZero(e))
      );
    }
    e.exports = new n('tag:yaml.org,2002:float', {
      kind: 'scalar',
      resolve: resolveYamlFloat,
      construct: constructYamlFloat,
      predicate: isFloat,
      represent: representYamlFloat,
      defaultStyle: 'lowercase',
    });
  },
  9963: (e, t, r) => {
    var a = r(9136);
    var n = r(967);
    function isHexCode(e) {
      return (48 <= e && e <= 57) || (65 <= e && e <= 70) || (97 <= e && e <= 102);
    }
    function isOctCode(e) {
      return 48 <= e && e <= 55;
    }
    function isDecCode(e) {
      return 48 <= e && e <= 57;
    }
    function resolveYamlInteger(e) {
      if (e === null) return false;
      var t = e.length,
        r = 0,
        a = false,
        n;
      if (!t) return false;
      n = e[r];
      if (n === '-' || n === '+') {
        n = e[++r];
      }
      if (n === '0') {
        if (r + 1 === t) return true;
        n = e[++r];
        if (n === 'b') {
          r++;
          for (; r < t; r++) {
            n = e[r];
            if (n === '_') continue;
            if (n !== '0' && n !== '1') return false;
            a = true;
          }
          return a && n !== '_';
        }
        if (n === 'x') {
          r++;
          for (; r < t; r++) {
            n = e[r];
            if (n === '_') continue;
            if (!isHexCode(e.charCodeAt(r))) return false;
            a = true;
          }
          return a && n !== '_';
        }
        for (; r < t; r++) {
          n = e[r];
          if (n === '_') continue;
          if (!isOctCode(e.charCodeAt(r))) return false;
          a = true;
        }
        return a && n !== '_';
      }
      if (n === '_') return false;
      for (; r < t; r++) {
        n = e[r];
        if (n === '_') continue;
        if (n === ':') break;
        if (!isDecCode(e.charCodeAt(r))) {
          return false;
        }
        a = true;
      }
      if (!a || n === '_') return false;
      if (n !== ':') return true;
      return /^(:[0-5]?[0-9])+$/.test(e.slice(r));
    }
    function constructYamlInteger(e) {
      var t = e,
        r = 1,
        a,
        n,
        i = [];
      if (t.indexOf('_') !== -1) {
        t = t.replace(/_/g, '');
      }
      a = t[0];
      if (a === '-' || a === '+') {
        if (a === '-') r = -1;
        t = t.slice(1);
        a = t[0];
      }
      if (t === '0') return 0;
      if (a === '0') {
        if (t[1] === 'b') return r * parseInt(t.slice(2), 2);
        if (t[1] === 'x') return r * parseInt(t, 16);
        return r * parseInt(t, 8);
      }
      if (t.indexOf(':') !== -1) {
        t.split(':').forEach(function (e) {
          i.unshift(parseInt(e, 10));
        });
        t = 0;
        n = 1;
        i.forEach(function (e) {
          t += e * n;
          n *= 60;
        });
        return r * t;
      }
      return r * parseInt(t, 10);
    }
    function isInteger(e) {
      return (
        Object.prototype.toString.call(e) === '[object Number]' &&
        e % 1 === 0 &&
        !a.isNegativeZero(e)
      );
    }
    e.exports = new n('tag:yaml.org,2002:int', {
      kind: 'scalar',
      resolve: resolveYamlInteger,
      construct: constructYamlInteger,
      predicate: isInteger,
      represent: {
        binary: function (e) {
          return e >= 0 ? '0b' + e.toString(2) : '-0b' + e.toString(2).slice(1);
        },
        octal: function (e) {
          return e >= 0 ? '0' + e.toString(8) : '-0' + e.toString(8).slice(1);
        },
        decimal: function (e) {
          return e.toString(10);
        },
        hexadecimal: function (e) {
          return e >= 0
            ? '0x' + e.toString(16).toUpperCase()
            : '-0x' + e.toString(16).toUpperCase().slice(1);
        },
      },
      defaultStyle: 'decimal',
      styleAliases: {
        binary: [2, 'bin'],
        octal: [8, 'oct'],
        decimal: [10, 'dec'],
        hexadecimal: [16, 'hex'],
      },
    });
  },
  7278: (e, t, r) => {
    var a;
    try {
      var n = require;
      a = n('esprima');
    } catch (e) {
      if (typeof window !== 'undefined') a = window.esprima;
    }
    var i = r(967);
    function resolveJavascriptFunction(e) {
      if (e === null) return false;
      try {
        var t = '(' + e + ')',
          r = a.parse(t, { range: true });
        if (
          r.type !== 'Program' ||
          r.body.length !== 1 ||
          r.body[0].type !== 'ExpressionStatement' ||
          (r.body[0].expression.type !== 'ArrowFunctionExpression' &&
            r.body[0].expression.type !== 'FunctionExpression')
        ) {
          return false;
        }
        return true;
      } catch (e) {
        return false;
      }
    }
    function constructJavascriptFunction(e) {
      var t = '(' + e + ')',
        r = a.parse(t, { range: true }),
        n = [],
        i;
      if (
        r.type !== 'Program' ||
        r.body.length !== 1 ||
        r.body[0].type !== 'ExpressionStatement' ||
        (r.body[0].expression.type !== 'ArrowFunctionExpression' &&
          r.body[0].expression.type !== 'FunctionExpression')
      ) {
        throw new Error('Failed to resolve function');
      }
      r.body[0].expression.params.forEach(function (e) {
        n.push(e.name);
      });
      i = r.body[0].expression.body.range;
      if (r.body[0].expression.body.type === 'BlockStatement') {
        return new Function(n, t.slice(i[0] + 1, i[1] - 1));
      }
      return new Function(n, 'return ' + t.slice(i[0], i[1]));
    }
    function representJavascriptFunction(e) {
      return e.toString();
    }
    function isFunction(e) {
      return Object.prototype.toString.call(e) === '[object Function]';
    }
    e.exports = new i('tag:yaml.org,2002:js/function', {
      kind: 'scalar',
      resolve: resolveJavascriptFunction,
      construct: constructJavascriptFunction,
      predicate: isFunction,
      represent: representJavascriptFunction,
    });
  },
  9242: (e, t, r) => {
    var a = r(967);
    function resolveJavascriptRegExp(e) {
      if (e === null) return false;
      if (e.length === 0) return false;
      var t = e,
        r = /\/([gim]*)$/.exec(e),
        a = '';
      if (t[0] === '/') {
        if (r) a = r[1];
        if (a.length > 3) return false;
        if (t[t.length - a.length - 1] !== '/') return false;
      }
      return true;
    }
    function constructJavascriptRegExp(e) {
      var t = e,
        r = /\/([gim]*)$/.exec(e),
        a = '';
      if (t[0] === '/') {
        if (r) a = r[1];
        t = t.slice(1, t.length - a.length - 1);
      }
      return new RegExp(t, a);
    }
    function representJavascriptRegExp(e) {
      var t = '/' + e.source + '/';
      if (e.global) t += 'g';
      if (e.multiline) t += 'm';
      if (e.ignoreCase) t += 'i';
      return t;
    }
    function isRegExp(e) {
      return Object.prototype.toString.call(e) === '[object RegExp]';
    }
    e.exports = new a('tag:yaml.org,2002:js/regexp', {
      kind: 'scalar',
      resolve: resolveJavascriptRegExp,
      construct: constructJavascriptRegExp,
      predicate: isRegExp,
      represent: representJavascriptRegExp,
    });
  },
  5914: (e, t, r) => {
    var a = r(967);
    function resolveJavascriptUndefined() {
      return true;
    }
    function constructJavascriptUndefined() {
      return undefined;
    }
    function representJavascriptUndefined() {
      return '';
    }
    function isUndefined(e) {
      return typeof e === 'undefined';
    }
    e.exports = new a('tag:yaml.org,2002:js/undefined', {
      kind: 'scalar',
      resolve: resolveJavascriptUndefined,
      construct: constructJavascriptUndefined,
      predicate: isUndefined,
      represent: representJavascriptUndefined,
    });
  },
  1173: (e, t, r) => {
    var a = r(967);
    e.exports = new a('tag:yaml.org,2002:map', {
      kind: 'mapping',
      construct: function (e) {
        return e !== null ? e : {};
      },
    });
  },
  1393: (e, t, r) => {
    var a = r(967);
    function resolveYamlMerge(e) {
      return e === '<<' || e === null;
    }
    e.exports = new a('tag:yaml.org,2002:merge', { kind: 'scalar', resolve: resolveYamlMerge });
  },
  2671: (e, t, r) => {
    var a = r(967);
    function resolveYamlNull(e) {
      if (e === null) return true;
      var t = e.length;
      return (t === 1 && e === '~') || (t === 4 && (e === 'null' || e === 'Null' || e === 'NULL'));
    }
    function constructYamlNull() {
      return null;
    }
    function isNull(e) {
      return e === null;
    }
    e.exports = new a('tag:yaml.org,2002:null', {
      kind: 'scalar',
      resolve: resolveYamlNull,
      construct: constructYamlNull,
      predicate: isNull,
      represent: {
        canonical: function () {
          return '~';
        },
        lowercase: function () {
          return 'null';
        },
        uppercase: function () {
          return 'NULL';
        },
        camelcase: function () {
          return 'Null';
        },
      },
      defaultStyle: 'lowercase',
    });
  },
  6668: (e, t, r) => {
    var a = r(967);
    var n = Object.prototype.hasOwnProperty;
    var i = Object.prototype.toString;
    function resolveYamlOmap(e) {
      if (e === null) return true;
      var t = [],
        r,
        a,
        o,
        s,
        p,
        d = e;
      for (r = 0, a = d.length; r < a; r += 1) {
        o = d[r];
        p = false;
        if (i.call(o) !== '[object Object]') return false;
        for (s in o) {
          if (n.call(o, s)) {
            if (!p) p = true;
            else return false;
          }
        }
        if (!p) return false;
        if (t.indexOf(s) === -1) t.push(s);
        else return false;
      }
      return true;
    }
    function constructYamlOmap(e) {
      return e !== null ? e : [];
    }
    e.exports = new a('tag:yaml.org,2002:omap', {
      kind: 'sequence',
      resolve: resolveYamlOmap,
      construct: constructYamlOmap,
    });
  },
  6039: (e, t, r) => {
    var a = r(967);
    var n = Object.prototype.toString;
    function resolveYamlPairs(e) {
      if (e === null) return true;
      var t,
        r,
        a,
        i,
        o,
        s = e;
      o = new Array(s.length);
      for (t = 0, r = s.length; t < r; t += 1) {
        a = s[t];
        if (n.call(a) !== '[object Object]') return false;
        i = Object.keys(a);
        if (i.length !== 1) return false;
        o[t] = [i[0], a[i[0]]];
      }
      return true;
    }
    function constructYamlPairs(e) {
      if (e === null) return [];
      var t,
        r,
        a,
        n,
        i,
        o = e;
      i = new Array(o.length);
      for (t = 0, r = o.length; t < r; t += 1) {
        a = o[t];
        n = Object.keys(a);
        i[t] = [n[0], a[n[0]]];
      }
      return i;
    }
    e.exports = new a('tag:yaml.org,2002:pairs', {
      kind: 'sequence',
      resolve: resolveYamlPairs,
      construct: constructYamlPairs,
    });
  },
  5490: (e, t, r) => {
    var a = r(967);
    e.exports = new a('tag:yaml.org,2002:seq', {
      kind: 'sequence',
      construct: function (e) {
        return e !== null ? e : [];
      },
    });
  },
  9237: (e, t, r) => {
    var a = r(967);
    var n = Object.prototype.hasOwnProperty;
    function resolveYamlSet(e) {
      if (e === null) return true;
      var t,
        r = e;
      for (t in r) {
        if (n.call(r, t)) {
          if (r[t] !== null) return false;
        }
      }
      return true;
    }
    function constructYamlSet(e) {
      return e !== null ? e : {};
    }
    e.exports = new a('tag:yaml.org,2002:set', {
      kind: 'mapping',
      resolve: resolveYamlSet,
      construct: constructYamlSet,
    });
  },
  2672: (e, t, r) => {
    var a = r(967);
    e.exports = new a('tag:yaml.org,2002:str', {
      kind: 'scalar',
      construct: function (e) {
        return e !== null ? e : '';
      },
    });
  },
  3714: (e, t, r) => {
    var a = r(967);
    var n = new RegExp('^([0-9][0-9][0-9][0-9])' + '-([0-9][0-9])' + '-([0-9][0-9])$');
    var i = new RegExp(
      '^([0-9][0-9][0-9][0-9])' +
        '-([0-9][0-9]?)' +
        '-([0-9][0-9]?)' +
        '(?:[Tt]|[ \\t]+)' +
        '([0-9][0-9]?)' +
        ':([0-9][0-9])' +
        ':([0-9][0-9])' +
        '(?:\\.([0-9]*))?' +
        '(?:[ \\t]*(Z|([-+])([0-9][0-9]?)' +
        '(?::([0-9][0-9]))?))?$',
    );
    function resolveYamlTimestamp(e) {
      if (e === null) return false;
      if (n.exec(e) !== null) return true;
      if (i.exec(e) !== null) return true;
      return false;
    }
    function constructYamlTimestamp(e) {
      var t,
        r,
        a,
        o,
        s,
        p,
        d,
        l = 0,
        m = null,
        c,
        g,
        v;
      t = n.exec(e);
      if (t === null) t = i.exec(e);
      if (t === null) throw new Error('Date resolve error');
      r = +t[1];
      a = +t[2] - 1;
      o = +t[3];
      if (!t[4]) {
        return new Date(Date.UTC(r, a, o));
      }
      s = +t[4];
      p = +t[5];
      d = +t[6];
      if (t[7]) {
        l = t[7].slice(0, 3);
        while (l.length < 3) {
          l += '0';
        }
        l = +l;
      }
      if (t[9]) {
        c = +t[10];
        g = +(t[11] || 0);
        m = (c * 60 + g) * 6e4;
        if (t[9] === '-') m = -m;
      }
      v = new Date(Date.UTC(r, a, o, s, p, d, l));
      if (m) v.setTime(v.getTime() - m);
      return v;
    }
    function representYamlTimestamp(e) {
      return e.toISOString();
    }
    e.exports = new a('tag:yaml.org,2002:timestamp', {
      kind: 'scalar',
      resolve: resolveYamlTimestamp,
      construct: constructYamlTimestamp,
      instanceOf: Date,
      represent: representYamlTimestamp,
    });
  },
  6961: (e) => {
    var t = Object.prototype.toString;
    e.exports = function kindOf(e) {
      if (e === void 0) return 'undefined';
      if (e === null) return 'null';
      var r = typeof e;
      if (r === 'boolean') return 'boolean';
      if (r === 'string') return 'string';
      if (r === 'number') return 'number';
      if (r === 'symbol') return 'symbol';
      if (r === 'function') {
        return isGeneratorFn(e) ? 'generatorfunction' : 'function';
      }
      if (isArray(e)) return 'array';
      if (isBuffer(e)) return 'buffer';
      if (isArguments(e)) return 'arguments';
      if (isDate(e)) return 'date';
      if (isError(e)) return 'error';
      if (isRegexp(e)) return 'regexp';
      switch (ctorName(e)) {
        case 'Symbol':
          return 'symbol';
        case 'Promise':
          return 'promise';
        case 'WeakMap':
          return 'weakmap';
        case 'WeakSet':
          return 'weakset';
        case 'Map':
          return 'map';
        case 'Set':
          return 'set';
        case 'Int8Array':
          return 'int8array';
        case 'Uint8Array':
          return 'uint8array';
        case 'Uint8ClampedArray':
          return 'uint8clampedarray';
        case 'Int16Array':
          return 'int16array';
        case 'Uint16Array':
          return 'uint16array';
        case 'Int32Array':
          return 'int32array';
        case 'Uint32Array':
          return 'uint32array';
        case 'Float32Array':
          return 'float32array';
        case 'Float64Array':
          return 'float64array';
      }
      if (isGeneratorObj(e)) {
        return 'generator';
      }
      r = t.call(e);
      switch (r) {
        case '[object Object]':
          return 'object';
        case '[object Map Iterator]':
          return 'mapiterator';
        case '[object Set Iterator]':
          return 'setiterator';
        case '[object String Iterator]':
          return 'stringiterator';
        case '[object Array Iterator]':
          return 'arrayiterator';
      }
      return r.slice(8, -1).toLowerCase().replace(/\s/g, '');
    };
    function ctorName(e) {
      return typeof e.constructor === 'function' ? e.constructor.name : null;
    }
    function isArray(e) {
      if (Array.isArray) return Array.isArray(e);
      return e instanceof Array;
    }
    function isError(e) {
      return (
        e instanceof Error ||
        (typeof e.message === 'string' &&
          e.constructor &&
          typeof e.constructor.stackTraceLimit === 'number')
      );
    }
    function isDate(e) {
      if (e instanceof Date) return true;
      return (
        typeof e.toDateString === 'function' &&
        typeof e.getDate === 'function' &&
        typeof e.setDate === 'function'
      );
    }
    function isRegexp(e) {
      if (e instanceof RegExp) return true;
      return (
        typeof e.flags === 'string' &&
        typeof e.ignoreCase === 'boolean' &&
        typeof e.multiline === 'boolean' &&
        typeof e.global === 'boolean'
      );
    }
    function isGeneratorFn(e, t) {
      return ctorName(e) === 'GeneratorFunction';
    }
    function isGeneratorObj(e) {
      return (
        typeof e.throw === 'function' &&
        typeof e.return === 'function' &&
        typeof e.next === 'function'
      );
    }
    function isArguments(e) {
      try {
        if (typeof e.length === 'number' && typeof e.callee === 'function') {
          return true;
        }
      } catch (e) {
        if (e.message.indexOf('callee') !== -1) {
          return true;
        }
      }
      return false;
    }
    function isBuffer(e) {
      if (e.constructor && typeof e.constructor.isBuffer === 'function') {
        return e.constructor.isBuffer(e);
      }
      return false;
    }
  },
  8805: (e) => {
    e.exports = escapes;
    var t = ['\\', '`', '*', '{', '}', '[', ']', '(', ')', '#', '+', '-', '.', '!', '_', '>'];
    var r = t.concat(['~', '|']);
    var a = r.concat(['\n', '"', '$', '%', '&', "'", ',', '/', ':', ';', '<', '=', '?', '@', '^']);
    escapes.default = t;
    escapes.gfm = r;
    escapes.commonmark = a;
    function escapes(e) {
      var n = e || {};
      if (n.commonmark) {
        return a;
      }
      return n.gfm ? r : t;
    }
  },
  1157: (e, t, r) => {
    var a = r(2631);
    e.exports = getDefinitionFactory;
    var n = {}.hasOwnProperty;
    function getDefinitionFactory(e, t) {
      return getterFactory(gather(e, t));
    }
    function gather(e, t) {
      var r = {};
      if (!e || !e.type) {
        throw new Error('mdast-util-definitions expected node');
      }
      a(e, 'definition', t && t.commonmark ? commonmark : normal);
      return r;
      function commonmark(e) {
        var t = normalise(e.identifier);
        if (!n.call(r, t)) {
          r[t] = e;
        }
      }
      function normal(e) {
        r[normalise(e.identifier)] = e;
      }
    }
    function getterFactory(e) {
      return getter;
      function getter(t) {
        var r = t && normalise(t);
        return r && n.call(e, r) ? e[r] : null;
      }
    }
    function normalise(e) {
      return e.toUpperCase();
    }
  },
  4595: (e, t, r) => {
    e.exports = visitParents;
    var a = r(4070);
    var n = true;
    var i = 'skip';
    var o = false;
    visitParents.CONTINUE = n;
    visitParents.SKIP = i;
    visitParents.EXIT = o;
    function visitParents(e, t, r, n) {
      var s;
      if (typeof t === 'function' && typeof r !== 'function') {
        n = r;
        r = t;
        t = null;
      }
      s = a(t);
      one(e, null, []);
      function one(e, a, n) {
        var p = [];
        var d;
        if (!t || s(e, a, n[n.length - 1] || null)) {
          p = toResult(r(e, n));
          if (p[0] === o) {
            return p;
          }
        }
        if (e.children && p[0] !== i) {
          d = toResult(all(e.children, n.concat(e)));
          return d[0] === o ? d : p;
        }
        return p;
      }
      function all(e, t) {
        var r = -1;
        var a = n ? -1 : 1;
        var i = (n ? e.length : r) + a;
        var s;
        while (i > r && i < e.length) {
          s = one(e[i], i, t);
          if (s[0] === o) {
            return s;
          }
          i = typeof s[1] === 'number' ? s[1] : i + a;
        }
      }
    }
    function toResult(e) {
      if (e !== null && typeof e === 'object' && 'length' in e) {
        return e;
      }
      if (typeof e === 'number') {
        return [n, e];
      }
      return [e];
    }
  },
  2631: (e, t, r) => {
    e.exports = visit;
    var a = r(4595);
    var n = a.CONTINUE;
    var i = a.SKIP;
    var o = a.EXIT;
    visit.CONTINUE = n;
    visit.SKIP = i;
    visit.EXIT = o;
    function visit(e, t, r, n) {
      if (typeof t === 'function' && typeof r !== 'function') {
        n = r;
        r = t;
        t = null;
      }
      a(e, t, overload, n);
      function overload(e, t) {
        var a = t[t.length - 1];
        var n = a ? a.children.indexOf(e) : null;
        return r(e, n, a);
      }
    }
  },
  7780: (e, t, r) => {
    e.exports = r(9900);
  },
  4159: (e, t, r) => {
    e.exports = all;
    var a = r(4065);
    var n = r(8503);
    function all(e, t) {
      var r = t.children || [];
      var i = r.length;
      var o = [];
      var s = -1;
      var p;
      var d;
      while (++s < i) {
        p = n(e, r[s], t);
        if (p) {
          if (s && r[s - 1].type === 'break') {
            if (p.value) {
              p.value = a.left(p.value);
            }
            d = p.children && p.children[0];
            if (d && d.value) {
              d.value = a.left(d.value);
            }
          }
          o = o.concat(p);
        }
      }
      return o;
    }
  },
  5181: (e, t, r) => {
    e.exports = generateFootnotes;
    var a = r(5233);
    var n = r(5965);
    var i = r(7746);
    function generateFootnotes(e) {
      var t = e.footnoteById;
      var r = e.footnoteOrder;
      var o = r.length;
      var s = -1;
      var p = [];
      var d;
      var l;
      var m;
      var c;
      while (++s < o) {
        d = t[r[s].toUpperCase()];
        if (!d) {
          continue;
        }
        m = d.children.concat();
        c = m[m.length - 1];
        l = {
          type: 'link',
          url: '#fnref-' + d.identifier,
          data: { hProperties: { className: ['footnote-backref'] } },
          children: [{ type: 'text', value: '↩' }],
        };
        if (!c || c.type !== 'paragraph') {
          c = { type: 'paragraph', children: [] };
          m.push(c);
        }
        c.children.push(l);
        p.push({
          type: 'listItem',
          data: { hProperties: { id: 'fn-' + d.identifier } },
          children: m,
          position: d.position,
        });
      }
      if (p.length === 0) {
        return null;
      }
      return e(
        null,
        'div',
        { className: ['footnotes'] },
        i([a(e), n(e, { type: 'list', ordered: true, children: p })], true),
      );
    }
  },
  9389: (e, t, r) => {
    e.exports = blockquote;
    var a = r(7746);
    var n = r(4159);
    function blockquote(e, t) {
      return e(t, 'blockquote', a(n(e, t), true));
    }
  },
  9756: (e, t, r) => {
    e.exports = hardBreak;
    var a = r(2637);
    function hardBreak(e, t) {
      return [e(t, 'br'), a('text', '\n')];
    }
  },
  913: (e, t, r) => {
    e.exports = code;
    var a = r(9050);
    var n = r(2637);
    function code(e, t) {
      var r = t.value ? a(t.value + '\n') : '';
      var i = t.lang && t.lang.match(/^[^ \t]+(?=[ \t]|$)/);
      var o = {};
      if (i) {
        o.className = ['language-' + i];
      }
      return e(t.position, 'pre', [e(t, 'code', o, [n('text', r)])]);
    }
  },
  5396: (e, t, r) => {
    e.exports = strikethrough;
    var a = r(4159);
    function strikethrough(e, t) {
      return e(t, 'del', a(e, t));
    }
  },
  2675: (e, t, r) => {
    e.exports = emphasis;
    var a = r(4159);
    function emphasis(e, t) {
      return e(t, 'em', a(e, t));
    }
  },
  5041: (e, t, r) => {
    e.exports = footnoteReference;
    var a = r(2637);
    function footnoteReference(e, t) {
      var r = e.footnoteOrder;
      var n = String(t.identifier);
      if (r.indexOf(n) === -1) {
        r.push(n);
      }
      return e(t.position, 'sup', { id: 'fnref-' + n }, [
        e(t, 'a', { href: '#fn-' + n, className: ['footnote-ref'] }, [a('text', t.label || n)]),
      ]);
    }
  },
  8887: (e, t, r) => {
    e.exports = footnote;
    var a = r(5041);
    function footnote(e, t) {
      var r = e.footnoteById;
      var n = e.footnoteOrder;
      var i = 1;
      while (i in r) {
        i++;
      }
      i = String(i);
      n.push(i);
      r[i] = {
        type: 'footnoteDefinition',
        identifier: i,
        children: [{ type: 'paragraph', children: t.children }],
        position: t.position,
      };
      return a(e, { type: 'footnoteReference', identifier: i, position: t.position });
    }
  },
  6367: (e, t, r) => {
    e.exports = heading;
    var a = r(4159);
    function heading(e, t) {
      return e(t, 'h' + t.depth, a(e, t));
    }
  },
  6478: (e, t, r) => {
    e.exports = html;
    var a = r(2637);
    function html(e, t) {
      return e.dangerous ? e.augment(t, a('raw', t.value)) : null;
    }
  },
  95: (e, t, r) => {
    e.exports = imageReference;
    var a = r(6756);
    var n = r(8666);
    function imageReference(e, t) {
      var r = e.definition(t.identifier);
      var i;
      if (!r) {
        return n(e, t);
      }
      i = { src: a(r.url || ''), alt: t.alt };
      if (r.title !== null && r.title !== undefined) {
        i.title = r.title;
      }
      return e(t, 'img', i);
    }
  },
  1496: (e, t, r) => {
    var a = r(6756);
    e.exports = image;
    function image(e, t) {
      var r = { src: a(t.url), alt: t.alt };
      if (t.title !== null && t.title !== undefined) {
        r.title = t.title;
      }
      return e(t, 'img', r);
    }
  },
  5689: (e, t, r) => {
    e.exports = {
      blockquote: r(9389),
      break: r(9756),
      code: r(913),
      delete: r(5396),
      emphasis: r(2675),
      footnoteReference: r(5041),
      footnote: r(8887),
      heading: r(6367),
      html: r(6478),
      imageReference: r(95),
      image: r(1496),
      inlineCode: r(5371),
      linkReference: r(9301),
      link: r(1426),
      listItem: r(1741),
      list: r(5965),
      paragraph: r(9604),
      root: r(4883),
      strong: r(7863),
      table: r(3913),
      text: r(8421),
      thematicBreak: r(5233),
      toml: ignore,
      yaml: ignore,
      definition: ignore,
      footnoteDefinition: ignore,
    };
    function ignore() {
      return null;
    }
  },
  5371: (e, t, r) => {
    e.exports = inlineCode;
    var a = r(8201);
    var n = r(2637);
    function inlineCode(e, t) {
      return e(t, 'code', [n('text', a(t.value))]);
    }
  },
  9301: (e, t, r) => {
    e.exports = linkReference;
    var a = r(6756);
    var n = r(8666);
    var i = r(4159);
    function linkReference(e, t) {
      var r = e.definition(t.identifier);
      var o;
      if (!r) {
        return n(e, t);
      }
      o = { href: a(r.url || '') };
      if (r.title !== null && r.title !== undefined) {
        o.title = r.title;
      }
      return e(t, 'a', o, i(e, t));
    }
  },
  1426: (e, t, r) => {
    var a = r(6756);
    var n = r(4159);
    e.exports = link;
    function link(e, t) {
      var r = { href: a(t.url) };
      if (t.title !== null && t.title !== undefined) {
        r.title = t.title;
      }
      return e(t, 'a', r, n(e, t));
    }
  },
  1741: (e, t, r) => {
    e.exports = listItem;
    var a = r(2637);
    var n = r(7746);
    var i = r(4159);
    function listItem(e, t, r) {
      var o = t.children;
      var s = o[0];
      var p = i(e, t);
      var d = r ? listLoose(r) : listItemLoose(t);
      var l = {};
      var m;
      var c;
      var g;
      var v;
      var T;
      if (d) {
        m = p;
      } else {
        m = [];
        v = p.length;
        g = -1;
        while (++g < v) {
          T = p[g];
          if (T.tagName === 'p') {
            m = m.concat(T.children);
          } else {
            m.push(T);
          }
        }
      }
      if (typeof t.checked === 'boolean') {
        if (d && (!s || s.type !== 'paragraph')) {
          m.unshift(e(null, 'p', []));
        }
        c = d ? m[0].children : m;
        if (c.length !== 0) {
          c.unshift(a('text', ' '));
        }
        c.unshift(e(null, 'input', { type: 'checkbox', checked: t.checked, disabled: true }));
        l.className = ['task-list-item'];
      }
      if (d && m.length !== 0) {
        m = n(m, true);
      }
      return e(t, 'li', l, m);
    }
    function listLoose(e) {
      var t = e.spread;
      var r = e.children;
      var a = r.length;
      var n = -1;
      while (!t && ++n < a) {
        t = listItemLoose(r[n]);
      }
      return t;
    }
    function listItemLoose(e) {
      var t = e.spread;
      return t === undefined || t === null ? e.children.length > 1 : t;
    }
  },
  5965: (e, t, r) => {
    e.exports = list;
    var a = r(7746);
    var n = r(4159);
    function list(e, t) {
      var r = {};
      var i = t.ordered ? 'ol' : 'ul';
      var o;
      var s = -1;
      var p;
      if (typeof t.start === 'number' && t.start !== 1) {
        r.start = t.start;
      }
      o = n(e, t);
      p = o.length;
      while (++s < p) {
        if (
          o[s].properties.className &&
          o[s].properties.className.indexOf('task-list-item') !== -1
        ) {
          r.className = ['contains-task-list'];
          break;
        }
      }
      return e(t, i, r, a(o, true));
    }
  },
  9604: (e, t, r) => {
    e.exports = paragraph;
    var a = r(4159);
    function paragraph(e, t) {
      return e(t, 'p', a(e, t));
    }
  },
  4883: (e, t, r) => {
    e.exports = root;
    var a = r(2637);
    var n = r(7746);
    var i = r(4159);
    function root(e, t) {
      return e.augment(t, a('root', n(i(e, t))));
    }
  },
  7863: (e, t, r) => {
    e.exports = strong;
    var a = r(4159);
    function strong(e, t) {
      return e(t, 'strong', a(e, t));
    }
  },
  3913: (e, t, r) => {
    e.exports = table;
    var a = r(1133);
    var n = r(7746);
    var i = r(4159);
    function table(e, t) {
      var r = t.children;
      var o = r.length;
      var s = t.align;
      var p = s.length;
      var d = [];
      var l;
      var m;
      var c;
      var g;
      var v;
      while (o--) {
        m = r[o].children;
        g = o === 0 ? 'th' : 'td';
        l = p;
        c = [];
        while (l--) {
          v = m[l];
          c[l] = e(v, g, { align: s[l] }, v ? i(e, v) : []);
        }
        d[o] = e(r[o], 'tr', n(c, true));
      }
      return e(
        t,
        'table',
        n(
          [
            e(d[0].position, 'thead', n([d[0]], true)),
            e({ start: a.start(d[1]), end: a.end(d[d.length - 1]) }, 'tbody', n(d.slice(1), true)),
          ],
          true,
        ),
      );
    }
  },
  8421: (e, t, r) => {
    e.exports = text;
    var a = r(2637);
    var n = r(8213);
    function text(e, t) {
      return e.augment(t, a('text', n(t.value)));
    }
  },
  5233: (e) => {
    e.exports = thematicBreak;
    function thematicBreak(e, t) {
      return e(t, 'hr');
    }
  },
  9900: (e, t, r) => {
    e.exports = toHast;
    var a = r(1208);
    var n = r(2637);
    var i = r(9634);
    var o = r(1133);
    var s = r(5084);
    var p = r(1157);
    var d = r(8503);
    var l = r(5181);
    var m = r(5689);
    var c = {}.hasOwnProperty;
    function factory(e, t) {
      var r = t || {};
      var n = r.allowDangerousHTML;
      var d = {};
      h.dangerous = n;
      h.definition = p(e, r);
      h.footnoteById = d;
      h.footnoteOrder = [];
      h.augment = augment;
      h.handlers = a(m, r.handlers || {});
      i(e, 'footnoteDefinition', onfootnotedefinition);
      return h;
      function augment(e, t) {
        var r;
        var n;
        if (e && 'data' in e) {
          r = e.data;
          if (t.type === 'element' && r.hName) {
            t.tagName = r.hName;
          }
          if (t.type === 'element' && r.hProperties) {
            t.properties = a(t.properties, r.hProperties);
          }
          if (t.children && r.hChildren) {
            t.children = r.hChildren;
          }
        }
        n = e && e.position ? e : { position: e };
        if (!s(n)) {
          t.position = { start: o.start(n), end: o.end(n) };
        }
        return t;
      }
      function h(e, t, r, a) {
        if ((a === undefined || a === null) && typeof r === 'object' && 'length' in r) {
          a = r;
          r = {};
        }
        return augment(e, { type: 'element', tagName: t, properties: r || {}, children: a || [] });
      }
      function onfootnotedefinition(e) {
        var t = String(e.identifier).toUpperCase();
        if (!c.call(d, t)) {
          d[t] = e;
        }
      }
    }
    function toHast(e, t) {
      var r = factory(e, t);
      var a = d(r, e);
      var i = l(r);
      if (i) {
        a.children = a.children.concat(n('text', '\n'), i);
      }
      return a;
    }
  },
  8503: (e, t, r) => {
    e.exports = one;
    var a = r(2637);
    var n = r(4159);
    var i = {}.hasOwnProperty;
    function unknown(e, t) {
      if (text(t)) {
        return e.augment(t, a('text', t.value));
      }
      return e(t, 'div', n(e, t));
    }
    function one(e, t, r) {
      var a = t && t.type;
      var n = i.call(e.handlers, a) ? e.handlers[a] : null;
      if (!a) {
        throw new Error('Expected node, got `' + t + '`');
      }
      return (typeof n === 'function' ? n : unknown)(e, t, r);
    }
    function text(e) {
      var t = e.data || {};
      if (i.call(t, 'hName') || i.call(t, 'hProperties') || i.call(t, 'hChildren')) {
        return false;
      }
      return 'value' in e;
    }
  },
  8666: (e, t, r) => {
    e.exports = revert;
    var a = r(2637);
    var n = r(4159);
    function revert(e, t) {
      var r = t.referenceType;
      var i = ']';
      var o;
      var s;
      var p;
      if (r === 'collapsed') {
        i += '[]';
      } else if (r === 'full') {
        i += '[' + (t.label || t.identifier) + ']';
      }
      if (t.type === 'imageReference') {
        return a('text', '![' + t.alt + i);
      }
      o = n(e, t);
      s = o[0];
      if (s && s.type === 'text') {
        s.value = '[' + s.value;
      } else {
        o.unshift(a('text', '['));
      }
      p = o[o.length - 1];
      if (p && p.type === 'text') {
        p.value += i;
      } else {
        o.push(a('text', i));
      }
      return o;
    }
  },
  7746: (e, t, r) => {
    e.exports = wrap;
    var a = r(2637);
    function wrap(e, t) {
      var r = [];
      var n = -1;
      var i = e.length;
      if (t) {
        r.push(a('text', '\n'));
      }
      while (++n < i) {
        if (n) {
          r.push(a('text', '\n'));
        }
        r.push(e[n]);
      }
      if (t && e.length !== 0) {
        r.push(a('text', '\n'));
      }
      return r;
    }
  },
  358: (e, t, r) => {
    e.exports = visitParents;
    var a = r(4070);
    var n = true;
    var i = 'skip';
    var o = false;
    visitParents.CONTINUE = n;
    visitParents.SKIP = i;
    visitParents.EXIT = o;
    function visitParents(e, t, r, n) {
      var s;
      if (typeof t === 'function' && typeof r !== 'function') {
        n = r;
        r = t;
        t = null;
      }
      s = a(t);
      one(e, null, []);
      function one(e, a, n) {
        var p = [];
        var d;
        if (!t || s(e, a, n[n.length - 1] || null)) {
          p = toResult(r(e, n));
          if (p[0] === o) {
            return p;
          }
        }
        if (e.children && p[0] !== i) {
          d = toResult(all(e.children, n.concat(e)));
          return d[0] === o ? d : p;
        }
        return p;
      }
      function all(e, t) {
        var r = -1;
        var a = n ? -1 : 1;
        var i = (n ? e.length : r) + a;
        var s;
        while (i > r && i < e.length) {
          s = one(e[i], i, t);
          if (s[0] === o) {
            return s;
          }
          i = typeof s[1] === 'number' ? s[1] : i + a;
        }
      }
    }
    function toResult(e) {
      if (e !== null && typeof e === 'object' && 'length' in e) {
        return e;
      }
      if (typeof e === 'number') {
        return [n, e];
      }
      return [e];
    }
  },
  9634: (e, t, r) => {
    e.exports = visit;
    var a = r(358);
    var n = a.CONTINUE;
    var i = a.SKIP;
    var o = a.EXIT;
    visit.CONTINUE = n;
    visit.SKIP = i;
    visit.EXIT = o;
    function visit(e, t, r, n) {
      if (typeof t === 'function' && typeof r !== 'function') {
        n = r;
        r = t;
        t = null;
      }
      a(e, t, overload, n);
      function overload(e, t) {
        var a = t[t.length - 1];
        var n = a ? a.children.indexOf(e) : null;
        return r(e, n, a);
      }
    }
  },
  6756: (e) => {
    var t = {};
    function getEncodeCache(e) {
      var r,
        a,
        n = t[e];
      if (n) {
        return n;
      }
      n = t[e] = [];
      for (r = 0; r < 128; r++) {
        a = String.fromCharCode(r);
        if (/^[0-9a-z]$/i.test(a)) {
          n.push(a);
        } else {
          n.push('%' + ('0' + r.toString(16).toUpperCase()).slice(-2));
        }
      }
      for (r = 0; r < e.length; r++) {
        n[e.charCodeAt(r)] = e[r];
      }
      return n;
    }
    function encode(e, t, r) {
      var a,
        n,
        i,
        o,
        s,
        p = '';
      if (typeof t !== 'string') {
        r = t;
        t = encode.defaultChars;
      }
      if (typeof r === 'undefined') {
        r = true;
      }
      s = getEncodeCache(t);
      for (a = 0, n = e.length; a < n; a++) {
        i = e.charCodeAt(a);
        if (r && i === 37 && a + 2 < n) {
          if (/^[0-9a-f]{2}$/i.test(e.slice(a + 1, a + 3))) {
            p += e.slice(a, a + 3);
            a += 2;
            continue;
          }
        }
        if (i < 128) {
          p += s[i];
          continue;
        }
        if (i >= 55296 && i <= 57343) {
          if (i >= 55296 && i <= 56319 && a + 1 < n) {
            o = e.charCodeAt(a + 1);
            if (o >= 56320 && o <= 57343) {
              p += encodeURIComponent(e[a] + e[a + 1]);
              a++;
              continue;
            }
          }
          p += '%EF%BF%BD';
          continue;
        }
        p += encodeURIComponent(e[a]);
      }
      return p;
    }
    encode.defaultChars = ";/?:@&=+$,-_.!~*'()#";
    encode.componentChars = "-_.!~*'()";
    e.exports = encode;
  },
  467: (e, t, r) => {
    Object.defineProperty(t, '__esModule', { value: true });
    function _interopDefault(e) {
      return e && typeof e === 'object' && 'default' in e ? e['default'] : e;
    }
    var a = _interopDefault(r(2781));
    var n = _interopDefault(r(3685));
    var i = _interopDefault(r(7310));
    var o = _interopDefault(r(8665));
    var s = _interopDefault(r(5687));
    var p = _interopDefault(r(9796));
    const d = a.Readable;
    const l = Symbol('buffer');
    const m = Symbol('type');
    class Blob {
      constructor() {
        this[m] = '';
        const e = arguments[0];
        const t = arguments[1];
        const r = [];
        let a = 0;
        if (e) {
          const t = e;
          const n = Number(t.length);
          for (let e = 0; e < n; e++) {
            const n = t[e];
            let i;
            if (n instanceof Buffer) {
              i = n;
            } else if (ArrayBuffer.isView(n)) {
              i = Buffer.from(n.buffer, n.byteOffset, n.byteLength);
            } else if (n instanceof ArrayBuffer) {
              i = Buffer.from(n);
            } else if (n instanceof Blob) {
              i = n[l];
            } else {
              i = Buffer.from(typeof n === 'string' ? n : String(n));
            }
            a += i.length;
            r.push(i);
          }
        }
        this[l] = Buffer.concat(r);
        let n = t && t.type !== undefined && String(t.type).toLowerCase();
        if (n && !/[^\u0020-\u007E]/.test(n)) {
          this[m] = n;
        }
      }
      get size() {
        return this[l].length;
      }
      get type() {
        return this[m];
      }
      text() {
        return Promise.resolve(this[l].toString());
      }
      arrayBuffer() {
        const e = this[l];
        const t = e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
        return Promise.resolve(t);
      }
      stream() {
        const e = new d();
        e._read = function () {};
        e.push(this[l]);
        e.push(null);
        return e;
      }
      toString() {
        return '[object Blob]';
      }
      slice() {
        const e = this.size;
        const t = arguments[0];
        const r = arguments[1];
        let a, n;
        if (t === undefined) {
          a = 0;
        } else if (t < 0) {
          a = Math.max(e + t, 0);
        } else {
          a = Math.min(t, e);
        }
        if (r === undefined) {
          n = e;
        } else if (r < 0) {
          n = Math.max(e + r, 0);
        } else {
          n = Math.min(r, e);
        }
        const i = Math.max(n - a, 0);
        const o = this[l];
        const s = o.slice(a, a + i);
        const p = new Blob([], { type: arguments[2] });
        p[l] = s;
        return p;
      }
    }
    Object.defineProperties(Blob.prototype, {
      size: { enumerable: true },
      type: { enumerable: true },
      slice: { enumerable: true },
    });
    Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
      value: 'Blob',
      writable: false,
      enumerable: false,
      configurable: true,
    });
    function FetchError(e, t, r) {
      Error.call(this, e);
      this.message = e;
      this.type = t;
      if (r) {
        this.code = this.errno = r.code;
      }
      Error.captureStackTrace(this, this.constructor);
    }
    FetchError.prototype = Object.create(Error.prototype);
    FetchError.prototype.constructor = FetchError;
    FetchError.prototype.name = 'FetchError';
    let c;
    try {
      c = r(2877).convert;
    } catch (e) {}
    const g = Symbol('Body internals');
    const v = a.PassThrough;
    function Body(e) {
      var t = this;
      var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        n = r.size;
      let i = n === undefined ? 0 : n;
      var o = r.timeout;
      let s = o === undefined ? 0 : o;
      if (e == null) {
        e = null;
      } else if (isURLSearchParams(e)) {
        e = Buffer.from(e.toString());
      } else if (isBlob(e));
      else if (Buffer.isBuffer(e));
      else if (Object.prototype.toString.call(e) === '[object ArrayBuffer]') {
        e = Buffer.from(e);
      } else if (ArrayBuffer.isView(e)) {
        e = Buffer.from(e.buffer, e.byteOffset, e.byteLength);
      } else if (e instanceof a);
      else {
        e = Buffer.from(String(e));
      }
      this[g] = { body: e, disturbed: false, error: null };
      this.size = i;
      this.timeout = s;
      if (e instanceof a) {
        e.on('error', function (e) {
          const r =
            e.name === 'AbortError'
              ? e
              : new FetchError(
                  `Invalid response body while trying to fetch ${t.url}: ${e.message}`,
                  'system',
                  e,
                );
          t[g].error = r;
        });
      }
    }
    Body.prototype = {
      get body() {
        return this[g].body;
      },
      get bodyUsed() {
        return this[g].disturbed;
      },
      arrayBuffer() {
        return consumeBody.call(this).then(function (e) {
          return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
        });
      },
      blob() {
        let e = (this.headers && this.headers.get('content-type')) || '';
        return consumeBody.call(this).then(function (t) {
          return Object.assign(new Blob([], { type: e.toLowerCase() }), { [l]: t });
        });
      },
      json() {
        var e = this;
        return consumeBody.call(this).then(function (t) {
          try {
            return JSON.parse(t.toString());
          } catch (t) {
            return Body.Promise.reject(
              new FetchError(
                `invalid json response body at ${e.url} reason: ${t.message}`,
                'invalid-json',
              ),
            );
          }
        });
      },
      text() {
        return consumeBody.call(this).then(function (e) {
          return e.toString();
        });
      },
      buffer() {
        return consumeBody.call(this);
      },
      textConverted() {
        var e = this;
        return consumeBody.call(this).then(function (t) {
          return convertBody(t, e.headers);
        });
      },
    };
    Object.defineProperties(Body.prototype, {
      body: { enumerable: true },
      bodyUsed: { enumerable: true },
      arrayBuffer: { enumerable: true },
      blob: { enumerable: true },
      json: { enumerable: true },
      text: { enumerable: true },
    });
    Body.mixIn = function (e) {
      for (const t of Object.getOwnPropertyNames(Body.prototype)) {
        if (!(t in e)) {
          const r = Object.getOwnPropertyDescriptor(Body.prototype, t);
          Object.defineProperty(e, t, r);
        }
      }
    };
    function consumeBody() {
      var e = this;
      if (this[g].disturbed) {
        return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
      }
      this[g].disturbed = true;
      if (this[g].error) {
        return Body.Promise.reject(this[g].error);
      }
      let t = this.body;
      if (t === null) {
        return Body.Promise.resolve(Buffer.alloc(0));
      }
      if (isBlob(t)) {
        t = t.stream();
      }
      if (Buffer.isBuffer(t)) {
        return Body.Promise.resolve(t);
      }
      if (!(t instanceof a)) {
        return Body.Promise.resolve(Buffer.alloc(0));
      }
      let r = [];
      let n = 0;
      let i = false;
      return new Body.Promise(function (a, o) {
        let s;
        if (e.timeout) {
          s = setTimeout(function () {
            i = true;
            o(
              new FetchError(
                `Response timeout while trying to fetch ${e.url} (over ${e.timeout}ms)`,
                'body-timeout',
              ),
            );
          }, e.timeout);
        }
        t.on('error', function (t) {
          if (t.name === 'AbortError') {
            i = true;
            o(t);
          } else {
            o(
              new FetchError(
                `Invalid response body while trying to fetch ${e.url}: ${t.message}`,
                'system',
                t,
              ),
            );
          }
        });
        t.on('data', function (t) {
          if (i || t === null) {
            return;
          }
          if (e.size && n + t.length > e.size) {
            i = true;
            o(new FetchError(`content size at ${e.url} over limit: ${e.size}`, 'max-size'));
            return;
          }
          n += t.length;
          r.push(t);
        });
        t.on('end', function () {
          if (i) {
            return;
          }
          clearTimeout(s);
          try {
            a(Buffer.concat(r, n));
          } catch (t) {
            o(
              new FetchError(
                `Could not create Buffer from response body for ${e.url}: ${t.message}`,
                'system',
                t,
              ),
            );
          }
        });
      });
    }
    function convertBody(e, t) {
      if (typeof c !== 'function') {
        throw new Error(
          'The package `encoding` must be installed to use the textConverted() function',
        );
      }
      const r = t.get('content-type');
      let a = 'utf-8';
      let n, i;
      if (r) {
        n = /charset=([^;]*)/i.exec(r);
      }
      i = e.slice(0, 1024).toString();
      if (!n && i) {
        n = /<meta.+?charset=(['"])(.+?)\1/i.exec(i);
      }
      if (!n && i) {
        n = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(i);
        if (!n) {
          n = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(i);
          if (n) {
            n.pop();
          }
        }
        if (n) {
          n = /charset=(.*)/i.exec(n.pop());
        }
      }
      if (!n && i) {
        n = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(i);
      }
      if (n) {
        a = n.pop();
        if (a === 'gb2312' || a === 'gbk') {
          a = 'gb18030';
        }
      }
      return c(e, 'UTF-8', a).toString();
    }
    function isURLSearchParams(e) {
      if (
        typeof e !== 'object' ||
        typeof e.append !== 'function' ||
        typeof e.delete !== 'function' ||
        typeof e.get !== 'function' ||
        typeof e.getAll !== 'function' ||
        typeof e.has !== 'function' ||
        typeof e.set !== 'function'
      ) {
        return false;
      }
      return (
        e.constructor.name === 'URLSearchParams' ||
        Object.prototype.toString.call(e) === '[object URLSearchParams]' ||
        typeof e.sort === 'function'
      );
    }
    function isBlob(e) {
      return (
        typeof e === 'object' &&
        typeof e.arrayBuffer === 'function' &&
        typeof e.type === 'string' &&
        typeof e.stream === 'function' &&
        typeof e.constructor === 'function' &&
        typeof e.constructor.name === 'string' &&
        /^(Blob|File)$/.test(e.constructor.name) &&
        /^(Blob|File)$/.test(e[Symbol.toStringTag])
      );
    }
    function clone(e) {
      let t, r;
      let n = e.body;
      if (e.bodyUsed) {
        throw new Error('cannot clone body after it is used');
      }
      if (n instanceof a && typeof n.getBoundary !== 'function') {
        t = new v();
        r = new v();
        n.pipe(t);
        n.pipe(r);
        e[g].body = t;
        n = r;
      }
      return n;
    }
    function extractContentType(e) {
      if (e === null) {
        return null;
      } else if (typeof e === 'string') {
        return 'text/plain;charset=UTF-8';
      } else if (isURLSearchParams(e)) {
        return 'application/x-www-form-urlencoded;charset=UTF-8';
      } else if (isBlob(e)) {
        return e.type || null;
      } else if (Buffer.isBuffer(e)) {
        return null;
      } else if (Object.prototype.toString.call(e) === '[object ArrayBuffer]') {
        return null;
      } else if (ArrayBuffer.isView(e)) {
        return null;
      } else if (typeof e.getBoundary === 'function') {
        return `multipart/form-data;boundary=${e.getBoundary()}`;
      } else if (e instanceof a) {
        return null;
      } else {
        return 'text/plain;charset=UTF-8';
      }
    }
    function getTotalBytes(e) {
      const t = e.body;
      if (t === null) {
        return 0;
      } else if (isBlob(t)) {
        return t.size;
      } else if (Buffer.isBuffer(t)) {
        return t.length;
      } else if (t && typeof t.getLengthSync === 'function') {
        if (
          (t._lengthRetrievers && t._lengthRetrievers.length == 0) ||
          (t.hasKnownLength && t.hasKnownLength())
        ) {
          return t.getLengthSync();
        }
        return null;
      } else {
        return null;
      }
    }
    function writeToStream(e, t) {
      const r = t.body;
      if (r === null) {
        e.end();
      } else if (isBlob(r)) {
        r.stream().pipe(e);
      } else if (Buffer.isBuffer(r)) {
        e.write(r);
        e.end();
      } else {
        r.pipe(e);
      }
    }
    Body.Promise = global.Promise;
    const T = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
    const E = /[^\t\x20-\x7e\x80-\xff]/;
    function validateName(e) {
      e = `${e}`;
      if (T.test(e) || e === '') {
        throw new TypeError(`${e} is not a legal HTTP header name`);
      }
    }
    function validateValue(e) {
      e = `${e}`;
      if (E.test(e)) {
        throw new TypeError(`${e} is not a legal HTTP header value`);
      }
    }
    function find(e, t) {
      t = t.toLowerCase();
      for (const r in e) {
        if (r.toLowerCase() === t) {
          return r;
        }
      }
      return undefined;
    }
    const _ = Symbol('map');
    class Headers {
      constructor() {
        let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        this[_] = Object.create(null);
        if (e instanceof Headers) {
          const t = e.raw();
          const r = Object.keys(t);
          for (const e of r) {
            for (const r of t[e]) {
              this.append(e, r);
            }
          }
          return;
        }
        if (e == null);
        else if (typeof e === 'object') {
          const t = e[Symbol.iterator];
          if (t != null) {
            if (typeof t !== 'function') {
              throw new TypeError('Header pairs must be iterable');
            }
            const r = [];
            for (const t of e) {
              if (typeof t !== 'object' || typeof t[Symbol.iterator] !== 'function') {
                throw new TypeError('Each header pair must be iterable');
              }
              r.push(Array.from(t));
            }
            for (const e of r) {
              if (e.length !== 2) {
                throw new TypeError('Each header pair must be a name/value tuple');
              }
              this.append(e[0], e[1]);
            }
          } else {
            for (const t of Object.keys(e)) {
              const r = e[t];
              this.append(t, r);
            }
          }
        } else {
          throw new TypeError('Provided initializer must be an object');
        }
      }
      get(e) {
        e = `${e}`;
        validateName(e);
        const t = find(this[_], e);
        if (t === undefined) {
          return null;
        }
        return this[_][t].join(', ');
      }
      forEach(e) {
        let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        let r = getHeaders(this);
        let a = 0;
        while (a < r.length) {
          var n = r[a];
          const i = n[0],
            o = n[1];
          e.call(t, o, i, this);
          r = getHeaders(this);
          a++;
        }
      }
      set(e, t) {
        e = `${e}`;
        t = `${t}`;
        validateName(e);
        validateValue(t);
        const r = find(this[_], e);
        this[_][r !== undefined ? r : e] = [t];
      }
      append(e, t) {
        e = `${e}`;
        t = `${t}`;
        validateName(e);
        validateValue(t);
        const r = find(this[_], e);
        if (r !== undefined) {
          this[_][r].push(t);
        } else {
          this[_][e] = [t];
        }
      }
      has(e) {
        e = `${e}`;
        validateName(e);
        return find(this[_], e) !== undefined;
      }
      delete(e) {
        e = `${e}`;
        validateName(e);
        const t = find(this[_], e);
        if (t !== undefined) {
          delete this[_][t];
        }
      }
      raw() {
        return this[_];
      }
      keys() {
        return createHeadersIterator(this, 'key');
      }
      values() {
        return createHeadersIterator(this, 'value');
      }
      [Symbol.iterator]() {
        return createHeadersIterator(this, 'key+value');
      }
    }
    Headers.prototype.entries = Headers.prototype[Symbol.iterator];
    Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
      value: 'Headers',
      writable: false,
      enumerable: false,
      configurable: true,
    });
    Object.defineProperties(Headers.prototype, {
      get: { enumerable: true },
      forEach: { enumerable: true },
      set: { enumerable: true },
      append: { enumerable: true },
      has: { enumerable: true },
      delete: { enumerable: true },
      keys: { enumerable: true },
      values: { enumerable: true },
      entries: { enumerable: true },
    });
    function getHeaders(e) {
      let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';
      const r = Object.keys(e[_]).sort();
      return r.map(
        t === 'key'
          ? function (e) {
              return e.toLowerCase();
            }
          : t === 'value'
          ? function (t) {
              return e[_][t].join(', ');
            }
          : function (t) {
              return [t.toLowerCase(), e[_][t].join(', ')];
            },
      );
    }
    const w = Symbol('internal');
    function createHeadersIterator(e, t) {
      const r = Object.create(A);
      r[w] = { target: e, kind: t, index: 0 };
      return r;
    }
    const A = Object.setPrototypeOf(
      {
        next() {
          if (!this || Object.getPrototypeOf(this) !== A) {
            throw new TypeError('Value of `this` is not a HeadersIterator');
          }
          var e = this[w];
          const t = e.target,
            r = e.kind,
            a = e.index;
          const n = getHeaders(t, r);
          const i = n.length;
          if (a >= i) {
            return { value: undefined, done: true };
          }
          this[w].index = a + 1;
          return { value: n[a], done: false };
        },
      },
      Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())),
    );
    Object.defineProperty(A, Symbol.toStringTag, {
      value: 'HeadersIterator',
      writable: false,
      enumerable: false,
      configurable: true,
    });
    function exportNodeCompatibleHeaders(e) {
      const t = Object.assign({ __proto__: null }, e[_]);
      const r = find(e[_], 'Host');
      if (r !== undefined) {
        t[r] = t[r][0];
      }
      return t;
    }
    function createHeadersLenient(e) {
      const t = new Headers();
      for (const r of Object.keys(e)) {
        if (T.test(r)) {
          continue;
        }
        if (Array.isArray(e[r])) {
          for (const a of e[r]) {
            if (E.test(a)) {
              continue;
            }
            if (t[_][r] === undefined) {
              t[_][r] = [a];
            } else {
              t[_][r].push(a);
            }
          }
        } else if (!E.test(e[r])) {
          t[_][r] = [e[r]];
        }
      }
      return t;
    }
    const b = Symbol('Response internals');
    const y = n.STATUS_CODES;
    class Response {
      constructor() {
        let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        Body.call(this, e, t);
        const r = t.status || 200;
        const a = new Headers(t.headers);
        if (e != null && !a.has('Content-Type')) {
          const t = extractContentType(e);
          if (t) {
            a.append('Content-Type', t);
          }
        }
        this[b] = {
          url: t.url,
          status: r,
          statusText: t.statusText || y[r],
          headers: a,
          counter: t.counter,
        };
      }
      get url() {
        return this[b].url || '';
      }
      get status() {
        return this[b].status;
      }
      get ok() {
        return this[b].status >= 200 && this[b].status < 300;
      }
      get redirected() {
        return this[b].counter > 0;
      }
      get statusText() {
        return this[b].statusText;
      }
      get headers() {
        return this[b].headers;
      }
      clone() {
        return new Response(clone(this), {
          url: this.url,
          status: this.status,
          statusText: this.statusText,
          headers: this.headers,
          ok: this.ok,
          redirected: this.redirected,
        });
      }
    }
    Body.mixIn(Response.prototype);
    Object.defineProperties(Response.prototype, {
      url: { enumerable: true },
      status: { enumerable: true },
      ok: { enumerable: true },
      redirected: { enumerable: true },
      statusText: { enumerable: true },
      headers: { enumerable: true },
      clone: { enumerable: true },
    });
    Object.defineProperty(Response.prototype, Symbol.toStringTag, {
      value: 'Response',
      writable: false,
      enumerable: false,
      configurable: true,
    });
    const S = Symbol('Request internals');
    const C = i.URL || o.URL;
    const k = i.parse;
    const N = i.format;
    function parseURL(e) {
      if (/^[a-zA-Z][a-zA-Z\d+\-.]*:/.exec(e)) {
        e = new C(e).toString();
      }
      return k(e);
    }
    const D = 'destroy' in a.Readable.prototype;
    function isRequest(e) {
      return typeof e === 'object' && typeof e[S] === 'object';
    }
    function isAbortSignal(e) {
      const t = e && typeof e === 'object' && Object.getPrototypeOf(e);
      return !!(t && t.constructor.name === 'AbortSignal');
    }
    class Request {
      constructor(e) {
        let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        let r;
        if (!isRequest(e)) {
          if (e && e.href) {
            r = parseURL(e.href);
          } else {
            r = parseURL(`${e}`);
          }
          e = {};
        } else {
          r = parseURL(e.url);
        }
        let a = t.method || e.method || 'GET';
        a = a.toUpperCase();
        if (
          (t.body != null || (isRequest(e) && e.body !== null)) &&
          (a === 'GET' || a === 'HEAD')
        ) {
          throw new TypeError('Request with GET/HEAD method cannot have body');
        }
        let n = t.body != null ? t.body : isRequest(e) && e.body !== null ? clone(e) : null;
        Body.call(this, n, { timeout: t.timeout || e.timeout || 0, size: t.size || e.size || 0 });
        const i = new Headers(t.headers || e.headers || {});
        if (n != null && !i.has('Content-Type')) {
          const e = extractContentType(n);
          if (e) {
            i.append('Content-Type', e);
          }
        }
        let o = isRequest(e) ? e.signal : null;
        if ('signal' in t) o = t.signal;
        if (o != null && !isAbortSignal(o)) {
          throw new TypeError('Expected signal to be an instanceof AbortSignal');
        }
        this[S] = {
          method: a,
          redirect: t.redirect || e.redirect || 'follow',
          headers: i,
          parsedURL: r,
          signal: o,
        };
        this.follow = t.follow !== undefined ? t.follow : e.follow !== undefined ? e.follow : 20;
        this.compress =
          t.compress !== undefined ? t.compress : e.compress !== undefined ? e.compress : true;
        this.counter = t.counter || e.counter || 0;
        this.agent = t.agent || e.agent;
      }
      get method() {
        return this[S].method;
      }
      get url() {
        return N(this[S].parsedURL);
      }
      get headers() {
        return this[S].headers;
      }
      get redirect() {
        return this[S].redirect;
      }
      get signal() {
        return this[S].signal;
      }
      clone() {
        return new Request(this);
      }
    }
    Body.mixIn(Request.prototype);
    Object.defineProperty(Request.prototype, Symbol.toStringTag, {
      value: 'Request',
      writable: false,
      enumerable: false,
      configurable: true,
    });
    Object.defineProperties(Request.prototype, {
      method: { enumerable: true },
      url: { enumerable: true },
      headers: { enumerable: true },
      redirect: { enumerable: true },
      clone: { enumerable: true },
      signal: { enumerable: true },
    });
    function getNodeRequestOptions(e) {
      const t = e[S].parsedURL;
      const r = new Headers(e[S].headers);
      if (!r.has('Accept')) {
        r.set('Accept', '*/*');
      }
      if (!t.protocol || !t.hostname) {
        throw new TypeError('Only absolute URLs are supported');
      }
      if (!/^https?:$/.test(t.protocol)) {
        throw new TypeError('Only HTTP(S) protocols are supported');
      }
      if (e.signal && e.body instanceof a.Readable && !D) {
        throw new Error(
          'Cancellation of streamed requests with AbortSignal is not supported in node < 8',
        );
      }
      let n = null;
      if (e.body == null && /^(POST|PUT)$/i.test(e.method)) {
        n = '0';
      }
      if (e.body != null) {
        const t = getTotalBytes(e);
        if (typeof t === 'number') {
          n = String(t);
        }
      }
      if (n) {
        r.set('Content-Length', n);
      }
      if (!r.has('User-Agent')) {
        r.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
      }
      if (e.compress && !r.has('Accept-Encoding')) {
        r.set('Accept-Encoding', 'gzip,deflate');
      }
      let i = e.agent;
      if (typeof i === 'function') {
        i = i(t);
      }
      if (!r.has('Connection') && !i) {
        r.set('Connection', 'close');
      }
      return Object.assign({}, t, {
        method: e.method,
        headers: exportNodeCompatibleHeaders(r),
        agent: i,
      });
    }
    function AbortError(e) {
      Error.call(this, e);
      this.type = 'aborted';
      this.message = e;
      Error.captureStackTrace(this, this.constructor);
    }
    AbortError.prototype = Object.create(Error.prototype);
    AbortError.prototype.constructor = AbortError;
    AbortError.prototype.name = 'AbortError';
    const O = i.URL || o.URL;
    const I = a.PassThrough;
    const R = function isDomainOrSubdomain(e, t) {
      const r = new O(t).hostname;
      const a = new O(e).hostname;
      return r === a || (r[r.length - a.length - 1] === '.' && r.endsWith(a));
    };
    const P = function isSameProtocol(e, t) {
      const r = new O(t).protocol;
      const a = new O(e).protocol;
      return r === a;
    };
    function fetch(e, t) {
      if (!fetch.Promise) {
        throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
      }
      Body.Promise = fetch.Promise;
      return new fetch.Promise(function (r, i) {
        const o = new Request(e, t);
        const d = getNodeRequestOptions(o);
        const l = (d.protocol === 'https:' ? s : n).request;
        const m = o.signal;
        let c = null;
        const g = function abort() {
          let e = new AbortError('The user aborted a request.');
          i(e);
          if (o.body && o.body instanceof a.Readable) {
            destroyStream(o.body, e);
          }
          if (!c || !c.body) return;
          c.body.emit('error', e);
        };
        if (m && m.aborted) {
          g();
          return;
        }
        const v = function abortAndFinalize() {
          g();
          finalize();
        };
        const T = l(d);
        let E;
        if (m) {
          m.addEventListener('abort', v);
        }
        function finalize() {
          T.abort();
          if (m) m.removeEventListener('abort', v);
          clearTimeout(E);
        }
        if (o.timeout) {
          T.once('socket', function (e) {
            E = setTimeout(function () {
              i(new FetchError(`network timeout at: ${o.url}`, 'request-timeout'));
              finalize();
            }, o.timeout);
          });
        }
        T.on('error', function (e) {
          i(new FetchError(`request to ${o.url} failed, reason: ${e.message}`, 'system', e));
          if (c && c.body) {
            destroyStream(c.body, e);
          }
          finalize();
        });
        fixResponseChunkedTransferBadEnding(T, function (e) {
          if (m && m.aborted) {
            return;
          }
          if (c && c.body) {
            destroyStream(c.body, e);
          }
        });
        if (parseInt(process.version.substring(1)) < 14) {
          T.on('socket', function (e) {
            e.addListener('close', function (t) {
              const r = e.listenerCount('data') > 0;
              if (c && r && !t && !(m && m.aborted)) {
                const e = new Error('Premature close');
                e.code = 'ERR_STREAM_PREMATURE_CLOSE';
                c.body.emit('error', e);
              }
            });
          });
        }
        T.on('response', function (e) {
          clearTimeout(E);
          const t = createHeadersLenient(e.headers);
          if (fetch.isRedirect(e.statusCode)) {
            const a = t.get('Location');
            let n = null;
            try {
              n = a === null ? null : new O(a, o.url).toString();
            } catch (e) {
              if (o.redirect !== 'manual') {
                i(
                  new FetchError(
                    `uri requested responds with an invalid redirect URL: ${a}`,
                    'invalid-redirect',
                  ),
                );
                finalize();
                return;
              }
            }
            switch (o.redirect) {
              case 'error':
                i(
                  new FetchError(
                    `uri requested responds with a redirect, redirect mode is set to error: ${o.url}`,
                    'no-redirect',
                  ),
                );
                finalize();
                return;
              case 'manual':
                if (n !== null) {
                  try {
                    t.set('Location', n);
                  } catch (e) {
                    i(e);
                  }
                }
                break;
              case 'follow':
                if (n === null) {
                  break;
                }
                if (o.counter >= o.follow) {
                  i(new FetchError(`maximum redirect reached at: ${o.url}`, 'max-redirect'));
                  finalize();
                  return;
                }
                const a = {
                  headers: new Headers(o.headers),
                  follow: o.follow,
                  counter: o.counter + 1,
                  agent: o.agent,
                  compress: o.compress,
                  method: o.method,
                  body: o.body,
                  signal: o.signal,
                  timeout: o.timeout,
                  size: o.size,
                };
                if (!R(o.url, n) || !P(o.url, n)) {
                  for (const e of ['authorization', 'www-authenticate', 'cookie', 'cookie2']) {
                    a.headers.delete(e);
                  }
                }
                if (e.statusCode !== 303 && o.body && getTotalBytes(o) === null) {
                  i(
                    new FetchError(
                      'Cannot follow redirect with body being a readable stream',
                      'unsupported-redirect',
                    ),
                  );
                  finalize();
                  return;
                }
                if (
                  e.statusCode === 303 ||
                  ((e.statusCode === 301 || e.statusCode === 302) && o.method === 'POST')
                ) {
                  a.method = 'GET';
                  a.body = undefined;
                  a.headers.delete('content-length');
                }
                r(fetch(new Request(n, a)));
                finalize();
                return;
            }
          }
          e.once('end', function () {
            if (m) m.removeEventListener('abort', v);
          });
          let a = e.pipe(new I());
          const n = {
            url: o.url,
            status: e.statusCode,
            statusText: e.statusMessage,
            headers: t,
            size: o.size,
            timeout: o.timeout,
            counter: o.counter,
          };
          const s = t.get('Content-Encoding');
          if (
            !o.compress ||
            o.method === 'HEAD' ||
            s === null ||
            e.statusCode === 204 ||
            e.statusCode === 304
          ) {
            c = new Response(a, n);
            r(c);
            return;
          }
          const d = { flush: p.Z_SYNC_FLUSH, finishFlush: p.Z_SYNC_FLUSH };
          if (s == 'gzip' || s == 'x-gzip') {
            a = a.pipe(p.createGunzip(d));
            c = new Response(a, n);
            r(c);
            return;
          }
          if (s == 'deflate' || s == 'x-deflate') {
            const t = e.pipe(new I());
            t.once('data', function (e) {
              if ((e[0] & 15) === 8) {
                a = a.pipe(p.createInflate());
              } else {
                a = a.pipe(p.createInflateRaw());
              }
              c = new Response(a, n);
              r(c);
            });
            t.on('end', function () {
              if (!c) {
                c = new Response(a, n);
                r(c);
              }
            });
            return;
          }
          if (s == 'br' && typeof p.createBrotliDecompress === 'function') {
            a = a.pipe(p.createBrotliDecompress());
            c = new Response(a, n);
            r(c);
            return;
          }
          c = new Response(a, n);
          r(c);
        });
        writeToStream(T, o);
      });
    }
    function fixResponseChunkedTransferBadEnding(e, t) {
      let r;
      e.on('socket', function (e) {
        r = e;
      });
      e.on('response', function (e) {
        const a = e.headers;
        if (a['transfer-encoding'] === 'chunked' && !a['content-length']) {
          e.once('close', function (e) {
            const a = r.listenerCount('data') > 0;
            if (a && !e) {
              const e = new Error('Premature close');
              e.code = 'ERR_STREAM_PREMATURE_CLOSE';
              t(e);
            }
          });
        }
      });
    }
    function destroyStream(e, t) {
      if (e.destroy) {
        e.destroy(t);
      } else {
        e.emit('error', t);
        e.end();
      }
    }
    fetch.isRedirect = function (e) {
      return e === 301 || e === 302 || e === 303 || e === 307 || e === 308;
    };
    fetch.Promise = global.Promise;
    e.exports = t = fetch;
    Object.defineProperty(t, '__esModule', { value: true });
    t['default'] = t;
    t.Headers = Headers;
    t.Request = Request;
    t.Response = Response;
    t.FetchError = FetchError;
  },
  7426: (e) => {
    /*
object-assign
(c) Sindre Sorhus
@license MIT
*/
    var t = Object.getOwnPropertySymbols;
    var r = Object.prototype.hasOwnProperty;
    var a = Object.prototype.propertyIsEnumerable;
    function toObject(e) {
      if (e === null || e === undefined) {
        throw new TypeError('Object.assign cannot be called with null or undefined');
      }
      return Object(e);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var e = new String('abc');
        e[5] = 'de';
        if (Object.getOwnPropertyNames(e)[0] === '5') {
          return false;
        }
        var t = {};
        for (var r = 0; r < 10; r++) {
          t['_' + String.fromCharCode(r)] = r;
        }
        var a = Object.getOwnPropertyNames(t).map(function (e) {
          return t[e];
        });
        if (a.join('') !== '0123456789') {
          return false;
        }
        var n = {};
        'abcdefghijklmnopqrst'.split('').forEach(function (e) {
          n[e] = e;
        });
        if (Object.keys(Object.assign({}, n)).join('') !== 'abcdefghijklmnopqrst') {
          return false;
        }
        return true;
      } catch (e) {
        return false;
      }
    }
    e.exports = shouldUseNative()
      ? Object.assign
      : function (e, n) {
          var i;
          var o = toObject(e);
          var s;
          for (var p = 1; p < arguments.length; p++) {
            i = Object(arguments[p]);
            for (var d in i) {
              if (r.call(i, d)) {
                o[d] = i[d];
              }
            }
            if (t) {
              s = t(i);
              for (var l = 0; l < s.length; l++) {
                if (a.call(i, s[l])) {
                  o[s[l]] = i[s[l]];
                }
              }
            }
          }
          return o;
        };
  },
  1223: (e, t, r) => {
    var a = r(2940);
    e.exports = a(once);
    e.exports.strict = a(onceStrict);
    once.proto = once(function () {
      Object.defineProperty(Function.prototype, 'once', {
        value: function () {
          return once(this);
        },
        configurable: true,
      });
      Object.defineProperty(Function.prototype, 'onceStrict', {
        value: function () {
          return onceStrict(this);
        },
        configurable: true,
      });
    });
    function once(e) {
      var f = function () {
        if (f.called) return f.value;
        f.called = true;
        return (f.value = e.apply(this, arguments));
      };
      f.called = false;
      return f;
    }
    function onceStrict(e) {
      var f = function () {
        if (f.called) throw new Error(f.onceError);
        f.called = true;
        return (f.value = e.apply(this, arguments));
      };
      var t = e.name || 'Function wrapped with `once`';
      f.onceError = t + " shouldn't be called more than once";
      f.called = false;
      return f;
    }
  },
  3485: (e, t, r) => {
    var a = r(2661);
    e.exports = decodeEntity;
    var n = {}.hasOwnProperty;
    function decodeEntity(e) {
      return n.call(a, e) ? a[e] : false;
    }
  },
  8859: (e, t, r) => {
    var a = r(7452);
    var n = r(3580);
    var i = r(5552);
    var o = r(7474);
    var s = r(8189);
    var p = r(3485);
    e.exports = parseEntities;
    var d = {}.hasOwnProperty;
    var l = String.fromCharCode;
    var m = Function.prototype;
    var c = {
      warning: null,
      reference: null,
      text: null,
      warningContext: null,
      referenceContext: null,
      textContext: null,
      position: {},
      additional: null,
      attribute: false,
      nonTerminated: true,
    };
    var g = 9;
    var v = 10;
    var T = 12;
    var E = 32;
    var _ = 38;
    var w = 59;
    var A = 60;
    var b = 61;
    var y = 35;
    var S = 88;
    var C = 120;
    var k = 65533;
    var N = 'named';
    var D = 'hexadecimal';
    var O = 'decimal';
    var I = {};
    I[D] = 16;
    I[O] = 10;
    var R = {};
    R[N] = s;
    R[O] = i;
    R[D] = o;
    var P = 1;
    var L = 2;
    var x = 3;
    var F = 4;
    var M = 5;
    var B = 6;
    var G = 7;
    var U = {};
    U[P] = 'Named character references must be terminated by a semicolon';
    U[L] = 'Numeric character references must be terminated by a semicolon';
    U[x] = 'Named character references cannot be empty';
    U[F] = 'Numeric character references cannot be empty';
    U[M] = 'Named character references must be known';
    U[B] = 'Numeric character references cannot be disallowed';
    U[G] = 'Numeric character references cannot be outside the permissible Unicode range';
    function parseEntities(e, t) {
      var r = {};
      var a;
      var n;
      if (!t) {
        t = {};
      }
      for (n in c) {
        a = t[n];
        r[n] = a === null || a === undefined ? c[n] : a;
      }
      if (r.position.indent || r.position.start) {
        r.indent = r.position.indent || [];
        r.position = r.position.start;
      }
      return parse(e, r);
    }
    function parse(e, t) {
      var r = t.additional;
      var i = t.nonTerminated;
      var o = t.text;
      var c = t.reference;
      var H = t.warning;
      var V = t.textContext;
      var q = t.referenceContext;
      var j = t.warningContext;
      var K = t.position;
      var z = t.indent || [];
      var W = e.length;
      var Y = 0;
      var $ = -1;
      var Q = K.column || 1;
      var X = K.line || 1;
      var J = '';
      var Z = [];
      var ee;
      var te;
      var re;
      var ae;
      var ne;
      var ie;
      var oe;
      var se;
      var pe;
      var de;
      var le;
      var me;
      var ue;
      var ce;
      var fe;
      var he;
      var ge;
      var ve;
      var Te;
      if (typeof r === 'string') {
        r = r.charCodeAt(0);
      }
      he = now();
      se = H ? parseError : m;
      Y--;
      W++;
      while (++Y < W) {
        if (ne === v) {
          Q = z[$] || 1;
        }
        ne = e.charCodeAt(Y);
        if (ne === _) {
          oe = e.charCodeAt(Y + 1);
          if (
            oe === g ||
            oe === v ||
            oe === T ||
            oe === E ||
            oe === _ ||
            oe === A ||
            oe !== oe ||
            (r && oe === r)
          ) {
            J += l(ne);
            Q++;
            continue;
          }
          ue = Y + 1;
          me = ue;
          Te = ue;
          if (oe === y) {
            Te = ++me;
            oe = e.charCodeAt(Te);
            if (oe === S || oe === C) {
              ce = D;
              Te = ++me;
            } else {
              ce = O;
            }
          } else {
            ce = N;
          }
          ee = '';
          le = '';
          ae = '';
          fe = R[ce];
          Te--;
          while (++Te < W) {
            oe = e.charCodeAt(Te);
            if (!fe(oe)) {
              break;
            }
            ae += l(oe);
            if (ce === N && d.call(a, ae)) {
              ee = ae;
              le = a[ae];
            }
          }
          re = e.charCodeAt(Te) === w;
          if (re) {
            Te++;
            te = ce === N ? p(ae) : false;
            if (te) {
              ee = ae;
              le = te;
            }
          }
          ve = 1 + Te - ue;
          if (!re && !i) {
          } else if (!ae) {
            if (ce !== N) {
              se(F, ve);
            }
          } else if (ce === N) {
            if (re && !le) {
              se(M, 1);
            } else {
              if (ee !== ae) {
                Te = me + ee.length;
                ve = 1 + Te - me;
                re = false;
              }
              if (!re) {
                pe = ee ? P : x;
                if (t.attribute) {
                  oe = e.charCodeAt(Te);
                  if (oe === b) {
                    se(pe, ve);
                    le = null;
                  } else if (s(oe)) {
                    le = null;
                  } else {
                    se(pe, ve);
                  }
                } else {
                  se(pe, ve);
                }
              }
            }
            ie = le;
          } else {
            if (!re) {
              se(L, ve);
            }
            ie = parseInt(ae, I[ce]);
            if (prohibited(ie)) {
              se(G, ve);
              ie = l(k);
            } else if (ie in n) {
              se(B, ve);
              ie = n[ie];
            } else {
              de = '';
              if (disallowed(ie)) {
                se(B, ve);
              }
              if (ie > 65535) {
                ie -= 65536;
                de += l((ie >>> (10 & 1023)) | 55296);
                ie = 56320 | (ie & 1023);
              }
              ie = de + l(ie);
            }
          }
          if (ie) {
            flush();
            he = now();
            Y = Te - 1;
            Q += Te - ue + 1;
            Z.push(ie);
            ge = now();
            ge.offset++;
            if (c) {
              c.call(q, ie, { start: he, end: ge }, e.slice(ue - 1, Te));
            }
            he = ge;
          } else {
            ae = e.slice(ue - 1, Te);
            J += ae;
            Q += ae.length;
            Y = Te - 1;
          }
        } else {
          if (ne === 10) {
            X++;
            $++;
            Q = 0;
          }
          if (ne === ne) {
            J += l(ne);
            Q++;
          } else {
            flush();
          }
        }
      }
      return Z.join('');
      function now() {
        return { line: X, column: Q, offset: Y + (K.offset || 0) };
      }
      function parseError(e, t) {
        var r = now();
        r.column += t;
        r.offset += t;
        H.call(j, U[e], r, e);
      }
      function flush() {
        if (J) {
          Z.push(J);
          if (o) {
            o.call(V, J, { start: he, end: now() });
          }
          J = '';
        }
      }
    }
    function prohibited(e) {
      return (e >= 55296 && e <= 57343) || e > 1114111;
    }
    function disallowed(e) {
      return (
        (e >= 1 && e <= 8) ||
        e === 11 ||
        (e >= 13 && e <= 31) ||
        (e >= 127 && e <= 159) ||
        (e >= 64976 && e <= 65007) ||
        (e & 65535) === 65535 ||
        (e & 65535) === 65534
      );
    }
  },
  7079: (e, t, r) => {
    const { DOCUMENT_MODE: a } = r(9338);
    const n = 'html';
    const i = 'about:legacy-compat';
    const o = 'http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd';
    const s = [
      '+//silmaril//dtd html pro v0r11 19970101//',
      '-//as//dtd html 3.0 aswedit + extensions//',
      '-//advasoft ltd//dtd html 3.0 aswedit + extensions//',
      '-//ietf//dtd html 2.0 level 1//',
      '-//ietf//dtd html 2.0 level 2//',
      '-//ietf//dtd html 2.0 strict level 1//',
      '-//ietf//dtd html 2.0 strict level 2//',
      '-//ietf//dtd html 2.0 strict//',
      '-//ietf//dtd html 2.0//',
      '-//ietf//dtd html 2.1e//',
      '-//ietf//dtd html 3.0//',
      '-//ietf//dtd html 3.2 final//',
      '-//ietf//dtd html 3.2//',
      '-//ietf//dtd html 3//',
      '-//ietf//dtd html level 0//',
      '-//ietf//dtd html level 1//',
      '-//ietf//dtd html level 2//',
      '-//ietf//dtd html level 3//',
      '-//ietf//dtd html strict level 0//',
      '-//ietf//dtd html strict level 1//',
      '-//ietf//dtd html strict level 2//',
      '-//ietf//dtd html strict level 3//',
      '-//ietf//dtd html strict//',
      '-//ietf//dtd html//',
      '-//metrius//dtd metrius presentational//',
      '-//microsoft//dtd internet explorer 2.0 html strict//',
      '-//microsoft//dtd internet explorer 2.0 html//',
      '-//microsoft//dtd internet explorer 2.0 tables//',
      '-//microsoft//dtd internet explorer 3.0 html strict//',
      '-//microsoft//dtd internet explorer 3.0 html//',
      '-//microsoft//dtd internet explorer 3.0 tables//',
      '-//netscape comm. corp.//dtd html//',
      '-//netscape comm. corp.//dtd strict html//',
      "-//o'reilly and associates//dtd html 2.0//",
      "-//o'reilly and associates//dtd html extended 1.0//",
      "-//o'reilly and associates//dtd html extended relaxed 1.0//",
      '-//sq//dtd html 2.0 hotmetal + extensions//',
      '-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//',
      '-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//',
      '-//spyglass//dtd html 2.0 extended//',
      '-//sun microsystems corp.//dtd hotjava html//',
      '-//sun microsystems corp.//dtd hotjava strict html//',
      '-//w3c//dtd html 3 1995-03-24//',
      '-//w3c//dtd html 3.2 draft//',
      '-//w3c//dtd html 3.2 final//',
      '-//w3c//dtd html 3.2//',
      '-//w3c//dtd html 3.2s draft//',
      '-//w3c//dtd html 4.0 frameset//',
      '-//w3c//dtd html 4.0 transitional//',
      '-//w3c//dtd html experimental 19960712//',
      '-//w3c//dtd html experimental 970421//',
      '-//w3c//dtd w3 html//',
      '-//w3o//dtd w3 html 3.0//',
      '-//webtechs//dtd mozilla html 2.0//',
      '-//webtechs//dtd mozilla html//',
    ];
    const p = s.concat([
      '-//w3c//dtd html 4.01 frameset//',
      '-//w3c//dtd html 4.01 transitional//',
    ]);
    const d = [
      '-//w3o//dtd w3 html strict 3.0//en//',
      '-/w3c/dtd html 4.0 transitional/en',
      'html',
    ];
    const l = ['-//w3c//dtd xhtml 1.0 frameset//', '-//w3c//dtd xhtml 1.0 transitional//'];
    const m = l.concat([
      '-//w3c//dtd html 4.01 frameset//',
      '-//w3c//dtd html 4.01 transitional//',
    ]);
    function enquoteDoctypeId(e) {
      const t = e.indexOf('"') !== -1 ? "'" : '"';
      return t + e + t;
    }
    function hasPrefix(e, t) {
      for (let r = 0; r < t.length; r++) {
        if (e.indexOf(t[r]) === 0) {
          return true;
        }
      }
      return false;
    }
    t.isConforming = function (e) {
      return e.name === n && e.publicId === null && (e.systemId === null || e.systemId === i);
    };
    t.getDocumentMode = function (e) {
      if (e.name !== n) {
        return a.QUIRKS;
      }
      const t = e.systemId;
      if (t && t.toLowerCase() === o) {
        return a.QUIRKS;
      }
      let r = e.publicId;
      if (r !== null) {
        r = r.toLowerCase();
        if (d.indexOf(r) > -1) {
          return a.QUIRKS;
        }
        let e = t === null ? p : s;
        if (hasPrefix(r, e)) {
          return a.QUIRKS;
        }
        e = t === null ? l : m;
        if (hasPrefix(r, e)) {
          return a.LIMITED_QUIRKS;
        }
      }
      return a.NO_QUIRKS;
    };
    t.serializeContent = function (e, t, r) {
      let a = '!DOCTYPE ';
      if (e) {
        a += e;
      }
      if (t) {
        a += ' PUBLIC ' + enquoteDoctypeId(t);
      } else if (r) {
        a += ' SYSTEM';
      }
      if (r !== null) {
        a += ' ' + enquoteDoctypeId(r);
      }
      return a;
    };
  },
  5906: (e) => {
    e.exports = {
      controlCharacterInInputStream: 'control-character-in-input-stream',
      noncharacterInInputStream: 'noncharacter-in-input-stream',
      surrogateInInputStream: 'surrogate-in-input-stream',
      nonVoidHtmlElementStartTagWithTrailingSolidus:
        'non-void-html-element-start-tag-with-trailing-solidus',
      endTagWithAttributes: 'end-tag-with-attributes',
      endTagWithTrailingSolidus: 'end-tag-with-trailing-solidus',
      unexpectedSolidusInTag: 'unexpected-solidus-in-tag',
      unexpectedNullCharacter: 'unexpected-null-character',
      unexpectedQuestionMarkInsteadOfTagName: 'unexpected-question-mark-instead-of-tag-name',
      invalidFirstCharacterOfTagName: 'invalid-first-character-of-tag-name',
      unexpectedEqualsSignBeforeAttributeName: 'unexpected-equals-sign-before-attribute-name',
      missingEndTagName: 'missing-end-tag-name',
      unexpectedCharacterInAttributeName: 'unexpected-character-in-attribute-name',
      unknownNamedCharacterReference: 'unknown-named-character-reference',
      missingSemicolonAfterCharacterReference: 'missing-semicolon-after-character-reference',
      unexpectedCharacterAfterDoctypeSystemIdentifier:
        'unexpected-character-after-doctype-system-identifier',
      unexpectedCharacterInUnquotedAttributeValue:
        'unexpected-character-in-unquoted-attribute-value',
      eofBeforeTagName: 'eof-before-tag-name',
      eofInTag: 'eof-in-tag',
      missingAttributeValue: 'missing-attribute-value',
      missingWhitespaceBetweenAttributes: 'missing-whitespace-between-attributes',
      missingWhitespaceAfterDoctypePublicKeyword: 'missing-whitespace-after-doctype-public-keyword',
      missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers:
        'missing-whitespace-between-doctype-public-and-system-identifiers',
      missingWhitespaceAfterDoctypeSystemKeyword: 'missing-whitespace-after-doctype-system-keyword',
      missingQuoteBeforeDoctypePublicIdentifier: 'missing-quote-before-doctype-public-identifier',
      missingQuoteBeforeDoctypeSystemIdentifier: 'missing-quote-before-doctype-system-identifier',
      missingDoctypePublicIdentifier: 'missing-doctype-public-identifier',
      missingDoctypeSystemIdentifier: 'missing-doctype-system-identifier',
      abruptDoctypePublicIdentifier: 'abrupt-doctype-public-identifier',
      abruptDoctypeSystemIdentifier: 'abrupt-doctype-system-identifier',
      cdataInHtmlContent: 'cdata-in-html-content',
      incorrectlyOpenedComment: 'incorrectly-opened-comment',
      eofInScriptHtmlCommentLikeText: 'eof-in-script-html-comment-like-text',
      eofInDoctype: 'eof-in-doctype',
      nestedComment: 'nested-comment',
      abruptClosingOfEmptyComment: 'abrupt-closing-of-empty-comment',
      eofInComment: 'eof-in-comment',
      incorrectlyClosedComment: 'incorrectly-closed-comment',
      eofInCdata: 'eof-in-cdata',
      absenceOfDigitsInNumericCharacterReference:
        'absence-of-digits-in-numeric-character-reference',
      nullCharacterReference: 'null-character-reference',
      surrogateCharacterReference: 'surrogate-character-reference',
      characterReferenceOutsideUnicodeRange: 'character-reference-outside-unicode-range',
      controlCharacterReference: 'control-character-reference',
      noncharacterCharacterReference: 'noncharacter-character-reference',
      missingWhitespaceBeforeDoctypeName: 'missing-whitespace-before-doctype-name',
      missingDoctypeName: 'missing-doctype-name',
      invalidCharacterSequenceAfterDoctypeName: 'invalid-character-sequence-after-doctype-name',
      duplicateAttribute: 'duplicate-attribute',
      nonConformingDoctype: 'non-conforming-doctype',
      missingDoctype: 'missing-doctype',
      misplacedDoctype: 'misplaced-doctype',
      endTagWithoutMatchingOpenElement: 'end-tag-without-matching-open-element',
      closingOfElementWithOpenChildElements: 'closing-of-element-with-open-child-elements',
      disallowedContentInNoscriptInHead: 'disallowed-content-in-noscript-in-head',
      openElementsLeftAfterEof: 'open-elements-left-after-eof',
      abandonedHeadElementChild: 'abandoned-head-element-child',
      misplacedStartTagForHeadElement: 'misplaced-start-tag-for-head-element',
      nestedNoscriptInHead: 'nested-noscript-in-head',
      eofInElementThatCanContainOnlyText: 'eof-in-element-that-can-contain-only-text',
    };
  },
  2526: (e, t, r) => {
    const a = r(5759);
    const n = r(9338);
    const i = n.TAG_NAMES;
    const o = n.NAMESPACES;
    const s = n.ATTRS;
    const p = { TEXT_HTML: 'text/html', APPLICATION_XML: 'application/xhtml+xml' };
    const d = 'definitionurl';
    const l = 'definitionURL';
    const m = {
      attributename: 'attributeName',
      attributetype: 'attributeType',
      basefrequency: 'baseFrequency',
      baseprofile: 'baseProfile',
      calcmode: 'calcMode',
      clippathunits: 'clipPathUnits',
      diffuseconstant: 'diffuseConstant',
      edgemode: 'edgeMode',
      filterunits: 'filterUnits',
      glyphref: 'glyphRef',
      gradienttransform: 'gradientTransform',
      gradientunits: 'gradientUnits',
      kernelmatrix: 'kernelMatrix',
      kernelunitlength: 'kernelUnitLength',
      keypoints: 'keyPoints',
      keysplines: 'keySplines',
      keytimes: 'keyTimes',
      lengthadjust: 'lengthAdjust',
      limitingconeangle: 'limitingConeAngle',
      markerheight: 'markerHeight',
      markerunits: 'markerUnits',
      markerwidth: 'markerWidth',
      maskcontentunits: 'maskContentUnits',
      maskunits: 'maskUnits',
      numoctaves: 'numOctaves',
      pathlength: 'pathLength',
      patterncontentunits: 'patternContentUnits',
      patterntransform: 'patternTransform',
      patternunits: 'patternUnits',
      pointsatx: 'pointsAtX',
      pointsaty: 'pointsAtY',
      pointsatz: 'pointsAtZ',
      preservealpha: 'preserveAlpha',
      preserveaspectratio: 'preserveAspectRatio',
      primitiveunits: 'primitiveUnits',
      refx: 'refX',
      refy: 'refY',
      repeatcount: 'repeatCount',
      repeatdur: 'repeatDur',
      requiredextensions: 'requiredExtensions',
      requiredfeatures: 'requiredFeatures',
      specularconstant: 'specularConstant',
      specularexponent: 'specularExponent',
      spreadmethod: 'spreadMethod',
      startoffset: 'startOffset',
      stddeviation: 'stdDeviation',
      stitchtiles: 'stitchTiles',
      surfacescale: 'surfaceScale',
      systemlanguage: 'systemLanguage',
      tablevalues: 'tableValues',
      targetx: 'targetX',
      targety: 'targetY',
      textlength: 'textLength',
      viewbox: 'viewBox',
      viewtarget: 'viewTarget',
      xchannelselector: 'xChannelSelector',
      ychannelselector: 'yChannelSelector',
      zoomandpan: 'zoomAndPan',
    };
    const c = {
      'xlink:actuate': { prefix: 'xlink', name: 'actuate', namespace: o.XLINK },
      'xlink:arcrole': { prefix: 'xlink', name: 'arcrole', namespace: o.XLINK },
      'xlink:href': { prefix: 'xlink', name: 'href', namespace: o.XLINK },
      'xlink:role': { prefix: 'xlink', name: 'role', namespace: o.XLINK },
      'xlink:show': { prefix: 'xlink', name: 'show', namespace: o.XLINK },
      'xlink:title': { prefix: 'xlink', name: 'title', namespace: o.XLINK },
      'xlink:type': { prefix: 'xlink', name: 'type', namespace: o.XLINK },
      'xml:base': { prefix: 'xml', name: 'base', namespace: o.XML },
      'xml:lang': { prefix: 'xml', name: 'lang', namespace: o.XML },
      'xml:space': { prefix: 'xml', name: 'space', namespace: o.XML },
      xmlns: { prefix: '', name: 'xmlns', namespace: o.XMLNS },
      'xmlns:xlink': { prefix: 'xmlns', name: 'xlink', namespace: o.XMLNS },
    };
    const g = (t.SVG_TAG_NAMES_ADJUSTMENT_MAP = {
      altglyph: 'altGlyph',
      altglyphdef: 'altGlyphDef',
      altglyphitem: 'altGlyphItem',
      animatecolor: 'animateColor',
      animatemotion: 'animateMotion',
      animatetransform: 'animateTransform',
      clippath: 'clipPath',
      feblend: 'feBlend',
      fecolormatrix: 'feColorMatrix',
      fecomponenttransfer: 'feComponentTransfer',
      fecomposite: 'feComposite',
      feconvolvematrix: 'feConvolveMatrix',
      fediffuselighting: 'feDiffuseLighting',
      fedisplacementmap: 'feDisplacementMap',
      fedistantlight: 'feDistantLight',
      feflood: 'feFlood',
      fefunca: 'feFuncA',
      fefuncb: 'feFuncB',
      fefuncg: 'feFuncG',
      fefuncr: 'feFuncR',
      fegaussianblur: 'feGaussianBlur',
      feimage: 'feImage',
      femerge: 'feMerge',
      femergenode: 'feMergeNode',
      femorphology: 'feMorphology',
      feoffset: 'feOffset',
      fepointlight: 'fePointLight',
      fespecularlighting: 'feSpecularLighting',
      fespotlight: 'feSpotLight',
      fetile: 'feTile',
      feturbulence: 'feTurbulence',
      foreignobject: 'foreignObject',
      glyphref: 'glyphRef',
      lineargradient: 'linearGradient',
      radialgradient: 'radialGradient',
      textpath: 'textPath',
    });
    const v = {
      [i.B]: true,
      [i.BIG]: true,
      [i.BLOCKQUOTE]: true,
      [i.BODY]: true,
      [i.BR]: true,
      [i.CENTER]: true,
      [i.CODE]: true,
      [i.DD]: true,
      [i.DIV]: true,
      [i.DL]: true,
      [i.DT]: true,
      [i.EM]: true,
      [i.EMBED]: true,
      [i.H1]: true,
      [i.H2]: true,
      [i.H3]: true,
      [i.H4]: true,
      [i.H5]: true,
      [i.H6]: true,
      [i.HEAD]: true,
      [i.HR]: true,
      [i.I]: true,
      [i.IMG]: true,
      [i.LI]: true,
      [i.LISTING]: true,
      [i.MENU]: true,
      [i.META]: true,
      [i.NOBR]: true,
      [i.OL]: true,
      [i.P]: true,
      [i.PRE]: true,
      [i.RUBY]: true,
      [i.S]: true,
      [i.SMALL]: true,
      [i.SPAN]: true,
      [i.STRONG]: true,
      [i.STRIKE]: true,
      [i.SUB]: true,
      [i.SUP]: true,
      [i.TABLE]: true,
      [i.TT]: true,
      [i.U]: true,
      [i.UL]: true,
      [i.VAR]: true,
    };
    t.causesExit = function (e) {
      const t = e.tagName;
      const r =
        t === i.FONT &&
        (a.getTokenAttr(e, s.COLOR) !== null ||
          a.getTokenAttr(e, s.SIZE) !== null ||
          a.getTokenAttr(e, s.FACE) !== null);
      return r ? true : v[t];
    };
    t.adjustTokenMathMLAttrs = function (e) {
      for (let t = 0; t < e.attrs.length; t++) {
        if (e.attrs[t].name === d) {
          e.attrs[t].name = l;
          break;
        }
      }
    };
    t.adjustTokenSVGAttrs = function (e) {
      for (let t = 0; t < e.attrs.length; t++) {
        const r = m[e.attrs[t].name];
        if (r) {
          e.attrs[t].name = r;
        }
      }
    };
    t.adjustTokenXMLAttrs = function (e) {
      for (let t = 0; t < e.attrs.length; t++) {
        const r = c[e.attrs[t].name];
        if (r) {
          e.attrs[t].prefix = r.prefix;
          e.attrs[t].name = r.name;
          e.attrs[t].namespace = r.namespace;
        }
      }
    };
    t.adjustTokenSVGTagName = function (e) {
      const t = g[e.tagName];
      if (t) {
        e.tagName = t;
      }
    };
    function isMathMLTextIntegrationPoint(e, t) {
      return (
        t === o.MATHML && (e === i.MI || e === i.MO || e === i.MN || e === i.MS || e === i.MTEXT)
      );
    }
    function isHtmlIntegrationPoint(e, t, r) {
      if (t === o.MATHML && e === i.ANNOTATION_XML) {
        for (let e = 0; e < r.length; e++) {
          if (r[e].name === s.ENCODING) {
            const t = r[e].value.toLowerCase();
            return t === p.TEXT_HTML || t === p.APPLICATION_XML;
          }
        }
      }
      return t === o.SVG && (e === i.FOREIGN_OBJECT || e === i.DESC || e === i.TITLE);
    }
    t.isIntegrationPoint = function (e, t, r, a) {
      if ((!a || a === o.HTML) && isHtmlIntegrationPoint(e, t, r)) {
        return true;
      }
      if ((!a || a === o.MATHML) && isMathMLTextIntegrationPoint(e, t)) {
        return true;
      }
      return false;
    };
  },
  9338: (e, t) => {
    const r = (t.NAMESPACES = {
      HTML: 'http://www.w3.org/1999/xhtml',
      MATHML: 'http://www.w3.org/1998/Math/MathML',
      SVG: 'http://www.w3.org/2000/svg',
      XLINK: 'http://www.w3.org/1999/xlink',
      XML: 'http://www.w3.org/XML/1998/namespace',
      XMLNS: 'http://www.w3.org/2000/xmlns/',
    });
    t.ATTRS = {
      TYPE: 'type',
      ACTION: 'action',
      ENCODING: 'encoding',
      PROMPT: 'prompt',
      NAME: 'name',
      COLOR: 'color',
      FACE: 'face',
      SIZE: 'size',
    };
    t.DOCUMENT_MODE = {
      NO_QUIRKS: 'no-quirks',
      QUIRKS: 'quirks',
      LIMITED_QUIRKS: 'limited-quirks',
    };
    const a = (t.TAG_NAMES = {
      A: 'a',
      ADDRESS: 'address',
      ANNOTATION_XML: 'annotation-xml',
      APPLET: 'applet',
      AREA: 'area',
      ARTICLE: 'article',
      ASIDE: 'aside',
      B: 'b',
      BASE: 'base',
      BASEFONT: 'basefont',
      BGSOUND: 'bgsound',
      BIG: 'big',
      BLOCKQUOTE: 'blockquote',
      BODY: 'body',
      BR: 'br',
      BUTTON: 'button',
      CAPTION: 'caption',
      CENTER: 'center',
      CODE: 'code',
      COL: 'col',
      COLGROUP: 'colgroup',
      DD: 'dd',
      DESC: 'desc',
      DETAILS: 'details',
      DIALOG: 'dialog',
      DIR: 'dir',
      DIV: 'div',
      DL: 'dl',
      DT: 'dt',
      EM: 'em',
      EMBED: 'embed',
      FIELDSET: 'fieldset',
      FIGCAPTION: 'figcaption',
      FIGURE: 'figure',
      FONT: 'font',
      FOOTER: 'footer',
      FOREIGN_OBJECT: 'foreignObject',
      FORM: 'form',
      FRAME: 'frame',
      FRAMESET: 'frameset',
      H1: 'h1',
      H2: 'h2',
      H3: 'h3',
      H4: 'h4',
      H5: 'h5',
      H6: 'h6',
      HEAD: 'head',
      HEADER: 'header',
      HGROUP: 'hgroup',
      HR: 'hr',
      HTML: 'html',
      I: 'i',
      IMG: 'img',
      IMAGE: 'image',
      INPUT: 'input',
      IFRAME: 'iframe',
      KEYGEN: 'keygen',
      LABEL: 'label',
      LI: 'li',
      LINK: 'link',
      LISTING: 'listing',
      MAIN: 'main',
      MALIGNMARK: 'malignmark',
      MARQUEE: 'marquee',
      MATH: 'math',
      MENU: 'menu',
      META: 'meta',
      MGLYPH: 'mglyph',
      MI: 'mi',
      MO: 'mo',
      MN: 'mn',
      MS: 'ms',
      MTEXT: 'mtext',
      NAV: 'nav',
      NOBR: 'nobr',
      NOFRAMES: 'noframes',
      NOEMBED: 'noembed',
      NOSCRIPT: 'noscript',
      OBJECT: 'object',
      OL: 'ol',
      OPTGROUP: 'optgroup',
      OPTION: 'option',
      P: 'p',
      PARAM: 'param',
      PLAINTEXT: 'plaintext',
      PRE: 'pre',
      RB: 'rb',
      RP: 'rp',
      RT: 'rt',
      RTC: 'rtc',
      RUBY: 'ruby',
      S: 's',
      SCRIPT: 'script',
      SECTION: 'section',
      SELECT: 'select',
      SOURCE: 'source',
      SMALL: 'small',
      SPAN: 'span',
      STRIKE: 'strike',
      STRONG: 'strong',
      STYLE: 'style',
      SUB: 'sub',
      SUMMARY: 'summary',
      SUP: 'sup',
      TABLE: 'table',
      TBODY: 'tbody',
      TEMPLATE: 'template',
      TEXTAREA: 'textarea',
      TFOOT: 'tfoot',
      TD: 'td',
      TH: 'th',
      THEAD: 'thead',
      TITLE: 'title',
      TR: 'tr',
      TRACK: 'track',
      TT: 'tt',
      U: 'u',
      UL: 'ul',
      SVG: 'svg',
      VAR: 'var',
      WBR: 'wbr',
      XMP: 'xmp',
    });
    t.SPECIAL_ELEMENTS = {
      [r.HTML]: {
        [a.ADDRESS]: true,
        [a.APPLET]: true,
        [a.AREA]: true,
        [a.ARTICLE]: true,
        [a.ASIDE]: true,
        [a.BASE]: true,
        [a.BASEFONT]: true,
        [a.BGSOUND]: true,
        [a.BLOCKQUOTE]: true,
        [a.BODY]: true,
        [a.BR]: true,
        [a.BUTTON]: true,
        [a.CAPTION]: true,
        [a.CENTER]: true,
        [a.COL]: true,
        [a.COLGROUP]: true,
        [a.DD]: true,
        [a.DETAILS]: true,
        [a.DIR]: true,
        [a.DIV]: true,
        [a.DL]: true,
        [a.DT]: true,
        [a.EMBED]: true,
        [a.FIELDSET]: true,
        [a.FIGCAPTION]: true,
        [a.FIGURE]: true,
        [a.FOOTER]: true,
        [a.FORM]: true,
        [a.FRAME]: true,
        [a.FRAMESET]: true,
        [a.H1]: true,
        [a.H2]: true,
        [a.H3]: true,
        [a.H4]: true,
        [a.H5]: true,
        [a.H6]: true,
        [a.HEAD]: true,
        [a.HEADER]: true,
        [a.HGROUP]: true,
        [a.HR]: true,
        [a.HTML]: true,
        [a.IFRAME]: true,
        [a.IMG]: true,
        [a.INPUT]: true,
        [a.LI]: true,
        [a.LINK]: true,
        [a.LISTING]: true,
        [a.MAIN]: true,
        [a.MARQUEE]: true,
        [a.MENU]: true,
        [a.META]: true,
        [a.NAV]: true,
        [a.NOEMBED]: true,
        [a.NOFRAMES]: true,
        [a.NOSCRIPT]: true,
        [a.OBJECT]: true,
        [a.OL]: true,
        [a.P]: true,
        [a.PARAM]: true,
        [a.PLAINTEXT]: true,
        [a.PRE]: true,
        [a.SCRIPT]: true,
        [a.SECTION]: true,
        [a.SELECT]: true,
        [a.SOURCE]: true,
        [a.STYLE]: true,
        [a.SUMMARY]: true,
        [a.TABLE]: true,
        [a.TBODY]: true,
        [a.TD]: true,
        [a.TEMPLATE]: true,
        [a.TEXTAREA]: true,
        [a.TFOOT]: true,
        [a.TH]: true,
        [a.THEAD]: true,
        [a.TITLE]: true,
        [a.TR]: true,
        [a.TRACK]: true,
        [a.UL]: true,
        [a.WBR]: true,
        [a.XMP]: true,
      },
      [r.MATHML]: {
        [a.MI]: true,
        [a.MO]: true,
        [a.MN]: true,
        [a.MS]: true,
        [a.MTEXT]: true,
        [a.ANNOTATION_XML]: true,
      },
      [r.SVG]: { [a.TITLE]: true, [a.FOREIGN_OBJECT]: true, [a.DESC]: true },
    };
  },
  9481: (e, t) => {
    const r = [
      65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143, 327678, 327679, 393214, 393215,
      458750, 458751, 524286, 524287, 589822, 589823, 655358, 655359, 720894, 720895, 786430,
      786431, 851966, 851967, 917502, 917503, 983038, 983039, 1048574, 1048575, 1114110, 1114111,
    ];
    t.REPLACEMENT_CHARACTER = '�';
    t.CODE_POINTS = {
      EOF: -1,
      NULL: 0,
      TABULATION: 9,
      CARRIAGE_RETURN: 13,
      LINE_FEED: 10,
      FORM_FEED: 12,
      SPACE: 32,
      EXCLAMATION_MARK: 33,
      QUOTATION_MARK: 34,
      NUMBER_SIGN: 35,
      AMPERSAND: 38,
      APOSTROPHE: 39,
      HYPHEN_MINUS: 45,
      SOLIDUS: 47,
      DIGIT_0: 48,
      DIGIT_9: 57,
      SEMICOLON: 59,
      LESS_THAN_SIGN: 60,
      EQUALS_SIGN: 61,
      GREATER_THAN_SIGN: 62,
      QUESTION_MARK: 63,
      LATIN_CAPITAL_A: 65,
      LATIN_CAPITAL_F: 70,
      LATIN_CAPITAL_X: 88,
      LATIN_CAPITAL_Z: 90,
      RIGHT_SQUARE_BRACKET: 93,
      GRAVE_ACCENT: 96,
      LATIN_SMALL_A: 97,
      LATIN_SMALL_F: 102,
      LATIN_SMALL_X: 120,
      LATIN_SMALL_Z: 122,
      REPLACEMENT_CHARACTER: 65533,
    };
    t.CODE_POINT_SEQUENCES = {
      DASH_DASH_STRING: [45, 45],
      DOCTYPE_STRING: [68, 79, 67, 84, 89, 80, 69],
      CDATA_START_STRING: [91, 67, 68, 65, 84, 65, 91],
      SCRIPT_STRING: [115, 99, 114, 105, 112, 116],
      PUBLIC_STRING: [80, 85, 66, 76, 73, 67],
      SYSTEM_STRING: [83, 89, 83, 84, 69, 77],
    };
    t.isSurrogate = function (e) {
      return e >= 55296 && e <= 57343;
    };
    t.isSurrogatePair = function (e) {
      return e >= 56320 && e <= 57343;
    };
    t.getSurrogatePairCodePoint = function (e, t) {
      return (e - 55296) * 1024 + 9216 + t;
    };
    t.isControlCodePoint = function (e) {
      return (
        (e !== 32 && e !== 10 && e !== 13 && e !== 9 && e !== 12 && e >= 1 && e <= 31) ||
        (e >= 127 && e <= 159)
      );
    };
    t.isUndefinedCodePoint = function (e) {
      return (e >= 64976 && e <= 65007) || r.indexOf(e) > -1;
    };
  },
  6558: (e, t, r) => {
    const a = r(2079);
    class ErrorReportingMixinBase extends a {
      constructor(e, t) {
        super(e);
        this.posTracker = null;
        this.onParseError = t.onParseError;
      }
      _setErrorLocation(e) {
        e.startLine = e.endLine = this.posTracker.line;
        e.startCol = e.endCol = this.posTracker.col;
        e.startOffset = e.endOffset = this.posTracker.offset;
      }
      _reportError(e) {
        const t = {
          code: e,
          startLine: -1,
          startCol: -1,
          startOffset: -1,
          endLine: -1,
          endCol: -1,
          endOffset: -1,
        };
        this._setErrorLocation(t);
        this.onParseError(t);
      }
      _getOverriddenMethods(e) {
        return {
          _err(t) {
            e._reportError(t);
          },
        };
      }
    }
    e.exports = ErrorReportingMixinBase;
  },
  8910: (e, t, r) => {
    const a = r(6558);
    const n = r(9971);
    const i = r(2777);
    const o = r(2079);
    class ErrorReportingParserMixin extends a {
      constructor(e, t) {
        super(e, t);
        this.opts = t;
        this.ctLoc = null;
        this.locBeforeToken = false;
      }
      _setErrorLocation(e) {
        if (this.ctLoc) {
          e.startLine = this.ctLoc.startLine;
          e.startCol = this.ctLoc.startCol;
          e.startOffset = this.ctLoc.startOffset;
          e.endLine = this.locBeforeToken ? this.ctLoc.startLine : this.ctLoc.endLine;
          e.endCol = this.locBeforeToken ? this.ctLoc.startCol : this.ctLoc.endCol;
          e.endOffset = this.locBeforeToken ? this.ctLoc.startOffset : this.ctLoc.endOffset;
        }
      }
      _getOverriddenMethods(e, t) {
        return {
          _bootstrap(r, a) {
            t._bootstrap.call(this, r, a);
            o.install(this.tokenizer, n, e.opts);
            o.install(this.tokenizer, i);
          },
          _processInputToken(r) {
            e.ctLoc = r.location;
            t._processInputToken.call(this, r);
          },
          _err(t, r) {
            e.locBeforeToken = r && r.beforeToken;
            e._reportError(t);
          },
        };
      }
    }
    e.exports = ErrorReportingParserMixin;
  },
  1071: (e, t, r) => {
    const a = r(6558);
    const n = r(3340);
    const i = r(2079);
    class ErrorReportingPreprocessorMixin extends a {
      constructor(e, t) {
        super(e, t);
        this.posTracker = i.install(e, n);
        this.lastErrOffset = -1;
      }
      _reportError(e) {
        if (this.lastErrOffset !== this.posTracker.offset) {
          this.lastErrOffset = this.posTracker.offset;
          super._reportError(e);
        }
      }
    }
    e.exports = ErrorReportingPreprocessorMixin;
  },
  9971: (e, t, r) => {
    const a = r(6558);
    const n = r(1071);
    const i = r(2079);
    class ErrorReportingTokenizerMixin extends a {
      constructor(e, t) {
        super(e, t);
        const r = i.install(e.preprocessor, n, t);
        this.posTracker = r.posTracker;
      }
    }
    e.exports = ErrorReportingTokenizerMixin;
  },
  7253: (e, t, r) => {
    const a = r(2079);
    class LocationInfoOpenElementStackMixin extends a {
      constructor(e, t) {
        super(e);
        this.onItemPop = t.onItemPop;
      }
      _getOverriddenMethods(e, t) {
        return {
          pop() {
            e.onItemPop(this.current);
            t.pop.call(this);
          },
          popAllUpToHtmlElement() {
            for (let t = this.stackTop; t > 0; t--) {
              e.onItemPop(this.items[t]);
            }
            t.popAllUpToHtmlElement.call(this);
          },
          remove(r) {
            e.onItemPop(this.current);
            t.remove.call(this, r);
          },
        };
      }
    }
    e.exports = LocationInfoOpenElementStackMixin;
  },
  3647: (e, t, r) => {
    const a = r(2079);
    const n = r(5759);
    const i = r(2777);
    const o = r(7253);
    const s = r(9338);
    const p = s.TAG_NAMES;
    class LocationInfoParserMixin extends a {
      constructor(e) {
        super(e);
        this.parser = e;
        this.treeAdapter = this.parser.treeAdapter;
        this.posTracker = null;
        this.lastStartTagToken = null;
        this.lastFosterParentingLocation = null;
        this.currentToken = null;
      }
      _setStartLocation(e) {
        let t = null;
        if (this.lastStartTagToken) {
          t = Object.assign({}, this.lastStartTagToken.location);
          t.startTag = this.lastStartTagToken.location;
        }
        this.treeAdapter.setNodeSourceCodeLocation(e, t);
      }
      _setEndLocation(e, t) {
        const r = this.treeAdapter.getNodeSourceCodeLocation(e);
        if (r) {
          if (t.location) {
            const a = t.location;
            const i = this.treeAdapter.getTagName(e);
            const o = t.type === n.END_TAG_TOKEN && i === t.tagName;
            if (o) {
              r.endTag = Object.assign({}, a);
              r.endLine = a.endLine;
              r.endCol = a.endCol;
              r.endOffset = a.endOffset;
            } else {
              r.endLine = a.startLine;
              r.endCol = a.startCol;
              r.endOffset = a.startOffset;
            }
          }
        }
      }
      _getOverriddenMethods(e, t) {
        return {
          _bootstrap(r, n) {
            t._bootstrap.call(this, r, n);
            e.lastStartTagToken = null;
            e.lastFosterParentingLocation = null;
            e.currentToken = null;
            const s = a.install(this.tokenizer, i);
            e.posTracker = s.posTracker;
            a.install(this.openElements, o, {
              onItemPop: function (t) {
                e._setEndLocation(t, e.currentToken);
              },
            });
          },
          _runParsingLoop(r) {
            t._runParsingLoop.call(this, r);
            for (let t = this.openElements.stackTop; t >= 0; t--) {
              e._setEndLocation(this.openElements.items[t], e.currentToken);
            }
          },
          _processTokenInForeignContent(r) {
            e.currentToken = r;
            t._processTokenInForeignContent.call(this, r);
          },
          _processToken(r) {
            e.currentToken = r;
            t._processToken.call(this, r);
            const a =
              r.type === n.END_TAG_TOKEN &&
              (r.tagName === p.HTML ||
                (r.tagName === p.BODY && this.openElements.hasInScope(p.BODY)));
            if (a) {
              for (let t = this.openElements.stackTop; t >= 0; t--) {
                const a = this.openElements.items[t];
                if (this.treeAdapter.getTagName(a) === r.tagName) {
                  e._setEndLocation(a, r);
                  break;
                }
              }
            }
          },
          _setDocumentType(e) {
            t._setDocumentType.call(this, e);
            const r = this.treeAdapter.getChildNodes(this.document);
            const a = r.length;
            for (let t = 0; t < a; t++) {
              const a = r[t];
              if (this.treeAdapter.isDocumentTypeNode(a)) {
                this.treeAdapter.setNodeSourceCodeLocation(a, e.location);
                break;
              }
            }
          },
          _attachElementToTree(r) {
            e._setStartLocation(r);
            e.lastStartTagToken = null;
            t._attachElementToTree.call(this, r);
          },
          _appendElement(r, a) {
            e.lastStartTagToken = r;
            t._appendElement.call(this, r, a);
          },
          _insertElement(r, a) {
            e.lastStartTagToken = r;
            t._insertElement.call(this, r, a);
          },
          _insertTemplate(r) {
            e.lastStartTagToken = r;
            t._insertTemplate.call(this, r);
            const a = this.treeAdapter.getTemplateContent(this.openElements.current);
            this.treeAdapter.setNodeSourceCodeLocation(a, null);
          },
          _insertFakeRootElement() {
            t._insertFakeRootElement.call(this);
            this.treeAdapter.setNodeSourceCodeLocation(this.openElements.current, null);
          },
          _appendCommentNode(e, r) {
            t._appendCommentNode.call(this, e, r);
            const a = this.treeAdapter.getChildNodes(r);
            const n = a[a.length - 1];
            this.treeAdapter.setNodeSourceCodeLocation(n, e.location);
          },
          _findFosterParentingLocation() {
            e.lastFosterParentingLocation = t._findFosterParentingLocation.call(this);
            return e.lastFosterParentingLocation;
          },
          _insertCharacters(r) {
            t._insertCharacters.call(this, r);
            const a = this._shouldFosterParentOnInsertion();
            const n =
              (a && e.lastFosterParentingLocation.parent) ||
              this.openElements.currentTmplContent ||
              this.openElements.current;
            const i = this.treeAdapter.getChildNodes(n);
            const o =
              a && e.lastFosterParentingLocation.beforeElement
                ? i.indexOf(e.lastFosterParentingLocation.beforeElement) - 1
                : i.length - 1;
            const s = i[o];
            const p = this.treeAdapter.getNodeSourceCodeLocation(s);
            if (p) {
              p.endLine = r.location.endLine;
              p.endCol = r.location.endCol;
              p.endOffset = r.location.endOffset;
            } else {
              this.treeAdapter.setNodeSourceCodeLocation(s, r.location);
            }
          },
        };
      }
    }
    e.exports = LocationInfoParserMixin;
  },
  2777: (e, t, r) => {
    const a = r(2079);
    const n = r(5759);
    const i = r(3340);
    class LocationInfoTokenizerMixin extends a {
      constructor(e) {
        super(e);
        this.tokenizer = e;
        this.posTracker = a.install(e.preprocessor, i);
        this.currentAttrLocation = null;
        this.ctLoc = null;
      }
      _getCurrentLocation() {
        return {
          startLine: this.posTracker.line,
          startCol: this.posTracker.col,
          startOffset: this.posTracker.offset,
          endLine: -1,
          endCol: -1,
          endOffset: -1,
        };
      }
      _attachCurrentAttrLocationInfo() {
        this.currentAttrLocation.endLine = this.posTracker.line;
        this.currentAttrLocation.endCol = this.posTracker.col;
        this.currentAttrLocation.endOffset = this.posTracker.offset;
        const e = this.tokenizer.currentToken;
        const t = this.tokenizer.currentAttr;
        if (!e.location.attrs) {
          e.location.attrs = Object.create(null);
        }
        e.location.attrs[t.name] = this.currentAttrLocation;
      }
      _getOverriddenMethods(e, t) {
        const r = {
          _createStartTagToken() {
            t._createStartTagToken.call(this);
            this.currentToken.location = e.ctLoc;
          },
          _createEndTagToken() {
            t._createEndTagToken.call(this);
            this.currentToken.location = e.ctLoc;
          },
          _createCommentToken() {
            t._createCommentToken.call(this);
            this.currentToken.location = e.ctLoc;
          },
          _createDoctypeToken(r) {
            t._createDoctypeToken.call(this, r);
            this.currentToken.location = e.ctLoc;
          },
          _createCharacterToken(r, a) {
            t._createCharacterToken.call(this, r, a);
            this.currentCharacterToken.location = e.ctLoc;
          },
          _createEOFToken() {
            t._createEOFToken.call(this);
            this.currentToken.location = e._getCurrentLocation();
          },
          _createAttr(r) {
            t._createAttr.call(this, r);
            e.currentAttrLocation = e._getCurrentLocation();
          },
          _leaveAttrName(r) {
            t._leaveAttrName.call(this, r);
            e._attachCurrentAttrLocationInfo();
          },
          _leaveAttrValue(r) {
            t._leaveAttrValue.call(this, r);
            e._attachCurrentAttrLocationInfo();
          },
          _emitCurrentToken() {
            const r = this.currentToken.location;
            if (this.currentCharacterToken) {
              this.currentCharacterToken.location.endLine = r.startLine;
              this.currentCharacterToken.location.endCol = r.startCol;
              this.currentCharacterToken.location.endOffset = r.startOffset;
            }
            if (this.currentToken.type === n.EOF_TOKEN) {
              r.endLine = r.startLine;
              r.endCol = r.startCol;
              r.endOffset = r.startOffset;
            } else {
              r.endLine = e.posTracker.line;
              r.endCol = e.posTracker.col + 1;
              r.endOffset = e.posTracker.offset + 1;
            }
            t._emitCurrentToken.call(this);
          },
          _emitCurrentCharacterToken() {
            const r = this.currentCharacterToken && this.currentCharacterToken.location;
            if (r && r.endOffset === -1) {
              r.endLine = e.posTracker.line;
              r.endCol = e.posTracker.col;
              r.endOffset = e.posTracker.offset;
            }
            t._emitCurrentCharacterToken.call(this);
          },
        };
        Object.keys(n.MODE).forEach((a) => {
          const i = n.MODE[a];
          r[i] = function (r) {
            e.ctLoc = e._getCurrentLocation();
            t[i].call(this, r);
          };
        });
        return r;
      }
    }
    e.exports = LocationInfoTokenizerMixin;
  },
  3340: (e, t, r) => {
    const a = r(2079);
    class PositionTrackingPreprocessorMixin extends a {
      constructor(e) {
        super(e);
        this.preprocessor = e;
        this.isEol = false;
        this.lineStartPos = 0;
        this.droppedBufferSize = 0;
        this.offset = 0;
        this.col = 0;
        this.line = 1;
      }
      _getOverriddenMethods(e, t) {
        return {
          advance() {
            const r = this.pos + 1;
            const a = this.html[r];
            if (e.isEol) {
              e.isEol = false;
              e.line++;
              e.lineStartPos = r;
            }
            if (a === '\n' || (a === '\r' && this.html[r + 1] !== '\n')) {
              e.isEol = true;
            }
            e.col = r - e.lineStartPos + 1;
            e.offset = e.droppedBufferSize + r;
            return t.advance.call(this);
          },
          retreat() {
            t.retreat.call(this);
            e.isEol = false;
            e.col = this.pos - e.lineStartPos + 1;
          },
          dropParsedChunk() {
            const r = this.pos;
            t.dropParsedChunk.call(this);
            const a = r - this.pos;
            e.lineStartPos -= a;
            e.droppedBufferSize += a;
            e.offset = e.droppedBufferSize + this.pos;
          },
        };
      }
    }
    e.exports = PositionTrackingPreprocessorMixin;
  },
  9819: (e) => {
    const t = 3;
    class FormattingElementList {
      constructor(e) {
        this.length = 0;
        this.entries = [];
        this.treeAdapter = e;
        this.bookmark = null;
      }
      _getNoahArkConditionCandidates(e) {
        const r = [];
        if (this.length >= t) {
          const t = this.treeAdapter.getAttrList(e).length;
          const a = this.treeAdapter.getTagName(e);
          const n = this.treeAdapter.getNamespaceURI(e);
          for (let e = this.length - 1; e >= 0; e--) {
            const i = this.entries[e];
            if (i.type === FormattingElementList.MARKER_ENTRY) {
              break;
            }
            const o = i.element;
            const s = this.treeAdapter.getAttrList(o);
            const p =
              this.treeAdapter.getTagName(o) === a &&
              this.treeAdapter.getNamespaceURI(o) === n &&
              s.length === t;
            if (p) {
              r.push({ idx: e, attrs: s });
            }
          }
        }
        return r.length < t ? [] : r;
      }
      _ensureNoahArkCondition(e) {
        const r = this._getNoahArkConditionCandidates(e);
        let a = r.length;
        if (a) {
          const n = this.treeAdapter.getAttrList(e);
          const i = n.length;
          const o = Object.create(null);
          for (let e = 0; e < i; e++) {
            const t = n[e];
            o[t.name] = t.value;
          }
          for (let e = 0; e < i; e++) {
            for (let n = 0; n < a; n++) {
              const i = r[n].attrs[e];
              if (o[i.name] !== i.value) {
                r.splice(n, 1);
                a--;
              }
              if (r.length < t) {
                return;
              }
            }
          }
          for (let e = a - 1; e >= t - 1; e--) {
            this.entries.splice(r[e].idx, 1);
            this.length--;
          }
        }
      }
      insertMarker() {
        this.entries.push({ type: FormattingElementList.MARKER_ENTRY });
        this.length++;
      }
      pushElement(e, t) {
        this._ensureNoahArkCondition(e);
        this.entries.push({ type: FormattingElementList.ELEMENT_ENTRY, element: e, token: t });
        this.length++;
      }
      insertElementAfterBookmark(e, t) {
        let r = this.length - 1;
        for (; r >= 0; r--) {
          if (this.entries[r] === this.bookmark) {
            break;
          }
        }
        this.entries.splice(r + 1, 0, {
          type: FormattingElementList.ELEMENT_ENTRY,
          element: e,
          token: t,
        });
        this.length++;
      }
      removeEntry(e) {
        for (let t = this.length - 1; t >= 0; t--) {
          if (this.entries[t] === e) {
            this.entries.splice(t, 1);
            this.length--;
            break;
          }
        }
      }
      clearToLastMarker() {
        while (this.length) {
          const e = this.entries.pop();
          this.length--;
          if (e.type === FormattingElementList.MARKER_ENTRY) {
            break;
          }
        }
      }
      getElementEntryInScopeWithTagName(e) {
        for (let t = this.length - 1; t >= 0; t--) {
          const r = this.entries[t];
          if (r.type === FormattingElementList.MARKER_ENTRY) {
            return null;
          }
          if (this.treeAdapter.getTagName(r.element) === e) {
            return r;
          }
        }
        return null;
      }
      getElementEntry(e) {
        for (let t = this.length - 1; t >= 0; t--) {
          const r = this.entries[t];
          if (r.type === FormattingElementList.ELEMENT_ENTRY && r.element === e) {
            return r;
          }
        }
        return null;
      }
    }
    FormattingElementList.MARKER_ENTRY = 'MARKER_ENTRY';
    FormattingElementList.ELEMENT_ENTRY = 'ELEMENT_ENTRY';
    e.exports = FormattingElementList;
  },
  1554: (e, t, r) => {
    const a = r(5759);
    const n = r(4813);
    const i = r(9819);
    const o = r(3647);
    const s = r(8910);
    const p = r(2079);
    const d = r(6306);
    const l = r(2772);
    const m = r(7079);
    const c = r(2526);
    const g = r(5906);
    const v = r(9481);
    const T = r(9338);
    const E = T.TAG_NAMES;
    const _ = T.NAMESPACES;
    const w = T.ATTRS;
    const A = {
      scriptingEnabled: true,
      sourceCodeLocationInfo: false,
      onParseError: null,
      treeAdapter: d,
    };
    const b = 'hidden';
    const y = 8;
    const S = 3;
    const C = 'INITIAL_MODE';
    const k = 'BEFORE_HTML_MODE';
    const N = 'BEFORE_HEAD_MODE';
    const D = 'IN_HEAD_MODE';
    const O = 'IN_HEAD_NO_SCRIPT_MODE';
    const I = 'AFTER_HEAD_MODE';
    const R = 'IN_BODY_MODE';
    const P = 'TEXT_MODE';
    const L = 'IN_TABLE_MODE';
    const x = 'IN_TABLE_TEXT_MODE';
    const F = 'IN_CAPTION_MODE';
    const M = 'IN_COLUMN_GROUP_MODE';
    const B = 'IN_TABLE_BODY_MODE';
    const G = 'IN_ROW_MODE';
    const U = 'IN_CELL_MODE';
    const H = 'IN_SELECT_MODE';
    const V = 'IN_SELECT_IN_TABLE_MODE';
    const q = 'IN_TEMPLATE_MODE';
    const j = 'AFTER_BODY_MODE';
    const K = 'IN_FRAMESET_MODE';
    const z = 'AFTER_FRAMESET_MODE';
    const W = 'AFTER_AFTER_BODY_MODE';
    const Y = 'AFTER_AFTER_FRAMESET_MODE';
    const $ = {
      [E.TR]: G,
      [E.TBODY]: B,
      [E.THEAD]: B,
      [E.TFOOT]: B,
      [E.CAPTION]: F,
      [E.COLGROUP]: M,
      [E.TABLE]: L,
      [E.BODY]: R,
      [E.FRAMESET]: K,
    };
    const Q = {
      [E.CAPTION]: L,
      [E.COLGROUP]: L,
      [E.TBODY]: L,
      [E.TFOOT]: L,
      [E.THEAD]: L,
      [E.COL]: M,
      [E.TR]: B,
      [E.TD]: G,
      [E.TH]: G,
    };
    const X = {
      [C]: {
        [a.CHARACTER_TOKEN]: tokenInInitialMode,
        [a.NULL_CHARACTER_TOKEN]: tokenInInitialMode,
        [a.WHITESPACE_CHARACTER_TOKEN]: ignoreToken,
        [a.COMMENT_TOKEN]: appendComment,
        [a.DOCTYPE_TOKEN]: doctypeInInitialMode,
        [a.START_TAG_TOKEN]: tokenInInitialMode,
        [a.END_TAG_TOKEN]: tokenInInitialMode,
        [a.EOF_TOKEN]: tokenInInitialMode,
      },
      [k]: {
        [a.CHARACTER_TOKEN]: tokenBeforeHtml,
        [a.NULL_CHARACTER_TOKEN]: tokenBeforeHtml,
        [a.WHITESPACE_CHARACTER_TOKEN]: ignoreToken,
        [a.COMMENT_TOKEN]: appendComment,
        [a.DOCTYPE_TOKEN]: ignoreToken,
        [a.START_TAG_TOKEN]: startTagBeforeHtml,
        [a.END_TAG_TOKEN]: endTagBeforeHtml,
        [a.EOF_TOKEN]: tokenBeforeHtml,
      },
      [N]: {
        [a.CHARACTER_TOKEN]: tokenBeforeHead,
        [a.NULL_CHARACTER_TOKEN]: tokenBeforeHead,
        [a.WHITESPACE_CHARACTER_TOKEN]: ignoreToken,
        [a.COMMENT_TOKEN]: appendComment,
        [a.DOCTYPE_TOKEN]: misplacedDoctype,
        [a.START_TAG_TOKEN]: startTagBeforeHead,
        [a.END_TAG_TOKEN]: endTagBeforeHead,
        [a.EOF_TOKEN]: tokenBeforeHead,
      },
      [D]: {
        [a.CHARACTER_TOKEN]: tokenInHead,
        [a.NULL_CHARACTER_TOKEN]: tokenInHead,
        [a.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
        [a.COMMENT_TOKEN]: appendComment,
        [a.DOCTYPE_TOKEN]: misplacedDoctype,
        [a.START_TAG_TOKEN]: startTagInHead,
        [a.END_TAG_TOKEN]: endTagInHead,
        [a.EOF_TOKEN]: tokenInHead,
      },
      [O]: {
        [a.CHARACTER_TOKEN]: tokenInHeadNoScript,
        [a.NULL_CHARACTER_TOKEN]: tokenInHeadNoScript,
        [a.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
        [a.COMMENT_TOKEN]: appendComment,
        [a.DOCTYPE_TOKEN]: misplacedDoctype,
        [a.START_TAG_TOKEN]: startTagInHeadNoScript,
        [a.END_TAG_TOKEN]: endTagInHeadNoScript,
        [a.EOF_TOKEN]: tokenInHeadNoScript,
      },
      [I]: {
        [a.CHARACTER_TOKEN]: tokenAfterHead,
        [a.NULL_CHARACTER_TOKEN]: tokenAfterHead,
        [a.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
        [a.COMMENT_TOKEN]: appendComment,
        [a.DOCTYPE_TOKEN]: misplacedDoctype,
        [a.START_TAG_TOKEN]: startTagAfterHead,
        [a.END_TAG_TOKEN]: endTagAfterHead,
        [a.EOF_TOKEN]: tokenAfterHead,
      },
      [R]: {
        [a.CHARACTER_TOKEN]: characterInBody,
        [a.NULL_CHARACTER_TOKEN]: ignoreToken,
        [a.WHITESPACE_CHARACTER_TOKEN]: whitespaceCharacterInBody,
        [a.COMMENT_TOKEN]: appendComment,
        [a.DOCTYPE_TOKEN]: ignoreToken,
        [a.START_TAG_TOKEN]: startTagInBody,
        [a.END_TAG_TOKEN]: endTagInBody,
        [a.EOF_TOKEN]: eofInBody,
      },
      [P]: {
        [a.CHARACTER_TOKEN]: insertCharacters,
        [a.NULL_CHARACTER_TOKEN]: insertCharacters,
        [a.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
        [a.COMMENT_TOKEN]: ignoreToken,
        [a.DOCTYPE_TOKEN]: ignoreToken,
        [a.START_TAG_TOKEN]: ignoreToken,
        [a.END_TAG_TOKEN]: endTagInText,
        [a.EOF_TOKEN]: eofInText,
      },
      [L]: {
        [a.CHARACTER_TOKEN]: characterInTable,
        [a.NULL_CHARACTER_TOKEN]: characterInTable,
        [a.WHITESPACE_CHARACTER_TOKEN]: characterInTable,
        [a.COMMENT_TOKEN]: appendComment,
        [a.DOCTYPE_TOKEN]: ignoreToken,
        [a.START_TAG_TOKEN]: startTagInTable,
        [a.END_TAG_TOKEN]: endTagInTable,
        [a.EOF_TOKEN]: eofInBody,
      },
      [x]: {
        [a.CHARACTER_TOKEN]: characterInTableText,
        [a.NULL_CHARACTER_TOKEN]: ignoreToken,
        [a.WHITESPACE_CHARACTER_TOKEN]: whitespaceCharacterInTableText,
        [a.COMMENT_TOKEN]: tokenInTableText,
        [a.DOCTYPE_TOKEN]: tokenInTableText,
        [a.START_TAG_TOKEN]: tokenInTableText,
        [a.END_TAG_TOKEN]: tokenInTableText,
        [a.EOF_TOKEN]: tokenInTableText,
      },
      [F]: {
        [a.CHARACTER_TOKEN]: characterInBody,
        [a.NULL_CHARACTER_TOKEN]: ignoreToken,
        [a.WHITESPACE_CHARACTER_TOKEN]: whitespaceCharacterInBody,
        [a.COMMENT_TOKEN]: appendComment,
        [a.DOCTYPE_TOKEN]: ignoreToken,
        [a.START_TAG_TOKEN]: startTagInCaption,
        [a.END_TAG_TOKEN]: endTagInCaption,
        [a.EOF_TOKEN]: eofInBody,
      },
      [M]: {
        [a.CHARACTER_TOKEN]: tokenInColumnGroup,
        [a.NULL_CHARACTER_TOKEN]: tokenInColumnGroup,
        [a.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
        [a.COMMENT_TOKEN]: appendComment,
        [a.DOCTYPE_TOKEN]: ignoreToken,
        [a.START_TAG_TOKEN]: startTagInColumnGroup,
        [a.END_TAG_TOKEN]: endTagInColumnGroup,
        [a.EOF_TOKEN]: eofInBody,
      },
      [B]: {
        [a.CHARACTER_TOKEN]: characterInTable,
        [a.NULL_CHARACTER_TOKEN]: characterInTable,
        [a.WHITESPACE_CHARACTER_TOKEN]: characterInTable,
        [a.COMMENT_TOKEN]: appendComment,
        [a.DOCTYPE_TOKEN]: ignoreToken,
        [a.START_TAG_TOKEN]: startTagInTableBody,
        [a.END_TAG_TOKEN]: endTagInTableBody,
        [a.EOF_TOKEN]: eofInBody,
      },
      [G]: {
        [a.CHARACTER_TOKEN]: characterInTable,
        [a.NULL_CHARACTER_TOKEN]: characterInTable,
        [a.WHITESPACE_CHARACTER_TOKEN]: characterInTable,
        [a.COMMENT_TOKEN]: appendComment,
        [a.DOCTYPE_TOKEN]: ignoreToken,
        [a.START_TAG_TOKEN]: startTagInRow,
        [a.END_TAG_TOKEN]: endTagInRow,
        [a.EOF_TOKEN]: eofInBody,
      },
      [U]: {
        [a.CHARACTER_TOKEN]: characterInBody,
        [a.NULL_CHARACTER_TOKEN]: ignoreToken,
        [a.WHITESPACE_CHARACTER_TOKEN]: whitespaceCharacterInBody,
        [a.COMMENT_TOKEN]: appendComment,
        [a.DOCTYPE_TOKEN]: ignoreToken,
        [a.START_TAG_TOKEN]: startTagInCell,
        [a.END_TAG_TOKEN]: endTagInCell,
        [a.EOF_TOKEN]: eofInBody,
      },
      [H]: {
        [a.CHARACTER_TOKEN]: insertCharacters,
        [a.NULL_CHARACTER_TOKEN]: ignoreToken,
        [a.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
        [a.COMMENT_TOKEN]: appendComment,
        [a.DOCTYPE_TOKEN]: ignoreToken,
        [a.START_TAG_TOKEN]: startTagInSelect,
        [a.END_TAG_TOKEN]: endTagInSelect,
        [a.EOF_TOKEN]: eofInBody,
      },
      [V]: {
        [a.CHARACTER_TOKEN]: insertCharacters,
        [a.NULL_CHARACTER_TOKEN]: ignoreToken,
        [a.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
        [a.COMMENT_TOKEN]: appendComment,
        [a.DOCTYPE_TOKEN]: ignoreToken,
        [a.START_TAG_TOKEN]: startTagInSelectInTable,
        [a.END_TAG_TOKEN]: endTagInSelectInTable,
        [a.EOF_TOKEN]: eofInBody,
      },
      [q]: {
        [a.CHARACTER_TOKEN]: characterInBody,
        [a.NULL_CHARACTER_TOKEN]: ignoreToken,
        [a.WHITESPACE_CHARACTER_TOKEN]: whitespaceCharacterInBody,
        [a.COMMENT_TOKEN]: appendComment,
        [a.DOCTYPE_TOKEN]: ignoreToken,
        [a.START_TAG_TOKEN]: startTagInTemplate,
        [a.END_TAG_TOKEN]: endTagInTemplate,
        [a.EOF_TOKEN]: eofInTemplate,
      },
      [j]: {
        [a.CHARACTER_TOKEN]: tokenAfterBody,
        [a.NULL_CHARACTER_TOKEN]: tokenAfterBody,
        [a.WHITESPACE_CHARACTER_TOKEN]: whitespaceCharacterInBody,
        [a.COMMENT_TOKEN]: appendCommentToRootHtmlElement,
        [a.DOCTYPE_TOKEN]: ignoreToken,
        [a.START_TAG_TOKEN]: startTagAfterBody,
        [a.END_TAG_TOKEN]: endTagAfterBody,
        [a.EOF_TOKEN]: stopParsing,
      },
      [K]: {
        [a.CHARACTER_TOKEN]: ignoreToken,
        [a.NULL_CHARACTER_TOKEN]: ignoreToken,
        [a.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
        [a.COMMENT_TOKEN]: appendComment,
        [a.DOCTYPE_TOKEN]: ignoreToken,
        [a.START_TAG_TOKEN]: startTagInFrameset,
        [a.END_TAG_TOKEN]: endTagInFrameset,
        [a.EOF_TOKEN]: stopParsing,
      },
      [z]: {
        [a.CHARACTER_TOKEN]: ignoreToken,
        [a.NULL_CHARACTER_TOKEN]: ignoreToken,
        [a.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
        [a.COMMENT_TOKEN]: appendComment,
        [a.DOCTYPE_TOKEN]: ignoreToken,
        [a.START_TAG_TOKEN]: startTagAfterFrameset,
        [a.END_TAG_TOKEN]: endTagAfterFrameset,
        [a.EOF_TOKEN]: stopParsing,
      },
      [W]: {
        [a.CHARACTER_TOKEN]: tokenAfterAfterBody,
        [a.NULL_CHARACTER_TOKEN]: tokenAfterAfterBody,
        [a.WHITESPACE_CHARACTER_TOKEN]: whitespaceCharacterInBody,
        [a.COMMENT_TOKEN]: appendCommentToDocument,
        [a.DOCTYPE_TOKEN]: ignoreToken,
        [a.START_TAG_TOKEN]: startTagAfterAfterBody,
        [a.END_TAG_TOKEN]: tokenAfterAfterBody,
        [a.EOF_TOKEN]: stopParsing,
      },
      [Y]: {
        [a.CHARACTER_TOKEN]: ignoreToken,
        [a.NULL_CHARACTER_TOKEN]: ignoreToken,
        [a.WHITESPACE_CHARACTER_TOKEN]: whitespaceCharacterInBody,
        [a.COMMENT_TOKEN]: appendCommentToDocument,
        [a.DOCTYPE_TOKEN]: ignoreToken,
        [a.START_TAG_TOKEN]: startTagAfterAfterFrameset,
        [a.END_TAG_TOKEN]: ignoreToken,
        [a.EOF_TOKEN]: stopParsing,
      },
    };
    class Parser {
      constructor(e) {
        this.options = l(A, e);
        this.treeAdapter = this.options.treeAdapter;
        this.pendingScript = null;
        if (this.options.sourceCodeLocationInfo) {
          p.install(this, o);
        }
        if (this.options.onParseError) {
          p.install(this, s, { onParseError: this.options.onParseError });
        }
      }
      parse(e) {
        const t = this.treeAdapter.createDocument();
        this._bootstrap(t, null);
        this.tokenizer.write(e, true);
        this._runParsingLoop(null);
        return t;
      }
      parseFragment(e, t) {
        if (!t) {
          t = this.treeAdapter.createElement(E.TEMPLATE, _.HTML, []);
        }
        const r = this.treeAdapter.createElement('documentmock', _.HTML, []);
        this._bootstrap(r, t);
        if (this.treeAdapter.getTagName(t) === E.TEMPLATE) {
          this._pushTmplInsertionMode(q);
        }
        this._initTokenizerForFragmentParsing();
        this._insertFakeRootElement();
        this._resetInsertionMode();
        this._findFormInFragmentContext();
        this.tokenizer.write(e, true);
        this._runParsingLoop(null);
        const a = this.treeAdapter.getFirstChild(r);
        const n = this.treeAdapter.createDocumentFragment();
        this._adoptNodes(a, n);
        return n;
      }
      _bootstrap(e, t) {
        this.tokenizer = new a(this.options);
        this.stopped = false;
        this.insertionMode = C;
        this.originalInsertionMode = '';
        this.document = e;
        this.fragmentContext = t;
        this.headElement = null;
        this.formElement = null;
        this.openElements = new n(this.document, this.treeAdapter);
        this.activeFormattingElements = new i(this.treeAdapter);
        this.tmplInsertionModeStack = [];
        this.tmplInsertionModeStackTop = -1;
        this.currentTmplInsertionMode = null;
        this.pendingCharacterTokens = [];
        this.hasNonWhitespacePendingCharacterToken = false;
        this.framesetOk = true;
        this.skipNextNewLine = false;
        this.fosterParentingEnabled = false;
      }
      _err() {}
      _runParsingLoop(e) {
        while (!this.stopped) {
          this._setupTokenizerCDATAMode();
          const t = this.tokenizer.getNextToken();
          if (t.type === a.HIBERNATION_TOKEN) {
            break;
          }
          if (this.skipNextNewLine) {
            this.skipNextNewLine = false;
            if (t.type === a.WHITESPACE_CHARACTER_TOKEN && t.chars[0] === '\n') {
              if (t.chars.length === 1) {
                continue;
              }
              t.chars = t.chars.substr(1);
            }
          }
          this._processInputToken(t);
          if (e && this.pendingScript) {
            break;
          }
        }
      }
      runParsingLoopForCurrentChunk(e, t) {
        this._runParsingLoop(t);
        if (t && this.pendingScript) {
          const e = this.pendingScript;
          this.pendingScript = null;
          t(e);
          return;
        }
        if (e) {
          e();
        }
      }
      _setupTokenizerCDATAMode() {
        const e = this._getAdjustedCurrentElement();
        this.tokenizer.allowCDATA =
          e &&
          e !== this.document &&
          this.treeAdapter.getNamespaceURI(e) !== _.HTML &&
          !this._isIntegrationPoint(e);
      }
      _switchToTextParsing(e, t) {
        this._insertElement(e, _.HTML);
        this.tokenizer.state = t;
        this.originalInsertionMode = this.insertionMode;
        this.insertionMode = P;
      }
      switchToPlaintextParsing() {
        this.insertionMode = P;
        this.originalInsertionMode = R;
        this.tokenizer.state = a.MODE.PLAINTEXT;
      }
      _getAdjustedCurrentElement() {
        return this.openElements.stackTop === 0 && this.fragmentContext
          ? this.fragmentContext
          : this.openElements.current;
      }
      _findFormInFragmentContext() {
        let e = this.fragmentContext;
        do {
          if (this.treeAdapter.getTagName(e) === E.FORM) {
            this.formElement = e;
            break;
          }
          e = this.treeAdapter.getParentNode(e);
        } while (e);
      }
      _initTokenizerForFragmentParsing() {
        if (this.treeAdapter.getNamespaceURI(this.fragmentContext) === _.HTML) {
          const e = this.treeAdapter.getTagName(this.fragmentContext);
          if (e === E.TITLE || e === E.TEXTAREA) {
            this.tokenizer.state = a.MODE.RCDATA;
          } else if (
            e === E.STYLE ||
            e === E.XMP ||
            e === E.IFRAME ||
            e === E.NOEMBED ||
            e === E.NOFRAMES ||
            e === E.NOSCRIPT
          ) {
            this.tokenizer.state = a.MODE.RAWTEXT;
          } else if (e === E.SCRIPT) {
            this.tokenizer.state = a.MODE.SCRIPT_DATA;
          } else if (e === E.PLAINTEXT) {
            this.tokenizer.state = a.MODE.PLAINTEXT;
          }
        }
      }
      _setDocumentType(e) {
        const t = e.name || '';
        const r = e.publicId || '';
        const a = e.systemId || '';
        this.treeAdapter.setDocumentType(this.document, t, r, a);
      }
      _attachElementToTree(e) {
        if (this._shouldFosterParentOnInsertion()) {
          this._fosterParentElement(e);
        } else {
          const t = this.openElements.currentTmplContent || this.openElements.current;
          this.treeAdapter.appendChild(t, e);
        }
      }
      _appendElement(e, t) {
        const r = this.treeAdapter.createElement(e.tagName, t, e.attrs);
        this._attachElementToTree(r);
      }
      _insertElement(e, t) {
        const r = this.treeAdapter.createElement(e.tagName, t, e.attrs);
        this._attachElementToTree(r);
        this.openElements.push(r);
      }
      _insertFakeElement(e) {
        const t = this.treeAdapter.createElement(e, _.HTML, []);
        this._attachElementToTree(t);
        this.openElements.push(t);
      }
      _insertTemplate(e) {
        const t = this.treeAdapter.createElement(e.tagName, _.HTML, e.attrs);
        const r = this.treeAdapter.createDocumentFragment();
        this.treeAdapter.setTemplateContent(t, r);
        this._attachElementToTree(t);
        this.openElements.push(t);
      }
      _insertFakeRootElement() {
        const e = this.treeAdapter.createElement(E.HTML, _.HTML, []);
        this.treeAdapter.appendChild(this.openElements.current, e);
        this.openElements.push(e);
      }
      _appendCommentNode(e, t) {
        const r = this.treeAdapter.createCommentNode(e.data);
        this.treeAdapter.appendChild(t, r);
      }
      _insertCharacters(e) {
        if (this._shouldFosterParentOnInsertion()) {
          this._fosterParentText(e.chars);
        } else {
          const t = this.openElements.currentTmplContent || this.openElements.current;
          this.treeAdapter.insertText(t, e.chars);
        }
      }
      _adoptNodes(e, t) {
        for (let r = this.treeAdapter.getFirstChild(e); r; r = this.treeAdapter.getFirstChild(e)) {
          this.treeAdapter.detachNode(r);
          this.treeAdapter.appendChild(t, r);
        }
      }
      _shouldProcessTokenInForeignContent(e) {
        const t = this._getAdjustedCurrentElement();
        if (!t || t === this.document) {
          return false;
        }
        const r = this.treeAdapter.getNamespaceURI(t);
        if (r === _.HTML) {
          return false;
        }
        if (
          this.treeAdapter.getTagName(t) === E.ANNOTATION_XML &&
          r === _.MATHML &&
          e.type === a.START_TAG_TOKEN &&
          e.tagName === E.SVG
        ) {
          return false;
        }
        const n =
          e.type === a.CHARACTER_TOKEN ||
          e.type === a.NULL_CHARACTER_TOKEN ||
          e.type === a.WHITESPACE_CHARACTER_TOKEN;
        const i =
          e.type === a.START_TAG_TOKEN && e.tagName !== E.MGLYPH && e.tagName !== E.MALIGNMARK;
        if ((i || n) && this._isIntegrationPoint(t, _.MATHML)) {
          return false;
        }
        if ((e.type === a.START_TAG_TOKEN || n) && this._isIntegrationPoint(t, _.HTML)) {
          return false;
        }
        return e.type !== a.EOF_TOKEN;
      }
      _processToken(e) {
        X[this.insertionMode][e.type](this, e);
      }
      _processTokenInBodyMode(e) {
        X[R][e.type](this, e);
      }
      _processTokenInForeignContent(e) {
        if (e.type === a.CHARACTER_TOKEN) {
          characterInForeignContent(this, e);
        } else if (e.type === a.NULL_CHARACTER_TOKEN) {
          nullCharacterInForeignContent(this, e);
        } else if (e.type === a.WHITESPACE_CHARACTER_TOKEN) {
          insertCharacters(this, e);
        } else if (e.type === a.COMMENT_TOKEN) {
          appendComment(this, e);
        } else if (e.type === a.START_TAG_TOKEN) {
          startTagInForeignContent(this, e);
        } else if (e.type === a.END_TAG_TOKEN) {
          endTagInForeignContent(this, e);
        }
      }
      _processInputToken(e) {
        if (this._shouldProcessTokenInForeignContent(e)) {
          this._processTokenInForeignContent(e);
        } else {
          this._processToken(e);
        }
        if (e.type === a.START_TAG_TOKEN && e.selfClosing && !e.ackSelfClosing) {
          this._err(g.nonVoidHtmlElementStartTagWithTrailingSolidus);
        }
      }
      _isIntegrationPoint(e, t) {
        const r = this.treeAdapter.getTagName(e);
        const a = this.treeAdapter.getNamespaceURI(e);
        const n = this.treeAdapter.getAttrList(e);
        return c.isIntegrationPoint(r, a, n, t);
      }
      _reconstructActiveFormattingElements() {
        const e = this.activeFormattingElements.length;
        if (e) {
          let t = e;
          let r = null;
          do {
            t--;
            r = this.activeFormattingElements.entries[t];
            if (r.type === i.MARKER_ENTRY || this.openElements.contains(r.element)) {
              t++;
              break;
            }
          } while (t > 0);
          for (let a = t; a < e; a++) {
            r = this.activeFormattingElements.entries[a];
            this._insertElement(r.token, this.treeAdapter.getNamespaceURI(r.element));
            r.element = this.openElements.current;
          }
        }
      }
      _closeTableCell() {
        this.openElements.generateImpliedEndTags();
        this.openElements.popUntilTableCellPopped();
        this.activeFormattingElements.clearToLastMarker();
        this.insertionMode = G;
      }
      _closePElement() {
        this.openElements.generateImpliedEndTagsWithExclusion(E.P);
        this.openElements.popUntilTagNamePopped(E.P);
      }
      _resetInsertionMode() {
        for (let e = this.openElements.stackTop, t = false; e >= 0; e--) {
          let r = this.openElements.items[e];
          if (e === 0) {
            t = true;
            if (this.fragmentContext) {
              r = this.fragmentContext;
            }
          }
          const a = this.treeAdapter.getTagName(r);
          const n = $[a];
          if (n) {
            this.insertionMode = n;
            break;
          } else if (!t && (a === E.TD || a === E.TH)) {
            this.insertionMode = U;
            break;
          } else if (!t && a === E.HEAD) {
            this.insertionMode = D;
            break;
          } else if (a === E.SELECT) {
            this._resetInsertionModeForSelect(e);
            break;
          } else if (a === E.TEMPLATE) {
            this.insertionMode = this.currentTmplInsertionMode;
            break;
          } else if (a === E.HTML) {
            this.insertionMode = this.headElement ? I : N;
            break;
          } else if (t) {
            this.insertionMode = R;
            break;
          }
        }
      }
      _resetInsertionModeForSelect(e) {
        if (e > 0) {
          for (let t = e - 1; t > 0; t--) {
            const e = this.openElements.items[t];
            const r = this.treeAdapter.getTagName(e);
            if (r === E.TEMPLATE) {
              break;
            } else if (r === E.TABLE) {
              this.insertionMode = V;
              return;
            }
          }
        }
        this.insertionMode = H;
      }
      _pushTmplInsertionMode(e) {
        this.tmplInsertionModeStack.push(e);
        this.tmplInsertionModeStackTop++;
        this.currentTmplInsertionMode = e;
      }
      _popTmplInsertionMode() {
        this.tmplInsertionModeStack.pop();
        this.tmplInsertionModeStackTop--;
        this.currentTmplInsertionMode = this.tmplInsertionModeStack[this.tmplInsertionModeStackTop];
      }
      _isElementCausesFosterParenting(e) {
        const t = this.treeAdapter.getTagName(e);
        return t === E.TABLE || t === E.TBODY || t === E.TFOOT || t === E.THEAD || t === E.TR;
      }
      _shouldFosterParentOnInsertion() {
        return (
          this.fosterParentingEnabled &&
          this._isElementCausesFosterParenting(this.openElements.current)
        );
      }
      _findFosterParentingLocation() {
        const e = { parent: null, beforeElement: null };
        for (let t = this.openElements.stackTop; t >= 0; t--) {
          const r = this.openElements.items[t];
          const a = this.treeAdapter.getTagName(r);
          const n = this.treeAdapter.getNamespaceURI(r);
          if (a === E.TEMPLATE && n === _.HTML) {
            e.parent = this.treeAdapter.getTemplateContent(r);
            break;
          } else if (a === E.TABLE) {
            e.parent = this.treeAdapter.getParentNode(r);
            if (e.parent) {
              e.beforeElement = r;
            } else {
              e.parent = this.openElements.items[t - 1];
            }
            break;
          }
        }
        if (!e.parent) {
          e.parent = this.openElements.items[0];
        }
        return e;
      }
      _fosterParentElement(e) {
        const t = this._findFosterParentingLocation();
        if (t.beforeElement) {
          this.treeAdapter.insertBefore(t.parent, e, t.beforeElement);
        } else {
          this.treeAdapter.appendChild(t.parent, e);
        }
      }
      _fosterParentText(e) {
        const t = this._findFosterParentingLocation();
        if (t.beforeElement) {
          this.treeAdapter.insertTextBefore(t.parent, e, t.beforeElement);
        } else {
          this.treeAdapter.insertText(t.parent, e);
        }
      }
      _isSpecialElement(e) {
        const t = this.treeAdapter.getTagName(e);
        const r = this.treeAdapter.getNamespaceURI(e);
        return T.SPECIAL_ELEMENTS[r][t];
      }
    }
    e.exports = Parser;
    function aaObtainFormattingElementEntry(e, t) {
      let r = e.activeFormattingElements.getElementEntryInScopeWithTagName(t.tagName);
      if (r) {
        if (!e.openElements.contains(r.element)) {
          e.activeFormattingElements.removeEntry(r);
          r = null;
        } else if (!e.openElements.hasInScope(t.tagName)) {
          r = null;
        }
      } else {
        genericEndTagInBody(e, t);
      }
      return r;
    }
    function aaObtainFurthestBlock(e, t) {
      let r = null;
      for (let a = e.openElements.stackTop; a >= 0; a--) {
        const n = e.openElements.items[a];
        if (n === t.element) {
          break;
        }
        if (e._isSpecialElement(n)) {
          r = n;
        }
      }
      if (!r) {
        e.openElements.popUntilElementPopped(t.element);
        e.activeFormattingElements.removeEntry(t);
      }
      return r;
    }
    function aaInnerLoop(e, t, r) {
      let a = t;
      let n = e.openElements.getCommonAncestor(t);
      for (let i = 0, o = n; o !== r; i++, o = n) {
        n = e.openElements.getCommonAncestor(o);
        const r = e.activeFormattingElements.getElementEntry(o);
        const s = r && i >= S;
        const p = !r || s;
        if (p) {
          if (s) {
            e.activeFormattingElements.removeEntry(r);
          }
          e.openElements.remove(o);
        } else {
          o = aaRecreateElementFromEntry(e, r);
          if (a === t) {
            e.activeFormattingElements.bookmark = r;
          }
          e.treeAdapter.detachNode(a);
          e.treeAdapter.appendChild(o, a);
          a = o;
        }
      }
      return a;
    }
    function aaRecreateElementFromEntry(e, t) {
      const r = e.treeAdapter.getNamespaceURI(t.element);
      const a = e.treeAdapter.createElement(t.token.tagName, r, t.token.attrs);
      e.openElements.replace(t.element, a);
      t.element = a;
      return a;
    }
    function aaInsertLastNodeInCommonAncestor(e, t, r) {
      if (e._isElementCausesFosterParenting(t)) {
        e._fosterParentElement(r);
      } else {
        const a = e.treeAdapter.getTagName(t);
        const n = e.treeAdapter.getNamespaceURI(t);
        if (a === E.TEMPLATE && n === _.HTML) {
          t = e.treeAdapter.getTemplateContent(t);
        }
        e.treeAdapter.appendChild(t, r);
      }
    }
    function aaReplaceFormattingElement(e, t, r) {
      const a = e.treeAdapter.getNamespaceURI(r.element);
      const n = r.token;
      const i = e.treeAdapter.createElement(n.tagName, a, n.attrs);
      e._adoptNodes(t, i);
      e.treeAdapter.appendChild(t, i);
      e.activeFormattingElements.insertElementAfterBookmark(i, r.token);
      e.activeFormattingElements.removeEntry(r);
      e.openElements.remove(r.element);
      e.openElements.insertAfter(t, i);
    }
    function callAdoptionAgency(e, t) {
      let r;
      for (let a = 0; a < y; a++) {
        r = aaObtainFormattingElementEntry(e, t, r);
        if (!r) {
          break;
        }
        const a = aaObtainFurthestBlock(e, r);
        if (!a) {
          break;
        }
        e.activeFormattingElements.bookmark = r;
        const n = aaInnerLoop(e, a, r.element);
        const i = e.openElements.getCommonAncestor(r.element);
        e.treeAdapter.detachNode(n);
        aaInsertLastNodeInCommonAncestor(e, i, n);
        aaReplaceFormattingElement(e, a, r);
      }
    }
    function ignoreToken() {}
    function misplacedDoctype(e) {
      e._err(g.misplacedDoctype);
    }
    function appendComment(e, t) {
      e._appendCommentNode(t, e.openElements.currentTmplContent || e.openElements.current);
    }
    function appendCommentToRootHtmlElement(e, t) {
      e._appendCommentNode(t, e.openElements.items[0]);
    }
    function appendCommentToDocument(e, t) {
      e._appendCommentNode(t, e.document);
    }
    function insertCharacters(e, t) {
      e._insertCharacters(t);
    }
    function stopParsing(e) {
      e.stopped = true;
    }
    function doctypeInInitialMode(e, t) {
      e._setDocumentType(t);
      const r = t.forceQuirks ? T.DOCUMENT_MODE.QUIRKS : m.getDocumentMode(t);
      if (!m.isConforming(t)) {
        e._err(g.nonConformingDoctype);
      }
      e.treeAdapter.setDocumentMode(e.document, r);
      e.insertionMode = k;
    }
    function tokenInInitialMode(e, t) {
      e._err(g.missingDoctype, { beforeToken: true });
      e.treeAdapter.setDocumentMode(e.document, T.DOCUMENT_MODE.QUIRKS);
      e.insertionMode = k;
      e._processToken(t);
    }
    function startTagBeforeHtml(e, t) {
      if (t.tagName === E.HTML) {
        e._insertElement(t, _.HTML);
        e.insertionMode = N;
      } else {
        tokenBeforeHtml(e, t);
      }
    }
    function endTagBeforeHtml(e, t) {
      const r = t.tagName;
      if (r === E.HTML || r === E.HEAD || r === E.BODY || r === E.BR) {
        tokenBeforeHtml(e, t);
      }
    }
    function tokenBeforeHtml(e, t) {
      e._insertFakeRootElement();
      e.insertionMode = N;
      e._processToken(t);
    }
    function startTagBeforeHead(e, t) {
      const r = t.tagName;
      if (r === E.HTML) {
        startTagInBody(e, t);
      } else if (r === E.HEAD) {
        e._insertElement(t, _.HTML);
        e.headElement = e.openElements.current;
        e.insertionMode = D;
      } else {
        tokenBeforeHead(e, t);
      }
    }
    function endTagBeforeHead(e, t) {
      const r = t.tagName;
      if (r === E.HEAD || r === E.BODY || r === E.HTML || r === E.BR) {
        tokenBeforeHead(e, t);
      } else {
        e._err(g.endTagWithoutMatchingOpenElement);
      }
    }
    function tokenBeforeHead(e, t) {
      e._insertFakeElement(E.HEAD);
      e.headElement = e.openElements.current;
      e.insertionMode = D;
      e._processToken(t);
    }
    function startTagInHead(e, t) {
      const r = t.tagName;
      if (r === E.HTML) {
        startTagInBody(e, t);
      } else if (
        r === E.BASE ||
        r === E.BASEFONT ||
        r === E.BGSOUND ||
        r === E.LINK ||
        r === E.META
      ) {
        e._appendElement(t, _.HTML);
        t.ackSelfClosing = true;
      } else if (r === E.TITLE) {
        e._switchToTextParsing(t, a.MODE.RCDATA);
      } else if (r === E.NOSCRIPT) {
        if (e.options.scriptingEnabled) {
          e._switchToTextParsing(t, a.MODE.RAWTEXT);
        } else {
          e._insertElement(t, _.HTML);
          e.insertionMode = O;
        }
      } else if (r === E.NOFRAMES || r === E.STYLE) {
        e._switchToTextParsing(t, a.MODE.RAWTEXT);
      } else if (r === E.SCRIPT) {
        e._switchToTextParsing(t, a.MODE.SCRIPT_DATA);
      } else if (r === E.TEMPLATE) {
        e._insertTemplate(t, _.HTML);
        e.activeFormattingElements.insertMarker();
        e.framesetOk = false;
        e.insertionMode = q;
        e._pushTmplInsertionMode(q);
      } else if (r === E.HEAD) {
        e._err(g.misplacedStartTagForHeadElement);
      } else {
        tokenInHead(e, t);
      }
    }
    function endTagInHead(e, t) {
      const r = t.tagName;
      if (r === E.HEAD) {
        e.openElements.pop();
        e.insertionMode = I;
      } else if (r === E.BODY || r === E.BR || r === E.HTML) {
        tokenInHead(e, t);
      } else if (r === E.TEMPLATE) {
        if (e.openElements.tmplCount > 0) {
          e.openElements.generateImpliedEndTagsThoroughly();
          if (e.openElements.currentTagName !== E.TEMPLATE) {
            e._err(g.closingOfElementWithOpenChildElements);
          }
          e.openElements.popUntilTagNamePopped(E.TEMPLATE);
          e.activeFormattingElements.clearToLastMarker();
          e._popTmplInsertionMode();
          e._resetInsertionMode();
        } else {
          e._err(g.endTagWithoutMatchingOpenElement);
        }
      } else {
        e._err(g.endTagWithoutMatchingOpenElement);
      }
    }
    function tokenInHead(e, t) {
      e.openElements.pop();
      e.insertionMode = I;
      e._processToken(t);
    }
    function startTagInHeadNoScript(e, t) {
      const r = t.tagName;
      if (r === E.HTML) {
        startTagInBody(e, t);
      } else if (
        r === E.BASEFONT ||
        r === E.BGSOUND ||
        r === E.HEAD ||
        r === E.LINK ||
        r === E.META ||
        r === E.NOFRAMES ||
        r === E.STYLE
      ) {
        startTagInHead(e, t);
      } else if (r === E.NOSCRIPT) {
        e._err(g.nestedNoscriptInHead);
      } else {
        tokenInHeadNoScript(e, t);
      }
    }
    function endTagInHeadNoScript(e, t) {
      const r = t.tagName;
      if (r === E.NOSCRIPT) {
        e.openElements.pop();
        e.insertionMode = D;
      } else if (r === E.BR) {
        tokenInHeadNoScript(e, t);
      } else {
        e._err(g.endTagWithoutMatchingOpenElement);
      }
    }
    function tokenInHeadNoScript(e, t) {
      const r =
        t.type === a.EOF_TOKEN ? g.openElementsLeftAfterEof : g.disallowedContentInNoscriptInHead;
      e._err(r);
      e.openElements.pop();
      e.insertionMode = D;
      e._processToken(t);
    }
    function startTagAfterHead(e, t) {
      const r = t.tagName;
      if (r === E.HTML) {
        startTagInBody(e, t);
      } else if (r === E.BODY) {
        e._insertElement(t, _.HTML);
        e.framesetOk = false;
        e.insertionMode = R;
      } else if (r === E.FRAMESET) {
        e._insertElement(t, _.HTML);
        e.insertionMode = K;
      } else if (
        r === E.BASE ||
        r === E.BASEFONT ||
        r === E.BGSOUND ||
        r === E.LINK ||
        r === E.META ||
        r === E.NOFRAMES ||
        r === E.SCRIPT ||
        r === E.STYLE ||
        r === E.TEMPLATE ||
        r === E.TITLE
      ) {
        e._err(g.abandonedHeadElementChild);
        e.openElements.push(e.headElement);
        startTagInHead(e, t);
        e.openElements.remove(e.headElement);
      } else if (r === E.HEAD) {
        e._err(g.misplacedStartTagForHeadElement);
      } else {
        tokenAfterHead(e, t);
      }
    }
    function endTagAfterHead(e, t) {
      const r = t.tagName;
      if (r === E.BODY || r === E.HTML || r === E.BR) {
        tokenAfterHead(e, t);
      } else if (r === E.TEMPLATE) {
        endTagInHead(e, t);
      } else {
        e._err(g.endTagWithoutMatchingOpenElement);
      }
    }
    function tokenAfterHead(e, t) {
      e._insertFakeElement(E.BODY);
      e.insertionMode = R;
      e._processToken(t);
    }
    function whitespaceCharacterInBody(e, t) {
      e._reconstructActiveFormattingElements();
      e._insertCharacters(t);
    }
    function characterInBody(e, t) {
      e._reconstructActiveFormattingElements();
      e._insertCharacters(t);
      e.framesetOk = false;
    }
    function htmlStartTagInBody(e, t) {
      if (e.openElements.tmplCount === 0) {
        e.treeAdapter.adoptAttributes(e.openElements.items[0], t.attrs);
      }
    }
    function bodyStartTagInBody(e, t) {
      const r = e.openElements.tryPeekProperlyNestedBodyElement();
      if (r && e.openElements.tmplCount === 0) {
        e.framesetOk = false;
        e.treeAdapter.adoptAttributes(r, t.attrs);
      }
    }
    function framesetStartTagInBody(e, t) {
      const r = e.openElements.tryPeekProperlyNestedBodyElement();
      if (e.framesetOk && r) {
        e.treeAdapter.detachNode(r);
        e.openElements.popAllUpToHtmlElement();
        e._insertElement(t, _.HTML);
        e.insertionMode = K;
      }
    }
    function addressStartTagInBody(e, t) {
      if (e.openElements.hasInButtonScope(E.P)) {
        e._closePElement();
      }
      e._insertElement(t, _.HTML);
    }
    function numberedHeaderStartTagInBody(e, t) {
      if (e.openElements.hasInButtonScope(E.P)) {
        e._closePElement();
      }
      const r = e.openElements.currentTagName;
      if (r === E.H1 || r === E.H2 || r === E.H3 || r === E.H4 || r === E.H5 || r === E.H6) {
        e.openElements.pop();
      }
      e._insertElement(t, _.HTML);
    }
    function preStartTagInBody(e, t) {
      if (e.openElements.hasInButtonScope(E.P)) {
        e._closePElement();
      }
      e._insertElement(t, _.HTML);
      e.skipNextNewLine = true;
      e.framesetOk = false;
    }
    function formStartTagInBody(e, t) {
      const r = e.openElements.tmplCount > 0;
      if (!e.formElement || r) {
        if (e.openElements.hasInButtonScope(E.P)) {
          e._closePElement();
        }
        e._insertElement(t, _.HTML);
        if (!r) {
          e.formElement = e.openElements.current;
        }
      }
    }
    function listItemStartTagInBody(e, t) {
      e.framesetOk = false;
      const r = t.tagName;
      for (let t = e.openElements.stackTop; t >= 0; t--) {
        const a = e.openElements.items[t];
        const n = e.treeAdapter.getTagName(a);
        let i = null;
        if (r === E.LI && n === E.LI) {
          i = E.LI;
        } else if ((r === E.DD || r === E.DT) && (n === E.DD || n === E.DT)) {
          i = n;
        }
        if (i) {
          e.openElements.generateImpliedEndTagsWithExclusion(i);
          e.openElements.popUntilTagNamePopped(i);
          break;
        }
        if (n !== E.ADDRESS && n !== E.DIV && n !== E.P && e._isSpecialElement(a)) {
          break;
        }
      }
      if (e.openElements.hasInButtonScope(E.P)) {
        e._closePElement();
      }
      e._insertElement(t, _.HTML);
    }
    function plaintextStartTagInBody(e, t) {
      if (e.openElements.hasInButtonScope(E.P)) {
        e._closePElement();
      }
      e._insertElement(t, _.HTML);
      e.tokenizer.state = a.MODE.PLAINTEXT;
    }
    function buttonStartTagInBody(e, t) {
      if (e.openElements.hasInScope(E.BUTTON)) {
        e.openElements.generateImpliedEndTags();
        e.openElements.popUntilTagNamePopped(E.BUTTON);
      }
      e._reconstructActiveFormattingElements();
      e._insertElement(t, _.HTML);
      e.framesetOk = false;
    }
    function aStartTagInBody(e, t) {
      const r = e.activeFormattingElements.getElementEntryInScopeWithTagName(E.A);
      if (r) {
        callAdoptionAgency(e, t);
        e.openElements.remove(r.element);
        e.activeFormattingElements.removeEntry(r);
      }
      e._reconstructActiveFormattingElements();
      e._insertElement(t, _.HTML);
      e.activeFormattingElements.pushElement(e.openElements.current, t);
    }
    function bStartTagInBody(e, t) {
      e._reconstructActiveFormattingElements();
      e._insertElement(t, _.HTML);
      e.activeFormattingElements.pushElement(e.openElements.current, t);
    }
    function nobrStartTagInBody(e, t) {
      e._reconstructActiveFormattingElements();
      if (e.openElements.hasInScope(E.NOBR)) {
        callAdoptionAgency(e, t);
        e._reconstructActiveFormattingElements();
      }
      e._insertElement(t, _.HTML);
      e.activeFormattingElements.pushElement(e.openElements.current, t);
    }
    function appletStartTagInBody(e, t) {
      e._reconstructActiveFormattingElements();
      e._insertElement(t, _.HTML);
      e.activeFormattingElements.insertMarker();
      e.framesetOk = false;
    }
    function tableStartTagInBody(e, t) {
      if (
        e.treeAdapter.getDocumentMode(e.document) !== T.DOCUMENT_MODE.QUIRKS &&
        e.openElements.hasInButtonScope(E.P)
      ) {
        e._closePElement();
      }
      e._insertElement(t, _.HTML);
      e.framesetOk = false;
      e.insertionMode = L;
    }
    function areaStartTagInBody(e, t) {
      e._reconstructActiveFormattingElements();
      e._appendElement(t, _.HTML);
      e.framesetOk = false;
      t.ackSelfClosing = true;
    }
    function inputStartTagInBody(e, t) {
      e._reconstructActiveFormattingElements();
      e._appendElement(t, _.HTML);
      const r = a.getTokenAttr(t, w.TYPE);
      if (!r || r.toLowerCase() !== b) {
        e.framesetOk = false;
      }
      t.ackSelfClosing = true;
    }
    function paramStartTagInBody(e, t) {
      e._appendElement(t, _.HTML);
      t.ackSelfClosing = true;
    }
    function hrStartTagInBody(e, t) {
      if (e.openElements.hasInButtonScope(E.P)) {
        e._closePElement();
      }
      e._appendElement(t, _.HTML);
      e.framesetOk = false;
      e.ackSelfClosing = true;
    }
    function imageStartTagInBody(e, t) {
      t.tagName = E.IMG;
      areaStartTagInBody(e, t);
    }
    function textareaStartTagInBody(e, t) {
      e._insertElement(t, _.HTML);
      e.skipNextNewLine = true;
      e.tokenizer.state = a.MODE.RCDATA;
      e.originalInsertionMode = e.insertionMode;
      e.framesetOk = false;
      e.insertionMode = P;
    }
    function xmpStartTagInBody(e, t) {
      if (e.openElements.hasInButtonScope(E.P)) {
        e._closePElement();
      }
      e._reconstructActiveFormattingElements();
      e.framesetOk = false;
      e._switchToTextParsing(t, a.MODE.RAWTEXT);
    }
    function iframeStartTagInBody(e, t) {
      e.framesetOk = false;
      e._switchToTextParsing(t, a.MODE.RAWTEXT);
    }
    function noembedStartTagInBody(e, t) {
      e._switchToTextParsing(t, a.MODE.RAWTEXT);
    }
    function selectStartTagInBody(e, t) {
      e._reconstructActiveFormattingElements();
      e._insertElement(t, _.HTML);
      e.framesetOk = false;
      if (
        e.insertionMode === L ||
        e.insertionMode === F ||
        e.insertionMode === B ||
        e.insertionMode === G ||
        e.insertionMode === U
      ) {
        e.insertionMode = V;
      } else {
        e.insertionMode = H;
      }
    }
    function optgroupStartTagInBody(e, t) {
      if (e.openElements.currentTagName === E.OPTION) {
        e.openElements.pop();
      }
      e._reconstructActiveFormattingElements();
      e._insertElement(t, _.HTML);
    }
    function rbStartTagInBody(e, t) {
      if (e.openElements.hasInScope(E.RUBY)) {
        e.openElements.generateImpliedEndTags();
      }
      e._insertElement(t, _.HTML);
    }
    function rtStartTagInBody(e, t) {
      if (e.openElements.hasInScope(E.RUBY)) {
        e.openElements.generateImpliedEndTagsWithExclusion(E.RTC);
      }
      e._insertElement(t, _.HTML);
    }
    function menuStartTagInBody(e, t) {
      if (e.openElements.hasInButtonScope(E.P)) {
        e._closePElement();
      }
      e._insertElement(t, _.HTML);
    }
    function mathStartTagInBody(e, t) {
      e._reconstructActiveFormattingElements();
      c.adjustTokenMathMLAttrs(t);
      c.adjustTokenXMLAttrs(t);
      if (t.selfClosing) {
        e._appendElement(t, _.MATHML);
      } else {
        e._insertElement(t, _.MATHML);
      }
      t.ackSelfClosing = true;
    }
    function svgStartTagInBody(e, t) {
      e._reconstructActiveFormattingElements();
      c.adjustTokenSVGAttrs(t);
      c.adjustTokenXMLAttrs(t);
      if (t.selfClosing) {
        e._appendElement(t, _.SVG);
      } else {
        e._insertElement(t, _.SVG);
      }
      t.ackSelfClosing = true;
    }
    function genericStartTagInBody(e, t) {
      e._reconstructActiveFormattingElements();
      e._insertElement(t, _.HTML);
    }
    function startTagInBody(e, t) {
      const r = t.tagName;
      switch (r.length) {
        case 1:
          if (r === E.I || r === E.S || r === E.B || r === E.U) {
            bStartTagInBody(e, t);
          } else if (r === E.P) {
            addressStartTagInBody(e, t);
          } else if (r === E.A) {
            aStartTagInBody(e, t);
          } else {
            genericStartTagInBody(e, t);
          }
          break;
        case 2:
          if (r === E.DL || r === E.OL || r === E.UL) {
            addressStartTagInBody(e, t);
          } else if (
            r === E.H1 ||
            r === E.H2 ||
            r === E.H3 ||
            r === E.H4 ||
            r === E.H5 ||
            r === E.H6
          ) {
            numberedHeaderStartTagInBody(e, t);
          } else if (r === E.LI || r === E.DD || r === E.DT) {
            listItemStartTagInBody(e, t);
          } else if (r === E.EM || r === E.TT) {
            bStartTagInBody(e, t);
          } else if (r === E.BR) {
            areaStartTagInBody(e, t);
          } else if (r === E.HR) {
            hrStartTagInBody(e, t);
          } else if (r === E.RB) {
            rbStartTagInBody(e, t);
          } else if (r === E.RT || r === E.RP) {
            rtStartTagInBody(e, t);
          } else if (r !== E.TH && r !== E.TD && r !== E.TR) {
            genericStartTagInBody(e, t);
          }
          break;
        case 3:
          if (r === E.DIV || r === E.DIR || r === E.NAV) {
            addressStartTagInBody(e, t);
          } else if (r === E.PRE) {
            preStartTagInBody(e, t);
          } else if (r === E.BIG) {
            bStartTagInBody(e, t);
          } else if (r === E.IMG || r === E.WBR) {
            areaStartTagInBody(e, t);
          } else if (r === E.XMP) {
            xmpStartTagInBody(e, t);
          } else if (r === E.SVG) {
            svgStartTagInBody(e, t);
          } else if (r === E.RTC) {
            rbStartTagInBody(e, t);
          } else if (r !== E.COL) {
            genericStartTagInBody(e, t);
          }
          break;
        case 4:
          if (r === E.HTML) {
            htmlStartTagInBody(e, t);
          } else if (r === E.BASE || r === E.LINK || r === E.META) {
            startTagInHead(e, t);
          } else if (r === E.BODY) {
            bodyStartTagInBody(e, t);
          } else if (r === E.MAIN || r === E.MENU) {
            addressStartTagInBody(e, t);
          } else if (r === E.FORM) {
            formStartTagInBody(e, t);
          } else if (r === E.CODE || r === E.FONT) {
            bStartTagInBody(e, t);
          } else if (r === E.NOBR) {
            nobrStartTagInBody(e, t);
          } else if (r === E.AREA) {
            areaStartTagInBody(e, t);
          } else if (r === E.MATH) {
            mathStartTagInBody(e, t);
          } else if (r === E.MENU) {
            menuStartTagInBody(e, t);
          } else if (r !== E.HEAD) {
            genericStartTagInBody(e, t);
          }
          break;
        case 5:
          if (r === E.STYLE || r === E.TITLE) {
            startTagInHead(e, t);
          } else if (r === E.ASIDE) {
            addressStartTagInBody(e, t);
          } else if (r === E.SMALL) {
            bStartTagInBody(e, t);
          } else if (r === E.TABLE) {
            tableStartTagInBody(e, t);
          } else if (r === E.EMBED) {
            areaStartTagInBody(e, t);
          } else if (r === E.INPUT) {
            inputStartTagInBody(e, t);
          } else if (r === E.PARAM || r === E.TRACK) {
            paramStartTagInBody(e, t);
          } else if (r === E.IMAGE) {
            imageStartTagInBody(e, t);
          } else if (r !== E.FRAME && r !== E.TBODY && r !== E.TFOOT && r !== E.THEAD) {
            genericStartTagInBody(e, t);
          }
          break;
        case 6:
          if (r === E.SCRIPT) {
            startTagInHead(e, t);
          } else if (
            r === E.CENTER ||
            r === E.FIGURE ||
            r === E.FOOTER ||
            r === E.HEADER ||
            r === E.HGROUP ||
            r === E.DIALOG
          ) {
            addressStartTagInBody(e, t);
          } else if (r === E.BUTTON) {
            buttonStartTagInBody(e, t);
          } else if (r === E.STRIKE || r === E.STRONG) {
            bStartTagInBody(e, t);
          } else if (r === E.APPLET || r === E.OBJECT) {
            appletStartTagInBody(e, t);
          } else if (r === E.KEYGEN) {
            areaStartTagInBody(e, t);
          } else if (r === E.SOURCE) {
            paramStartTagInBody(e, t);
          } else if (r === E.IFRAME) {
            iframeStartTagInBody(e, t);
          } else if (r === E.SELECT) {
            selectStartTagInBody(e, t);
          } else if (r === E.OPTION) {
            optgroupStartTagInBody(e, t);
          } else {
            genericStartTagInBody(e, t);
          }
          break;
        case 7:
          if (r === E.BGSOUND) {
            startTagInHead(e, t);
          } else if (
            r === E.DETAILS ||
            r === E.ADDRESS ||
            r === E.ARTICLE ||
            r === E.SECTION ||
            r === E.SUMMARY
          ) {
            addressStartTagInBody(e, t);
          } else if (r === E.LISTING) {
            preStartTagInBody(e, t);
          } else if (r === E.MARQUEE) {
            appletStartTagInBody(e, t);
          } else if (r === E.NOEMBED) {
            noembedStartTagInBody(e, t);
          } else if (r !== E.CAPTION) {
            genericStartTagInBody(e, t);
          }
          break;
        case 8:
          if (r === E.BASEFONT) {
            startTagInHead(e, t);
          } else if (r === E.FRAMESET) {
            framesetStartTagInBody(e, t);
          } else if (r === E.FIELDSET) {
            addressStartTagInBody(e, t);
          } else if (r === E.TEXTAREA) {
            textareaStartTagInBody(e, t);
          } else if (r === E.TEMPLATE) {
            startTagInHead(e, t);
          } else if (r === E.NOSCRIPT) {
            if (e.options.scriptingEnabled) {
              noembedStartTagInBody(e, t);
            } else {
              genericStartTagInBody(e, t);
            }
          } else if (r === E.OPTGROUP) {
            optgroupStartTagInBody(e, t);
          } else if (r !== E.COLGROUP) {
            genericStartTagInBody(e, t);
          }
          break;
        case 9:
          if (r === E.PLAINTEXT) {
            plaintextStartTagInBody(e, t);
          } else {
            genericStartTagInBody(e, t);
          }
          break;
        case 10:
          if (r === E.BLOCKQUOTE || r === E.FIGCAPTION) {
            addressStartTagInBody(e, t);
          } else {
            genericStartTagInBody(e, t);
          }
          break;
        default:
          genericStartTagInBody(e, t);
      }
    }
    function bodyEndTagInBody(e) {
      if (e.openElements.hasInScope(E.BODY)) {
        e.insertionMode = j;
      }
    }
    function htmlEndTagInBody(e, t) {
      if (e.openElements.hasInScope(E.BODY)) {
        e.insertionMode = j;
        e._processToken(t);
      }
    }
    function addressEndTagInBody(e, t) {
      const r = t.tagName;
      if (e.openElements.hasInScope(r)) {
        e.openElements.generateImpliedEndTags();
        e.openElements.popUntilTagNamePopped(r);
      }
    }
    function formEndTagInBody(e) {
      const t = e.openElements.tmplCount > 0;
      const r = e.formElement;
      if (!t) {
        e.formElement = null;
      }
      if ((r || t) && e.openElements.hasInScope(E.FORM)) {
        e.openElements.generateImpliedEndTags();
        if (t) {
          e.openElements.popUntilTagNamePopped(E.FORM);
        } else {
          e.openElements.remove(r);
        }
      }
    }
    function pEndTagInBody(e) {
      if (!e.openElements.hasInButtonScope(E.P)) {
        e._insertFakeElement(E.P);
      }
      e._closePElement();
    }
    function liEndTagInBody(e) {
      if (e.openElements.hasInListItemScope(E.LI)) {
        e.openElements.generateImpliedEndTagsWithExclusion(E.LI);
        e.openElements.popUntilTagNamePopped(E.LI);
      }
    }
    function ddEndTagInBody(e, t) {
      const r = t.tagName;
      if (e.openElements.hasInScope(r)) {
        e.openElements.generateImpliedEndTagsWithExclusion(r);
        e.openElements.popUntilTagNamePopped(r);
      }
    }
    function numberedHeaderEndTagInBody(e) {
      if (e.openElements.hasNumberedHeaderInScope()) {
        e.openElements.generateImpliedEndTags();
        e.openElements.popUntilNumberedHeaderPopped();
      }
    }
    function appletEndTagInBody(e, t) {
      const r = t.tagName;
      if (e.openElements.hasInScope(r)) {
        e.openElements.generateImpliedEndTags();
        e.openElements.popUntilTagNamePopped(r);
        e.activeFormattingElements.clearToLastMarker();
      }
    }
    function brEndTagInBody(e) {
      e._reconstructActiveFormattingElements();
      e._insertFakeElement(E.BR);
      e.openElements.pop();
      e.framesetOk = false;
    }
    function genericEndTagInBody(e, t) {
      const r = t.tagName;
      for (let t = e.openElements.stackTop; t > 0; t--) {
        const a = e.openElements.items[t];
        if (e.treeAdapter.getTagName(a) === r) {
          e.openElements.generateImpliedEndTagsWithExclusion(r);
          e.openElements.popUntilElementPopped(a);
          break;
        }
        if (e._isSpecialElement(a)) {
          break;
        }
      }
    }
    function endTagInBody(e, t) {
      const r = t.tagName;
      switch (r.length) {
        case 1:
          if (r === E.A || r === E.B || r === E.I || r === E.S || r === E.U) {
            callAdoptionAgency(e, t);
          } else if (r === E.P) {
            pEndTagInBody(e, t);
          } else {
            genericEndTagInBody(e, t);
          }
          break;
        case 2:
          if (r === E.DL || r === E.UL || r === E.OL) {
            addressEndTagInBody(e, t);
          } else if (r === E.LI) {
            liEndTagInBody(e, t);
          } else if (r === E.DD || r === E.DT) {
            ddEndTagInBody(e, t);
          } else if (
            r === E.H1 ||
            r === E.H2 ||
            r === E.H3 ||
            r === E.H4 ||
            r === E.H5 ||
            r === E.H6
          ) {
            numberedHeaderEndTagInBody(e, t);
          } else if (r === E.BR) {
            brEndTagInBody(e, t);
          } else if (r === E.EM || r === E.TT) {
            callAdoptionAgency(e, t);
          } else {
            genericEndTagInBody(e, t);
          }
          break;
        case 3:
          if (r === E.BIG) {
            callAdoptionAgency(e, t);
          } else if (r === E.DIR || r === E.DIV || r === E.NAV || r === E.PRE) {
            addressEndTagInBody(e, t);
          } else {
            genericEndTagInBody(e, t);
          }
          break;
        case 4:
          if (r === E.BODY) {
            bodyEndTagInBody(e, t);
          } else if (r === E.HTML) {
            htmlEndTagInBody(e, t);
          } else if (r === E.FORM) {
            formEndTagInBody(e, t);
          } else if (r === E.CODE || r === E.FONT || r === E.NOBR) {
            callAdoptionAgency(e, t);
          } else if (r === E.MAIN || r === E.MENU) {
            addressEndTagInBody(e, t);
          } else {
            genericEndTagInBody(e, t);
          }
          break;
        case 5:
          if (r === E.ASIDE) {
            addressEndTagInBody(e, t);
          } else if (r === E.SMALL) {
            callAdoptionAgency(e, t);
          } else {
            genericEndTagInBody(e, t);
          }
          break;
        case 6:
          if (
            r === E.CENTER ||
            r === E.FIGURE ||
            r === E.FOOTER ||
            r === E.HEADER ||
            r === E.HGROUP ||
            r === E.DIALOG
          ) {
            addressEndTagInBody(e, t);
          } else if (r === E.APPLET || r === E.OBJECT) {
            appletEndTagInBody(e, t);
          } else if (r === E.STRIKE || r === E.STRONG) {
            callAdoptionAgency(e, t);
          } else {
            genericEndTagInBody(e, t);
          }
          break;
        case 7:
          if (
            r === E.ADDRESS ||
            r === E.ARTICLE ||
            r === E.DETAILS ||
            r === E.SECTION ||
            r === E.SUMMARY ||
            r === E.LISTING
          ) {
            addressEndTagInBody(e, t);
          } else if (r === E.MARQUEE) {
            appletEndTagInBody(e, t);
          } else {
            genericEndTagInBody(e, t);
          }
          break;
        case 8:
          if (r === E.FIELDSET) {
            addressEndTagInBody(e, t);
          } else if (r === E.TEMPLATE) {
            endTagInHead(e, t);
          } else {
            genericEndTagInBody(e, t);
          }
          break;
        case 10:
          if (r === E.BLOCKQUOTE || r === E.FIGCAPTION) {
            addressEndTagInBody(e, t);
          } else {
            genericEndTagInBody(e, t);
          }
          break;
        default:
          genericEndTagInBody(e, t);
      }
    }
    function eofInBody(e, t) {
      if (e.tmplInsertionModeStackTop > -1) {
        eofInTemplate(e, t);
      } else {
        e.stopped = true;
      }
    }
    function endTagInText(e, t) {
      if (t.tagName === E.SCRIPT) {
        e.pendingScript = e.openElements.current;
      }
      e.openElements.pop();
      e.insertionMode = e.originalInsertionMode;
    }
    function eofInText(e, t) {
      e._err(g.eofInElementThatCanContainOnlyText);
      e.openElements.pop();
      e.insertionMode = e.originalInsertionMode;
      e._processToken(t);
    }
    function characterInTable(e, t) {
      const r = e.openElements.currentTagName;
      if (r === E.TABLE || r === E.TBODY || r === E.TFOOT || r === E.THEAD || r === E.TR) {
        e.pendingCharacterTokens = [];
        e.hasNonWhitespacePendingCharacterToken = false;
        e.originalInsertionMode = e.insertionMode;
        e.insertionMode = x;
        e._processToken(t);
      } else {
        tokenInTable(e, t);
      }
    }
    function captionStartTagInTable(e, t) {
      e.openElements.clearBackToTableContext();
      e.activeFormattingElements.insertMarker();
      e._insertElement(t, _.HTML);
      e.insertionMode = F;
    }
    function colgroupStartTagInTable(e, t) {
      e.openElements.clearBackToTableContext();
      e._insertElement(t, _.HTML);
      e.insertionMode = M;
    }
    function colStartTagInTable(e, t) {
      e.openElements.clearBackToTableContext();
      e._insertFakeElement(E.COLGROUP);
      e.insertionMode = M;
      e._processToken(t);
    }
    function tbodyStartTagInTable(e, t) {
      e.openElements.clearBackToTableContext();
      e._insertElement(t, _.HTML);
      e.insertionMode = B;
    }
    function tdStartTagInTable(e, t) {
      e.openElements.clearBackToTableContext();
      e._insertFakeElement(E.TBODY);
      e.insertionMode = B;
      e._processToken(t);
    }
    function tableStartTagInTable(e, t) {
      if (e.openElements.hasInTableScope(E.TABLE)) {
        e.openElements.popUntilTagNamePopped(E.TABLE);
        e._resetInsertionMode();
        e._processToken(t);
      }
    }
    function inputStartTagInTable(e, t) {
      const r = a.getTokenAttr(t, w.TYPE);
      if (r && r.toLowerCase() === b) {
        e._appendElement(t, _.HTML);
      } else {
        tokenInTable(e, t);
      }
      t.ackSelfClosing = true;
    }
    function formStartTagInTable(e, t) {
      if (!e.formElement && e.openElements.tmplCount === 0) {
        e._insertElement(t, _.HTML);
        e.formElement = e.openElements.current;
        e.openElements.pop();
      }
    }
    function startTagInTable(e, t) {
      const r = t.tagName;
      switch (r.length) {
        case 2:
          if (r === E.TD || r === E.TH || r === E.TR) {
            tdStartTagInTable(e, t);
          } else {
            tokenInTable(e, t);
          }
          break;
        case 3:
          if (r === E.COL) {
            colStartTagInTable(e, t);
          } else {
            tokenInTable(e, t);
          }
          break;
        case 4:
          if (r === E.FORM) {
            formStartTagInTable(e, t);
          } else {
            tokenInTable(e, t);
          }
          break;
        case 5:
          if (r === E.TABLE) {
            tableStartTagInTable(e, t);
          } else if (r === E.STYLE) {
            startTagInHead(e, t);
          } else if (r === E.TBODY || r === E.TFOOT || r === E.THEAD) {
            tbodyStartTagInTable(e, t);
          } else if (r === E.INPUT) {
            inputStartTagInTable(e, t);
          } else {
            tokenInTable(e, t);
          }
          break;
        case 6:
          if (r === E.SCRIPT) {
            startTagInHead(e, t);
          } else {
            tokenInTable(e, t);
          }
          break;
        case 7:
          if (r === E.CAPTION) {
            captionStartTagInTable(e, t);
          } else {
            tokenInTable(e, t);
          }
          break;
        case 8:
          if (r === E.COLGROUP) {
            colgroupStartTagInTable(e, t);
          } else if (r === E.TEMPLATE) {
            startTagInHead(e, t);
          } else {
            tokenInTable(e, t);
          }
          break;
        default:
          tokenInTable(e, t);
      }
    }
    function endTagInTable(e, t) {
      const r = t.tagName;
      if (r === E.TABLE) {
        if (e.openElements.hasInTableScope(E.TABLE)) {
          e.openElements.popUntilTagNamePopped(E.TABLE);
          e._resetInsertionMode();
        }
      } else if (r === E.TEMPLATE) {
        endTagInHead(e, t);
      } else if (
        r !== E.BODY &&
        r !== E.CAPTION &&
        r !== E.COL &&
        r !== E.COLGROUP &&
        r !== E.HTML &&
        r !== E.TBODY &&
        r !== E.TD &&
        r !== E.TFOOT &&
        r !== E.TH &&
        r !== E.THEAD &&
        r !== E.TR
      ) {
        tokenInTable(e, t);
      }
    }
    function tokenInTable(e, t) {
      const r = e.fosterParentingEnabled;
      e.fosterParentingEnabled = true;
      e._processTokenInBodyMode(t);
      e.fosterParentingEnabled = r;
    }
    function whitespaceCharacterInTableText(e, t) {
      e.pendingCharacterTokens.push(t);
    }
    function characterInTableText(e, t) {
      e.pendingCharacterTokens.push(t);
      e.hasNonWhitespacePendingCharacterToken = true;
    }
    function tokenInTableText(e, t) {
      let r = 0;
      if (e.hasNonWhitespacePendingCharacterToken) {
        for (; r < e.pendingCharacterTokens.length; r++) {
          tokenInTable(e, e.pendingCharacterTokens[r]);
        }
      } else {
        for (; r < e.pendingCharacterTokens.length; r++) {
          e._insertCharacters(e.pendingCharacterTokens[r]);
        }
      }
      e.insertionMode = e.originalInsertionMode;
      e._processToken(t);
    }
    function startTagInCaption(e, t) {
      const r = t.tagName;
      if (
        r === E.CAPTION ||
        r === E.COL ||
        r === E.COLGROUP ||
        r === E.TBODY ||
        r === E.TD ||
        r === E.TFOOT ||
        r === E.TH ||
        r === E.THEAD ||
        r === E.TR
      ) {
        if (e.openElements.hasInTableScope(E.CAPTION)) {
          e.openElements.generateImpliedEndTags();
          e.openElements.popUntilTagNamePopped(E.CAPTION);
          e.activeFormattingElements.clearToLastMarker();
          e.insertionMode = L;
          e._processToken(t);
        }
      } else {
        startTagInBody(e, t);
      }
    }
    function endTagInCaption(e, t) {
      const r = t.tagName;
      if (r === E.CAPTION || r === E.TABLE) {
        if (e.openElements.hasInTableScope(E.CAPTION)) {
          e.openElements.generateImpliedEndTags();
          e.openElements.popUntilTagNamePopped(E.CAPTION);
          e.activeFormattingElements.clearToLastMarker();
          e.insertionMode = L;
          if (r === E.TABLE) {
            e._processToken(t);
          }
        }
      } else if (
        r !== E.BODY &&
        r !== E.COL &&
        r !== E.COLGROUP &&
        r !== E.HTML &&
        r !== E.TBODY &&
        r !== E.TD &&
        r !== E.TFOOT &&
        r !== E.TH &&
        r !== E.THEAD &&
        r !== E.TR
      ) {
        endTagInBody(e, t);
      }
    }
    function startTagInColumnGroup(e, t) {
      const r = t.tagName;
      if (r === E.HTML) {
        startTagInBody(e, t);
      } else if (r === E.COL) {
        e._appendElement(t, _.HTML);
        t.ackSelfClosing = true;
      } else if (r === E.TEMPLATE) {
        startTagInHead(e, t);
      } else {
        tokenInColumnGroup(e, t);
      }
    }
    function endTagInColumnGroup(e, t) {
      const r = t.tagName;
      if (r === E.COLGROUP) {
        if (e.openElements.currentTagName === E.COLGROUP) {
          e.openElements.pop();
          e.insertionMode = L;
        }
      } else if (r === E.TEMPLATE) {
        endTagInHead(e, t);
      } else if (r !== E.COL) {
        tokenInColumnGroup(e, t);
      }
    }
    function tokenInColumnGroup(e, t) {
      if (e.openElements.currentTagName === E.COLGROUP) {
        e.openElements.pop();
        e.insertionMode = L;
        e._processToken(t);
      }
    }
    function startTagInTableBody(e, t) {
      const r = t.tagName;
      if (r === E.TR) {
        e.openElements.clearBackToTableBodyContext();
        e._insertElement(t, _.HTML);
        e.insertionMode = G;
      } else if (r === E.TH || r === E.TD) {
        e.openElements.clearBackToTableBodyContext();
        e._insertFakeElement(E.TR);
        e.insertionMode = G;
        e._processToken(t);
      } else if (
        r === E.CAPTION ||
        r === E.COL ||
        r === E.COLGROUP ||
        r === E.TBODY ||
        r === E.TFOOT ||
        r === E.THEAD
      ) {
        if (e.openElements.hasTableBodyContextInTableScope()) {
          e.openElements.clearBackToTableBodyContext();
          e.openElements.pop();
          e.insertionMode = L;
          e._processToken(t);
        }
      } else {
        startTagInTable(e, t);
      }
    }
    function endTagInTableBody(e, t) {
      const r = t.tagName;
      if (r === E.TBODY || r === E.TFOOT || r === E.THEAD) {
        if (e.openElements.hasInTableScope(r)) {
          e.openElements.clearBackToTableBodyContext();
          e.openElements.pop();
          e.insertionMode = L;
        }
      } else if (r === E.TABLE) {
        if (e.openElements.hasTableBodyContextInTableScope()) {
          e.openElements.clearBackToTableBodyContext();
          e.openElements.pop();
          e.insertionMode = L;
          e._processToken(t);
        }
      } else if (
        (r !== E.BODY && r !== E.CAPTION && r !== E.COL && r !== E.COLGROUP) ||
        (r !== E.HTML && r !== E.TD && r !== E.TH && r !== E.TR)
      ) {
        endTagInTable(e, t);
      }
    }
    function startTagInRow(e, t) {
      const r = t.tagName;
      if (r === E.TH || r === E.TD) {
        e.openElements.clearBackToTableRowContext();
        e._insertElement(t, _.HTML);
        e.insertionMode = U;
        e.activeFormattingElements.insertMarker();
      } else if (
        r === E.CAPTION ||
        r === E.COL ||
        r === E.COLGROUP ||
        r === E.TBODY ||
        r === E.TFOOT ||
        r === E.THEAD ||
        r === E.TR
      ) {
        if (e.openElements.hasInTableScope(E.TR)) {
          e.openElements.clearBackToTableRowContext();
          e.openElements.pop();
          e.insertionMode = B;
          e._processToken(t);
        }
      } else {
        startTagInTable(e, t);
      }
    }
    function endTagInRow(e, t) {
      const r = t.tagName;
      if (r === E.TR) {
        if (e.openElements.hasInTableScope(E.TR)) {
          e.openElements.clearBackToTableRowContext();
          e.openElements.pop();
          e.insertionMode = B;
        }
      } else if (r === E.TABLE) {
        if (e.openElements.hasInTableScope(E.TR)) {
          e.openElements.clearBackToTableRowContext();
          e.openElements.pop();
          e.insertionMode = B;
          e._processToken(t);
        }
      } else if (r === E.TBODY || r === E.TFOOT || r === E.THEAD) {
        if (e.openElements.hasInTableScope(r) || e.openElements.hasInTableScope(E.TR)) {
          e.openElements.clearBackToTableRowContext();
          e.openElements.pop();
          e.insertionMode = B;
          e._processToken(t);
        }
      } else if (
        (r !== E.BODY && r !== E.CAPTION && r !== E.COL && r !== E.COLGROUP) ||
        (r !== E.HTML && r !== E.TD && r !== E.TH)
      ) {
        endTagInTable(e, t);
      }
    }
    function startTagInCell(e, t) {
      const r = t.tagName;
      if (
        r === E.CAPTION ||
        r === E.COL ||
        r === E.COLGROUP ||
        r === E.TBODY ||
        r === E.TD ||
        r === E.TFOOT ||
        r === E.TH ||
        r === E.THEAD ||
        r === E.TR
      ) {
        if (e.openElements.hasInTableScope(E.TD) || e.openElements.hasInTableScope(E.TH)) {
          e._closeTableCell();
          e._processToken(t);
        }
      } else {
        startTagInBody(e, t);
      }
    }
    function endTagInCell(e, t) {
      const r = t.tagName;
      if (r === E.TD || r === E.TH) {
        if (e.openElements.hasInTableScope(r)) {
          e.openElements.generateImpliedEndTags();
          e.openElements.popUntilTagNamePopped(r);
          e.activeFormattingElements.clearToLastMarker();
          e.insertionMode = G;
        }
      } else if (r === E.TABLE || r === E.TBODY || r === E.TFOOT || r === E.THEAD || r === E.TR) {
        if (e.openElements.hasInTableScope(r)) {
          e._closeTableCell();
          e._processToken(t);
        }
      } else if (
        r !== E.BODY &&
        r !== E.CAPTION &&
        r !== E.COL &&
        r !== E.COLGROUP &&
        r !== E.HTML
      ) {
        endTagInBody(e, t);
      }
    }
    function startTagInSelect(e, t) {
      const r = t.tagName;
      if (r === E.HTML) {
        startTagInBody(e, t);
      } else if (r === E.OPTION) {
        if (e.openElements.currentTagName === E.OPTION) {
          e.openElements.pop();
        }
        e._insertElement(t, _.HTML);
      } else if (r === E.OPTGROUP) {
        if (e.openElements.currentTagName === E.OPTION) {
          e.openElements.pop();
        }
        if (e.openElements.currentTagName === E.OPTGROUP) {
          e.openElements.pop();
        }
        e._insertElement(t, _.HTML);
      } else if (r === E.INPUT || r === E.KEYGEN || r === E.TEXTAREA || r === E.SELECT) {
        if (e.openElements.hasInSelectScope(E.SELECT)) {
          e.openElements.popUntilTagNamePopped(E.SELECT);
          e._resetInsertionMode();
          if (r !== E.SELECT) {
            e._processToken(t);
          }
        }
      } else if (r === E.SCRIPT || r === E.TEMPLATE) {
        startTagInHead(e, t);
      }
    }
    function endTagInSelect(e, t) {
      const r = t.tagName;
      if (r === E.OPTGROUP) {
        const t = e.openElements.items[e.openElements.stackTop - 1];
        const r = t && e.treeAdapter.getTagName(t);
        if (e.openElements.currentTagName === E.OPTION && r === E.OPTGROUP) {
          e.openElements.pop();
        }
        if (e.openElements.currentTagName === E.OPTGROUP) {
          e.openElements.pop();
        }
      } else if (r === E.OPTION) {
        if (e.openElements.currentTagName === E.OPTION) {
          e.openElements.pop();
        }
      } else if (r === E.SELECT && e.openElements.hasInSelectScope(E.SELECT)) {
        e.openElements.popUntilTagNamePopped(E.SELECT);
        e._resetInsertionMode();
      } else if (r === E.TEMPLATE) {
        endTagInHead(e, t);
      }
    }
    function startTagInSelectInTable(e, t) {
      const r = t.tagName;
      if (
        r === E.CAPTION ||
        r === E.TABLE ||
        r === E.TBODY ||
        r === E.TFOOT ||
        r === E.THEAD ||
        r === E.TR ||
        r === E.TD ||
        r === E.TH
      ) {
        e.openElements.popUntilTagNamePopped(E.SELECT);
        e._resetInsertionMode();
        e._processToken(t);
      } else {
        startTagInSelect(e, t);
      }
    }
    function endTagInSelectInTable(e, t) {
      const r = t.tagName;
      if (
        r === E.CAPTION ||
        r === E.TABLE ||
        r === E.TBODY ||
        r === E.TFOOT ||
        r === E.THEAD ||
        r === E.TR ||
        r === E.TD ||
        r === E.TH
      ) {
        if (e.openElements.hasInTableScope(r)) {
          e.openElements.popUntilTagNamePopped(E.SELECT);
          e._resetInsertionMode();
          e._processToken(t);
        }
      } else {
        endTagInSelect(e, t);
      }
    }
    function startTagInTemplate(e, t) {
      const r = t.tagName;
      if (
        r === E.BASE ||
        r === E.BASEFONT ||
        r === E.BGSOUND ||
        r === E.LINK ||
        r === E.META ||
        r === E.NOFRAMES ||
        r === E.SCRIPT ||
        r === E.STYLE ||
        r === E.TEMPLATE ||
        r === E.TITLE
      ) {
        startTagInHead(e, t);
      } else {
        const a = Q[r] || R;
        e._popTmplInsertionMode();
        e._pushTmplInsertionMode(a);
        e.insertionMode = a;
        e._processToken(t);
      }
    }
    function endTagInTemplate(e, t) {
      if (t.tagName === E.TEMPLATE) {
        endTagInHead(e, t);
      }
    }
    function eofInTemplate(e, t) {
      if (e.openElements.tmplCount > 0) {
        e.openElements.popUntilTagNamePopped(E.TEMPLATE);
        e.activeFormattingElements.clearToLastMarker();
        e._popTmplInsertionMode();
        e._resetInsertionMode();
        e._processToken(t);
      } else {
        e.stopped = true;
      }
    }
    function startTagAfterBody(e, t) {
      if (t.tagName === E.HTML) {
        startTagInBody(e, t);
      } else {
        tokenAfterBody(e, t);
      }
    }
    function endTagAfterBody(e, t) {
      if (t.tagName === E.HTML) {
        if (!e.fragmentContext) {
          e.insertionMode = W;
        }
      } else {
        tokenAfterBody(e, t);
      }
    }
    function tokenAfterBody(e, t) {
      e.insertionMode = R;
      e._processToken(t);
    }
    function startTagInFrameset(e, t) {
      const r = t.tagName;
      if (r === E.HTML) {
        startTagInBody(e, t);
      } else if (r === E.FRAMESET) {
        e._insertElement(t, _.HTML);
      } else if (r === E.FRAME) {
        e._appendElement(t, _.HTML);
        t.ackSelfClosing = true;
      } else if (r === E.NOFRAMES) {
        startTagInHead(e, t);
      }
    }
    function endTagInFrameset(e, t) {
      if (t.tagName === E.FRAMESET && !e.openElements.isRootHtmlElementCurrent()) {
        e.openElements.pop();
        if (!e.fragmentContext && e.openElements.currentTagName !== E.FRAMESET) {
          e.insertionMode = z;
        }
      }
    }
    function startTagAfterFrameset(e, t) {
      const r = t.tagName;
      if (r === E.HTML) {
        startTagInBody(e, t);
      } else if (r === E.NOFRAMES) {
        startTagInHead(e, t);
      }
    }
    function endTagAfterFrameset(e, t) {
      if (t.tagName === E.HTML) {
        e.insertionMode = Y;
      }
    }
    function startTagAfterAfterBody(e, t) {
      if (t.tagName === E.HTML) {
        startTagInBody(e, t);
      } else {
        tokenAfterAfterBody(e, t);
      }
    }
    function tokenAfterAfterBody(e, t) {
      e.insertionMode = R;
      e._processToken(t);
    }
    function startTagAfterAfterFrameset(e, t) {
      const r = t.tagName;
      if (r === E.HTML) {
        startTagInBody(e, t);
      } else if (r === E.NOFRAMES) {
        startTagInHead(e, t);
      }
    }
    function nullCharacterInForeignContent(e, t) {
      t.chars = v.REPLACEMENT_CHARACTER;
      e._insertCharacters(t);
    }
    function characterInForeignContent(e, t) {
      e._insertCharacters(t);
      e.framesetOk = false;
    }
    function startTagInForeignContent(e, t) {
      if (c.causesExit(t) && !e.fragmentContext) {
        while (
          e.treeAdapter.getNamespaceURI(e.openElements.current) !== _.HTML &&
          !e._isIntegrationPoint(e.openElements.current)
        ) {
          e.openElements.pop();
        }
        e._processToken(t);
      } else {
        const r = e._getAdjustedCurrentElement();
        const a = e.treeAdapter.getNamespaceURI(r);
        if (a === _.MATHML) {
          c.adjustTokenMathMLAttrs(t);
        } else if (a === _.SVG) {
          c.adjustTokenSVGTagName(t);
          c.adjustTokenSVGAttrs(t);
        }
        c.adjustTokenXMLAttrs(t);
        if (t.selfClosing) {
          e._appendElement(t, a);
        } else {
          e._insertElement(t, a);
        }
        t.ackSelfClosing = true;
      }
    }
    function endTagInForeignContent(e, t) {
      for (let r = e.openElements.stackTop; r > 0; r--) {
        const a = e.openElements.items[r];
        if (e.treeAdapter.getNamespaceURI(a) === _.HTML) {
          e._processToken(t);
          break;
        }
        if (e.treeAdapter.getTagName(a).toLowerCase() === t.tagName) {
          e.openElements.popUntilElementPopped(a);
          break;
        }
      }
    }
  },
  4813: (e, t, r) => {
    const a = r(9338);
    const n = a.TAG_NAMES;
    const i = a.NAMESPACES;
    function isImpliedEndTagRequired(e) {
      switch (e.length) {
        case 1:
          return e === n.P;
        case 2:
          return e === n.RB || e === n.RP || e === n.RT || e === n.DD || e === n.DT || e === n.LI;
        case 3:
          return e === n.RTC;
        case 6:
          return e === n.OPTION;
        case 8:
          return e === n.OPTGROUP;
      }
      return false;
    }
    function isImpliedEndTagRequiredThoroughly(e) {
      switch (e.length) {
        case 1:
          return e === n.P;
        case 2:
          return (
            e === n.RB ||
            e === n.RP ||
            e === n.RT ||
            e === n.DD ||
            e === n.DT ||
            e === n.LI ||
            e === n.TD ||
            e === n.TH ||
            e === n.TR
          );
        case 3:
          return e === n.RTC;
        case 5:
          return e === n.TBODY || e === n.TFOOT || e === n.THEAD;
        case 6:
          return e === n.OPTION;
        case 7:
          return e === n.CAPTION;
        case 8:
          return e === n.OPTGROUP || e === n.COLGROUP;
      }
      return false;
    }
    function isScopingElement(e, t) {
      switch (e.length) {
        case 2:
          if (e === n.TD || e === n.TH) {
            return t === i.HTML;
          } else if (e === n.MI || e === n.MO || e === n.MN || e === n.MS) {
            return t === i.MATHML;
          }
          break;
        case 4:
          if (e === n.HTML) {
            return t === i.HTML;
          } else if (e === n.DESC) {
            return t === i.SVG;
          }
          break;
        case 5:
          if (e === n.TABLE) {
            return t === i.HTML;
          } else if (e === n.MTEXT) {
            return t === i.MATHML;
          } else if (e === n.TITLE) {
            return t === i.SVG;
          }
          break;
        case 6:
          return (e === n.APPLET || e === n.OBJECT) && t === i.HTML;
        case 7:
          return (e === n.CAPTION || e === n.MARQUEE) && t === i.HTML;
        case 8:
          return e === n.TEMPLATE && t === i.HTML;
        case 13:
          return e === n.FOREIGN_OBJECT && t === i.SVG;
        case 14:
          return e === n.ANNOTATION_XML && t === i.MATHML;
      }
      return false;
    }
    class OpenElementStack {
      constructor(e, t) {
        this.stackTop = -1;
        this.items = [];
        this.current = e;
        this.currentTagName = null;
        this.currentTmplContent = null;
        this.tmplCount = 0;
        this.treeAdapter = t;
      }
      _indexOf(e) {
        let t = -1;
        for (let r = this.stackTop; r >= 0; r--) {
          if (this.items[r] === e) {
            t = r;
            break;
          }
        }
        return t;
      }
      _isInTemplate() {
        return (
          this.currentTagName === n.TEMPLATE &&
          this.treeAdapter.getNamespaceURI(this.current) === i.HTML
        );
      }
      _updateCurrentElement() {
        this.current = this.items[this.stackTop];
        this.currentTagName = this.current && this.treeAdapter.getTagName(this.current);
        this.currentTmplContent = this._isInTemplate()
          ? this.treeAdapter.getTemplateContent(this.current)
          : null;
      }
      push(e) {
        this.items[++this.stackTop] = e;
        this._updateCurrentElement();
        if (this._isInTemplate()) {
          this.tmplCount++;
        }
      }
      pop() {
        this.stackTop--;
        if (this.tmplCount > 0 && this._isInTemplate()) {
          this.tmplCount--;
        }
        this._updateCurrentElement();
      }
      replace(e, t) {
        const r = this._indexOf(e);
        this.items[r] = t;
        if (r === this.stackTop) {
          this._updateCurrentElement();
        }
      }
      insertAfter(e, t) {
        const r = this._indexOf(e) + 1;
        this.items.splice(r, 0, t);
        if (r === ++this.stackTop) {
          this._updateCurrentElement();
        }
      }
      popUntilTagNamePopped(e) {
        while (this.stackTop > -1) {
          const t = this.currentTagName;
          const r = this.treeAdapter.getNamespaceURI(this.current);
          this.pop();
          if (t === e && r === i.HTML) {
            break;
          }
        }
      }
      popUntilElementPopped(e) {
        while (this.stackTop > -1) {
          const t = this.current;
          this.pop();
          if (t === e) {
            break;
          }
        }
      }
      popUntilNumberedHeaderPopped() {
        while (this.stackTop > -1) {
          const e = this.currentTagName;
          const t = this.treeAdapter.getNamespaceURI(this.current);
          this.pop();
          if (
            e === n.H1 ||
            e === n.H2 ||
            e === n.H3 ||
            e === n.H4 ||
            e === n.H5 ||
            (e === n.H6 && t === i.HTML)
          ) {
            break;
          }
        }
      }
      popUntilTableCellPopped() {
        while (this.stackTop > -1) {
          const e = this.currentTagName;
          const t = this.treeAdapter.getNamespaceURI(this.current);
          this.pop();
          if (e === n.TD || (e === n.TH && t === i.HTML)) {
            break;
          }
        }
      }
      popAllUpToHtmlElement() {
        this.stackTop = 0;
        this._updateCurrentElement();
      }
      clearBackToTableContext() {
        while (
          (this.currentTagName !== n.TABLE &&
            this.currentTagName !== n.TEMPLATE &&
            this.currentTagName !== n.HTML) ||
          this.treeAdapter.getNamespaceURI(this.current) !== i.HTML
        ) {
          this.pop();
        }
      }
      clearBackToTableBodyContext() {
        while (
          (this.currentTagName !== n.TBODY &&
            this.currentTagName !== n.TFOOT &&
            this.currentTagName !== n.THEAD &&
            this.currentTagName !== n.TEMPLATE &&
            this.currentTagName !== n.HTML) ||
          this.treeAdapter.getNamespaceURI(this.current) !== i.HTML
        ) {
          this.pop();
        }
      }
      clearBackToTableRowContext() {
        while (
          (this.currentTagName !== n.TR &&
            this.currentTagName !== n.TEMPLATE &&
            this.currentTagName !== n.HTML) ||
          this.treeAdapter.getNamespaceURI(this.current) !== i.HTML
        ) {
          this.pop();
        }
      }
      remove(e) {
        for (let t = this.stackTop; t >= 0; t--) {
          if (this.items[t] === e) {
            this.items.splice(t, 1);
            this.stackTop--;
            this._updateCurrentElement();
            break;
          }
        }
      }
      tryPeekProperlyNestedBodyElement() {
        const e = this.items[1];
        return e && this.treeAdapter.getTagName(e) === n.BODY ? e : null;
      }
      contains(e) {
        return this._indexOf(e) > -1;
      }
      getCommonAncestor(e) {
        let t = this._indexOf(e);
        return --t >= 0 ? this.items[t] : null;
      }
      isRootHtmlElementCurrent() {
        return this.stackTop === 0 && this.currentTagName === n.HTML;
      }
      hasInScope(e) {
        for (let t = this.stackTop; t >= 0; t--) {
          const r = this.treeAdapter.getTagName(this.items[t]);
          const a = this.treeAdapter.getNamespaceURI(this.items[t]);
          if (r === e && a === i.HTML) {
            return true;
          }
          if (isScopingElement(r, a)) {
            return false;
          }
        }
        return true;
      }
      hasNumberedHeaderInScope() {
        for (let e = this.stackTop; e >= 0; e--) {
          const t = this.treeAdapter.getTagName(this.items[e]);
          const r = this.treeAdapter.getNamespaceURI(this.items[e]);
          if (
            (t === n.H1 || t === n.H2 || t === n.H3 || t === n.H4 || t === n.H5 || t === n.H6) &&
            r === i.HTML
          ) {
            return true;
          }
          if (isScopingElement(t, r)) {
            return false;
          }
        }
        return true;
      }
      hasInListItemScope(e) {
        for (let t = this.stackTop; t >= 0; t--) {
          const r = this.treeAdapter.getTagName(this.items[t]);
          const a = this.treeAdapter.getNamespaceURI(this.items[t]);
          if (r === e && a === i.HTML) {
            return true;
          }
          if (((r === n.UL || r === n.OL) && a === i.HTML) || isScopingElement(r, a)) {
            return false;
          }
        }
        return true;
      }
      hasInButtonScope(e) {
        for (let t = this.stackTop; t >= 0; t--) {
          const r = this.treeAdapter.getTagName(this.items[t]);
          const a = this.treeAdapter.getNamespaceURI(this.items[t]);
          if (r === e && a === i.HTML) {
            return true;
          }
          if ((r === n.BUTTON && a === i.HTML) || isScopingElement(r, a)) {
            return false;
          }
        }
        return true;
      }
      hasInTableScope(e) {
        for (let t = this.stackTop; t >= 0; t--) {
          const r = this.treeAdapter.getTagName(this.items[t]);
          const a = this.treeAdapter.getNamespaceURI(this.items[t]);
          if (a !== i.HTML) {
            continue;
          }
          if (r === e) {
            return true;
          }
          if (r === n.TABLE || r === n.TEMPLATE || r === n.HTML) {
            return false;
          }
        }
        return true;
      }
      hasTableBodyContextInTableScope() {
        for (let e = this.stackTop; e >= 0; e--) {
          const t = this.treeAdapter.getTagName(this.items[e]);
          const r = this.treeAdapter.getNamespaceURI(this.items[e]);
          if (r !== i.HTML) {
            continue;
          }
          if (t === n.TBODY || t === n.THEAD || t === n.TFOOT) {
            return true;
          }
          if (t === n.TABLE || t === n.HTML) {
            return false;
          }
        }
        return true;
      }
      hasInSelectScope(e) {
        for (let t = this.stackTop; t >= 0; t--) {
          const r = this.treeAdapter.getTagName(this.items[t]);
          const a = this.treeAdapter.getNamespaceURI(this.items[t]);
          if (a !== i.HTML) {
            continue;
          }
          if (r === e) {
            return true;
          }
          if (r !== n.OPTION && r !== n.OPTGROUP) {
            return false;
          }
        }
        return true;
      }
      generateImpliedEndTags() {
        while (isImpliedEndTagRequired(this.currentTagName)) {
          this.pop();
        }
      }
      generateImpliedEndTagsThoroughly() {
        while (isImpliedEndTagRequiredThoroughly(this.currentTagName)) {
          this.pop();
        }
      }
      generateImpliedEndTagsWithExclusion(e) {
        while (isImpliedEndTagRequired(this.currentTagName) && this.currentTagName !== e) {
          this.pop();
        }
      }
    }
    e.exports = OpenElementStack;
  },
  5759: (e, t, r) => {
    const a = r(6540);
    const n = r(9481);
    const i = r(9599);
    const o = r(5906);
    const s = n.CODE_POINTS;
    const p = n.CODE_POINT_SEQUENCES;
    const d = {
      128: 8364,
      130: 8218,
      131: 402,
      132: 8222,
      133: 8230,
      134: 8224,
      135: 8225,
      136: 710,
      137: 8240,
      138: 352,
      139: 8249,
      140: 338,
      142: 381,
      145: 8216,
      146: 8217,
      147: 8220,
      148: 8221,
      149: 8226,
      150: 8211,
      151: 8212,
      152: 732,
      153: 8482,
      154: 353,
      155: 8250,
      156: 339,
      158: 382,
      159: 376,
    };
    const l = 1 << 0;
    const m = 1 << 1;
    const c = 1 << 2;
    const g = l | m | c;
    const v = 'DATA_STATE';
    const T = 'RCDATA_STATE';
    const E = 'RAWTEXT_STATE';
    const _ = 'SCRIPT_DATA_STATE';
    const w = 'PLAINTEXT_STATE';
    const A = 'TAG_OPEN_STATE';
    const b = 'END_TAG_OPEN_STATE';
    const y = 'TAG_NAME_STATE';
    const S = 'RCDATA_LESS_THAN_SIGN_STATE';
    const C = 'RCDATA_END_TAG_OPEN_STATE';
    const k = 'RCDATA_END_TAG_NAME_STATE';
    const N = 'RAWTEXT_LESS_THAN_SIGN_STATE';
    const D = 'RAWTEXT_END_TAG_OPEN_STATE';
    const O = 'RAWTEXT_END_TAG_NAME_STATE';
    const I = 'SCRIPT_DATA_LESS_THAN_SIGN_STATE';
    const R = 'SCRIPT_DATA_END_TAG_OPEN_STATE';
    const P = 'SCRIPT_DATA_END_TAG_NAME_STATE';
    const L = 'SCRIPT_DATA_ESCAPE_START_STATE';
    const x = 'SCRIPT_DATA_ESCAPE_START_DASH_STATE';
    const F = 'SCRIPT_DATA_ESCAPED_STATE';
    const M = 'SCRIPT_DATA_ESCAPED_DASH_STATE';
    const B = 'SCRIPT_DATA_ESCAPED_DASH_DASH_STATE';
    const G = 'SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE';
    const U = 'SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE';
    const H = 'SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE';
    const V = 'SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE';
    const q = 'SCRIPT_DATA_DOUBLE_ESCAPED_STATE';
    const j = 'SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE';
    const K = 'SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE';
    const z = 'SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE';
    const W = 'SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE';
    const Y = 'BEFORE_ATTRIBUTE_NAME_STATE';
    const $ = 'ATTRIBUTE_NAME_STATE';
    const Q = 'AFTER_ATTRIBUTE_NAME_STATE';
    const X = 'BEFORE_ATTRIBUTE_VALUE_STATE';
    const J = 'ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE';
    const Z = 'ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE';
    const ee = 'ATTRIBUTE_VALUE_UNQUOTED_STATE';
    const te = 'AFTER_ATTRIBUTE_VALUE_QUOTED_STATE';
    const re = 'SELF_CLOSING_START_TAG_STATE';
    const ae = 'BOGUS_COMMENT_STATE';
    const ne = 'MARKUP_DECLARATION_OPEN_STATE';
    const ie = 'COMMENT_START_STATE';
    const oe = 'COMMENT_START_DASH_STATE';
    const se = 'COMMENT_STATE';
    const pe = 'COMMENT_LESS_THAN_SIGN_STATE';
    const de = 'COMMENT_LESS_THAN_SIGN_BANG_STATE';
    const le = 'COMMENT_LESS_THAN_SIGN_BANG_DASH_STATE';
    const me = 'COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH_STATE';
    const ue = 'COMMENT_END_DASH_STATE';
    const ce = 'COMMENT_END_STATE';
    const fe = 'COMMENT_END_BANG_STATE';
    const he = 'DOCTYPE_STATE';
    const ge = 'BEFORE_DOCTYPE_NAME_STATE';
    const ve = 'DOCTYPE_NAME_STATE';
    const Te = 'AFTER_DOCTYPE_NAME_STATE';
    const Ee = 'AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE';
    const _e = 'BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE';
    const we = 'DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE';
    const Ae = 'DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE';
    const be = 'AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE';
    const ye = 'BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE';
    const Se = 'AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE';
    const Ce = 'BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE';
    const ke = 'DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE';
    const Ne = 'DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE';
    const De = 'AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE';
    const Oe = 'BOGUS_DOCTYPE_STATE';
    const Ie = 'CDATA_SECTION_STATE';
    const Re = 'CDATA_SECTION_BRACKET_STATE';
    const Pe = 'CDATA_SECTION_END_STATE';
    const Le = 'CHARACTER_REFERENCE_STATE';
    const xe = 'NAMED_CHARACTER_REFERENCE_STATE';
    const Fe = 'AMBIGUOS_AMPERSAND_STATE';
    const Me = 'NUMERIC_CHARACTER_REFERENCE_STATE';
    const Be = 'HEXADEMICAL_CHARACTER_REFERENCE_START_STATE';
    const Ge = 'DECIMAL_CHARACTER_REFERENCE_START_STATE';
    const Ue = 'HEXADEMICAL_CHARACTER_REFERENCE_STATE';
    const He = 'DECIMAL_CHARACTER_REFERENCE_STATE';
    const Ve = 'NUMERIC_CHARACTER_REFERENCE_END_STATE';
    function isWhitespace(e) {
      return e === s.SPACE || e === s.LINE_FEED || e === s.TABULATION || e === s.FORM_FEED;
    }
    function isAsciiDigit(e) {
      return e >= s.DIGIT_0 && e <= s.DIGIT_9;
    }
    function isAsciiUpper(e) {
      return e >= s.LATIN_CAPITAL_A && e <= s.LATIN_CAPITAL_Z;
    }
    function isAsciiLower(e) {
      return e >= s.LATIN_SMALL_A && e <= s.LATIN_SMALL_Z;
    }
    function isAsciiLetter(e) {
      return isAsciiLower(e) || isAsciiUpper(e);
    }
    function isAsciiAlphaNumeric(e) {
      return isAsciiLetter(e) || isAsciiDigit(e);
    }
    function isAsciiUpperHexDigit(e) {
      return e >= s.LATIN_CAPITAL_A && e <= s.LATIN_CAPITAL_F;
    }
    function isAsciiLowerHexDigit(e) {
      return e >= s.LATIN_SMALL_A && e <= s.LATIN_SMALL_F;
    }
    function isAsciiHexDigit(e) {
      return isAsciiDigit(e) || isAsciiUpperHexDigit(e) || isAsciiLowerHexDigit(e);
    }
    function toAsciiLowerCodePoint(e) {
      return e + 32;
    }
    function toChar(e) {
      if (e <= 65535) {
        return String.fromCharCode(e);
      }
      e -= 65536;
      return (
        String.fromCharCode(((e >>> 10) & 1023) | 55296) + String.fromCharCode(56320 | (e & 1023))
      );
    }
    function toAsciiLowerChar(e) {
      return String.fromCharCode(toAsciiLowerCodePoint(e));
    }
    function findNamedEntityTreeBranch(e, t) {
      const r = i[++e];
      let a = ++e;
      let n = a + r - 1;
      while (a <= n) {
        const e = (a + n) >>> 1;
        const o = i[e];
        if (o < t) {
          a = e + 1;
        } else if (o > t) {
          n = e - 1;
        } else {
          return i[e + r];
        }
      }
      return -1;
    }
    class Tokenizer {
      constructor() {
        this.preprocessor = new a();
        this.tokenQueue = [];
        this.allowCDATA = false;
        this.state = v;
        this.returnState = '';
        this.charRefCode = -1;
        this.tempBuff = [];
        this.lastStartTagName = '';
        this.consumedAfterSnapshot = -1;
        this.active = false;
        this.currentCharacterToken = null;
        this.currentToken = null;
        this.currentAttr = null;
      }
      _err() {}
      _errOnNextCodePoint(e) {
        this._consume();
        this._err(e);
        this._unconsume();
      }
      getNextToken() {
        while (!this.tokenQueue.length && this.active) {
          this.consumedAfterSnapshot = 0;
          const e = this._consume();
          if (!this._ensureHibernation()) {
            this[this.state](e);
          }
        }
        return this.tokenQueue.shift();
      }
      write(e, t) {
        this.active = true;
        this.preprocessor.write(e, t);
      }
      insertHtmlAtCurrentPos(e) {
        this.active = true;
        this.preprocessor.insertHtmlAtCurrentPos(e);
      }
      _ensureHibernation() {
        if (this.preprocessor.endOfChunkHit) {
          for (; this.consumedAfterSnapshot > 0; this.consumedAfterSnapshot--) {
            this.preprocessor.retreat();
          }
          this.active = false;
          this.tokenQueue.push({ type: Tokenizer.HIBERNATION_TOKEN });
          return true;
        }
        return false;
      }
      _consume() {
        this.consumedAfterSnapshot++;
        return this.preprocessor.advance();
      }
      _unconsume() {
        this.consumedAfterSnapshot--;
        this.preprocessor.retreat();
      }
      _reconsumeInState(e) {
        this.state = e;
        this._unconsume();
      }
      _consumeSequenceIfMatch(e, t, r) {
        let a = 0;
        let n = true;
        const i = e.length;
        let o = 0;
        let p = t;
        let d = void 0;
        for (; o < i; o++) {
          if (o > 0) {
            p = this._consume();
            a++;
          }
          if (p === s.EOF) {
            n = false;
            break;
          }
          d = e[o];
          if (p !== d && (r || p !== toAsciiLowerCodePoint(d))) {
            n = false;
            break;
          }
        }
        if (!n) {
          while (a--) {
            this._unconsume();
          }
        }
        return n;
      }
      _isTempBufferEqualToScriptString() {
        if (this.tempBuff.length !== p.SCRIPT_STRING.length) {
          return false;
        }
        for (let e = 0; e < this.tempBuff.length; e++) {
          if (this.tempBuff[e] !== p.SCRIPT_STRING[e]) {
            return false;
          }
        }
        return true;
      }
      _createStartTagToken() {
        this.currentToken = {
          type: Tokenizer.START_TAG_TOKEN,
          tagName: '',
          selfClosing: false,
          ackSelfClosing: false,
          attrs: [],
        };
      }
      _createEndTagToken() {
        this.currentToken = {
          type: Tokenizer.END_TAG_TOKEN,
          tagName: '',
          selfClosing: false,
          attrs: [],
        };
      }
      _createCommentToken() {
        this.currentToken = { type: Tokenizer.COMMENT_TOKEN, data: '' };
      }
      _createDoctypeToken(e) {
        this.currentToken = {
          type: Tokenizer.DOCTYPE_TOKEN,
          name: e,
          forceQuirks: false,
          publicId: null,
          systemId: null,
        };
      }
      _createCharacterToken(e, t) {
        this.currentCharacterToken = { type: e, chars: t };
      }
      _createEOFToken() {
        this.currentToken = { type: Tokenizer.EOF_TOKEN };
      }
      _createAttr(e) {
        this.currentAttr = { name: e, value: '' };
      }
      _leaveAttrName(e) {
        if (Tokenizer.getTokenAttr(this.currentToken, this.currentAttr.name) === null) {
          this.currentToken.attrs.push(this.currentAttr);
        } else {
          this._err(o.duplicateAttribute);
        }
        this.state = e;
      }
      _leaveAttrValue(e) {
        this.state = e;
      }
      _emitCurrentToken() {
        this._emitCurrentCharacterToken();
        const e = this.currentToken;
        this.currentToken = null;
        if (e.type === Tokenizer.START_TAG_TOKEN) {
          this.lastStartTagName = e.tagName;
        } else if (e.type === Tokenizer.END_TAG_TOKEN) {
          if (e.attrs.length > 0) {
            this._err(o.endTagWithAttributes);
          }
          if (e.selfClosing) {
            this._err(o.endTagWithTrailingSolidus);
          }
        }
        this.tokenQueue.push(e);
      }
      _emitCurrentCharacterToken() {
        if (this.currentCharacterToken) {
          this.tokenQueue.push(this.currentCharacterToken);
          this.currentCharacterToken = null;
        }
      }
      _emitEOFToken() {
        this._createEOFToken();
        this._emitCurrentToken();
      }
      _appendCharToCurrentCharacterToken(e, t) {
        if (this.currentCharacterToken && this.currentCharacterToken.type !== e) {
          this._emitCurrentCharacterToken();
        }
        if (this.currentCharacterToken) {
          this.currentCharacterToken.chars += t;
        } else {
          this._createCharacterToken(e, t);
        }
      }
      _emitCodePoint(e) {
        let t = Tokenizer.CHARACTER_TOKEN;
        if (isWhitespace(e)) {
          t = Tokenizer.WHITESPACE_CHARACTER_TOKEN;
        } else if (e === s.NULL) {
          t = Tokenizer.NULL_CHARACTER_TOKEN;
        }
        this._appendCharToCurrentCharacterToken(t, toChar(e));
      }
      _emitSeveralCodePoints(e) {
        for (let t = 0; t < e.length; t++) {
          this._emitCodePoint(e[t]);
        }
      }
      _emitChars(e) {
        this._appendCharToCurrentCharacterToken(Tokenizer.CHARACTER_TOKEN, e);
      }
      _matchNamedCharacterReference(e) {
        let t = null;
        let r = 1;
        let a = findNamedEntityTreeBranch(0, e);
        this.tempBuff.push(e);
        while (a > -1) {
          const e = i[a];
          const n = e < g;
          const o = n && e & l;
          if (o) {
            t = e & m ? [i[++a], i[++a]] : [i[++a]];
            r = 0;
          }
          const p = this._consume();
          this.tempBuff.push(p);
          r++;
          if (p === s.EOF) {
            break;
          }
          if (n) {
            a = e & c ? findNamedEntityTreeBranch(a, p) : -1;
          } else {
            a = p === e ? ++a : -1;
          }
        }
        while (r--) {
          this.tempBuff.pop();
          this._unconsume();
        }
        return t;
      }
      _isCharacterReferenceInAttribute() {
        return this.returnState === J || this.returnState === Z || this.returnState === ee;
      }
      _isCharacterReferenceAttributeQuirk(e) {
        if (!e && this._isCharacterReferenceInAttribute()) {
          const e = this._consume();
          this._unconsume();
          return e === s.EQUALS_SIGN || isAsciiAlphaNumeric(e);
        }
        return false;
      }
      _flushCodePointsConsumedAsCharacterReference() {
        if (this._isCharacterReferenceInAttribute()) {
          for (let e = 0; e < this.tempBuff.length; e++) {
            this.currentAttr.value += toChar(this.tempBuff[e]);
          }
        } else {
          this._emitSeveralCodePoints(this.tempBuff);
        }
        this.tempBuff = [];
      }
      [v](e) {
        this.preprocessor.dropParsedChunk();
        if (e === s.LESS_THAN_SIGN) {
          this.state = A;
        } else if (e === s.AMPERSAND) {
          this.returnState = v;
          this.state = Le;
        } else if (e === s.NULL) {
          this._err(o.unexpectedNullCharacter);
          this._emitCodePoint(e);
        } else if (e === s.EOF) {
          this._emitEOFToken();
        } else {
          this._emitCodePoint(e);
        }
      }
      [T](e) {
        this.preprocessor.dropParsedChunk();
        if (e === s.AMPERSAND) {
          this.returnState = T;
          this.state = Le;
        } else if (e === s.LESS_THAN_SIGN) {
          this.state = S;
        } else if (e === s.NULL) {
          this._err(o.unexpectedNullCharacter);
          this._emitChars(n.REPLACEMENT_CHARACTER);
        } else if (e === s.EOF) {
          this._emitEOFToken();
        } else {
          this._emitCodePoint(e);
        }
      }
      [E](e) {
        this.preprocessor.dropParsedChunk();
        if (e === s.LESS_THAN_SIGN) {
          this.state = N;
        } else if (e === s.NULL) {
          this._err(o.unexpectedNullCharacter);
          this._emitChars(n.REPLACEMENT_CHARACTER);
        } else if (e === s.EOF) {
          this._emitEOFToken();
        } else {
          this._emitCodePoint(e);
        }
      }
      [_](e) {
        this.preprocessor.dropParsedChunk();
        if (e === s.LESS_THAN_SIGN) {
          this.state = I;
        } else if (e === s.NULL) {
          this._err(o.unexpectedNullCharacter);
          this._emitChars(n.REPLACEMENT_CHARACTER);
        } else if (e === s.EOF) {
          this._emitEOFToken();
        } else {
          this._emitCodePoint(e);
        }
      }
      [w](e) {
        this.preprocessor.dropParsedChunk();
        if (e === s.NULL) {
          this._err(o.unexpectedNullCharacter);
          this._emitChars(n.REPLACEMENT_CHARACTER);
        } else if (e === s.EOF) {
          this._emitEOFToken();
        } else {
          this._emitCodePoint(e);
        }
      }
      [A](e) {
        if (e === s.EXCLAMATION_MARK) {
          this.state = ne;
        } else if (e === s.SOLIDUS) {
          this.state = b;
        } else if (isAsciiLetter(e)) {
          this._createStartTagToken();
          this._reconsumeInState(y);
        } else if (e === s.QUESTION_MARK) {
          this._err(o.unexpectedQuestionMarkInsteadOfTagName);
          this._createCommentToken();
          this._reconsumeInState(ae);
        } else if (e === s.EOF) {
          this._err(o.eofBeforeTagName);
          this._emitChars('<');
          this._emitEOFToken();
        } else {
          this._err(o.invalidFirstCharacterOfTagName);
          this._emitChars('<');
          this._reconsumeInState(v);
        }
      }
      [b](e) {
        if (isAsciiLetter(e)) {
          this._createEndTagToken();
          this._reconsumeInState(y);
        } else if (e === s.GREATER_THAN_SIGN) {
          this._err(o.missingEndTagName);
          this.state = v;
        } else if (e === s.EOF) {
          this._err(o.eofBeforeTagName);
          this._emitChars('</');
          this._emitEOFToken();
        } else {
          this._err(o.invalidFirstCharacterOfTagName);
          this._createCommentToken();
          this._reconsumeInState(ae);
        }
      }
      [y](e) {
        if (isWhitespace(e)) {
          this.state = Y;
        } else if (e === s.SOLIDUS) {
          this.state = re;
        } else if (e === s.GREATER_THAN_SIGN) {
          this.state = v;
          this._emitCurrentToken();
        } else if (isAsciiUpper(e)) {
          this.currentToken.tagName += toAsciiLowerChar(e);
        } else if (e === s.NULL) {
          this._err(o.unexpectedNullCharacter);
          this.currentToken.tagName += n.REPLACEMENT_CHARACTER;
        } else if (e === s.EOF) {
          this._err(o.eofInTag);
          this._emitEOFToken();
        } else {
          this.currentToken.tagName += toChar(e);
        }
      }
      [S](e) {
        if (e === s.SOLIDUS) {
          this.tempBuff = [];
          this.state = C;
        } else {
          this._emitChars('<');
          this._reconsumeInState(T);
        }
      }
      [C](e) {
        if (isAsciiLetter(e)) {
          this._createEndTagToken();
          this._reconsumeInState(k);
        } else {
          this._emitChars('</');
          this._reconsumeInState(T);
        }
      }
      [k](e) {
        if (isAsciiUpper(e)) {
          this.currentToken.tagName += toAsciiLowerChar(e);
          this.tempBuff.push(e);
        } else if (isAsciiLower(e)) {
          this.currentToken.tagName += toChar(e);
          this.tempBuff.push(e);
        } else {
          if (this.lastStartTagName === this.currentToken.tagName) {
            if (isWhitespace(e)) {
              this.state = Y;
              return;
            }
            if (e === s.SOLIDUS) {
              this.state = re;
              return;
            }
            if (e === s.GREATER_THAN_SIGN) {
              this.state = v;
              this._emitCurrentToken();
              return;
            }
          }
          this._emitChars('</');
          this._emitSeveralCodePoints(this.tempBuff);
          this._reconsumeInState(T);
        }
      }
      [N](e) {
        if (e === s.SOLIDUS) {
          this.tempBuff = [];
          this.state = D;
        } else {
          this._emitChars('<');
          this._reconsumeInState(E);
        }
      }
      [D](e) {
        if (isAsciiLetter(e)) {
          this._createEndTagToken();
          this._reconsumeInState(O);
        } else {
          this._emitChars('</');
          this._reconsumeInState(E);
        }
      }
      [O](e) {
        if (isAsciiUpper(e)) {
          this.currentToken.tagName += toAsciiLowerChar(e);
          this.tempBuff.push(e);
        } else if (isAsciiLower(e)) {
          this.currentToken.tagName += toChar(e);
          this.tempBuff.push(e);
        } else {
          if (this.lastStartTagName === this.currentToken.tagName) {
            if (isWhitespace(e)) {
              this.state = Y;
              return;
            }
            if (e === s.SOLIDUS) {
              this.state = re;
              return;
            }
            if (e === s.GREATER_THAN_SIGN) {
              this._emitCurrentToken();
              this.state = v;
              return;
            }
          }
          this._emitChars('</');
          this._emitSeveralCodePoints(this.tempBuff);
          this._reconsumeInState(E);
        }
      }
      [I](e) {
        if (e === s.SOLIDUS) {
          this.tempBuff = [];
          this.state = R;
        } else if (e === s.EXCLAMATION_MARK) {
          this.state = L;
          this._emitChars('<!');
        } else {
          this._emitChars('<');
          this._reconsumeInState(_);
        }
      }
      [R](e) {
        if (isAsciiLetter(e)) {
          this._createEndTagToken();
          this._reconsumeInState(P);
        } else {
          this._emitChars('</');
          this._reconsumeInState(_);
        }
      }
      [P](e) {
        if (isAsciiUpper(e)) {
          this.currentToken.tagName += toAsciiLowerChar(e);
          this.tempBuff.push(e);
        } else if (isAsciiLower(e)) {
          this.currentToken.tagName += toChar(e);
          this.tempBuff.push(e);
        } else {
          if (this.lastStartTagName === this.currentToken.tagName) {
            if (isWhitespace(e)) {
              this.state = Y;
              return;
            } else if (e === s.SOLIDUS) {
              this.state = re;
              return;
            } else if (e === s.GREATER_THAN_SIGN) {
              this._emitCurrentToken();
              this.state = v;
              return;
            }
          }
          this._emitChars('</');
          this._emitSeveralCodePoints(this.tempBuff);
          this._reconsumeInState(_);
        }
      }
      [L](e) {
        if (e === s.HYPHEN_MINUS) {
          this.state = x;
          this._emitChars('-');
        } else {
          this._reconsumeInState(_);
        }
      }
      [x](e) {
        if (e === s.HYPHEN_MINUS) {
          this.state = B;
          this._emitChars('-');
        } else {
          this._reconsumeInState(_);
        }
      }
      [F](e) {
        if (e === s.HYPHEN_MINUS) {
          this.state = M;
          this._emitChars('-');
        } else if (e === s.LESS_THAN_SIGN) {
          this.state = G;
        } else if (e === s.NULL) {
          this._err(o.unexpectedNullCharacter);
          this._emitChars(n.REPLACEMENT_CHARACTER);
        } else if (e === s.EOF) {
          this._err(o.eofInScriptHtmlCommentLikeText);
          this._emitEOFToken();
        } else {
          this._emitCodePoint(e);
        }
      }
      [M](e) {
        if (e === s.HYPHEN_MINUS) {
          this.state = B;
          this._emitChars('-');
        } else if (e === s.LESS_THAN_SIGN) {
          this.state = G;
        } else if (e === s.NULL) {
          this._err(o.unexpectedNullCharacter);
          this.state = F;
          this._emitChars(n.REPLACEMENT_CHARACTER);
        } else if (e === s.EOF) {
          this._err(o.eofInScriptHtmlCommentLikeText);
          this._emitEOFToken();
        } else {
          this.state = F;
          this._emitCodePoint(e);
        }
      }
      [B](e) {
        if (e === s.HYPHEN_MINUS) {
          this._emitChars('-');
        } else if (e === s.LESS_THAN_SIGN) {
          this.state = G;
        } else if (e === s.GREATER_THAN_SIGN) {
          this.state = _;
          this._emitChars('>');
        } else if (e === s.NULL) {
          this._err(o.unexpectedNullCharacter);
          this.state = F;
          this._emitChars(n.REPLACEMENT_CHARACTER);
        } else if (e === s.EOF) {
          this._err(o.eofInScriptHtmlCommentLikeText);
          this._emitEOFToken();
        } else {
          this.state = F;
          this._emitCodePoint(e);
        }
      }
      [G](e) {
        if (e === s.SOLIDUS) {
          this.tempBuff = [];
          this.state = U;
        } else if (isAsciiLetter(e)) {
          this.tempBuff = [];
          this._emitChars('<');
          this._reconsumeInState(V);
        } else {
          this._emitChars('<');
          this._reconsumeInState(F);
        }
      }
      [U](e) {
        if (isAsciiLetter(e)) {
          this._createEndTagToken();
          this._reconsumeInState(H);
        } else {
          this._emitChars('</');
          this._reconsumeInState(F);
        }
      }
      [H](e) {
        if (isAsciiUpper(e)) {
          this.currentToken.tagName += toAsciiLowerChar(e);
          this.tempBuff.push(e);
        } else if (isAsciiLower(e)) {
          this.currentToken.tagName += toChar(e);
          this.tempBuff.push(e);
        } else {
          if (this.lastStartTagName === this.currentToken.tagName) {
            if (isWhitespace(e)) {
              this.state = Y;
              return;
            }
            if (e === s.SOLIDUS) {
              this.state = re;
              return;
            }
            if (e === s.GREATER_THAN_SIGN) {
              this._emitCurrentToken();
              this.state = v;
              return;
            }
          }
          this._emitChars('</');
          this._emitSeveralCodePoints(this.tempBuff);
          this._reconsumeInState(F);
        }
      }
      [V](e) {
        if (isWhitespace(e) || e === s.SOLIDUS || e === s.GREATER_THAN_SIGN) {
          this.state = this._isTempBufferEqualToScriptString() ? q : F;
          this._emitCodePoint(e);
        } else if (isAsciiUpper(e)) {
          this.tempBuff.push(toAsciiLowerCodePoint(e));
          this._emitCodePoint(e);
        } else if (isAsciiLower(e)) {
          this.tempBuff.push(e);
          this._emitCodePoint(e);
        } else {
          this._reconsumeInState(F);
        }
      }
      [q](e) {
        if (e === s.HYPHEN_MINUS) {
          this.state = j;
          this._emitChars('-');
        } else if (e === s.LESS_THAN_SIGN) {
          this.state = z;
          this._emitChars('<');
        } else if (e === s.NULL) {
          this._err(o.unexpectedNullCharacter);
          this._emitChars(n.REPLACEMENT_CHARACTER);
        } else if (e === s.EOF) {
          this._err(o.eofInScriptHtmlCommentLikeText);
          this._emitEOFToken();
        } else {
          this._emitCodePoint(e);
        }
      }
      [j](e) {
        if (e === s.HYPHEN_MINUS) {
          this.state = K;
          this._emitChars('-');
        } else if (e === s.LESS_THAN_SIGN) {
          this.state = z;
          this._emitChars('<');
        } else if (e === s.NULL) {
          this._err(o.unexpectedNullCharacter);
          this.state = q;
          this._emitChars(n.REPLACEMENT_CHARACTER);
        } else if (e === s.EOF) {
          this._err(o.eofInScriptHtmlCommentLikeText);
          this._emitEOFToken();
        } else {
          this.state = q;
          this._emitCodePoint(e);
        }
      }
      [K](e) {
        if (e === s.HYPHEN_MINUS) {
          this._emitChars('-');
        } else if (e === s.LESS_THAN_SIGN) {
          this.state = z;
          this._emitChars('<');
        } else if (e === s.GREATER_THAN_SIGN) {
          this.state = _;
          this._emitChars('>');
        } else if (e === s.NULL) {
          this._err(o.unexpectedNullCharacter);
          this.state = q;
          this._emitChars(n.REPLACEMENT_CHARACTER);
        } else if (e === s.EOF) {
          this._err(o.eofInScriptHtmlCommentLikeText);
          this._emitEOFToken();
        } else {
          this.state = q;
          this._emitCodePoint(e);
        }
      }
      [z](e) {
        if (e === s.SOLIDUS) {
          this.tempBuff = [];
          this.state = W;
          this._emitChars('/');
        } else {
          this._reconsumeInState(q);
        }
      }
      [W](e) {
        if (isWhitespace(e) || e === s.SOLIDUS || e === s.GREATER_THAN_SIGN) {
          this.state = this._isTempBufferEqualToScriptString() ? F : q;
          this._emitCodePoint(e);
        } else if (isAsciiUpper(e)) {
          this.tempBuff.push(toAsciiLowerCodePoint(e));
          this._emitCodePoint(e);
        } else if (isAsciiLower(e)) {
          this.tempBuff.push(e);
          this._emitCodePoint(e);
        } else {
          this._reconsumeInState(q);
        }
      }
      [Y](e) {
        if (isWhitespace(e)) {
          return;
        }
        if (e === s.SOLIDUS || e === s.GREATER_THAN_SIGN || e === s.EOF) {
          this._reconsumeInState(Q);
        } else if (e === s.EQUALS_SIGN) {
          this._err(o.unexpectedEqualsSignBeforeAttributeName);
          this._createAttr('=');
          this.state = $;
        } else {
          this._createAttr('');
          this._reconsumeInState($);
        }
      }
      [$](e) {
        if (isWhitespace(e) || e === s.SOLIDUS || e === s.GREATER_THAN_SIGN || e === s.EOF) {
          this._leaveAttrName(Q);
          this._unconsume();
        } else if (e === s.EQUALS_SIGN) {
          this._leaveAttrName(X);
        } else if (isAsciiUpper(e)) {
          this.currentAttr.name += toAsciiLowerChar(e);
        } else if (e === s.QUOTATION_MARK || e === s.APOSTROPHE || e === s.LESS_THAN_SIGN) {
          this._err(o.unexpectedCharacterInAttributeName);
          this.currentAttr.name += toChar(e);
        } else if (e === s.NULL) {
          this._err(o.unexpectedNullCharacter);
          this.currentAttr.name += n.REPLACEMENT_CHARACTER;
        } else {
          this.currentAttr.name += toChar(e);
        }
      }
      [Q](e) {
        if (isWhitespace(e)) {
          return;
        }
        if (e === s.SOLIDUS) {
          this.state = re;
        } else if (e === s.EQUALS_SIGN) {
          this.state = X;
        } else if (e === s.GREATER_THAN_SIGN) {
          this.state = v;
          this._emitCurrentToken();
        } else if (e === s.EOF) {
          this._err(o.eofInTag);
          this._emitEOFToken();
        } else {
          this._createAttr('');
          this._reconsumeInState($);
        }
      }
      [X](e) {
        if (isWhitespace(e)) {
          return;
        }
        if (e === s.QUOTATION_MARK) {
          this.state = J;
        } else if (e === s.APOSTROPHE) {
          this.state = Z;
        } else if (e === s.GREATER_THAN_SIGN) {
          this._err(o.missingAttributeValue);
          this.state = v;
          this._emitCurrentToken();
        } else {
          this._reconsumeInState(ee);
        }
      }
      [J](e) {
        if (e === s.QUOTATION_MARK) {
          this.state = te;
        } else if (e === s.AMPERSAND) {
          this.returnState = J;
          this.state = Le;
        } else if (e === s.NULL) {
          this._err(o.unexpectedNullCharacter);
          this.currentAttr.value += n.REPLACEMENT_CHARACTER;
        } else if (e === s.EOF) {
          this._err(o.eofInTag);
          this._emitEOFToken();
        } else {
          this.currentAttr.value += toChar(e);
        }
      }
      [Z](e) {
        if (e === s.APOSTROPHE) {
          this.state = te;
        } else if (e === s.AMPERSAND) {
          this.returnState = Z;
          this.state = Le;
        } else if (e === s.NULL) {
          this._err(o.unexpectedNullCharacter);
          this.currentAttr.value += n.REPLACEMENT_CHARACTER;
        } else if (e === s.EOF) {
          this._err(o.eofInTag);
          this._emitEOFToken();
        } else {
          this.currentAttr.value += toChar(e);
        }
      }
      [ee](e) {
        if (isWhitespace(e)) {
          this._leaveAttrValue(Y);
        } else if (e === s.AMPERSAND) {
          this.returnState = ee;
          this.state = Le;
        } else if (e === s.GREATER_THAN_SIGN) {
          this._leaveAttrValue(v);
          this._emitCurrentToken();
        } else if (e === s.NULL) {
          this._err(o.unexpectedNullCharacter);
          this.currentAttr.value += n.REPLACEMENT_CHARACTER;
        } else if (
          e === s.QUOTATION_MARK ||
          e === s.APOSTROPHE ||
          e === s.LESS_THAN_SIGN ||
          e === s.EQUALS_SIGN ||
          e === s.GRAVE_ACCENT
        ) {
          this._err(o.unexpectedCharacterInUnquotedAttributeValue);
          this.currentAttr.value += toChar(e);
        } else if (e === s.EOF) {
          this._err(o.eofInTag);
          this._emitEOFToken();
        } else {
          this.currentAttr.value += toChar(e);
        }
      }
      [te](e) {
        if (isWhitespace(e)) {
          this._leaveAttrValue(Y);
        } else if (e === s.SOLIDUS) {
          this._leaveAttrValue(re);
        } else if (e === s.GREATER_THAN_SIGN) {
          this._leaveAttrValue(v);
          this._emitCurrentToken();
        } else if (e === s.EOF) {
          this._err(o.eofInTag);
          this._emitEOFToken();
        } else {
          this._err(o.missingWhitespaceBetweenAttributes);
          this._reconsumeInState(Y);
        }
      }
      [re](e) {
        if (e === s.GREATER_THAN_SIGN) {
          this.currentToken.selfClosing = true;
          this.state = v;
          this._emitCurrentToken();
        } else if (e === s.EOF) {
          this._err(o.eofInTag);
          this._emitEOFToken();
        } else {
          this._err(o.unexpectedSolidusInTag);
          this._reconsumeInState(Y);
        }
      }
      [ae](e) {
        if (e === s.GREATER_THAN_SIGN) {
          this.state = v;
          this._emitCurrentToken();
        } else if (e === s.EOF) {
          this._emitCurrentToken();
          this._emitEOFToken();
        } else if (e === s.NULL) {
          this._err(o.unexpectedNullCharacter);
          this.currentToken.data += n.REPLACEMENT_CHARACTER;
        } else {
          this.currentToken.data += toChar(e);
        }
      }
      [ne](e) {
        if (this._consumeSequenceIfMatch(p.DASH_DASH_STRING, e, true)) {
          this._createCommentToken();
          this.state = ie;
        } else if (this._consumeSequenceIfMatch(p.DOCTYPE_STRING, e, false)) {
          this.state = he;
        } else if (this._consumeSequenceIfMatch(p.CDATA_START_STRING, e, true)) {
          if (this.allowCDATA) {
            this.state = Ie;
          } else {
            this._err(o.cdataInHtmlContent);
            this._createCommentToken();
            this.currentToken.data = '[CDATA[';
            this.state = ae;
          }
        } else if (!this._ensureHibernation()) {
          this._err(o.incorrectlyOpenedComment);
          this._createCommentToken();
          this._reconsumeInState(ae);
        }
      }
      [ie](e) {
        if (e === s.HYPHEN_MINUS) {
          this.state = oe;
        } else if (e === s.GREATER_THAN_SIGN) {
          this._err(o.abruptClosingOfEmptyComment);
          this.state = v;
          this._emitCurrentToken();
        } else {
          this._reconsumeInState(se);
        }
      }
      [oe](e) {
        if (e === s.HYPHEN_MINUS) {
          this.state = ce;
        } else if (e === s.GREATER_THAN_SIGN) {
          this._err(o.abruptClosingOfEmptyComment);
          this.state = v;
          this._emitCurrentToken();
        } else if (e === s.EOF) {
          this._err(o.eofInComment);
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this.currentToken.data += '-';
          this._reconsumeInState(se);
        }
      }
      [se](e) {
        if (e === s.HYPHEN_MINUS) {
          this.state = ue;
        } else if (e === s.LESS_THAN_SIGN) {
          this.currentToken.data += '<';
          this.state = pe;
        } else if (e === s.NULL) {
          this._err(o.unexpectedNullCharacter);
          this.currentToken.data += n.REPLACEMENT_CHARACTER;
        } else if (e === s.EOF) {
          this._err(o.eofInComment);
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this.currentToken.data += toChar(e);
        }
      }
      [pe](e) {
        if (e === s.EXCLAMATION_MARK) {
          this.currentToken.data += '!';
          this.state = de;
        } else if (e === s.LESS_THAN_SIGN) {
          this.currentToken.data += '!';
        } else {
          this._reconsumeInState(se);
        }
      }
      [de](e) {
        if (e === s.HYPHEN_MINUS) {
          this.state = le;
        } else {
          this._reconsumeInState(se);
        }
      }
      [le](e) {
        if (e === s.HYPHEN_MINUS) {
          this.state = me;
        } else {
          this._reconsumeInState(ue);
        }
      }
      [me](e) {
        if (e !== s.GREATER_THAN_SIGN && e !== s.EOF) {
          this._err(o.nestedComment);
        }
        this._reconsumeInState(ce);
      }
      [ue](e) {
        if (e === s.HYPHEN_MINUS) {
          this.state = ce;
        } else if (e === s.EOF) {
          this._err(o.eofInComment);
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this.currentToken.data += '-';
          this._reconsumeInState(se);
        }
      }
      [ce](e) {
        if (e === s.GREATER_THAN_SIGN) {
          this.state = v;
          this._emitCurrentToken();
        } else if (e === s.EXCLAMATION_MARK) {
          this.state = fe;
        } else if (e === s.HYPHEN_MINUS) {
          this.currentToken.data += '-';
        } else if (e === s.EOF) {
          this._err(o.eofInComment);
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this.currentToken.data += '--';
          this._reconsumeInState(se);
        }
      }
      [fe](e) {
        if (e === s.HYPHEN_MINUS) {
          this.currentToken.data += '--!';
          this.state = ue;
        } else if (e === s.GREATER_THAN_SIGN) {
          this._err(o.incorrectlyClosedComment);
          this.state = v;
          this._emitCurrentToken();
        } else if (e === s.EOF) {
          this._err(o.eofInComment);
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this.currentToken.data += '--!';
          this._reconsumeInState(se);
        }
      }
      [he](e) {
        if (isWhitespace(e)) {
          this.state = ge;
        } else if (e === s.GREATER_THAN_SIGN) {
          this._reconsumeInState(ge);
        } else if (e === s.EOF) {
          this._err(o.eofInDoctype);
          this._createDoctypeToken(null);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this._err(o.missingWhitespaceBeforeDoctypeName);
          this._reconsumeInState(ge);
        }
      }
      [ge](e) {
        if (isWhitespace(e)) {
          return;
        }
        if (isAsciiUpper(e)) {
          this._createDoctypeToken(toAsciiLowerChar(e));
          this.state = ve;
        } else if (e === s.NULL) {
          this._err(o.unexpectedNullCharacter);
          this._createDoctypeToken(n.REPLACEMENT_CHARACTER);
          this.state = ve;
        } else if (e === s.GREATER_THAN_SIGN) {
          this._err(o.missingDoctypeName);
          this._createDoctypeToken(null);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this.state = v;
        } else if (e === s.EOF) {
          this._err(o.eofInDoctype);
          this._createDoctypeToken(null);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this._createDoctypeToken(toChar(e));
          this.state = ve;
        }
      }
      [ve](e) {
        if (isWhitespace(e)) {
          this.state = Te;
        } else if (e === s.GREATER_THAN_SIGN) {
          this.state = v;
          this._emitCurrentToken();
        } else if (isAsciiUpper(e)) {
          this.currentToken.name += toAsciiLowerChar(e);
        } else if (e === s.NULL) {
          this._err(o.unexpectedNullCharacter);
          this.currentToken.name += n.REPLACEMENT_CHARACTER;
        } else if (e === s.EOF) {
          this._err(o.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this.currentToken.name += toChar(e);
        }
      }
      [Te](e) {
        if (isWhitespace(e)) {
          return;
        }
        if (e === s.GREATER_THAN_SIGN) {
          this.state = v;
          this._emitCurrentToken();
        } else if (e === s.EOF) {
          this._err(o.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else if (this._consumeSequenceIfMatch(p.PUBLIC_STRING, e, false)) {
          this.state = Ee;
        } else if (this._consumeSequenceIfMatch(p.SYSTEM_STRING, e, false)) {
          this.state = Se;
        } else if (!this._ensureHibernation()) {
          this._err(o.invalidCharacterSequenceAfterDoctypeName);
          this.currentToken.forceQuirks = true;
          this._reconsumeInState(Oe);
        }
      }
      [Ee](e) {
        if (isWhitespace(e)) {
          this.state = _e;
        } else if (e === s.QUOTATION_MARK) {
          this._err(o.missingWhitespaceAfterDoctypePublicKeyword);
          this.currentToken.publicId = '';
          this.state = we;
        } else if (e === s.APOSTROPHE) {
          this._err(o.missingWhitespaceAfterDoctypePublicKeyword);
          this.currentToken.publicId = '';
          this.state = Ae;
        } else if (e === s.GREATER_THAN_SIGN) {
          this._err(o.missingDoctypePublicIdentifier);
          this.currentToken.forceQuirks = true;
          this.state = v;
          this._emitCurrentToken();
        } else if (e === s.EOF) {
          this._err(o.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this._err(o.missingQuoteBeforeDoctypePublicIdentifier);
          this.currentToken.forceQuirks = true;
          this._reconsumeInState(Oe);
        }
      }
      [_e](e) {
        if (isWhitespace(e)) {
          return;
        }
        if (e === s.QUOTATION_MARK) {
          this.currentToken.publicId = '';
          this.state = we;
        } else if (e === s.APOSTROPHE) {
          this.currentToken.publicId = '';
          this.state = Ae;
        } else if (e === s.GREATER_THAN_SIGN) {
          this._err(o.missingDoctypePublicIdentifier);
          this.currentToken.forceQuirks = true;
          this.state = v;
          this._emitCurrentToken();
        } else if (e === s.EOF) {
          this._err(o.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this._err(o.missingQuoteBeforeDoctypePublicIdentifier);
          this.currentToken.forceQuirks = true;
          this._reconsumeInState(Oe);
        }
      }
      [we](e) {
        if (e === s.QUOTATION_MARK) {
          this.state = be;
        } else if (e === s.NULL) {
          this._err(o.unexpectedNullCharacter);
          this.currentToken.publicId += n.REPLACEMENT_CHARACTER;
        } else if (e === s.GREATER_THAN_SIGN) {
          this._err(o.abruptDoctypePublicIdentifier);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this.state = v;
        } else if (e === s.EOF) {
          this._err(o.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this.currentToken.publicId += toChar(e);
        }
      }
      [Ae](e) {
        if (e === s.APOSTROPHE) {
          this.state = be;
        } else if (e === s.NULL) {
          this._err(o.unexpectedNullCharacter);
          this.currentToken.publicId += n.REPLACEMENT_CHARACTER;
        } else if (e === s.GREATER_THAN_SIGN) {
          this._err(o.abruptDoctypePublicIdentifier);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this.state = v;
        } else if (e === s.EOF) {
          this._err(o.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this.currentToken.publicId += toChar(e);
        }
      }
      [be](e) {
        if (isWhitespace(e)) {
          this.state = ye;
        } else if (e === s.GREATER_THAN_SIGN) {
          this.state = v;
          this._emitCurrentToken();
        } else if (e === s.QUOTATION_MARK) {
          this._err(o.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers);
          this.currentToken.systemId = '';
          this.state = ke;
        } else if (e === s.APOSTROPHE) {
          this._err(o.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers);
          this.currentToken.systemId = '';
          this.state = Ne;
        } else if (e === s.EOF) {
          this._err(o.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this._err(o.missingQuoteBeforeDoctypeSystemIdentifier);
          this.currentToken.forceQuirks = true;
          this._reconsumeInState(Oe);
        }
      }
      [ye](e) {
        if (isWhitespace(e)) {
          return;
        }
        if (e === s.GREATER_THAN_SIGN) {
          this._emitCurrentToken();
          this.state = v;
        } else if (e === s.QUOTATION_MARK) {
          this.currentToken.systemId = '';
          this.state = ke;
        } else if (e === s.APOSTROPHE) {
          this.currentToken.systemId = '';
          this.state = Ne;
        } else if (e === s.EOF) {
          this._err(o.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this._err(o.missingQuoteBeforeDoctypeSystemIdentifier);
          this.currentToken.forceQuirks = true;
          this._reconsumeInState(Oe);
        }
      }
      [Se](e) {
        if (isWhitespace(e)) {
          this.state = Ce;
        } else if (e === s.QUOTATION_MARK) {
          this._err(o.missingWhitespaceAfterDoctypeSystemKeyword);
          this.currentToken.systemId = '';
          this.state = ke;
        } else if (e === s.APOSTROPHE) {
          this._err(o.missingWhitespaceAfterDoctypeSystemKeyword);
          this.currentToken.systemId = '';
          this.state = Ne;
        } else if (e === s.GREATER_THAN_SIGN) {
          this._err(o.missingDoctypeSystemIdentifier);
          this.currentToken.forceQuirks = true;
          this.state = v;
          this._emitCurrentToken();
        } else if (e === s.EOF) {
          this._err(o.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this._err(o.missingQuoteBeforeDoctypeSystemIdentifier);
          this.currentToken.forceQuirks = true;
          this._reconsumeInState(Oe);
        }
      }
      [Ce](e) {
        if (isWhitespace(e)) {
          return;
        }
        if (e === s.QUOTATION_MARK) {
          this.currentToken.systemId = '';
          this.state = ke;
        } else if (e === s.APOSTROPHE) {
          this.currentToken.systemId = '';
          this.state = Ne;
        } else if (e === s.GREATER_THAN_SIGN) {
          this._err(o.missingDoctypeSystemIdentifier);
          this.currentToken.forceQuirks = true;
          this.state = v;
          this._emitCurrentToken();
        } else if (e === s.EOF) {
          this._err(o.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this._err(o.missingQuoteBeforeDoctypeSystemIdentifier);
          this.currentToken.forceQuirks = true;
          this._reconsumeInState(Oe);
        }
      }
      [ke](e) {
        if (e === s.QUOTATION_MARK) {
          this.state = De;
        } else if (e === s.NULL) {
          this._err(o.unexpectedNullCharacter);
          this.currentToken.systemId += n.REPLACEMENT_CHARACTER;
        } else if (e === s.GREATER_THAN_SIGN) {
          this._err(o.abruptDoctypeSystemIdentifier);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this.state = v;
        } else if (e === s.EOF) {
          this._err(o.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this.currentToken.systemId += toChar(e);
        }
      }
      [Ne](e) {
        if (e === s.APOSTROPHE) {
          this.state = De;
        } else if (e === s.NULL) {
          this._err(o.unexpectedNullCharacter);
          this.currentToken.systemId += n.REPLACEMENT_CHARACTER;
        } else if (e === s.GREATER_THAN_SIGN) {
          this._err(o.abruptDoctypeSystemIdentifier);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this.state = v;
        } else if (e === s.EOF) {
          this._err(o.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this.currentToken.systemId += toChar(e);
        }
      }
      [De](e) {
        if (isWhitespace(e)) {
          return;
        }
        if (e === s.GREATER_THAN_SIGN) {
          this._emitCurrentToken();
          this.state = v;
        } else if (e === s.EOF) {
          this._err(o.eofInDoctype);
          this.currentToken.forceQuirks = true;
          this._emitCurrentToken();
          this._emitEOFToken();
        } else {
          this._err(o.unexpectedCharacterAfterDoctypeSystemIdentifier);
          this._reconsumeInState(Oe);
        }
      }
      [Oe](e) {
        if (e === s.GREATER_THAN_SIGN) {
          this._emitCurrentToken();
          this.state = v;
        } else if (e === s.NULL) {
          this._err(o.unexpectedNullCharacter);
        } else if (e === s.EOF) {
          this._emitCurrentToken();
          this._emitEOFToken();
        }
      }
      [Ie](e) {
        if (e === s.RIGHT_SQUARE_BRACKET) {
          this.state = Re;
        } else if (e === s.EOF) {
          this._err(o.eofInCdata);
          this._emitEOFToken();
        } else {
          this._emitCodePoint(e);
        }
      }
      [Re](e) {
        if (e === s.RIGHT_SQUARE_BRACKET) {
          this.state = Pe;
        } else {
          this._emitChars(']');
          this._reconsumeInState(Ie);
        }
      }
      [Pe](e) {
        if (e === s.GREATER_THAN_SIGN) {
          this.state = v;
        } else if (e === s.RIGHT_SQUARE_BRACKET) {
          this._emitChars(']');
        } else {
          this._emitChars(']]');
          this._reconsumeInState(Ie);
        }
      }
      [Le](e) {
        this.tempBuff = [s.AMPERSAND];
        if (e === s.NUMBER_SIGN) {
          this.tempBuff.push(e);
          this.state = Me;
        } else if (isAsciiAlphaNumeric(e)) {
          this._reconsumeInState(xe);
        } else {
          this._flushCodePointsConsumedAsCharacterReference();
          this._reconsumeInState(this.returnState);
        }
      }
      [xe](e) {
        const t = this._matchNamedCharacterReference(e);
        if (this._ensureHibernation()) {
          this.tempBuff = [s.AMPERSAND];
        } else if (t) {
          const e = this.tempBuff[this.tempBuff.length - 1] === s.SEMICOLON;
          if (!this._isCharacterReferenceAttributeQuirk(e)) {
            if (!e) {
              this._errOnNextCodePoint(o.missingSemicolonAfterCharacterReference);
            }
            this.tempBuff = t;
          }
          this._flushCodePointsConsumedAsCharacterReference();
          this.state = this.returnState;
        } else {
          this._flushCodePointsConsumedAsCharacterReference();
          this.state = Fe;
        }
      }
      [Fe](e) {
        if (isAsciiAlphaNumeric(e)) {
          if (this._isCharacterReferenceInAttribute()) {
            this.currentAttr.value += toChar(e);
          } else {
            this._emitCodePoint(e);
          }
        } else {
          if (e === s.SEMICOLON) {
            this._err(o.unknownNamedCharacterReference);
          }
          this._reconsumeInState(this.returnState);
        }
      }
      [Me](e) {
        this.charRefCode = 0;
        if (e === s.LATIN_SMALL_X || e === s.LATIN_CAPITAL_X) {
          this.tempBuff.push(e);
          this.state = Be;
        } else {
          this._reconsumeInState(Ge);
        }
      }
      [Be](e) {
        if (isAsciiHexDigit(e)) {
          this._reconsumeInState(Ue);
        } else {
          this._err(o.absenceOfDigitsInNumericCharacterReference);
          this._flushCodePointsConsumedAsCharacterReference();
          this._reconsumeInState(this.returnState);
        }
      }
      [Ge](e) {
        if (isAsciiDigit(e)) {
          this._reconsumeInState(He);
        } else {
          this._err(o.absenceOfDigitsInNumericCharacterReference);
          this._flushCodePointsConsumedAsCharacterReference();
          this._reconsumeInState(this.returnState);
        }
      }
      [Ue](e) {
        if (isAsciiUpperHexDigit(e)) {
          this.charRefCode = this.charRefCode * 16 + e - 55;
        } else if (isAsciiLowerHexDigit(e)) {
          this.charRefCode = this.charRefCode * 16 + e - 87;
        } else if (isAsciiDigit(e)) {
          this.charRefCode = this.charRefCode * 16 + e - 48;
        } else if (e === s.SEMICOLON) {
          this.state = Ve;
        } else {
          this._err(o.missingSemicolonAfterCharacterReference);
          this._reconsumeInState(Ve);
        }
      }
      [He](e) {
        if (isAsciiDigit(e)) {
          this.charRefCode = this.charRefCode * 10 + e - 48;
        } else if (e === s.SEMICOLON) {
          this.state = Ve;
        } else {
          this._err(o.missingSemicolonAfterCharacterReference);
          this._reconsumeInState(Ve);
        }
      }
      [Ve]() {
        if (this.charRefCode === s.NULL) {
          this._err(o.nullCharacterReference);
          this.charRefCode = s.REPLACEMENT_CHARACTER;
        } else if (this.charRefCode > 1114111) {
          this._err(o.characterReferenceOutsideUnicodeRange);
          this.charRefCode = s.REPLACEMENT_CHARACTER;
        } else if (n.isSurrogate(this.charRefCode)) {
          this._err(o.surrogateCharacterReference);
          this.charRefCode = s.REPLACEMENT_CHARACTER;
        } else if (n.isUndefinedCodePoint(this.charRefCode)) {
          this._err(o.noncharacterCharacterReference);
        } else if (
          n.isControlCodePoint(this.charRefCode) ||
          this.charRefCode === s.CARRIAGE_RETURN
        ) {
          this._err(o.controlCharacterReference);
          const e = d[this.charRefCode];
          if (e) {
            this.charRefCode = e;
          }
        }
        this.tempBuff = [this.charRefCode];
        this._flushCodePointsConsumedAsCharacterReference();
        this._reconsumeInState(this.returnState);
      }
    }
    Tokenizer.CHARACTER_TOKEN = 'CHARACTER_TOKEN';
    Tokenizer.NULL_CHARACTER_TOKEN = 'NULL_CHARACTER_TOKEN';
    Tokenizer.WHITESPACE_CHARACTER_TOKEN = 'WHITESPACE_CHARACTER_TOKEN';
    Tokenizer.START_TAG_TOKEN = 'START_TAG_TOKEN';
    Tokenizer.END_TAG_TOKEN = 'END_TAG_TOKEN';
    Tokenizer.COMMENT_TOKEN = 'COMMENT_TOKEN';
    Tokenizer.DOCTYPE_TOKEN = 'DOCTYPE_TOKEN';
    Tokenizer.EOF_TOKEN = 'EOF_TOKEN';
    Tokenizer.HIBERNATION_TOKEN = 'HIBERNATION_TOKEN';
    Tokenizer.MODE = { DATA: v, RCDATA: T, RAWTEXT: E, SCRIPT_DATA: _, PLAINTEXT: w };
    Tokenizer.getTokenAttr = function (e, t) {
      for (let r = e.attrs.length - 1; r >= 0; r--) {
        if (e.attrs[r].name === t) {
          return e.attrs[r].value;
        }
      }
      return null;
    };
    e.exports = Tokenizer;
  },
  9599: (e) => {
    e.exports = new Uint16Array([
      4, 52, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86,
      87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112,
      113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 106, 303, 412, 810, 1432, 1701, 1796, 1987,
      2114, 2360, 2420, 2484, 3170, 3251, 4140, 4393, 4575, 4610, 5106, 5512, 5728, 6117, 6274,
      6315, 6345, 6427, 6516, 7002, 7910, 8733, 9323, 9870, 10170, 10631, 10893, 11318, 11386,
      11467, 12773, 13092, 14474, 14922, 15448, 15542, 16419, 17666, 18166, 18611, 19004, 19095,
      19298, 19397, 4, 16, 69, 77, 97, 98, 99, 102, 103, 108, 109, 110, 111, 112, 114, 115, 116,
      117, 140, 150, 158, 169, 176, 194, 199, 210, 216, 222, 226, 242, 256, 266, 283, 294, 108, 105,
      103, 5, 198, 1, 59, 148, 1, 198, 80, 5, 38, 1, 59, 156, 1, 38, 99, 117, 116, 101, 5, 193, 1,
      59, 167, 1, 193, 114, 101, 118, 101, 59, 1, 258, 4, 2, 105, 121, 182, 191, 114, 99, 5, 194, 1,
      59, 189, 1, 194, 59, 1, 1040, 114, 59, 3, 55349, 56580, 114, 97, 118, 101, 5, 192, 1, 59, 208,
      1, 192, 112, 104, 97, 59, 1, 913, 97, 99, 114, 59, 1, 256, 100, 59, 1, 10835, 4, 2, 103, 112,
      232, 237, 111, 110, 59, 1, 260, 102, 59, 3, 55349, 56632, 112, 108, 121, 70, 117, 110, 99,
      116, 105, 111, 110, 59, 1, 8289, 105, 110, 103, 5, 197, 1, 59, 264, 1, 197, 4, 2, 99, 115,
      272, 277, 114, 59, 3, 55349, 56476, 105, 103, 110, 59, 1, 8788, 105, 108, 100, 101, 5, 195, 1,
      59, 292, 1, 195, 109, 108, 5, 196, 1, 59, 301, 1, 196, 4, 8, 97, 99, 101, 102, 111, 114, 115,
      117, 321, 350, 354, 383, 388, 394, 400, 405, 4, 2, 99, 114, 327, 336, 107, 115, 108, 97, 115,
      104, 59, 1, 8726, 4, 2, 118, 119, 342, 345, 59, 1, 10983, 101, 100, 59, 1, 8966, 121, 59, 1,
      1041, 4, 3, 99, 114, 116, 362, 369, 379, 97, 117, 115, 101, 59, 1, 8757, 110, 111, 117, 108,
      108, 105, 115, 59, 1, 8492, 97, 59, 1, 914, 114, 59, 3, 55349, 56581, 112, 102, 59, 3, 55349,
      56633, 101, 118, 101, 59, 1, 728, 99, 114, 59, 1, 8492, 109, 112, 101, 113, 59, 1, 8782, 4,
      14, 72, 79, 97, 99, 100, 101, 102, 104, 105, 108, 111, 114, 115, 117, 442, 447, 456, 504, 542,
      547, 569, 573, 577, 616, 678, 784, 790, 796, 99, 121, 59, 1, 1063, 80, 89, 5, 169, 1, 59, 454,
      1, 169, 4, 3, 99, 112, 121, 464, 470, 497, 117, 116, 101, 59, 1, 262, 4, 2, 59, 105, 476, 478,
      1, 8914, 116, 97, 108, 68, 105, 102, 102, 101, 114, 101, 110, 116, 105, 97, 108, 68, 59, 1,
      8517, 108, 101, 121, 115, 59, 1, 8493, 4, 4, 97, 101, 105, 111, 514, 520, 530, 535, 114, 111,
      110, 59, 1, 268, 100, 105, 108, 5, 199, 1, 59, 528, 1, 199, 114, 99, 59, 1, 264, 110, 105,
      110, 116, 59, 1, 8752, 111, 116, 59, 1, 266, 4, 2, 100, 110, 553, 560, 105, 108, 108, 97, 59,
      1, 184, 116, 101, 114, 68, 111, 116, 59, 1, 183, 114, 59, 1, 8493, 105, 59, 1, 935, 114, 99,
      108, 101, 4, 4, 68, 77, 80, 84, 591, 596, 603, 609, 111, 116, 59, 1, 8857, 105, 110, 117, 115,
      59, 1, 8854, 108, 117, 115, 59, 1, 8853, 105, 109, 101, 115, 59, 1, 8855, 111, 4, 2, 99, 115,
      623, 646, 107, 119, 105, 115, 101, 67, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103,
      114, 97, 108, 59, 1, 8754, 101, 67, 117, 114, 108, 121, 4, 2, 68, 81, 658, 671, 111, 117, 98,
      108, 101, 81, 117, 111, 116, 101, 59, 1, 8221, 117, 111, 116, 101, 59, 1, 8217, 4, 4, 108,
      110, 112, 117, 688, 701, 736, 753, 111, 110, 4, 2, 59, 101, 696, 698, 1, 8759, 59, 1, 10868,
      4, 3, 103, 105, 116, 709, 717, 722, 114, 117, 101, 110, 116, 59, 1, 8801, 110, 116, 59, 1,
      8751, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 1, 8750, 4, 2, 102, 114, 742,
      745, 59, 1, 8450, 111, 100, 117, 99, 116, 59, 1, 8720, 110, 116, 101, 114, 67, 108, 111, 99,
      107, 119, 105, 115, 101, 67, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97,
      108, 59, 1, 8755, 111, 115, 115, 59, 1, 10799, 99, 114, 59, 3, 55349, 56478, 112, 4, 2, 59,
      67, 803, 805, 1, 8915, 97, 112, 59, 1, 8781, 4, 11, 68, 74, 83, 90, 97, 99, 101, 102, 105,
      111, 115, 834, 850, 855, 860, 865, 888, 903, 916, 921, 1011, 1415, 4, 2, 59, 111, 840, 842, 1,
      8517, 116, 114, 97, 104, 100, 59, 1, 10513, 99, 121, 59, 1, 1026, 99, 121, 59, 1, 1029, 99,
      121, 59, 1, 1039, 4, 3, 103, 114, 115, 873, 879, 883, 103, 101, 114, 59, 1, 8225, 114, 59, 1,
      8609, 104, 118, 59, 1, 10980, 4, 2, 97, 121, 894, 900, 114, 111, 110, 59, 1, 270, 59, 1, 1044,
      108, 4, 2, 59, 116, 910, 912, 1, 8711, 97, 59, 1, 916, 114, 59, 3, 55349, 56583, 4, 2, 97,
      102, 927, 998, 4, 2, 99, 109, 933, 992, 114, 105, 116, 105, 99, 97, 108, 4, 4, 65, 68, 71, 84,
      950, 957, 978, 985, 99, 117, 116, 101, 59, 1, 180, 111, 4, 2, 116, 117, 964, 967, 59, 1, 729,
      98, 108, 101, 65, 99, 117, 116, 101, 59, 1, 733, 114, 97, 118, 101, 59, 1, 96, 105, 108, 100,
      101, 59, 1, 732, 111, 110, 100, 59, 1, 8900, 102, 101, 114, 101, 110, 116, 105, 97, 108, 68,
      59, 1, 8518, 4, 4, 112, 116, 117, 119, 1021, 1026, 1048, 1249, 102, 59, 3, 55349, 56635, 4, 3,
      59, 68, 69, 1034, 1036, 1041, 1, 168, 111, 116, 59, 1, 8412, 113, 117, 97, 108, 59, 1, 8784,
      98, 108, 101, 4, 6, 67, 68, 76, 82, 85, 86, 1065, 1082, 1101, 1189, 1211, 1236, 111, 110, 116,
      111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 1, 8751, 111, 4, 2, 116, 119, 1089,
      1092, 59, 1, 168, 110, 65, 114, 114, 111, 119, 59, 1, 8659, 4, 2, 101, 111, 1107, 1141, 102,
      116, 4, 3, 65, 82, 84, 1117, 1124, 1136, 114, 114, 111, 119, 59, 1, 8656, 105, 103, 104, 116,
      65, 114, 114, 111, 119, 59, 1, 8660, 101, 101, 59, 1, 10980, 110, 103, 4, 2, 76, 82, 1149,
      1177, 101, 102, 116, 4, 2, 65, 82, 1158, 1165, 114, 114, 111, 119, 59, 1, 10232, 105, 103,
      104, 116, 65, 114, 114, 111, 119, 59, 1, 10234, 105, 103, 104, 116, 65, 114, 114, 111, 119,
      59, 1, 10233, 105, 103, 104, 116, 4, 2, 65, 84, 1199, 1206, 114, 114, 111, 119, 59, 1, 8658,
      101, 101, 59, 1, 8872, 112, 4, 2, 65, 68, 1218, 1225, 114, 114, 111, 119, 59, 1, 8657, 111,
      119, 110, 65, 114, 114, 111, 119, 59, 1, 8661, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114,
      59, 1, 8741, 110, 4, 6, 65, 66, 76, 82, 84, 97, 1264, 1292, 1299, 1352, 1391, 1408, 114, 114,
      111, 119, 4, 3, 59, 66, 85, 1276, 1278, 1283, 1, 8595, 97, 114, 59, 1, 10515, 112, 65, 114,
      114, 111, 119, 59, 1, 8693, 114, 101, 118, 101, 59, 1, 785, 101, 102, 116, 4, 3, 82, 84, 86,
      1310, 1323, 1334, 105, 103, 104, 116, 86, 101, 99, 116, 111, 114, 59, 1, 10576, 101, 101, 86,
      101, 99, 116, 111, 114, 59, 1, 10590, 101, 99, 116, 111, 114, 4, 2, 59, 66, 1345, 1347, 1,
      8637, 97, 114, 59, 1, 10582, 105, 103, 104, 116, 4, 2, 84, 86, 1362, 1373, 101, 101, 86, 101,
      99, 116, 111, 114, 59, 1, 10591, 101, 99, 116, 111, 114, 4, 2, 59, 66, 1384, 1386, 1, 8641,
      97, 114, 59, 1, 10583, 101, 101, 4, 2, 59, 65, 1399, 1401, 1, 8868, 114, 114, 111, 119, 59, 1,
      8615, 114, 114, 111, 119, 59, 1, 8659, 4, 2, 99, 116, 1421, 1426, 114, 59, 3, 55349, 56479,
      114, 111, 107, 59, 1, 272, 4, 16, 78, 84, 97, 99, 100, 102, 103, 108, 109, 111, 112, 113, 115,
      116, 117, 120, 1466, 1470, 1478, 1489, 1515, 1520, 1525, 1536, 1544, 1593, 1609, 1617, 1650,
      1664, 1668, 1677, 71, 59, 1, 330, 72, 5, 208, 1, 59, 1476, 1, 208, 99, 117, 116, 101, 5, 201,
      1, 59, 1487, 1, 201, 4, 3, 97, 105, 121, 1497, 1503, 1512, 114, 111, 110, 59, 1, 282, 114, 99,
      5, 202, 1, 59, 1510, 1, 202, 59, 1, 1069, 111, 116, 59, 1, 278, 114, 59, 3, 55349, 56584, 114,
      97, 118, 101, 5, 200, 1, 59, 1534, 1, 200, 101, 109, 101, 110, 116, 59, 1, 8712, 4, 2, 97,
      112, 1550, 1555, 99, 114, 59, 1, 274, 116, 121, 4, 2, 83, 86, 1563, 1576, 109, 97, 108, 108,
      83, 113, 117, 97, 114, 101, 59, 1, 9723, 101, 114, 121, 83, 109, 97, 108, 108, 83, 113, 117,
      97, 114, 101, 59, 1, 9643, 4, 2, 103, 112, 1599, 1604, 111, 110, 59, 1, 280, 102, 59, 3,
      55349, 56636, 115, 105, 108, 111, 110, 59, 1, 917, 117, 4, 2, 97, 105, 1624, 1640, 108, 4, 2,
      59, 84, 1631, 1633, 1, 10869, 105, 108, 100, 101, 59, 1, 8770, 108, 105, 98, 114, 105, 117,
      109, 59, 1, 8652, 4, 2, 99, 105, 1656, 1660, 114, 59, 1, 8496, 109, 59, 1, 10867, 97, 59, 1,
      919, 109, 108, 5, 203, 1, 59, 1675, 1, 203, 4, 2, 105, 112, 1683, 1689, 115, 116, 115, 59, 1,
      8707, 111, 110, 101, 110, 116, 105, 97, 108, 69, 59, 1, 8519, 4, 5, 99, 102, 105, 111, 115,
      1713, 1717, 1722, 1762, 1791, 121, 59, 1, 1060, 114, 59, 3, 55349, 56585, 108, 108, 101, 100,
      4, 2, 83, 86, 1732, 1745, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 1, 9724, 101,
      114, 121, 83, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 1, 9642, 4, 3, 112, 114, 117,
      1770, 1775, 1781, 102, 59, 3, 55349, 56637, 65, 108, 108, 59, 1, 8704, 114, 105, 101, 114,
      116, 114, 102, 59, 1, 8497, 99, 114, 59, 1, 8497, 4, 12, 74, 84, 97, 98, 99, 100, 102, 103,
      111, 114, 115, 116, 1822, 1827, 1834, 1848, 1855, 1877, 1882, 1887, 1890, 1896, 1978, 1984,
      99, 121, 59, 1, 1027, 5, 62, 1, 59, 1832, 1, 62, 109, 109, 97, 4, 2, 59, 100, 1843, 1845, 1,
      915, 59, 1, 988, 114, 101, 118, 101, 59, 1, 286, 4, 3, 101, 105, 121, 1863, 1869, 1874, 100,
      105, 108, 59, 1, 290, 114, 99, 59, 1, 284, 59, 1, 1043, 111, 116, 59, 1, 288, 114, 59, 3,
      55349, 56586, 59, 1, 8921, 112, 102, 59, 3, 55349, 56638, 101, 97, 116, 101, 114, 4, 6, 69,
      70, 71, 76, 83, 84, 1915, 1933, 1944, 1953, 1959, 1971, 113, 117, 97, 108, 4, 2, 59, 76, 1925,
      1927, 1, 8805, 101, 115, 115, 59, 1, 8923, 117, 108, 108, 69, 113, 117, 97, 108, 59, 1, 8807,
      114, 101, 97, 116, 101, 114, 59, 1, 10914, 101, 115, 115, 59, 1, 8823, 108, 97, 110, 116, 69,
      113, 117, 97, 108, 59, 1, 10878, 105, 108, 100, 101, 59, 1, 8819, 99, 114, 59, 3, 55349,
      56482, 59, 1, 8811, 4, 8, 65, 97, 99, 102, 105, 111, 115, 117, 2005, 2012, 2026, 2032, 2036,
      2049, 2073, 2089, 82, 68, 99, 121, 59, 1, 1066, 4, 2, 99, 116, 2018, 2023, 101, 107, 59, 1,
      711, 59, 1, 94, 105, 114, 99, 59, 1, 292, 114, 59, 1, 8460, 108, 98, 101, 114, 116, 83, 112,
      97, 99, 101, 59, 1, 8459, 4, 2, 112, 114, 2055, 2059, 102, 59, 1, 8461, 105, 122, 111, 110,
      116, 97, 108, 76, 105, 110, 101, 59, 1, 9472, 4, 2, 99, 116, 2079, 2083, 114, 59, 1, 8459,
      114, 111, 107, 59, 1, 294, 109, 112, 4, 2, 68, 69, 2097, 2107, 111, 119, 110, 72, 117, 109,
      112, 59, 1, 8782, 113, 117, 97, 108, 59, 1, 8783, 4, 14, 69, 74, 79, 97, 99, 100, 102, 103,
      109, 110, 111, 115, 116, 117, 2144, 2149, 2155, 2160, 2171, 2189, 2194, 2198, 2209, 2245,
      2307, 2329, 2334, 2341, 99, 121, 59, 1, 1045, 108, 105, 103, 59, 1, 306, 99, 121, 59, 1, 1025,
      99, 117, 116, 101, 5, 205, 1, 59, 2169, 1, 205, 4, 2, 105, 121, 2177, 2186, 114, 99, 5, 206,
      1, 59, 2184, 1, 206, 59, 1, 1048, 111, 116, 59, 1, 304, 114, 59, 1, 8465, 114, 97, 118, 101,
      5, 204, 1, 59, 2207, 1, 204, 4, 3, 59, 97, 112, 2217, 2219, 2238, 1, 8465, 4, 2, 99, 103,
      2225, 2229, 114, 59, 1, 298, 105, 110, 97, 114, 121, 73, 59, 1, 8520, 108, 105, 101, 115, 59,
      1, 8658, 4, 2, 116, 118, 2251, 2281, 4, 2, 59, 101, 2257, 2259, 1, 8748, 4, 2, 103, 114, 2265,
      2271, 114, 97, 108, 59, 1, 8747, 115, 101, 99, 116, 105, 111, 110, 59, 1, 8898, 105, 115, 105,
      98, 108, 101, 4, 2, 67, 84, 2293, 2300, 111, 109, 109, 97, 59, 1, 8291, 105, 109, 101, 115,
      59, 1, 8290, 4, 3, 103, 112, 116, 2315, 2320, 2325, 111, 110, 59, 1, 302, 102, 59, 3, 55349,
      56640, 97, 59, 1, 921, 99, 114, 59, 1, 8464, 105, 108, 100, 101, 59, 1, 296, 4, 2, 107, 109,
      2347, 2352, 99, 121, 59, 1, 1030, 108, 5, 207, 1, 59, 2358, 1, 207, 4, 5, 99, 102, 111, 115,
      117, 2372, 2386, 2391, 2397, 2414, 4, 2, 105, 121, 2378, 2383, 114, 99, 59, 1, 308, 59, 1,
      1049, 114, 59, 3, 55349, 56589, 112, 102, 59, 3, 55349, 56641, 4, 2, 99, 101, 2403, 2408, 114,
      59, 3, 55349, 56485, 114, 99, 121, 59, 1, 1032, 107, 99, 121, 59, 1, 1028, 4, 7, 72, 74, 97,
      99, 102, 111, 115, 2436, 2441, 2446, 2452, 2467, 2472, 2478, 99, 121, 59, 1, 1061, 99, 121,
      59, 1, 1036, 112, 112, 97, 59, 1, 922, 4, 2, 101, 121, 2458, 2464, 100, 105, 108, 59, 1, 310,
      59, 1, 1050, 114, 59, 3, 55349, 56590, 112, 102, 59, 3, 55349, 56642, 99, 114, 59, 3, 55349,
      56486, 4, 11, 74, 84, 97, 99, 101, 102, 108, 109, 111, 115, 116, 2508, 2513, 2520, 2562, 2585,
      2981, 2986, 3004, 3011, 3146, 3167, 99, 121, 59, 1, 1033, 5, 60, 1, 59, 2518, 1, 60, 4, 5, 99,
      109, 110, 112, 114, 2532, 2538, 2544, 2548, 2558, 117, 116, 101, 59, 1, 313, 98, 100, 97, 59,
      1, 923, 103, 59, 1, 10218, 108, 97, 99, 101, 116, 114, 102, 59, 1, 8466, 114, 59, 1, 8606, 4,
      3, 97, 101, 121, 2570, 2576, 2582, 114, 111, 110, 59, 1, 317, 100, 105, 108, 59, 1, 315, 59,
      1, 1051, 4, 2, 102, 115, 2591, 2907, 116, 4, 10, 65, 67, 68, 70, 82, 84, 85, 86, 97, 114,
      2614, 2663, 2672, 2728, 2735, 2760, 2820, 2870, 2888, 2895, 4, 2, 110, 114, 2620, 2633, 103,
      108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 1, 10216, 114, 111, 119, 4, 3, 59, 66, 82, 2644,
      2646, 2651, 1, 8592, 97, 114, 59, 1, 8676, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1,
      8646, 101, 105, 108, 105, 110, 103, 59, 1, 8968, 111, 4, 2, 117, 119, 2679, 2692, 98, 108,
      101, 66, 114, 97, 99, 107, 101, 116, 59, 1, 10214, 110, 4, 2, 84, 86, 2699, 2710, 101, 101,
      86, 101, 99, 116, 111, 114, 59, 1, 10593, 101, 99, 116, 111, 114, 4, 2, 59, 66, 2721, 2723, 1,
      8643, 97, 114, 59, 1, 10585, 108, 111, 111, 114, 59, 1, 8970, 105, 103, 104, 116, 4, 2, 65,
      86, 2745, 2752, 114, 114, 111, 119, 59, 1, 8596, 101, 99, 116, 111, 114, 59, 1, 10574, 4, 2,
      101, 114, 2766, 2792, 101, 4, 3, 59, 65, 86, 2775, 2777, 2784, 1, 8867, 114, 114, 111, 119,
      59, 1, 8612, 101, 99, 116, 111, 114, 59, 1, 10586, 105, 97, 110, 103, 108, 101, 4, 3, 59, 66,
      69, 2806, 2808, 2813, 1, 8882, 97, 114, 59, 1, 10703, 113, 117, 97, 108, 59, 1, 8884, 112, 4,
      3, 68, 84, 86, 2829, 2841, 2852, 111, 119, 110, 86, 101, 99, 116, 111, 114, 59, 1, 10577, 101,
      101, 86, 101, 99, 116, 111, 114, 59, 1, 10592, 101, 99, 116, 111, 114, 4, 2, 59, 66, 2863,
      2865, 1, 8639, 97, 114, 59, 1, 10584, 101, 99, 116, 111, 114, 4, 2, 59, 66, 2881, 2883, 1,
      8636, 97, 114, 59, 1, 10578, 114, 114, 111, 119, 59, 1, 8656, 105, 103, 104, 116, 97, 114,
      114, 111, 119, 59, 1, 8660, 115, 4, 6, 69, 70, 71, 76, 83, 84, 2922, 2936, 2947, 2956, 2962,
      2974, 113, 117, 97, 108, 71, 114, 101, 97, 116, 101, 114, 59, 1, 8922, 117, 108, 108, 69, 113,
      117, 97, 108, 59, 1, 8806, 114, 101, 97, 116, 101, 114, 59, 1, 8822, 101, 115, 115, 59, 1,
      10913, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 10877, 105, 108, 100, 101, 59, 1,
      8818, 114, 59, 3, 55349, 56591, 4, 2, 59, 101, 2992, 2994, 1, 8920, 102, 116, 97, 114, 114,
      111, 119, 59, 1, 8666, 105, 100, 111, 116, 59, 1, 319, 4, 3, 110, 112, 119, 3019, 3110, 3115,
      103, 4, 4, 76, 82, 108, 114, 3030, 3058, 3070, 3098, 101, 102, 116, 4, 2, 65, 82, 3039, 3046,
      114, 114, 111, 119, 59, 1, 10229, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 10231,
      105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 10230, 101, 102, 116, 4, 2, 97, 114, 3079,
      3086, 114, 114, 111, 119, 59, 1, 10232, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1,
      10234, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 10233, 102, 59, 3, 55349, 56643,
      101, 114, 4, 2, 76, 82, 3123, 3134, 101, 102, 116, 65, 114, 114, 111, 119, 59, 1, 8601, 105,
      103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 8600, 4, 3, 99, 104, 116, 3154, 3158, 3161, 114,
      59, 1, 8466, 59, 1, 8624, 114, 111, 107, 59, 1, 321, 59, 1, 8810, 4, 8, 97, 99, 101, 102, 105,
      111, 115, 117, 3188, 3192, 3196, 3222, 3227, 3237, 3243, 3248, 112, 59, 1, 10501, 121, 59, 1,
      1052, 4, 2, 100, 108, 3202, 3213, 105, 117, 109, 83, 112, 97, 99, 101, 59, 1, 8287, 108, 105,
      110, 116, 114, 102, 59, 1, 8499, 114, 59, 3, 55349, 56592, 110, 117, 115, 80, 108, 117, 115,
      59, 1, 8723, 112, 102, 59, 3, 55349, 56644, 99, 114, 59, 1, 8499, 59, 1, 924, 4, 9, 74, 97,
      99, 101, 102, 111, 115, 116, 117, 3271, 3276, 3283, 3306, 3422, 3427, 4120, 4126, 4137, 99,
      121, 59, 1, 1034, 99, 117, 116, 101, 59, 1, 323, 4, 3, 97, 101, 121, 3291, 3297, 3303, 114,
      111, 110, 59, 1, 327, 100, 105, 108, 59, 1, 325, 59, 1, 1053, 4, 3, 103, 115, 119, 3314, 3380,
      3415, 97, 116, 105, 118, 101, 4, 3, 77, 84, 86, 3327, 3340, 3365, 101, 100, 105, 117, 109, 83,
      112, 97, 99, 101, 59, 1, 8203, 104, 105, 4, 2, 99, 110, 3348, 3357, 107, 83, 112, 97, 99, 101,
      59, 1, 8203, 83, 112, 97, 99, 101, 59, 1, 8203, 101, 114, 121, 84, 104, 105, 110, 83, 112, 97,
      99, 101, 59, 1, 8203, 116, 101, 100, 4, 2, 71, 76, 3389, 3405, 114, 101, 97, 116, 101, 114,
      71, 114, 101, 97, 116, 101, 114, 59, 1, 8811, 101, 115, 115, 76, 101, 115, 115, 59, 1, 8810,
      76, 105, 110, 101, 59, 1, 10, 114, 59, 3, 55349, 56593, 4, 4, 66, 110, 112, 116, 3437, 3444,
      3460, 3464, 114, 101, 97, 107, 59, 1, 8288, 66, 114, 101, 97, 107, 105, 110, 103, 83, 112, 97,
      99, 101, 59, 1, 160, 102, 59, 1, 8469, 4, 13, 59, 67, 68, 69, 71, 72, 76, 78, 80, 82, 83, 84,
      86, 3492, 3494, 3517, 3536, 3578, 3657, 3685, 3784, 3823, 3860, 3915, 4066, 4107, 1, 10988, 4,
      2, 111, 117, 3500, 3510, 110, 103, 114, 117, 101, 110, 116, 59, 1, 8802, 112, 67, 97, 112, 59,
      1, 8813, 111, 117, 98, 108, 101, 86, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59, 1,
      8742, 4, 3, 108, 113, 120, 3544, 3552, 3571, 101, 109, 101, 110, 116, 59, 1, 8713, 117, 97,
      108, 4, 2, 59, 84, 3561, 3563, 1, 8800, 105, 108, 100, 101, 59, 3, 8770, 824, 105, 115, 116,
      115, 59, 1, 8708, 114, 101, 97, 116, 101, 114, 4, 7, 59, 69, 70, 71, 76, 83, 84, 3600, 3602,
      3609, 3621, 3631, 3637, 3650, 1, 8815, 113, 117, 97, 108, 59, 1, 8817, 117, 108, 108, 69, 113,
      117, 97, 108, 59, 3, 8807, 824, 114, 101, 97, 116, 101, 114, 59, 3, 8811, 824, 101, 115, 115,
      59, 1, 8825, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 3, 10878, 824, 105, 108, 100, 101,
      59, 1, 8821, 117, 109, 112, 4, 2, 68, 69, 3666, 3677, 111, 119, 110, 72, 117, 109, 112, 59, 3,
      8782, 824, 113, 117, 97, 108, 59, 3, 8783, 824, 101, 4, 2, 102, 115, 3692, 3724, 116, 84, 114,
      105, 97, 110, 103, 108, 101, 4, 3, 59, 66, 69, 3709, 3711, 3717, 1, 8938, 97, 114, 59, 3,
      10703, 824, 113, 117, 97, 108, 59, 1, 8940, 115, 4, 6, 59, 69, 71, 76, 83, 84, 3739, 3741,
      3748, 3757, 3764, 3777, 1, 8814, 113, 117, 97, 108, 59, 1, 8816, 114, 101, 97, 116, 101, 114,
      59, 1, 8824, 101, 115, 115, 59, 3, 8810, 824, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 3,
      10877, 824, 105, 108, 100, 101, 59, 1, 8820, 101, 115, 116, 101, 100, 4, 2, 71, 76, 3795,
      3812, 114, 101, 97, 116, 101, 114, 71, 114, 101, 97, 116, 101, 114, 59, 3, 10914, 824, 101,
      115, 115, 76, 101, 115, 115, 59, 3, 10913, 824, 114, 101, 99, 101, 100, 101, 115, 4, 3, 59,
      69, 83, 3838, 3840, 3848, 1, 8832, 113, 117, 97, 108, 59, 3, 10927, 824, 108, 97, 110, 116,
      69, 113, 117, 97, 108, 59, 1, 8928, 4, 2, 101, 105, 3866, 3881, 118, 101, 114, 115, 101, 69,
      108, 101, 109, 101, 110, 116, 59, 1, 8716, 103, 104, 116, 84, 114, 105, 97, 110, 103, 108,
      101, 4, 3, 59, 66, 69, 3900, 3902, 3908, 1, 8939, 97, 114, 59, 3, 10704, 824, 113, 117, 97,
      108, 59, 1, 8941, 4, 2, 113, 117, 3921, 3973, 117, 97, 114, 101, 83, 117, 4, 2, 98, 112, 3933,
      3952, 115, 101, 116, 4, 2, 59, 69, 3942, 3945, 3, 8847, 824, 113, 117, 97, 108, 59, 1, 8930,
      101, 114, 115, 101, 116, 4, 2, 59, 69, 3963, 3966, 3, 8848, 824, 113, 117, 97, 108, 59, 1,
      8931, 4, 3, 98, 99, 112, 3981, 4e3, 4045, 115, 101, 116, 4, 2, 59, 69, 3990, 3993, 3, 8834,
      8402, 113, 117, 97, 108, 59, 1, 8840, 99, 101, 101, 100, 115, 4, 4, 59, 69, 83, 84, 4015,
      4017, 4025, 4037, 1, 8833, 113, 117, 97, 108, 59, 3, 10928, 824, 108, 97, 110, 116, 69, 113,
      117, 97, 108, 59, 1, 8929, 105, 108, 100, 101, 59, 3, 8831, 824, 101, 114, 115, 101, 116, 4,
      2, 59, 69, 4056, 4059, 3, 8835, 8402, 113, 117, 97, 108, 59, 1, 8841, 105, 108, 100, 101, 4,
      4, 59, 69, 70, 84, 4080, 4082, 4089, 4100, 1, 8769, 113, 117, 97, 108, 59, 1, 8772, 117, 108,
      108, 69, 113, 117, 97, 108, 59, 1, 8775, 105, 108, 100, 101, 59, 1, 8777, 101, 114, 116, 105,
      99, 97, 108, 66, 97, 114, 59, 1, 8740, 99, 114, 59, 3, 55349, 56489, 105, 108, 100, 101, 5,
      209, 1, 59, 4135, 1, 209, 59, 1, 925, 4, 14, 69, 97, 99, 100, 102, 103, 109, 111, 112, 114,
      115, 116, 117, 118, 4170, 4176, 4187, 4205, 4212, 4217, 4228, 4253, 4259, 4292, 4295, 4316,
      4337, 4346, 108, 105, 103, 59, 1, 338, 99, 117, 116, 101, 5, 211, 1, 59, 4185, 1, 211, 4, 2,
      105, 121, 4193, 4202, 114, 99, 5, 212, 1, 59, 4200, 1, 212, 59, 1, 1054, 98, 108, 97, 99, 59,
      1, 336, 114, 59, 3, 55349, 56594, 114, 97, 118, 101, 5, 210, 1, 59, 4226, 1, 210, 4, 3, 97,
      101, 105, 4236, 4241, 4246, 99, 114, 59, 1, 332, 103, 97, 59, 1, 937, 99, 114, 111, 110, 59,
      1, 927, 112, 102, 59, 3, 55349, 56646, 101, 110, 67, 117, 114, 108, 121, 4, 2, 68, 81, 4272,
      4285, 111, 117, 98, 108, 101, 81, 117, 111, 116, 101, 59, 1, 8220, 117, 111, 116, 101, 59, 1,
      8216, 59, 1, 10836, 4, 2, 99, 108, 4301, 4306, 114, 59, 3, 55349, 56490, 97, 115, 104, 5, 216,
      1, 59, 4314, 1, 216, 105, 4, 2, 108, 109, 4323, 4332, 100, 101, 5, 213, 1, 59, 4330, 1, 213,
      101, 115, 59, 1, 10807, 109, 108, 5, 214, 1, 59, 4344, 1, 214, 101, 114, 4, 2, 66, 80, 4354,
      4380, 4, 2, 97, 114, 4360, 4364, 114, 59, 1, 8254, 97, 99, 4, 2, 101, 107, 4372, 4375, 59, 1,
      9182, 101, 116, 59, 1, 9140, 97, 114, 101, 110, 116, 104, 101, 115, 105, 115, 59, 1, 9180, 4,
      9, 97, 99, 102, 104, 105, 108, 111, 114, 115, 4413, 4422, 4426, 4431, 4435, 4438, 4448, 4471,
      4561, 114, 116, 105, 97, 108, 68, 59, 1, 8706, 121, 59, 1, 1055, 114, 59, 3, 55349, 56595,
      105, 59, 1, 934, 59, 1, 928, 117, 115, 77, 105, 110, 117, 115, 59, 1, 177, 4, 2, 105, 112,
      4454, 4467, 110, 99, 97, 114, 101, 112, 108, 97, 110, 101, 59, 1, 8460, 102, 59, 1, 8473, 4,
      4, 59, 101, 105, 111, 4481, 4483, 4526, 4531, 1, 10939, 99, 101, 100, 101, 115, 4, 4, 59, 69,
      83, 84, 4498, 4500, 4507, 4519, 1, 8826, 113, 117, 97, 108, 59, 1, 10927, 108, 97, 110, 116,
      69, 113, 117, 97, 108, 59, 1, 8828, 105, 108, 100, 101, 59, 1, 8830, 109, 101, 59, 1, 8243, 4,
      2, 100, 112, 4537, 4543, 117, 99, 116, 59, 1, 8719, 111, 114, 116, 105, 111, 110, 4, 2, 59,
      97, 4555, 4557, 1, 8759, 108, 59, 1, 8733, 4, 2, 99, 105, 4567, 4572, 114, 59, 3, 55349,
      56491, 59, 1, 936, 4, 4, 85, 102, 111, 115, 4585, 4594, 4599, 4604, 79, 84, 5, 34, 1, 59,
      4592, 1, 34, 114, 59, 3, 55349, 56596, 112, 102, 59, 1, 8474, 99, 114, 59, 3, 55349, 56492, 4,
      12, 66, 69, 97, 99, 101, 102, 104, 105, 111, 114, 115, 117, 4636, 4642, 4650, 4681, 4704,
      4763, 4767, 4771, 5047, 5069, 5081, 5094, 97, 114, 114, 59, 1, 10512, 71, 5, 174, 1, 59, 4648,
      1, 174, 4, 3, 99, 110, 114, 4658, 4664, 4668, 117, 116, 101, 59, 1, 340, 103, 59, 1, 10219,
      114, 4, 2, 59, 116, 4675, 4677, 1, 8608, 108, 59, 1, 10518, 4, 3, 97, 101, 121, 4689, 4695,
      4701, 114, 111, 110, 59, 1, 344, 100, 105, 108, 59, 1, 342, 59, 1, 1056, 4, 2, 59, 118, 4710,
      4712, 1, 8476, 101, 114, 115, 101, 4, 2, 69, 85, 4722, 4748, 4, 2, 108, 113, 4728, 4736, 101,
      109, 101, 110, 116, 59, 1, 8715, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59, 1, 8651, 112,
      69, 113, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59, 1, 10607, 114, 59, 1, 8476, 111, 59,
      1, 929, 103, 104, 116, 4, 8, 65, 67, 68, 70, 84, 85, 86, 97, 4792, 4840, 4849, 4905, 4912,
      4972, 5022, 5040, 4, 2, 110, 114, 4798, 4811, 103, 108, 101, 66, 114, 97, 99, 107, 101, 116,
      59, 1, 10217, 114, 111, 119, 4, 3, 59, 66, 76, 4822, 4824, 4829, 1, 8594, 97, 114, 59, 1,
      8677, 101, 102, 116, 65, 114, 114, 111, 119, 59, 1, 8644, 101, 105, 108, 105, 110, 103, 59, 1,
      8969, 111, 4, 2, 117, 119, 4856, 4869, 98, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 1,
      10215, 110, 4, 2, 84, 86, 4876, 4887, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10589, 101,
      99, 116, 111, 114, 4, 2, 59, 66, 4898, 4900, 1, 8642, 97, 114, 59, 1, 10581, 108, 111, 111,
      114, 59, 1, 8971, 4, 2, 101, 114, 4918, 4944, 101, 4, 3, 59, 65, 86, 4927, 4929, 4936, 1,
      8866, 114, 114, 111, 119, 59, 1, 8614, 101, 99, 116, 111, 114, 59, 1, 10587, 105, 97, 110,
      103, 108, 101, 4, 3, 59, 66, 69, 4958, 4960, 4965, 1, 8883, 97, 114, 59, 1, 10704, 113, 117,
      97, 108, 59, 1, 8885, 112, 4, 3, 68, 84, 86, 4981, 4993, 5004, 111, 119, 110, 86, 101, 99,
      116, 111, 114, 59, 1, 10575, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10588, 101, 99, 116,
      111, 114, 4, 2, 59, 66, 5015, 5017, 1, 8638, 97, 114, 59, 1, 10580, 101, 99, 116, 111, 114, 4,
      2, 59, 66, 5033, 5035, 1, 8640, 97, 114, 59, 1, 10579, 114, 114, 111, 119, 59, 1, 8658, 4, 2,
      112, 117, 5053, 5057, 102, 59, 1, 8477, 110, 100, 73, 109, 112, 108, 105, 101, 115, 59, 1,
      10608, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8667, 4, 2, 99, 104, 5087, 5091,
      114, 59, 1, 8475, 59, 1, 8625, 108, 101, 68, 101, 108, 97, 121, 101, 100, 59, 1, 10740, 4, 13,
      72, 79, 97, 99, 102, 104, 105, 109, 111, 113, 115, 116, 117, 5134, 5150, 5157, 5164, 5198,
      5203, 5259, 5265, 5277, 5283, 5374, 5380, 5385, 4, 2, 67, 99, 5140, 5146, 72, 99, 121, 59, 1,
      1065, 121, 59, 1, 1064, 70, 84, 99, 121, 59, 1, 1068, 99, 117, 116, 101, 59, 1, 346, 4, 5, 59,
      97, 101, 105, 121, 5176, 5178, 5184, 5190, 5195, 1, 10940, 114, 111, 110, 59, 1, 352, 100,
      105, 108, 59, 1, 350, 114, 99, 59, 1, 348, 59, 1, 1057, 114, 59, 3, 55349, 56598, 111, 114,
      116, 4, 4, 68, 76, 82, 85, 5216, 5227, 5238, 5250, 111, 119, 110, 65, 114, 114, 111, 119, 59,
      1, 8595, 101, 102, 116, 65, 114, 114, 111, 119, 59, 1, 8592, 105, 103, 104, 116, 65, 114, 114,
      111, 119, 59, 1, 8594, 112, 65, 114, 114, 111, 119, 59, 1, 8593, 103, 109, 97, 59, 1, 931, 97,
      108, 108, 67, 105, 114, 99, 108, 101, 59, 1, 8728, 112, 102, 59, 3, 55349, 56650, 4, 2, 114,
      117, 5289, 5293, 116, 59, 1, 8730, 97, 114, 101, 4, 4, 59, 73, 83, 85, 5306, 5308, 5322, 5367,
      1, 9633, 110, 116, 101, 114, 115, 101, 99, 116, 105, 111, 110, 59, 1, 8851, 117, 4, 2, 98,
      112, 5329, 5347, 115, 101, 116, 4, 2, 59, 69, 5338, 5340, 1, 8847, 113, 117, 97, 108, 59, 1,
      8849, 101, 114, 115, 101, 116, 4, 2, 59, 69, 5358, 5360, 1, 8848, 113, 117, 97, 108, 59, 1,
      8850, 110, 105, 111, 110, 59, 1, 8852, 99, 114, 59, 3, 55349, 56494, 97, 114, 59, 1, 8902, 4,
      4, 98, 99, 109, 112, 5395, 5420, 5475, 5478, 4, 2, 59, 115, 5401, 5403, 1, 8912, 101, 116, 4,
      2, 59, 69, 5411, 5413, 1, 8912, 113, 117, 97, 108, 59, 1, 8838, 4, 2, 99, 104, 5426, 5468,
      101, 101, 100, 115, 4, 4, 59, 69, 83, 84, 5440, 5442, 5449, 5461, 1, 8827, 113, 117, 97, 108,
      59, 1, 10928, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 8829, 105, 108, 100, 101, 59,
      1, 8831, 84, 104, 97, 116, 59, 1, 8715, 59, 1, 8721, 4, 3, 59, 101, 115, 5486, 5488, 5507, 1,
      8913, 114, 115, 101, 116, 4, 2, 59, 69, 5498, 5500, 1, 8835, 113, 117, 97, 108, 59, 1, 8839,
      101, 116, 59, 1, 8913, 4, 11, 72, 82, 83, 97, 99, 102, 104, 105, 111, 114, 115, 5536, 5546,
      5552, 5567, 5579, 5602, 5607, 5655, 5695, 5701, 5711, 79, 82, 78, 5, 222, 1, 59, 5544, 1, 222,
      65, 68, 69, 59, 1, 8482, 4, 2, 72, 99, 5558, 5563, 99, 121, 59, 1, 1035, 121, 59, 1, 1062, 4,
      2, 98, 117, 5573, 5576, 59, 1, 9, 59, 1, 932, 4, 3, 97, 101, 121, 5587, 5593, 5599, 114, 111,
      110, 59, 1, 356, 100, 105, 108, 59, 1, 354, 59, 1, 1058, 114, 59, 3, 55349, 56599, 4, 2, 101,
      105, 5613, 5631, 4, 2, 114, 116, 5619, 5627, 101, 102, 111, 114, 101, 59, 1, 8756, 97, 59, 1,
      920, 4, 2, 99, 110, 5637, 5647, 107, 83, 112, 97, 99, 101, 59, 3, 8287, 8202, 83, 112, 97, 99,
      101, 59, 1, 8201, 108, 100, 101, 4, 4, 59, 69, 70, 84, 5668, 5670, 5677, 5688, 1, 8764, 113,
      117, 97, 108, 59, 1, 8771, 117, 108, 108, 69, 113, 117, 97, 108, 59, 1, 8773, 105, 108, 100,
      101, 59, 1, 8776, 112, 102, 59, 3, 55349, 56651, 105, 112, 108, 101, 68, 111, 116, 59, 1,
      8411, 4, 2, 99, 116, 5717, 5722, 114, 59, 3, 55349, 56495, 114, 111, 107, 59, 1, 358, 4, 14,
      97, 98, 99, 100, 102, 103, 109, 110, 111, 112, 114, 115, 116, 117, 5758, 5789, 5805, 5823,
      5830, 5835, 5846, 5852, 5921, 5937, 6089, 6095, 6101, 6108, 4, 2, 99, 114, 5764, 5774, 117,
      116, 101, 5, 218, 1, 59, 5772, 1, 218, 114, 4, 2, 59, 111, 5781, 5783, 1, 8607, 99, 105, 114,
      59, 1, 10569, 114, 4, 2, 99, 101, 5796, 5800, 121, 59, 1, 1038, 118, 101, 59, 1, 364, 4, 2,
      105, 121, 5811, 5820, 114, 99, 5, 219, 1, 59, 5818, 1, 219, 59, 1, 1059, 98, 108, 97, 99, 59,
      1, 368, 114, 59, 3, 55349, 56600, 114, 97, 118, 101, 5, 217, 1, 59, 5844, 1, 217, 97, 99, 114,
      59, 1, 362, 4, 2, 100, 105, 5858, 5905, 101, 114, 4, 2, 66, 80, 5866, 5892, 4, 2, 97, 114,
      5872, 5876, 114, 59, 1, 95, 97, 99, 4, 2, 101, 107, 5884, 5887, 59, 1, 9183, 101, 116, 59, 1,
      9141, 97, 114, 101, 110, 116, 104, 101, 115, 105, 115, 59, 1, 9181, 111, 110, 4, 2, 59, 80,
      5913, 5915, 1, 8899, 108, 117, 115, 59, 1, 8846, 4, 2, 103, 112, 5927, 5932, 111, 110, 59, 1,
      370, 102, 59, 3, 55349, 56652, 4, 8, 65, 68, 69, 84, 97, 100, 112, 115, 5955, 5985, 5996,
      6009, 6026, 6033, 6044, 6075, 114, 114, 111, 119, 4, 3, 59, 66, 68, 5967, 5969, 5974, 1, 8593,
      97, 114, 59, 1, 10514, 111, 119, 110, 65, 114, 114, 111, 119, 59, 1, 8645, 111, 119, 110, 65,
      114, 114, 111, 119, 59, 1, 8597, 113, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59, 1,
      10606, 101, 101, 4, 2, 59, 65, 6017, 6019, 1, 8869, 114, 114, 111, 119, 59, 1, 8613, 114, 114,
      111, 119, 59, 1, 8657, 111, 119, 110, 97, 114, 114, 111, 119, 59, 1, 8661, 101, 114, 4, 2, 76,
      82, 6052, 6063, 101, 102, 116, 65, 114, 114, 111, 119, 59, 1, 8598, 105, 103, 104, 116, 65,
      114, 114, 111, 119, 59, 1, 8599, 105, 4, 2, 59, 108, 6082, 6084, 1, 978, 111, 110, 59, 1, 933,
      105, 110, 103, 59, 1, 366, 99, 114, 59, 3, 55349, 56496, 105, 108, 100, 101, 59, 1, 360, 109,
      108, 5, 220, 1, 59, 6115, 1, 220, 4, 9, 68, 98, 99, 100, 101, 102, 111, 115, 118, 6137, 6143,
      6148, 6152, 6166, 6250, 6255, 6261, 6267, 97, 115, 104, 59, 1, 8875, 97, 114, 59, 1, 10987,
      121, 59, 1, 1042, 97, 115, 104, 4, 2, 59, 108, 6161, 6163, 1, 8873, 59, 1, 10982, 4, 2, 101,
      114, 6172, 6175, 59, 1, 8897, 4, 3, 98, 116, 121, 6183, 6188, 6238, 97, 114, 59, 1, 8214, 4,
      2, 59, 105, 6194, 6196, 1, 8214, 99, 97, 108, 4, 4, 66, 76, 83, 84, 6209, 6214, 6220, 6231,
      97, 114, 59, 1, 8739, 105, 110, 101, 59, 1, 124, 101, 112, 97, 114, 97, 116, 111, 114, 59, 1,
      10072, 105, 108, 100, 101, 59, 1, 8768, 84, 104, 105, 110, 83, 112, 97, 99, 101, 59, 1, 8202,
      114, 59, 3, 55349, 56601, 112, 102, 59, 3, 55349, 56653, 99, 114, 59, 3, 55349, 56497, 100,
      97, 115, 104, 59, 1, 8874, 4, 5, 99, 101, 102, 111, 115, 6286, 6292, 6298, 6303, 6309, 105,
      114, 99, 59, 1, 372, 100, 103, 101, 59, 1, 8896, 114, 59, 3, 55349, 56602, 112, 102, 59, 3,
      55349, 56654, 99, 114, 59, 3, 55349, 56498, 4, 4, 102, 105, 111, 115, 6325, 6330, 6333, 6339,
      114, 59, 3, 55349, 56603, 59, 1, 926, 112, 102, 59, 3, 55349, 56655, 99, 114, 59, 3, 55349,
      56499, 4, 9, 65, 73, 85, 97, 99, 102, 111, 115, 117, 6365, 6370, 6375, 6380, 6391, 6405, 6410,
      6416, 6422, 99, 121, 59, 1, 1071, 99, 121, 59, 1, 1031, 99, 121, 59, 1, 1070, 99, 117, 116,
      101, 5, 221, 1, 59, 6389, 1, 221, 4, 2, 105, 121, 6397, 6402, 114, 99, 59, 1, 374, 59, 1,
      1067, 114, 59, 3, 55349, 56604, 112, 102, 59, 3, 55349, 56656, 99, 114, 59, 3, 55349, 56500,
      109, 108, 59, 1, 376, 4, 8, 72, 97, 99, 100, 101, 102, 111, 115, 6445, 6450, 6457, 6472, 6477,
      6501, 6505, 6510, 99, 121, 59, 1, 1046, 99, 117, 116, 101, 59, 1, 377, 4, 2, 97, 121, 6463,
      6469, 114, 111, 110, 59, 1, 381, 59, 1, 1047, 111, 116, 59, 1, 379, 4, 2, 114, 116, 6483,
      6497, 111, 87, 105, 100, 116, 104, 83, 112, 97, 99, 101, 59, 1, 8203, 97, 59, 1, 918, 114, 59,
      1, 8488, 112, 102, 59, 1, 8484, 99, 114, 59, 3, 55349, 56501, 4, 16, 97, 98, 99, 101, 102,
      103, 108, 109, 110, 111, 112, 114, 115, 116, 117, 119, 6550, 6561, 6568, 6612, 6622, 6634,
      6645, 6672, 6699, 6854, 6870, 6923, 6933, 6963, 6974, 6983, 99, 117, 116, 101, 5, 225, 1, 59,
      6559, 1, 225, 114, 101, 118, 101, 59, 1, 259, 4, 6, 59, 69, 100, 105, 117, 121, 6582, 6584,
      6588, 6591, 6600, 6609, 1, 8766, 59, 3, 8766, 819, 59, 1, 8767, 114, 99, 5, 226, 1, 59, 6598,
      1, 226, 116, 101, 5, 180, 1, 59, 6607, 1, 180, 59, 1, 1072, 108, 105, 103, 5, 230, 1, 59,
      6620, 1, 230, 4, 2, 59, 114, 6628, 6630, 1, 8289, 59, 3, 55349, 56606, 114, 97, 118, 101, 5,
      224, 1, 59, 6643, 1, 224, 4, 2, 101, 112, 6651, 6667, 4, 2, 102, 112, 6657, 6663, 115, 121,
      109, 59, 1, 8501, 104, 59, 1, 8501, 104, 97, 59, 1, 945, 4, 2, 97, 112, 6678, 6692, 4, 2, 99,
      108, 6684, 6688, 114, 59, 1, 257, 103, 59, 1, 10815, 5, 38, 1, 59, 6697, 1, 38, 4, 2, 100,
      103, 6705, 6737, 4, 5, 59, 97, 100, 115, 118, 6717, 6719, 6724, 6727, 6734, 1, 8743, 110, 100,
      59, 1, 10837, 59, 1, 10844, 108, 111, 112, 101, 59, 1, 10840, 59, 1, 10842, 4, 7, 59, 101,
      108, 109, 114, 115, 122, 6753, 6755, 6758, 6762, 6814, 6835, 6848, 1, 8736, 59, 1, 10660, 101,
      59, 1, 8736, 115, 100, 4, 2, 59, 97, 6770, 6772, 1, 8737, 4, 8, 97, 98, 99, 100, 101, 102,
      103, 104, 6790, 6793, 6796, 6799, 6802, 6805, 6808, 6811, 59, 1, 10664, 59, 1, 10665, 59, 1,
      10666, 59, 1, 10667, 59, 1, 10668, 59, 1, 10669, 59, 1, 10670, 59, 1, 10671, 116, 4, 2, 59,
      118, 6821, 6823, 1, 8735, 98, 4, 2, 59, 100, 6830, 6832, 1, 8894, 59, 1, 10653, 4, 2, 112,
      116, 6841, 6845, 104, 59, 1, 8738, 59, 1, 197, 97, 114, 114, 59, 1, 9084, 4, 2, 103, 112,
      6860, 6865, 111, 110, 59, 1, 261, 102, 59, 3, 55349, 56658, 4, 7, 59, 69, 97, 101, 105, 111,
      112, 6886, 6888, 6891, 6897, 6900, 6904, 6908, 1, 8776, 59, 1, 10864, 99, 105, 114, 59, 1,
      10863, 59, 1, 8778, 100, 59, 1, 8779, 115, 59, 1, 39, 114, 111, 120, 4, 2, 59, 101, 6917,
      6919, 1, 8776, 113, 59, 1, 8778, 105, 110, 103, 5, 229, 1, 59, 6931, 1, 229, 4, 3, 99, 116,
      121, 6941, 6946, 6949, 114, 59, 3, 55349, 56502, 59, 1, 42, 109, 112, 4, 2, 59, 101, 6957,
      6959, 1, 8776, 113, 59, 1, 8781, 105, 108, 100, 101, 5, 227, 1, 59, 6972, 1, 227, 109, 108, 5,
      228, 1, 59, 6981, 1, 228, 4, 2, 99, 105, 6989, 6997, 111, 110, 105, 110, 116, 59, 1, 8755,
      110, 116, 59, 1, 10769, 4, 16, 78, 97, 98, 99, 100, 101, 102, 105, 107, 108, 110, 111, 112,
      114, 115, 117, 7036, 7041, 7119, 7135, 7149, 7155, 7219, 7224, 7347, 7354, 7463, 7489, 7786,
      7793, 7814, 7866, 111, 116, 59, 1, 10989, 4, 2, 99, 114, 7047, 7094, 107, 4, 4, 99, 101, 112,
      115, 7058, 7064, 7073, 7080, 111, 110, 103, 59, 1, 8780, 112, 115, 105, 108, 111, 110, 59, 1,
      1014, 114, 105, 109, 101, 59, 1, 8245, 105, 109, 4, 2, 59, 101, 7088, 7090, 1, 8765, 113, 59,
      1, 8909, 4, 2, 118, 119, 7100, 7105, 101, 101, 59, 1, 8893, 101, 100, 4, 2, 59, 103, 7113,
      7115, 1, 8965, 101, 59, 1, 8965, 114, 107, 4, 2, 59, 116, 7127, 7129, 1, 9141, 98, 114, 107,
      59, 1, 9142, 4, 2, 111, 121, 7141, 7146, 110, 103, 59, 1, 8780, 59, 1, 1073, 113, 117, 111,
      59, 1, 8222, 4, 5, 99, 109, 112, 114, 116, 7167, 7181, 7188, 7193, 7199, 97, 117, 115, 4, 2,
      59, 101, 7176, 7178, 1, 8757, 59, 1, 8757, 112, 116, 121, 118, 59, 1, 10672, 115, 105, 59, 1,
      1014, 110, 111, 117, 59, 1, 8492, 4, 3, 97, 104, 119, 7207, 7210, 7213, 59, 1, 946, 59, 1,
      8502, 101, 101, 110, 59, 1, 8812, 114, 59, 3, 55349, 56607, 103, 4, 7, 99, 111, 115, 116, 117,
      118, 119, 7241, 7262, 7288, 7305, 7328, 7335, 7340, 4, 3, 97, 105, 117, 7249, 7253, 7258, 112,
      59, 1, 8898, 114, 99, 59, 1, 9711, 112, 59, 1, 8899, 4, 3, 100, 112, 116, 7270, 7275, 7281,
      111, 116, 59, 1, 10752, 108, 117, 115, 59, 1, 10753, 105, 109, 101, 115, 59, 1, 10754, 4, 2,
      113, 116, 7294, 7300, 99, 117, 112, 59, 1, 10758, 97, 114, 59, 1, 9733, 114, 105, 97, 110,
      103, 108, 101, 4, 2, 100, 117, 7318, 7324, 111, 119, 110, 59, 1, 9661, 112, 59, 1, 9651, 112,
      108, 117, 115, 59, 1, 10756, 101, 101, 59, 1, 8897, 101, 100, 103, 101, 59, 1, 8896, 97, 114,
      111, 119, 59, 1, 10509, 4, 3, 97, 107, 111, 7362, 7436, 7458, 4, 2, 99, 110, 7368, 7432, 107,
      4, 3, 108, 115, 116, 7377, 7386, 7394, 111, 122, 101, 110, 103, 101, 59, 1, 10731, 113, 117,
      97, 114, 101, 59, 1, 9642, 114, 105, 97, 110, 103, 108, 101, 4, 4, 59, 100, 108, 114, 7411,
      7413, 7419, 7425, 1, 9652, 111, 119, 110, 59, 1, 9662, 101, 102, 116, 59, 1, 9666, 105, 103,
      104, 116, 59, 1, 9656, 107, 59, 1, 9251, 4, 2, 49, 51, 7442, 7454, 4, 2, 50, 52, 7448, 7451,
      59, 1, 9618, 59, 1, 9617, 52, 59, 1, 9619, 99, 107, 59, 1, 9608, 4, 2, 101, 111, 7469, 7485,
      4, 2, 59, 113, 7475, 7478, 3, 61, 8421, 117, 105, 118, 59, 3, 8801, 8421, 116, 59, 1, 8976, 4,
      4, 112, 116, 119, 120, 7499, 7504, 7517, 7523, 102, 59, 3, 55349, 56659, 4, 2, 59, 116, 7510,
      7512, 1, 8869, 111, 109, 59, 1, 8869, 116, 105, 101, 59, 1, 8904, 4, 12, 68, 72, 85, 86, 98,
      100, 104, 109, 112, 116, 117, 118, 7549, 7571, 7597, 7619, 7655, 7660, 7682, 7708, 7715, 7721,
      7728, 7750, 4, 4, 76, 82, 108, 114, 7559, 7562, 7565, 7568, 59, 1, 9559, 59, 1, 9556, 59, 1,
      9558, 59, 1, 9555, 4, 5, 59, 68, 85, 100, 117, 7583, 7585, 7588, 7591, 7594, 1, 9552, 59, 1,
      9574, 59, 1, 9577, 59, 1, 9572, 59, 1, 9575, 4, 4, 76, 82, 108, 114, 7607, 7610, 7613, 7616,
      59, 1, 9565, 59, 1, 9562, 59, 1, 9564, 59, 1, 9561, 4, 7, 59, 72, 76, 82, 104, 108, 114, 7635,
      7637, 7640, 7643, 7646, 7649, 7652, 1, 9553, 59, 1, 9580, 59, 1, 9571, 59, 1, 9568, 59, 1,
      9579, 59, 1, 9570, 59, 1, 9567, 111, 120, 59, 1, 10697, 4, 4, 76, 82, 108, 114, 7670, 7673,
      7676, 7679, 59, 1, 9557, 59, 1, 9554, 59, 1, 9488, 59, 1, 9484, 4, 5, 59, 68, 85, 100, 117,
      7694, 7696, 7699, 7702, 7705, 1, 9472, 59, 1, 9573, 59, 1, 9576, 59, 1, 9516, 59, 1, 9524,
      105, 110, 117, 115, 59, 1, 8863, 108, 117, 115, 59, 1, 8862, 105, 109, 101, 115, 59, 1, 8864,
      4, 4, 76, 82, 108, 114, 7738, 7741, 7744, 7747, 59, 1, 9563, 59, 1, 9560, 59, 1, 9496, 59, 1,
      9492, 4, 7, 59, 72, 76, 82, 104, 108, 114, 7766, 7768, 7771, 7774, 7777, 7780, 7783, 1, 9474,
      59, 1, 9578, 59, 1, 9569, 59, 1, 9566, 59, 1, 9532, 59, 1, 9508, 59, 1, 9500, 114, 105, 109,
      101, 59, 1, 8245, 4, 2, 101, 118, 7799, 7804, 118, 101, 59, 1, 728, 98, 97, 114, 5, 166, 1,
      59, 7812, 1, 166, 4, 4, 99, 101, 105, 111, 7824, 7829, 7834, 7846, 114, 59, 3, 55349, 56503,
      109, 105, 59, 1, 8271, 109, 4, 2, 59, 101, 7841, 7843, 1, 8765, 59, 1, 8909, 108, 4, 3, 59,
      98, 104, 7855, 7857, 7860, 1, 92, 59, 1, 10693, 115, 117, 98, 59, 1, 10184, 4, 2, 108, 109,
      7872, 7885, 108, 4, 2, 59, 101, 7879, 7881, 1, 8226, 116, 59, 1, 8226, 112, 4, 3, 59, 69, 101,
      7894, 7896, 7899, 1, 8782, 59, 1, 10926, 4, 2, 59, 113, 7905, 7907, 1, 8783, 59, 1, 8783, 4,
      15, 97, 99, 100, 101, 102, 104, 105, 108, 111, 114, 115, 116, 117, 119, 121, 7942, 8021, 8075,
      8080, 8121, 8126, 8157, 8279, 8295, 8430, 8446, 8485, 8491, 8707, 8726, 4, 3, 99, 112, 114,
      7950, 7956, 8007, 117, 116, 101, 59, 1, 263, 4, 6, 59, 97, 98, 99, 100, 115, 7970, 7972, 7977,
      7984, 7998, 8003, 1, 8745, 110, 100, 59, 1, 10820, 114, 99, 117, 112, 59, 1, 10825, 4, 2, 97,
      117, 7990, 7994, 112, 59, 1, 10827, 112, 59, 1, 10823, 111, 116, 59, 1, 10816, 59, 3, 8745,
      65024, 4, 2, 101, 111, 8013, 8017, 116, 59, 1, 8257, 110, 59, 1, 711, 4, 4, 97, 101, 105, 117,
      8031, 8046, 8056, 8061, 4, 2, 112, 114, 8037, 8041, 115, 59, 1, 10829, 111, 110, 59, 1, 269,
      100, 105, 108, 5, 231, 1, 59, 8054, 1, 231, 114, 99, 59, 1, 265, 112, 115, 4, 2, 59, 115,
      8069, 8071, 1, 10828, 109, 59, 1, 10832, 111, 116, 59, 1, 267, 4, 3, 100, 109, 110, 8088,
      8097, 8104, 105, 108, 5, 184, 1, 59, 8095, 1, 184, 112, 116, 121, 118, 59, 1, 10674, 116, 5,
      162, 2, 59, 101, 8112, 8114, 1, 162, 114, 100, 111, 116, 59, 1, 183, 114, 59, 3, 55349, 56608,
      4, 3, 99, 101, 105, 8134, 8138, 8154, 121, 59, 1, 1095, 99, 107, 4, 2, 59, 109, 8146, 8148, 1,
      10003, 97, 114, 107, 59, 1, 10003, 59, 1, 967, 114, 4, 7, 59, 69, 99, 101, 102, 109, 115,
      8174, 8176, 8179, 8258, 8261, 8268, 8273, 1, 9675, 59, 1, 10691, 4, 3, 59, 101, 108, 8187,
      8189, 8193, 1, 710, 113, 59, 1, 8791, 101, 4, 2, 97, 100, 8200, 8223, 114, 114, 111, 119, 4,
      2, 108, 114, 8210, 8216, 101, 102, 116, 59, 1, 8634, 105, 103, 104, 116, 59, 1, 8635, 4, 5,
      82, 83, 97, 99, 100, 8235, 8238, 8241, 8246, 8252, 59, 1, 174, 59, 1, 9416, 115, 116, 59, 1,
      8859, 105, 114, 99, 59, 1, 8858, 97, 115, 104, 59, 1, 8861, 59, 1, 8791, 110, 105, 110, 116,
      59, 1, 10768, 105, 100, 59, 1, 10991, 99, 105, 114, 59, 1, 10690, 117, 98, 115, 4, 2, 59, 117,
      8288, 8290, 1, 9827, 105, 116, 59, 1, 9827, 4, 4, 108, 109, 110, 112, 8305, 8326, 8376, 8400,
      111, 110, 4, 2, 59, 101, 8313, 8315, 1, 58, 4, 2, 59, 113, 8321, 8323, 1, 8788, 59, 1, 8788,
      4, 2, 109, 112, 8332, 8344, 97, 4, 2, 59, 116, 8339, 8341, 1, 44, 59, 1, 64, 4, 3, 59, 102,
      108, 8352, 8354, 8358, 1, 8705, 110, 59, 1, 8728, 101, 4, 2, 109, 120, 8365, 8371, 101, 110,
      116, 59, 1, 8705, 101, 115, 59, 1, 8450, 4, 2, 103, 105, 8382, 8395, 4, 2, 59, 100, 8388,
      8390, 1, 8773, 111, 116, 59, 1, 10861, 110, 116, 59, 1, 8750, 4, 3, 102, 114, 121, 8408, 8412,
      8417, 59, 3, 55349, 56660, 111, 100, 59, 1, 8720, 5, 169, 2, 59, 115, 8424, 8426, 1, 169, 114,
      59, 1, 8471, 4, 2, 97, 111, 8436, 8441, 114, 114, 59, 1, 8629, 115, 115, 59, 1, 10007, 4, 2,
      99, 117, 8452, 8457, 114, 59, 3, 55349, 56504, 4, 2, 98, 112, 8463, 8474, 4, 2, 59, 101, 8469,
      8471, 1, 10959, 59, 1, 10961, 4, 2, 59, 101, 8480, 8482, 1, 10960, 59, 1, 10962, 100, 111,
      116, 59, 1, 8943, 4, 7, 100, 101, 108, 112, 114, 118, 119, 8507, 8522, 8536, 8550, 8600, 8697,
      8702, 97, 114, 114, 4, 2, 108, 114, 8516, 8519, 59, 1, 10552, 59, 1, 10549, 4, 2, 112, 115,
      8528, 8532, 114, 59, 1, 8926, 99, 59, 1, 8927, 97, 114, 114, 4, 2, 59, 112, 8545, 8547, 1,
      8630, 59, 1, 10557, 4, 6, 59, 98, 99, 100, 111, 115, 8564, 8566, 8573, 8587, 8592, 8596, 1,
      8746, 114, 99, 97, 112, 59, 1, 10824, 4, 2, 97, 117, 8579, 8583, 112, 59, 1, 10822, 112, 59,
      1, 10826, 111, 116, 59, 1, 8845, 114, 59, 1, 10821, 59, 3, 8746, 65024, 4, 4, 97, 108, 114,
      118, 8610, 8623, 8663, 8672, 114, 114, 4, 2, 59, 109, 8618, 8620, 1, 8631, 59, 1, 10556, 121,
      4, 3, 101, 118, 119, 8632, 8651, 8656, 113, 4, 2, 112, 115, 8639, 8645, 114, 101, 99, 59, 1,
      8926, 117, 99, 99, 59, 1, 8927, 101, 101, 59, 1, 8910, 101, 100, 103, 101, 59, 1, 8911, 101,
      110, 5, 164, 1, 59, 8670, 1, 164, 101, 97, 114, 114, 111, 119, 4, 2, 108, 114, 8684, 8690,
      101, 102, 116, 59, 1, 8630, 105, 103, 104, 116, 59, 1, 8631, 101, 101, 59, 1, 8910, 101, 100,
      59, 1, 8911, 4, 2, 99, 105, 8713, 8721, 111, 110, 105, 110, 116, 59, 1, 8754, 110, 116, 59, 1,
      8753, 108, 99, 116, 121, 59, 1, 9005, 4, 19, 65, 72, 97, 98, 99, 100, 101, 102, 104, 105, 106,
      108, 111, 114, 115, 116, 117, 119, 122, 8773, 8778, 8783, 8821, 8839, 8854, 8887, 8914, 8930,
      8944, 9036, 9041, 9058, 9197, 9227, 9258, 9281, 9297, 9305, 114, 114, 59, 1, 8659, 97, 114,
      59, 1, 10597, 4, 4, 103, 108, 114, 115, 8793, 8799, 8805, 8809, 103, 101, 114, 59, 1, 8224,
      101, 116, 104, 59, 1, 8504, 114, 59, 1, 8595, 104, 4, 2, 59, 118, 8816, 8818, 1, 8208, 59, 1,
      8867, 4, 2, 107, 108, 8827, 8834, 97, 114, 111, 119, 59, 1, 10511, 97, 99, 59, 1, 733, 4, 2,
      97, 121, 8845, 8851, 114, 111, 110, 59, 1, 271, 59, 1, 1076, 4, 3, 59, 97, 111, 8862, 8864,
      8880, 1, 8518, 4, 2, 103, 114, 8870, 8876, 103, 101, 114, 59, 1, 8225, 114, 59, 1, 8650, 116,
      115, 101, 113, 59, 1, 10871, 4, 3, 103, 108, 109, 8895, 8902, 8907, 5, 176, 1, 59, 8900, 1,
      176, 116, 97, 59, 1, 948, 112, 116, 121, 118, 59, 1, 10673, 4, 2, 105, 114, 8920, 8926, 115,
      104, 116, 59, 1, 10623, 59, 3, 55349, 56609, 97, 114, 4, 2, 108, 114, 8938, 8941, 59, 1, 8643,
      59, 1, 8642, 4, 5, 97, 101, 103, 115, 118, 8956, 8986, 8989, 8996, 9001, 109, 4, 3, 59, 111,
      115, 8965, 8967, 8983, 1, 8900, 110, 100, 4, 2, 59, 115, 8975, 8977, 1, 8900, 117, 105, 116,
      59, 1, 9830, 59, 1, 9830, 59, 1, 168, 97, 109, 109, 97, 59, 1, 989, 105, 110, 59, 1, 8946, 4,
      3, 59, 105, 111, 9009, 9011, 9031, 1, 247, 100, 101, 5, 247, 2, 59, 111, 9020, 9022, 1, 247,
      110, 116, 105, 109, 101, 115, 59, 1, 8903, 110, 120, 59, 1, 8903, 99, 121, 59, 1, 1106, 99, 4,
      2, 111, 114, 9048, 9053, 114, 110, 59, 1, 8990, 111, 112, 59, 1, 8973, 4, 5, 108, 112, 116,
      117, 119, 9070, 9076, 9081, 9130, 9144, 108, 97, 114, 59, 1, 36, 102, 59, 3, 55349, 56661, 4,
      5, 59, 101, 109, 112, 115, 9093, 9095, 9109, 9116, 9122, 1, 729, 113, 4, 2, 59, 100, 9102,
      9104, 1, 8784, 111, 116, 59, 1, 8785, 105, 110, 117, 115, 59, 1, 8760, 108, 117, 115, 59, 1,
      8724, 113, 117, 97, 114, 101, 59, 1, 8865, 98, 108, 101, 98, 97, 114, 119, 101, 100, 103, 101,
      59, 1, 8966, 110, 4, 3, 97, 100, 104, 9153, 9160, 9172, 114, 114, 111, 119, 59, 1, 8595, 111,
      119, 110, 97, 114, 114, 111, 119, 115, 59, 1, 8650, 97, 114, 112, 111, 111, 110, 4, 2, 108,
      114, 9184, 9190, 101, 102, 116, 59, 1, 8643, 105, 103, 104, 116, 59, 1, 8642, 4, 2, 98, 99,
      9203, 9211, 107, 97, 114, 111, 119, 59, 1, 10512, 4, 2, 111, 114, 9217, 9222, 114, 110, 59, 1,
      8991, 111, 112, 59, 1, 8972, 4, 3, 99, 111, 116, 9235, 9248, 9252, 4, 2, 114, 121, 9241, 9245,
      59, 3, 55349, 56505, 59, 1, 1109, 108, 59, 1, 10742, 114, 111, 107, 59, 1, 273, 4, 2, 100,
      114, 9264, 9269, 111, 116, 59, 1, 8945, 105, 4, 2, 59, 102, 9276, 9278, 1, 9663, 59, 1, 9662,
      4, 2, 97, 104, 9287, 9292, 114, 114, 59, 1, 8693, 97, 114, 59, 1, 10607, 97, 110, 103, 108,
      101, 59, 1, 10662, 4, 2, 99, 105, 9311, 9315, 121, 59, 1, 1119, 103, 114, 97, 114, 114, 59, 1,
      10239, 4, 18, 68, 97, 99, 100, 101, 102, 103, 108, 109, 110, 111, 112, 113, 114, 115, 116,
      117, 120, 9361, 9376, 9398, 9439, 9444, 9447, 9462, 9495, 9531, 9585, 9598, 9614, 9659, 9755,
      9771, 9792, 9808, 9826, 4, 2, 68, 111, 9367, 9372, 111, 116, 59, 1, 10871, 116, 59, 1, 8785,
      4, 2, 99, 115, 9382, 9392, 117, 116, 101, 5, 233, 1, 59, 9390, 1, 233, 116, 101, 114, 59, 1,
      10862, 4, 4, 97, 105, 111, 121, 9408, 9414, 9430, 9436, 114, 111, 110, 59, 1, 283, 114, 4, 2,
      59, 99, 9421, 9423, 1, 8790, 5, 234, 1, 59, 9428, 1, 234, 108, 111, 110, 59, 1, 8789, 59, 1,
      1101, 111, 116, 59, 1, 279, 59, 1, 8519, 4, 2, 68, 114, 9453, 9458, 111, 116, 59, 1, 8786, 59,
      3, 55349, 56610, 4, 3, 59, 114, 115, 9470, 9472, 9482, 1, 10906, 97, 118, 101, 5, 232, 1, 59,
      9480, 1, 232, 4, 2, 59, 100, 9488, 9490, 1, 10902, 111, 116, 59, 1, 10904, 4, 4, 59, 105, 108,
      115, 9505, 9507, 9515, 9518, 1, 10905, 110, 116, 101, 114, 115, 59, 1, 9191, 59, 1, 8467, 4,
      2, 59, 100, 9524, 9526, 1, 10901, 111, 116, 59, 1, 10903, 4, 3, 97, 112, 115, 9539, 9544,
      9564, 99, 114, 59, 1, 275, 116, 121, 4, 3, 59, 115, 118, 9554, 9556, 9561, 1, 8709, 101, 116,
      59, 1, 8709, 59, 1, 8709, 112, 4, 2, 49, 59, 9571, 9583, 4, 2, 51, 52, 9577, 9580, 59, 1,
      8196, 59, 1, 8197, 1, 8195, 4, 2, 103, 115, 9591, 9594, 59, 1, 331, 112, 59, 1, 8194, 4, 2,
      103, 112, 9604, 9609, 111, 110, 59, 1, 281, 102, 59, 3, 55349, 56662, 4, 3, 97, 108, 115,
      9622, 9635, 9640, 114, 4, 2, 59, 115, 9629, 9631, 1, 8917, 108, 59, 1, 10723, 117, 115, 59, 1,
      10865, 105, 4, 3, 59, 108, 118, 9649, 9651, 9656, 1, 949, 111, 110, 59, 1, 949, 59, 1, 1013,
      4, 4, 99, 115, 117, 118, 9669, 9686, 9716, 9747, 4, 2, 105, 111, 9675, 9680, 114, 99, 59, 1,
      8790, 108, 111, 110, 59, 1, 8789, 4, 2, 105, 108, 9692, 9696, 109, 59, 1, 8770, 97, 110, 116,
      4, 2, 103, 108, 9705, 9710, 116, 114, 59, 1, 10902, 101, 115, 115, 59, 1, 10901, 4, 3, 97,
      101, 105, 9724, 9729, 9734, 108, 115, 59, 1, 61, 115, 116, 59, 1, 8799, 118, 4, 2, 59, 68,
      9741, 9743, 1, 8801, 68, 59, 1, 10872, 112, 97, 114, 115, 108, 59, 1, 10725, 4, 2, 68, 97,
      9761, 9766, 111, 116, 59, 1, 8787, 114, 114, 59, 1, 10609, 4, 3, 99, 100, 105, 9779, 9783,
      9788, 114, 59, 1, 8495, 111, 116, 59, 1, 8784, 109, 59, 1, 8770, 4, 2, 97, 104, 9798, 9801,
      59, 1, 951, 5, 240, 1, 59, 9806, 1, 240, 4, 2, 109, 114, 9814, 9822, 108, 5, 235, 1, 59, 9820,
      1, 235, 111, 59, 1, 8364, 4, 3, 99, 105, 112, 9834, 9838, 9843, 108, 59, 1, 33, 115, 116, 59,
      1, 8707, 4, 2, 101, 111, 9849, 9859, 99, 116, 97, 116, 105, 111, 110, 59, 1, 8496, 110, 101,
      110, 116, 105, 97, 108, 101, 59, 1, 8519, 4, 12, 97, 99, 101, 102, 105, 106, 108, 110, 111,
      112, 114, 115, 9896, 9910, 9914, 9921, 9954, 9960, 9967, 9989, 9994, 10027, 10036, 10164, 108,
      108, 105, 110, 103, 100, 111, 116, 115, 101, 113, 59, 1, 8786, 121, 59, 1, 1092, 109, 97, 108,
      101, 59, 1, 9792, 4, 3, 105, 108, 114, 9929, 9935, 9950, 108, 105, 103, 59, 1, 64259, 4, 2,
      105, 108, 9941, 9945, 103, 59, 1, 64256, 105, 103, 59, 1, 64260, 59, 3, 55349, 56611, 108,
      105, 103, 59, 1, 64257, 108, 105, 103, 59, 3, 102, 106, 4, 3, 97, 108, 116, 9975, 9979, 9984,
      116, 59, 1, 9837, 105, 103, 59, 1, 64258, 110, 115, 59, 1, 9649, 111, 102, 59, 1, 402, 4, 2,
      112, 114, 1e4, 10005, 102, 59, 3, 55349, 56663, 4, 2, 97, 107, 10011, 10016, 108, 108, 59, 1,
      8704, 4, 2, 59, 118, 10022, 10024, 1, 8916, 59, 1, 10969, 97, 114, 116, 105, 110, 116, 59, 1,
      10765, 4, 2, 97, 111, 10042, 10159, 4, 2, 99, 115, 10048, 10155, 4, 6, 49, 50, 51, 52, 53, 55,
      10062, 10102, 10114, 10135, 10139, 10151, 4, 6, 50, 51, 52, 53, 54, 56, 10076, 10083, 10086,
      10093, 10096, 10099, 5, 189, 1, 59, 10081, 1, 189, 59, 1, 8531, 5, 188, 1, 59, 10091, 1, 188,
      59, 1, 8533, 59, 1, 8537, 59, 1, 8539, 4, 2, 51, 53, 10108, 10111, 59, 1, 8532, 59, 1, 8534,
      4, 3, 52, 53, 56, 10122, 10129, 10132, 5, 190, 1, 59, 10127, 1, 190, 59, 1, 8535, 59, 1, 8540,
      53, 59, 1, 8536, 4, 2, 54, 56, 10145, 10148, 59, 1, 8538, 59, 1, 8541, 56, 59, 1, 8542, 108,
      59, 1, 8260, 119, 110, 59, 1, 8994, 99, 114, 59, 3, 55349, 56507, 4, 17, 69, 97, 98, 99, 100,
      101, 102, 103, 105, 106, 108, 110, 111, 114, 115, 116, 118, 10206, 10217, 10247, 10254, 10268,
      10273, 10358, 10363, 10374, 10380, 10385, 10406, 10458, 10464, 10470, 10497, 10610, 4, 2, 59,
      108, 10212, 10214, 1, 8807, 59, 1, 10892, 4, 3, 99, 109, 112, 10225, 10231, 10244, 117, 116,
      101, 59, 1, 501, 109, 97, 4, 2, 59, 100, 10239, 10241, 1, 947, 59, 1, 989, 59, 1, 10886, 114,
      101, 118, 101, 59, 1, 287, 4, 2, 105, 121, 10260, 10265, 114, 99, 59, 1, 285, 59, 1, 1075,
      111, 116, 59, 1, 289, 4, 4, 59, 108, 113, 115, 10283, 10285, 10288, 10308, 1, 8805, 59, 1,
      8923, 4, 3, 59, 113, 115, 10296, 10298, 10301, 1, 8805, 59, 1, 8807, 108, 97, 110, 116, 59, 1,
      10878, 4, 4, 59, 99, 100, 108, 10318, 10320, 10324, 10345, 1, 10878, 99, 59, 1, 10921, 111,
      116, 4, 2, 59, 111, 10332, 10334, 1, 10880, 4, 2, 59, 108, 10340, 10342, 1, 10882, 59, 1,
      10884, 4, 2, 59, 101, 10351, 10354, 3, 8923, 65024, 115, 59, 1, 10900, 114, 59, 3, 55349,
      56612, 4, 2, 59, 103, 10369, 10371, 1, 8811, 59, 1, 8921, 109, 101, 108, 59, 1, 8503, 99, 121,
      59, 1, 1107, 4, 4, 59, 69, 97, 106, 10395, 10397, 10400, 10403, 1, 8823, 59, 1, 10898, 59, 1,
      10917, 59, 1, 10916, 4, 4, 69, 97, 101, 115, 10416, 10419, 10434, 10453, 59, 1, 8809, 112, 4,
      2, 59, 112, 10426, 10428, 1, 10890, 114, 111, 120, 59, 1, 10890, 4, 2, 59, 113, 10440, 10442,
      1, 10888, 4, 2, 59, 113, 10448, 10450, 1, 10888, 59, 1, 8809, 105, 109, 59, 1, 8935, 112, 102,
      59, 3, 55349, 56664, 97, 118, 101, 59, 1, 96, 4, 2, 99, 105, 10476, 10480, 114, 59, 1, 8458,
      109, 4, 3, 59, 101, 108, 10489, 10491, 10494, 1, 8819, 59, 1, 10894, 59, 1, 10896, 5, 62, 6,
      59, 99, 100, 108, 113, 114, 10512, 10514, 10527, 10532, 10538, 10545, 1, 62, 4, 2, 99, 105,
      10520, 10523, 59, 1, 10919, 114, 59, 1, 10874, 111, 116, 59, 1, 8919, 80, 97, 114, 59, 1,
      10645, 117, 101, 115, 116, 59, 1, 10876, 4, 5, 97, 100, 101, 108, 115, 10557, 10574, 10579,
      10599, 10605, 4, 2, 112, 114, 10563, 10570, 112, 114, 111, 120, 59, 1, 10886, 114, 59, 1,
      10616, 111, 116, 59, 1, 8919, 113, 4, 2, 108, 113, 10586, 10592, 101, 115, 115, 59, 1, 8923,
      108, 101, 115, 115, 59, 1, 10892, 101, 115, 115, 59, 1, 8823, 105, 109, 59, 1, 8819, 4, 2,
      101, 110, 10616, 10626, 114, 116, 110, 101, 113, 113, 59, 3, 8809, 65024, 69, 59, 3, 8809,
      65024, 4, 10, 65, 97, 98, 99, 101, 102, 107, 111, 115, 121, 10653, 10658, 10713, 10718, 10724,
      10760, 10765, 10786, 10850, 10875, 114, 114, 59, 1, 8660, 4, 4, 105, 108, 109, 114, 10668,
      10674, 10678, 10684, 114, 115, 112, 59, 1, 8202, 102, 59, 1, 189, 105, 108, 116, 59, 1, 8459,
      4, 2, 100, 114, 10690, 10695, 99, 121, 59, 1, 1098, 4, 3, 59, 99, 119, 10703, 10705, 10710, 1,
      8596, 105, 114, 59, 1, 10568, 59, 1, 8621, 97, 114, 59, 1, 8463, 105, 114, 99, 59, 1, 293, 4,
      3, 97, 108, 114, 10732, 10748, 10754, 114, 116, 115, 4, 2, 59, 117, 10741, 10743, 1, 9829,
      105, 116, 59, 1, 9829, 108, 105, 112, 59, 1, 8230, 99, 111, 110, 59, 1, 8889, 114, 59, 3,
      55349, 56613, 115, 4, 2, 101, 119, 10772, 10779, 97, 114, 111, 119, 59, 1, 10533, 97, 114,
      111, 119, 59, 1, 10534, 4, 5, 97, 109, 111, 112, 114, 10798, 10803, 10809, 10839, 10844, 114,
      114, 59, 1, 8703, 116, 104, 116, 59, 1, 8763, 107, 4, 2, 108, 114, 10816, 10827, 101, 102,
      116, 97, 114, 114, 111, 119, 59, 1, 8617, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1,
      8618, 102, 59, 3, 55349, 56665, 98, 97, 114, 59, 1, 8213, 4, 3, 99, 108, 116, 10858, 10863,
      10869, 114, 59, 3, 55349, 56509, 97, 115, 104, 59, 1, 8463, 114, 111, 107, 59, 1, 295, 4, 2,
      98, 112, 10881, 10887, 117, 108, 108, 59, 1, 8259, 104, 101, 110, 59, 1, 8208, 4, 15, 97, 99,
      101, 102, 103, 105, 106, 109, 110, 111, 112, 113, 115, 116, 117, 10925, 10936, 10958, 10977,
      10990, 11001, 11039, 11045, 11101, 11192, 11220, 11226, 11237, 11285, 11299, 99, 117, 116,
      101, 5, 237, 1, 59, 10934, 1, 237, 4, 3, 59, 105, 121, 10944, 10946, 10955, 1, 8291, 114, 99,
      5, 238, 1, 59, 10953, 1, 238, 59, 1, 1080, 4, 2, 99, 120, 10964, 10968, 121, 59, 1, 1077, 99,
      108, 5, 161, 1, 59, 10975, 1, 161, 4, 2, 102, 114, 10983, 10986, 59, 1, 8660, 59, 3, 55349,
      56614, 114, 97, 118, 101, 5, 236, 1, 59, 10999, 1, 236, 4, 4, 59, 105, 110, 111, 11011, 11013,
      11028, 11034, 1, 8520, 4, 2, 105, 110, 11019, 11024, 110, 116, 59, 1, 10764, 116, 59, 1, 8749,
      102, 105, 110, 59, 1, 10716, 116, 97, 59, 1, 8489, 108, 105, 103, 59, 1, 307, 4, 3, 97, 111,
      112, 11053, 11092, 11096, 4, 3, 99, 103, 116, 11061, 11065, 11088, 114, 59, 1, 299, 4, 3, 101,
      108, 112, 11073, 11076, 11082, 59, 1, 8465, 105, 110, 101, 59, 1, 8464, 97, 114, 116, 59, 1,
      8465, 104, 59, 1, 305, 102, 59, 1, 8887, 101, 100, 59, 1, 437, 4, 5, 59, 99, 102, 111, 116,
      11113, 11115, 11121, 11136, 11142, 1, 8712, 97, 114, 101, 59, 1, 8453, 105, 110, 4, 2, 59,
      116, 11129, 11131, 1, 8734, 105, 101, 59, 1, 10717, 100, 111, 116, 59, 1, 305, 4, 5, 59, 99,
      101, 108, 112, 11154, 11156, 11161, 11179, 11186, 1, 8747, 97, 108, 59, 1, 8890, 4, 2, 103,
      114, 11167, 11173, 101, 114, 115, 59, 1, 8484, 99, 97, 108, 59, 1, 8890, 97, 114, 104, 107,
      59, 1, 10775, 114, 111, 100, 59, 1, 10812, 4, 4, 99, 103, 112, 116, 11202, 11206, 11211,
      11216, 121, 59, 1, 1105, 111, 110, 59, 1, 303, 102, 59, 3, 55349, 56666, 97, 59, 1, 953, 114,
      111, 100, 59, 1, 10812, 117, 101, 115, 116, 5, 191, 1, 59, 11235, 1, 191, 4, 2, 99, 105,
      11243, 11248, 114, 59, 3, 55349, 56510, 110, 4, 5, 59, 69, 100, 115, 118, 11261, 11263, 11266,
      11271, 11282, 1, 8712, 59, 1, 8953, 111, 116, 59, 1, 8949, 4, 2, 59, 118, 11277, 11279, 1,
      8948, 59, 1, 8947, 59, 1, 8712, 4, 2, 59, 105, 11291, 11293, 1, 8290, 108, 100, 101, 59, 1,
      297, 4, 2, 107, 109, 11305, 11310, 99, 121, 59, 1, 1110, 108, 5, 239, 1, 59, 11316, 1, 239, 4,
      6, 99, 102, 109, 111, 115, 117, 11332, 11346, 11351, 11357, 11363, 11380, 4, 2, 105, 121,
      11338, 11343, 114, 99, 59, 1, 309, 59, 1, 1081, 114, 59, 3, 55349, 56615, 97, 116, 104, 59, 1,
      567, 112, 102, 59, 3, 55349, 56667, 4, 2, 99, 101, 11369, 11374, 114, 59, 3, 55349, 56511,
      114, 99, 121, 59, 1, 1112, 107, 99, 121, 59, 1, 1108, 4, 8, 97, 99, 102, 103, 104, 106, 111,
      115, 11404, 11418, 11433, 11438, 11445, 11450, 11455, 11461, 112, 112, 97, 4, 2, 59, 118,
      11413, 11415, 1, 954, 59, 1, 1008, 4, 2, 101, 121, 11424, 11430, 100, 105, 108, 59, 1, 311,
      59, 1, 1082, 114, 59, 3, 55349, 56616, 114, 101, 101, 110, 59, 1, 312, 99, 121, 59, 1, 1093,
      99, 121, 59, 1, 1116, 112, 102, 59, 3, 55349, 56668, 99, 114, 59, 3, 55349, 56512, 4, 23, 65,
      66, 69, 72, 97, 98, 99, 100, 101, 102, 103, 104, 106, 108, 109, 110, 111, 112, 114, 115, 116,
      117, 118, 11515, 11538, 11544, 11555, 11560, 11721, 11780, 11818, 11868, 12136, 12160, 12171,
      12203, 12208, 12246, 12275, 12327, 12509, 12523, 12569, 12641, 12732, 12752, 4, 3, 97, 114,
      116, 11523, 11528, 11532, 114, 114, 59, 1, 8666, 114, 59, 1, 8656, 97, 105, 108, 59, 1, 10523,
      97, 114, 114, 59, 1, 10510, 4, 2, 59, 103, 11550, 11552, 1, 8806, 59, 1, 10891, 97, 114, 59,
      1, 10594, 4, 9, 99, 101, 103, 109, 110, 112, 113, 114, 116, 11580, 11586, 11594, 11600, 11606,
      11624, 11627, 11636, 11694, 117, 116, 101, 59, 1, 314, 109, 112, 116, 121, 118, 59, 1, 10676,
      114, 97, 110, 59, 1, 8466, 98, 100, 97, 59, 1, 955, 103, 4, 3, 59, 100, 108, 11615, 11617,
      11620, 1, 10216, 59, 1, 10641, 101, 59, 1, 10216, 59, 1, 10885, 117, 111, 5, 171, 1, 59,
      11634, 1, 171, 114, 4, 8, 59, 98, 102, 104, 108, 112, 115, 116, 11655, 11657, 11669, 11673,
      11677, 11681, 11685, 11690, 1, 8592, 4, 2, 59, 102, 11663, 11665, 1, 8676, 115, 59, 1, 10527,
      115, 59, 1, 10525, 107, 59, 1, 8617, 112, 59, 1, 8619, 108, 59, 1, 10553, 105, 109, 59, 1,
      10611, 108, 59, 1, 8610, 4, 3, 59, 97, 101, 11702, 11704, 11709, 1, 10923, 105, 108, 59, 1,
      10521, 4, 2, 59, 115, 11715, 11717, 1, 10925, 59, 3, 10925, 65024, 4, 3, 97, 98, 114, 11729,
      11734, 11739, 114, 114, 59, 1, 10508, 114, 107, 59, 1, 10098, 4, 2, 97, 107, 11745, 11758, 99,
      4, 2, 101, 107, 11752, 11755, 59, 1, 123, 59, 1, 91, 4, 2, 101, 115, 11764, 11767, 59, 1,
      10635, 108, 4, 2, 100, 117, 11774, 11777, 59, 1, 10639, 59, 1, 10637, 4, 4, 97, 101, 117, 121,
      11790, 11796, 11811, 11815, 114, 111, 110, 59, 1, 318, 4, 2, 100, 105, 11802, 11807, 105, 108,
      59, 1, 316, 108, 59, 1, 8968, 98, 59, 1, 123, 59, 1, 1083, 4, 4, 99, 113, 114, 115, 11828,
      11832, 11845, 11864, 97, 59, 1, 10550, 117, 111, 4, 2, 59, 114, 11840, 11842, 1, 8220, 59, 1,
      8222, 4, 2, 100, 117, 11851, 11857, 104, 97, 114, 59, 1, 10599, 115, 104, 97, 114, 59, 1,
      10571, 104, 59, 1, 8626, 4, 5, 59, 102, 103, 113, 115, 11880, 11882, 12008, 12011, 12031, 1,
      8804, 116, 4, 5, 97, 104, 108, 114, 116, 11895, 11913, 11935, 11947, 11996, 114, 114, 111,
      119, 4, 2, 59, 116, 11905, 11907, 1, 8592, 97, 105, 108, 59, 1, 8610, 97, 114, 112, 111, 111,
      110, 4, 2, 100, 117, 11925, 11931, 111, 119, 110, 59, 1, 8637, 112, 59, 1, 8636, 101, 102,
      116, 97, 114, 114, 111, 119, 115, 59, 1, 8647, 105, 103, 104, 116, 4, 3, 97, 104, 115, 11959,
      11974, 11984, 114, 114, 111, 119, 4, 2, 59, 115, 11969, 11971, 1, 8596, 59, 1, 8646, 97, 114,
      112, 111, 111, 110, 115, 59, 1, 8651, 113, 117, 105, 103, 97, 114, 114, 111, 119, 59, 1, 8621,
      104, 114, 101, 101, 116, 105, 109, 101, 115, 59, 1, 8907, 59, 1, 8922, 4, 3, 59, 113, 115,
      12019, 12021, 12024, 1, 8804, 59, 1, 8806, 108, 97, 110, 116, 59, 1, 10877, 4, 5, 59, 99, 100,
      103, 115, 12043, 12045, 12049, 12070, 12083, 1, 10877, 99, 59, 1, 10920, 111, 116, 4, 2, 59,
      111, 12057, 12059, 1, 10879, 4, 2, 59, 114, 12065, 12067, 1, 10881, 59, 1, 10883, 4, 2, 59,
      101, 12076, 12079, 3, 8922, 65024, 115, 59, 1, 10899, 4, 5, 97, 100, 101, 103, 115, 12095,
      12103, 12108, 12126, 12131, 112, 112, 114, 111, 120, 59, 1, 10885, 111, 116, 59, 1, 8918, 113,
      4, 2, 103, 113, 12115, 12120, 116, 114, 59, 1, 8922, 103, 116, 114, 59, 1, 10891, 116, 114,
      59, 1, 8822, 105, 109, 59, 1, 8818, 4, 3, 105, 108, 114, 12144, 12150, 12156, 115, 104, 116,
      59, 1, 10620, 111, 111, 114, 59, 1, 8970, 59, 3, 55349, 56617, 4, 2, 59, 69, 12166, 12168, 1,
      8822, 59, 1, 10897, 4, 2, 97, 98, 12177, 12198, 114, 4, 2, 100, 117, 12184, 12187, 59, 1,
      8637, 4, 2, 59, 108, 12193, 12195, 1, 8636, 59, 1, 10602, 108, 107, 59, 1, 9604, 99, 121, 59,
      1, 1113, 4, 5, 59, 97, 99, 104, 116, 12220, 12222, 12227, 12235, 12241, 1, 8810, 114, 114, 59,
      1, 8647, 111, 114, 110, 101, 114, 59, 1, 8990, 97, 114, 100, 59, 1, 10603, 114, 105, 59, 1,
      9722, 4, 2, 105, 111, 12252, 12258, 100, 111, 116, 59, 1, 320, 117, 115, 116, 4, 2, 59, 97,
      12267, 12269, 1, 9136, 99, 104, 101, 59, 1, 9136, 4, 4, 69, 97, 101, 115, 12285, 12288, 12303,
      12322, 59, 1, 8808, 112, 4, 2, 59, 112, 12295, 12297, 1, 10889, 114, 111, 120, 59, 1, 10889,
      4, 2, 59, 113, 12309, 12311, 1, 10887, 4, 2, 59, 113, 12317, 12319, 1, 10887, 59, 1, 8808,
      105, 109, 59, 1, 8934, 4, 8, 97, 98, 110, 111, 112, 116, 119, 122, 12345, 12359, 12364, 12421,
      12446, 12467, 12474, 12490, 4, 2, 110, 114, 12351, 12355, 103, 59, 1, 10220, 114, 59, 1, 8701,
      114, 107, 59, 1, 10214, 103, 4, 3, 108, 109, 114, 12373, 12401, 12409, 101, 102, 116, 4, 2,
      97, 114, 12382, 12389, 114, 114, 111, 119, 59, 1, 10229, 105, 103, 104, 116, 97, 114, 114,
      111, 119, 59, 1, 10231, 97, 112, 115, 116, 111, 59, 1, 10236, 105, 103, 104, 116, 97, 114,
      114, 111, 119, 59, 1, 10230, 112, 97, 114, 114, 111, 119, 4, 2, 108, 114, 12433, 12439, 101,
      102, 116, 59, 1, 8619, 105, 103, 104, 116, 59, 1, 8620, 4, 3, 97, 102, 108, 12454, 12458,
      12462, 114, 59, 1, 10629, 59, 3, 55349, 56669, 117, 115, 59, 1, 10797, 105, 109, 101, 115, 59,
      1, 10804, 4, 2, 97, 98, 12480, 12485, 115, 116, 59, 1, 8727, 97, 114, 59, 1, 95, 4, 3, 59,
      101, 102, 12498, 12500, 12506, 1, 9674, 110, 103, 101, 59, 1, 9674, 59, 1, 10731, 97, 114, 4,
      2, 59, 108, 12517, 12519, 1, 40, 116, 59, 1, 10643, 4, 5, 97, 99, 104, 109, 116, 12535, 12540,
      12548, 12561, 12564, 114, 114, 59, 1, 8646, 111, 114, 110, 101, 114, 59, 1, 8991, 97, 114, 4,
      2, 59, 100, 12556, 12558, 1, 8651, 59, 1, 10605, 59, 1, 8206, 114, 105, 59, 1, 8895, 4, 6, 97,
      99, 104, 105, 113, 116, 12583, 12589, 12594, 12597, 12614, 12635, 113, 117, 111, 59, 1, 8249,
      114, 59, 3, 55349, 56513, 59, 1, 8624, 109, 4, 3, 59, 101, 103, 12606, 12608, 12611, 1, 8818,
      59, 1, 10893, 59, 1, 10895, 4, 2, 98, 117, 12620, 12623, 59, 1, 91, 111, 4, 2, 59, 114, 12630,
      12632, 1, 8216, 59, 1, 8218, 114, 111, 107, 59, 1, 322, 5, 60, 8, 59, 99, 100, 104, 105, 108,
      113, 114, 12660, 12662, 12675, 12680, 12686, 12692, 12698, 12705, 1, 60, 4, 2, 99, 105, 12668,
      12671, 59, 1, 10918, 114, 59, 1, 10873, 111, 116, 59, 1, 8918, 114, 101, 101, 59, 1, 8907,
      109, 101, 115, 59, 1, 8905, 97, 114, 114, 59, 1, 10614, 117, 101, 115, 116, 59, 1, 10875, 4,
      2, 80, 105, 12711, 12716, 97, 114, 59, 1, 10646, 4, 3, 59, 101, 102, 12724, 12726, 12729, 1,
      9667, 59, 1, 8884, 59, 1, 9666, 114, 4, 2, 100, 117, 12739, 12746, 115, 104, 97, 114, 59, 1,
      10570, 104, 97, 114, 59, 1, 10598, 4, 2, 101, 110, 12758, 12768, 114, 116, 110, 101, 113, 113,
      59, 3, 8808, 65024, 69, 59, 3, 8808, 65024, 4, 14, 68, 97, 99, 100, 101, 102, 104, 105, 108,
      110, 111, 112, 115, 117, 12803, 12809, 12893, 12908, 12914, 12928, 12933, 12937, 13011, 13025,
      13032, 13049, 13052, 13069, 68, 111, 116, 59, 1, 8762, 4, 4, 99, 108, 112, 114, 12819, 12827,
      12849, 12887, 114, 5, 175, 1, 59, 12825, 1, 175, 4, 2, 101, 116, 12833, 12836, 59, 1, 9794, 4,
      2, 59, 101, 12842, 12844, 1, 10016, 115, 101, 59, 1, 10016, 4, 2, 59, 115, 12855, 12857, 1,
      8614, 116, 111, 4, 4, 59, 100, 108, 117, 12869, 12871, 12877, 12883, 1, 8614, 111, 119, 110,
      59, 1, 8615, 101, 102, 116, 59, 1, 8612, 112, 59, 1, 8613, 107, 101, 114, 59, 1, 9646, 4, 2,
      111, 121, 12899, 12905, 109, 109, 97, 59, 1, 10793, 59, 1, 1084, 97, 115, 104, 59, 1, 8212,
      97, 115, 117, 114, 101, 100, 97, 110, 103, 108, 101, 59, 1, 8737, 114, 59, 3, 55349, 56618,
      111, 59, 1, 8487, 4, 3, 99, 100, 110, 12945, 12954, 12985, 114, 111, 5, 181, 1, 59, 12952, 1,
      181, 4, 4, 59, 97, 99, 100, 12964, 12966, 12971, 12976, 1, 8739, 115, 116, 59, 1, 42, 105,
      114, 59, 1, 10992, 111, 116, 5, 183, 1, 59, 12983, 1, 183, 117, 115, 4, 3, 59, 98, 100, 12995,
      12997, 13e3, 1, 8722, 59, 1, 8863, 4, 2, 59, 117, 13006, 13008, 1, 8760, 59, 1, 10794, 4, 2,
      99, 100, 13017, 13021, 112, 59, 1, 10971, 114, 59, 1, 8230, 112, 108, 117, 115, 59, 1, 8723,
      4, 2, 100, 112, 13038, 13044, 101, 108, 115, 59, 1, 8871, 102, 59, 3, 55349, 56670, 59, 1,
      8723, 4, 2, 99, 116, 13058, 13063, 114, 59, 3, 55349, 56514, 112, 111, 115, 59, 1, 8766, 4, 3,
      59, 108, 109, 13077, 13079, 13087, 1, 956, 116, 105, 109, 97, 112, 59, 1, 8888, 97, 112, 59,
      1, 8888, 4, 24, 71, 76, 82, 86, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 108, 109, 111,
      112, 114, 115, 116, 117, 118, 119, 13142, 13165, 13217, 13229, 13247, 13330, 13359, 13414,
      13420, 13508, 13513, 13579, 13602, 13626, 13631, 13762, 13767, 13855, 13936, 13995, 14214,
      14285, 14312, 14432, 4, 2, 103, 116, 13148, 13152, 59, 3, 8921, 824, 4, 2, 59, 118, 13158,
      13161, 3, 8811, 8402, 59, 3, 8811, 824, 4, 3, 101, 108, 116, 13173, 13200, 13204, 102, 116, 4,
      2, 97, 114, 13181, 13188, 114, 114, 111, 119, 59, 1, 8653, 105, 103, 104, 116, 97, 114, 114,
      111, 119, 59, 1, 8654, 59, 3, 8920, 824, 4, 2, 59, 118, 13210, 13213, 3, 8810, 8402, 59, 3,
      8810, 824, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8655, 4, 2, 68, 100, 13235,
      13241, 97, 115, 104, 59, 1, 8879, 97, 115, 104, 59, 1, 8878, 4, 5, 98, 99, 110, 112, 116,
      13259, 13264, 13270, 13275, 13308, 108, 97, 59, 1, 8711, 117, 116, 101, 59, 1, 324, 103, 59,
      3, 8736, 8402, 4, 5, 59, 69, 105, 111, 112, 13287, 13289, 13293, 13298, 13302, 1, 8777, 59, 3,
      10864, 824, 100, 59, 3, 8779, 824, 115, 59, 1, 329, 114, 111, 120, 59, 1, 8777, 117, 114, 4,
      2, 59, 97, 13316, 13318, 1, 9838, 108, 4, 2, 59, 115, 13325, 13327, 1, 9838, 59, 1, 8469, 4,
      2, 115, 117, 13336, 13344, 112, 5, 160, 1, 59, 13342, 1, 160, 109, 112, 4, 2, 59, 101, 13352,
      13355, 3, 8782, 824, 59, 3, 8783, 824, 4, 5, 97, 101, 111, 117, 121, 13371, 13385, 13391,
      13407, 13411, 4, 2, 112, 114, 13377, 13380, 59, 1, 10819, 111, 110, 59, 1, 328, 100, 105, 108,
      59, 1, 326, 110, 103, 4, 2, 59, 100, 13399, 13401, 1, 8775, 111, 116, 59, 3, 10861, 824, 112,
      59, 1, 10818, 59, 1, 1085, 97, 115, 104, 59, 1, 8211, 4, 7, 59, 65, 97, 100, 113, 115, 120,
      13436, 13438, 13443, 13466, 13472, 13478, 13494, 1, 8800, 114, 114, 59, 1, 8663, 114, 4, 2,
      104, 114, 13450, 13454, 107, 59, 1, 10532, 4, 2, 59, 111, 13460, 13462, 1, 8599, 119, 59, 1,
      8599, 111, 116, 59, 3, 8784, 824, 117, 105, 118, 59, 1, 8802, 4, 2, 101, 105, 13484, 13489,
      97, 114, 59, 1, 10536, 109, 59, 3, 8770, 824, 105, 115, 116, 4, 2, 59, 115, 13503, 13505, 1,
      8708, 59, 1, 8708, 114, 59, 3, 55349, 56619, 4, 4, 69, 101, 115, 116, 13523, 13527, 13563,
      13568, 59, 3, 8807, 824, 4, 3, 59, 113, 115, 13535, 13537, 13559, 1, 8817, 4, 3, 59, 113, 115,
      13545, 13547, 13551, 1, 8817, 59, 3, 8807, 824, 108, 97, 110, 116, 59, 3, 10878, 824, 59, 3,
      10878, 824, 105, 109, 59, 1, 8821, 4, 2, 59, 114, 13574, 13576, 1, 8815, 59, 1, 8815, 4, 3,
      65, 97, 112, 13587, 13592, 13597, 114, 114, 59, 1, 8654, 114, 114, 59, 1, 8622, 97, 114, 59,
      1, 10994, 4, 3, 59, 115, 118, 13610, 13612, 13623, 1, 8715, 4, 2, 59, 100, 13618, 13620, 1,
      8956, 59, 1, 8954, 59, 1, 8715, 99, 121, 59, 1, 1114, 4, 7, 65, 69, 97, 100, 101, 115, 116,
      13647, 13652, 13656, 13661, 13665, 13737, 13742, 114, 114, 59, 1, 8653, 59, 3, 8806, 824, 114,
      114, 59, 1, 8602, 114, 59, 1, 8229, 4, 4, 59, 102, 113, 115, 13675, 13677, 13703, 13725, 1,
      8816, 116, 4, 2, 97, 114, 13684, 13691, 114, 114, 111, 119, 59, 1, 8602, 105, 103, 104, 116,
      97, 114, 114, 111, 119, 59, 1, 8622, 4, 3, 59, 113, 115, 13711, 13713, 13717, 1, 8816, 59, 3,
      8806, 824, 108, 97, 110, 116, 59, 3, 10877, 824, 4, 2, 59, 115, 13731, 13734, 3, 10877, 824,
      59, 1, 8814, 105, 109, 59, 1, 8820, 4, 2, 59, 114, 13748, 13750, 1, 8814, 105, 4, 2, 59, 101,
      13757, 13759, 1, 8938, 59, 1, 8940, 105, 100, 59, 1, 8740, 4, 2, 112, 116, 13773, 13778, 102,
      59, 3, 55349, 56671, 5, 172, 3, 59, 105, 110, 13787, 13789, 13829, 1, 172, 110, 4, 4, 59, 69,
      100, 118, 13800, 13802, 13806, 13812, 1, 8713, 59, 3, 8953, 824, 111, 116, 59, 3, 8949, 824,
      4, 3, 97, 98, 99, 13820, 13823, 13826, 59, 1, 8713, 59, 1, 8951, 59, 1, 8950, 105, 4, 2, 59,
      118, 13836, 13838, 1, 8716, 4, 3, 97, 98, 99, 13846, 13849, 13852, 59, 1, 8716, 59, 1, 8958,
      59, 1, 8957, 4, 3, 97, 111, 114, 13863, 13892, 13899, 114, 4, 4, 59, 97, 115, 116, 13874,
      13876, 13883, 13888, 1, 8742, 108, 108, 101, 108, 59, 1, 8742, 108, 59, 3, 11005, 8421, 59, 3,
      8706, 824, 108, 105, 110, 116, 59, 1, 10772, 4, 3, 59, 99, 101, 13907, 13909, 13914, 1, 8832,
      117, 101, 59, 1, 8928, 4, 2, 59, 99, 13920, 13923, 3, 10927, 824, 4, 2, 59, 101, 13929, 13931,
      1, 8832, 113, 59, 3, 10927, 824, 4, 4, 65, 97, 105, 116, 13946, 13951, 13971, 13982, 114, 114,
      59, 1, 8655, 114, 114, 4, 3, 59, 99, 119, 13961, 13963, 13967, 1, 8603, 59, 3, 10547, 824, 59,
      3, 8605, 824, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8603, 114, 105, 4, 2, 59, 101,
      13990, 13992, 1, 8939, 59, 1, 8941, 4, 7, 99, 104, 105, 109, 112, 113, 117, 14011, 14036,
      14060, 14080, 14085, 14090, 14106, 4, 4, 59, 99, 101, 114, 14021, 14023, 14028, 14032, 1,
      8833, 117, 101, 59, 1, 8929, 59, 3, 10928, 824, 59, 3, 55349, 56515, 111, 114, 116, 4, 2, 109,
      112, 14045, 14050, 105, 100, 59, 1, 8740, 97, 114, 97, 108, 108, 101, 108, 59, 1, 8742, 109,
      4, 2, 59, 101, 14067, 14069, 1, 8769, 4, 2, 59, 113, 14075, 14077, 1, 8772, 59, 1, 8772, 105,
      100, 59, 1, 8740, 97, 114, 59, 1, 8742, 115, 117, 4, 2, 98, 112, 14098, 14102, 101, 59, 1,
      8930, 101, 59, 1, 8931, 4, 3, 98, 99, 112, 14114, 14157, 14171, 4, 4, 59, 69, 101, 115, 14124,
      14126, 14130, 14133, 1, 8836, 59, 3, 10949, 824, 59, 1, 8840, 101, 116, 4, 2, 59, 101, 14141,
      14144, 3, 8834, 8402, 113, 4, 2, 59, 113, 14151, 14153, 1, 8840, 59, 3, 10949, 824, 99, 4, 2,
      59, 101, 14164, 14166, 1, 8833, 113, 59, 3, 10928, 824, 4, 4, 59, 69, 101, 115, 14181, 14183,
      14187, 14190, 1, 8837, 59, 3, 10950, 824, 59, 1, 8841, 101, 116, 4, 2, 59, 101, 14198, 14201,
      3, 8835, 8402, 113, 4, 2, 59, 113, 14208, 14210, 1, 8841, 59, 3, 10950, 824, 4, 4, 103, 105,
      108, 114, 14224, 14228, 14238, 14242, 108, 59, 1, 8825, 108, 100, 101, 5, 241, 1, 59, 14236,
      1, 241, 103, 59, 1, 8824, 105, 97, 110, 103, 108, 101, 4, 2, 108, 114, 14254, 14269, 101, 102,
      116, 4, 2, 59, 101, 14263, 14265, 1, 8938, 113, 59, 1, 8940, 105, 103, 104, 116, 4, 2, 59,
      101, 14279, 14281, 1, 8939, 113, 59, 1, 8941, 4, 2, 59, 109, 14291, 14293, 1, 957, 4, 3, 59,
      101, 115, 14301, 14303, 14308, 1, 35, 114, 111, 59, 1, 8470, 112, 59, 1, 8199, 4, 9, 68, 72,
      97, 100, 103, 105, 108, 114, 115, 14332, 14338, 14344, 14349, 14355, 14369, 14376, 14408,
      14426, 97, 115, 104, 59, 1, 8877, 97, 114, 114, 59, 1, 10500, 112, 59, 3, 8781, 8402, 97, 115,
      104, 59, 1, 8876, 4, 2, 101, 116, 14361, 14365, 59, 3, 8805, 8402, 59, 3, 62, 8402, 110, 102,
      105, 110, 59, 1, 10718, 4, 3, 65, 101, 116, 14384, 14389, 14393, 114, 114, 59, 1, 10498, 59,
      3, 8804, 8402, 4, 2, 59, 114, 14399, 14402, 3, 60, 8402, 105, 101, 59, 3, 8884, 8402, 4, 2,
      65, 116, 14414, 14419, 114, 114, 59, 1, 10499, 114, 105, 101, 59, 3, 8885, 8402, 105, 109, 59,
      3, 8764, 8402, 4, 3, 65, 97, 110, 14440, 14445, 14468, 114, 114, 59, 1, 8662, 114, 4, 2, 104,
      114, 14452, 14456, 107, 59, 1, 10531, 4, 2, 59, 111, 14462, 14464, 1, 8598, 119, 59, 1, 8598,
      101, 97, 114, 59, 1, 10535, 4, 18, 83, 97, 99, 100, 101, 102, 103, 104, 105, 108, 109, 111,
      112, 114, 115, 116, 117, 118, 14512, 14515, 14535, 14560, 14597, 14603, 14618, 14643, 14657,
      14662, 14701, 14741, 14747, 14769, 14851, 14877, 14907, 14916, 59, 1, 9416, 4, 2, 99, 115,
      14521, 14531, 117, 116, 101, 5, 243, 1, 59, 14529, 1, 243, 116, 59, 1, 8859, 4, 2, 105, 121,
      14541, 14557, 114, 4, 2, 59, 99, 14548, 14550, 1, 8858, 5, 244, 1, 59, 14555, 1, 244, 59, 1,
      1086, 4, 5, 97, 98, 105, 111, 115, 14572, 14577, 14583, 14587, 14591, 115, 104, 59, 1, 8861,
      108, 97, 99, 59, 1, 337, 118, 59, 1, 10808, 116, 59, 1, 8857, 111, 108, 100, 59, 1, 10684,
      108, 105, 103, 59, 1, 339, 4, 2, 99, 114, 14609, 14614, 105, 114, 59, 1, 10687, 59, 3, 55349,
      56620, 4, 3, 111, 114, 116, 14626, 14630, 14640, 110, 59, 1, 731, 97, 118, 101, 5, 242, 1, 59,
      14638, 1, 242, 59, 1, 10689, 4, 2, 98, 109, 14649, 14654, 97, 114, 59, 1, 10677, 59, 1, 937,
      110, 116, 59, 1, 8750, 4, 4, 97, 99, 105, 116, 14672, 14677, 14693, 14698, 114, 114, 59, 1,
      8634, 4, 2, 105, 114, 14683, 14687, 114, 59, 1, 10686, 111, 115, 115, 59, 1, 10683, 110, 101,
      59, 1, 8254, 59, 1, 10688, 4, 3, 97, 101, 105, 14709, 14714, 14719, 99, 114, 59, 1, 333, 103,
      97, 59, 1, 969, 4, 3, 99, 100, 110, 14727, 14733, 14736, 114, 111, 110, 59, 1, 959, 59, 1,
      10678, 117, 115, 59, 1, 8854, 112, 102, 59, 3, 55349, 56672, 4, 3, 97, 101, 108, 14755, 14759,
      14764, 114, 59, 1, 10679, 114, 112, 59, 1, 10681, 117, 115, 59, 1, 8853, 4, 7, 59, 97, 100,
      105, 111, 115, 118, 14785, 14787, 14792, 14831, 14837, 14841, 14848, 1, 8744, 114, 114, 59, 1,
      8635, 4, 4, 59, 101, 102, 109, 14802, 14804, 14817, 14824, 1, 10845, 114, 4, 2, 59, 111,
      14811, 14813, 1, 8500, 102, 59, 1, 8500, 5, 170, 1, 59, 14822, 1, 170, 5, 186, 1, 59, 14829,
      1, 186, 103, 111, 102, 59, 1, 8886, 114, 59, 1, 10838, 108, 111, 112, 101, 59, 1, 10839, 59,
      1, 10843, 4, 3, 99, 108, 111, 14859, 14863, 14873, 114, 59, 1, 8500, 97, 115, 104, 5, 248, 1,
      59, 14871, 1, 248, 108, 59, 1, 8856, 105, 4, 2, 108, 109, 14884, 14893, 100, 101, 5, 245, 1,
      59, 14891, 1, 245, 101, 115, 4, 2, 59, 97, 14901, 14903, 1, 8855, 115, 59, 1, 10806, 109, 108,
      5, 246, 1, 59, 14914, 1, 246, 98, 97, 114, 59, 1, 9021, 4, 12, 97, 99, 101, 102, 104, 105,
      108, 109, 111, 114, 115, 117, 14948, 14992, 14996, 15033, 15038, 15068, 15090, 15189, 15192,
      15222, 15427, 15441, 114, 4, 4, 59, 97, 115, 116, 14959, 14961, 14976, 14989, 1, 8741, 5, 182,
      2, 59, 108, 14968, 14970, 1, 182, 108, 101, 108, 59, 1, 8741, 4, 2, 105, 108, 14982, 14986,
      109, 59, 1, 10995, 59, 1, 11005, 59, 1, 8706, 121, 59, 1, 1087, 114, 4, 5, 99, 105, 109, 112,
      116, 15009, 15014, 15019, 15024, 15027, 110, 116, 59, 1, 37, 111, 100, 59, 1, 46, 105, 108,
      59, 1, 8240, 59, 1, 8869, 101, 110, 107, 59, 1, 8241, 114, 59, 3, 55349, 56621, 4, 3, 105,
      109, 111, 15046, 15057, 15063, 4, 2, 59, 118, 15052, 15054, 1, 966, 59, 1, 981, 109, 97, 116,
      59, 1, 8499, 110, 101, 59, 1, 9742, 4, 3, 59, 116, 118, 15076, 15078, 15087, 1, 960, 99, 104,
      102, 111, 114, 107, 59, 1, 8916, 59, 1, 982, 4, 2, 97, 117, 15096, 15119, 110, 4, 2, 99, 107,
      15103, 15115, 107, 4, 2, 59, 104, 15110, 15112, 1, 8463, 59, 1, 8462, 118, 59, 1, 8463, 115,
      4, 9, 59, 97, 98, 99, 100, 101, 109, 115, 116, 15140, 15142, 15148, 15151, 15156, 15168,
      15171, 15179, 15184, 1, 43, 99, 105, 114, 59, 1, 10787, 59, 1, 8862, 105, 114, 59, 1, 10786,
      4, 2, 111, 117, 15162, 15165, 59, 1, 8724, 59, 1, 10789, 59, 1, 10866, 110, 5, 177, 1, 59,
      15177, 1, 177, 105, 109, 59, 1, 10790, 119, 111, 59, 1, 10791, 59, 1, 177, 4, 3, 105, 112,
      117, 15200, 15208, 15213, 110, 116, 105, 110, 116, 59, 1, 10773, 102, 59, 3, 55349, 56673,
      110, 100, 5, 163, 1, 59, 15220, 1, 163, 4, 10, 59, 69, 97, 99, 101, 105, 110, 111, 115, 117,
      15244, 15246, 15249, 15253, 15258, 15334, 15347, 15367, 15416, 15421, 1, 8826, 59, 1, 10931,
      112, 59, 1, 10935, 117, 101, 59, 1, 8828, 4, 2, 59, 99, 15264, 15266, 1, 10927, 4, 6, 59, 97,
      99, 101, 110, 115, 15280, 15282, 15290, 15299, 15303, 15329, 1, 8826, 112, 112, 114, 111, 120,
      59, 1, 10935, 117, 114, 108, 121, 101, 113, 59, 1, 8828, 113, 59, 1, 10927, 4, 3, 97, 101,
      115, 15311, 15319, 15324, 112, 112, 114, 111, 120, 59, 1, 10937, 113, 113, 59, 1, 10933, 105,
      109, 59, 1, 8936, 105, 109, 59, 1, 8830, 109, 101, 4, 2, 59, 115, 15342, 15344, 1, 8242, 59,
      1, 8473, 4, 3, 69, 97, 115, 15355, 15358, 15362, 59, 1, 10933, 112, 59, 1, 10937, 105, 109,
      59, 1, 8936, 4, 3, 100, 102, 112, 15375, 15378, 15404, 59, 1, 8719, 4, 3, 97, 108, 115, 15386,
      15392, 15398, 108, 97, 114, 59, 1, 9006, 105, 110, 101, 59, 1, 8978, 117, 114, 102, 59, 1,
      8979, 4, 2, 59, 116, 15410, 15412, 1, 8733, 111, 59, 1, 8733, 105, 109, 59, 1, 8830, 114, 101,
      108, 59, 1, 8880, 4, 2, 99, 105, 15433, 15438, 114, 59, 3, 55349, 56517, 59, 1, 968, 110, 99,
      115, 112, 59, 1, 8200, 4, 6, 102, 105, 111, 112, 115, 117, 15462, 15467, 15472, 15478, 15485,
      15491, 114, 59, 3, 55349, 56622, 110, 116, 59, 1, 10764, 112, 102, 59, 3, 55349, 56674, 114,
      105, 109, 101, 59, 1, 8279, 99, 114, 59, 3, 55349, 56518, 4, 3, 97, 101, 111, 15499, 15520,
      15534, 116, 4, 2, 101, 105, 15506, 15515, 114, 110, 105, 111, 110, 115, 59, 1, 8461, 110, 116,
      59, 1, 10774, 115, 116, 4, 2, 59, 101, 15528, 15530, 1, 63, 113, 59, 1, 8799, 116, 5, 34, 1,
      59, 15540, 1, 34, 4, 21, 65, 66, 72, 97, 98, 99, 100, 101, 102, 104, 105, 108, 109, 110, 111,
      112, 114, 115, 116, 117, 120, 15586, 15609, 15615, 15620, 15796, 15855, 15893, 15931, 15977,
      16001, 16039, 16183, 16204, 16222, 16228, 16285, 16312, 16318, 16363, 16408, 16416, 4, 3, 97,
      114, 116, 15594, 15599, 15603, 114, 114, 59, 1, 8667, 114, 59, 1, 8658, 97, 105, 108, 59, 1,
      10524, 97, 114, 114, 59, 1, 10511, 97, 114, 59, 1, 10596, 4, 7, 99, 100, 101, 110, 113, 114,
      116, 15636, 15651, 15656, 15664, 15687, 15696, 15770, 4, 2, 101, 117, 15642, 15646, 59, 3,
      8765, 817, 116, 101, 59, 1, 341, 105, 99, 59, 1, 8730, 109, 112, 116, 121, 118, 59, 1, 10675,
      103, 4, 4, 59, 100, 101, 108, 15675, 15677, 15680, 15683, 1, 10217, 59, 1, 10642, 59, 1,
      10661, 101, 59, 1, 10217, 117, 111, 5, 187, 1, 59, 15694, 1, 187, 114, 4, 11, 59, 97, 98, 99,
      102, 104, 108, 112, 115, 116, 119, 15721, 15723, 15727, 15739, 15742, 15746, 15750, 15754,
      15758, 15763, 15767, 1, 8594, 112, 59, 1, 10613, 4, 2, 59, 102, 15733, 15735, 1, 8677, 115,
      59, 1, 10528, 59, 1, 10547, 115, 59, 1, 10526, 107, 59, 1, 8618, 112, 59, 1, 8620, 108, 59, 1,
      10565, 105, 109, 59, 1, 10612, 108, 59, 1, 8611, 59, 1, 8605, 4, 2, 97, 105, 15776, 15781,
      105, 108, 59, 1, 10522, 111, 4, 2, 59, 110, 15788, 15790, 1, 8758, 97, 108, 115, 59, 1, 8474,
      4, 3, 97, 98, 114, 15804, 15809, 15814, 114, 114, 59, 1, 10509, 114, 107, 59, 1, 10099, 4, 2,
      97, 107, 15820, 15833, 99, 4, 2, 101, 107, 15827, 15830, 59, 1, 125, 59, 1, 93, 4, 2, 101,
      115, 15839, 15842, 59, 1, 10636, 108, 4, 2, 100, 117, 15849, 15852, 59, 1, 10638, 59, 1,
      10640, 4, 4, 97, 101, 117, 121, 15865, 15871, 15886, 15890, 114, 111, 110, 59, 1, 345, 4, 2,
      100, 105, 15877, 15882, 105, 108, 59, 1, 343, 108, 59, 1, 8969, 98, 59, 1, 125, 59, 1, 1088,
      4, 4, 99, 108, 113, 115, 15903, 15907, 15914, 15927, 97, 59, 1, 10551, 100, 104, 97, 114, 59,
      1, 10601, 117, 111, 4, 2, 59, 114, 15922, 15924, 1, 8221, 59, 1, 8221, 104, 59, 1, 8627, 4, 3,
      97, 99, 103, 15939, 15966, 15970, 108, 4, 4, 59, 105, 112, 115, 15950, 15952, 15957, 15963, 1,
      8476, 110, 101, 59, 1, 8475, 97, 114, 116, 59, 1, 8476, 59, 1, 8477, 116, 59, 1, 9645, 5, 174,
      1, 59, 15975, 1, 174, 4, 3, 105, 108, 114, 15985, 15991, 15997, 115, 104, 116, 59, 1, 10621,
      111, 111, 114, 59, 1, 8971, 59, 3, 55349, 56623, 4, 2, 97, 111, 16007, 16028, 114, 4, 2, 100,
      117, 16014, 16017, 59, 1, 8641, 4, 2, 59, 108, 16023, 16025, 1, 8640, 59, 1, 10604, 4, 2, 59,
      118, 16034, 16036, 1, 961, 59, 1, 1009, 4, 3, 103, 110, 115, 16047, 16167, 16171, 104, 116, 4,
      6, 97, 104, 108, 114, 115, 116, 16063, 16081, 16103, 16130, 16143, 16155, 114, 114, 111, 119,
      4, 2, 59, 116, 16073, 16075, 1, 8594, 97, 105, 108, 59, 1, 8611, 97, 114, 112, 111, 111, 110,
      4, 2, 100, 117, 16093, 16099, 111, 119, 110, 59, 1, 8641, 112, 59, 1, 8640, 101, 102, 116, 4,
      2, 97, 104, 16112, 16120, 114, 114, 111, 119, 115, 59, 1, 8644, 97, 114, 112, 111, 111, 110,
      115, 59, 1, 8652, 105, 103, 104, 116, 97, 114, 114, 111, 119, 115, 59, 1, 8649, 113, 117, 105,
      103, 97, 114, 114, 111, 119, 59, 1, 8605, 104, 114, 101, 101, 116, 105, 109, 101, 115, 59, 1,
      8908, 103, 59, 1, 730, 105, 110, 103, 100, 111, 116, 115, 101, 113, 59, 1, 8787, 4, 3, 97,
      104, 109, 16191, 16196, 16201, 114, 114, 59, 1, 8644, 97, 114, 59, 1, 8652, 59, 1, 8207, 111,
      117, 115, 116, 4, 2, 59, 97, 16214, 16216, 1, 9137, 99, 104, 101, 59, 1, 9137, 109, 105, 100,
      59, 1, 10990, 4, 4, 97, 98, 112, 116, 16238, 16252, 16257, 16278, 4, 2, 110, 114, 16244,
      16248, 103, 59, 1, 10221, 114, 59, 1, 8702, 114, 107, 59, 1, 10215, 4, 3, 97, 102, 108, 16265,
      16269, 16273, 114, 59, 1, 10630, 59, 3, 55349, 56675, 117, 115, 59, 1, 10798, 105, 109, 101,
      115, 59, 1, 10805, 4, 2, 97, 112, 16291, 16304, 114, 4, 2, 59, 103, 16298, 16300, 1, 41, 116,
      59, 1, 10644, 111, 108, 105, 110, 116, 59, 1, 10770, 97, 114, 114, 59, 1, 8649, 4, 4, 97, 99,
      104, 113, 16328, 16334, 16339, 16342, 113, 117, 111, 59, 1, 8250, 114, 59, 3, 55349, 56519,
      59, 1, 8625, 4, 2, 98, 117, 16348, 16351, 59, 1, 93, 111, 4, 2, 59, 114, 16358, 16360, 1,
      8217, 59, 1, 8217, 4, 3, 104, 105, 114, 16371, 16377, 16383, 114, 101, 101, 59, 1, 8908, 109,
      101, 115, 59, 1, 8906, 105, 4, 4, 59, 101, 102, 108, 16394, 16396, 16399, 16402, 1, 9657, 59,
      1, 8885, 59, 1, 9656, 116, 114, 105, 59, 1, 10702, 108, 117, 104, 97, 114, 59, 1, 10600, 59,
      1, 8478, 4, 19, 97, 98, 99, 100, 101, 102, 104, 105, 108, 109, 111, 112, 113, 114, 115, 116,
      117, 119, 122, 16459, 16466, 16472, 16572, 16590, 16672, 16687, 16746, 16844, 16850, 16924,
      16963, 16988, 17115, 17121, 17154, 17206, 17614, 17656, 99, 117, 116, 101, 59, 1, 347, 113,
      117, 111, 59, 1, 8218, 4, 10, 59, 69, 97, 99, 101, 105, 110, 112, 115, 121, 16494, 16496,
      16499, 16513, 16518, 16531, 16536, 16556, 16564, 16569, 1, 8827, 59, 1, 10932, 4, 2, 112, 114,
      16505, 16508, 59, 1, 10936, 111, 110, 59, 1, 353, 117, 101, 59, 1, 8829, 4, 2, 59, 100, 16524,
      16526, 1, 10928, 105, 108, 59, 1, 351, 114, 99, 59, 1, 349, 4, 3, 69, 97, 115, 16544, 16547,
      16551, 59, 1, 10934, 112, 59, 1, 10938, 105, 109, 59, 1, 8937, 111, 108, 105, 110, 116, 59, 1,
      10771, 105, 109, 59, 1, 8831, 59, 1, 1089, 111, 116, 4, 3, 59, 98, 101, 16582, 16584, 16587,
      1, 8901, 59, 1, 8865, 59, 1, 10854, 4, 7, 65, 97, 99, 109, 115, 116, 120, 16606, 16611, 16634,
      16642, 16646, 16652, 16668, 114, 114, 59, 1, 8664, 114, 4, 2, 104, 114, 16618, 16622, 107, 59,
      1, 10533, 4, 2, 59, 111, 16628, 16630, 1, 8600, 119, 59, 1, 8600, 116, 5, 167, 1, 59, 16640,
      1, 167, 105, 59, 1, 59, 119, 97, 114, 59, 1, 10537, 109, 4, 2, 105, 110, 16659, 16665, 110,
      117, 115, 59, 1, 8726, 59, 1, 8726, 116, 59, 1, 10038, 114, 4, 2, 59, 111, 16679, 16682, 3,
      55349, 56624, 119, 110, 59, 1, 8994, 4, 4, 97, 99, 111, 121, 16697, 16702, 16716, 16739, 114,
      112, 59, 1, 9839, 4, 2, 104, 121, 16708, 16713, 99, 121, 59, 1, 1097, 59, 1, 1096, 114, 116,
      4, 2, 109, 112, 16724, 16729, 105, 100, 59, 1, 8739, 97, 114, 97, 108, 108, 101, 108, 59, 1,
      8741, 5, 173, 1, 59, 16744, 1, 173, 4, 2, 103, 109, 16752, 16770, 109, 97, 4, 3, 59, 102, 118,
      16762, 16764, 16767, 1, 963, 59, 1, 962, 59, 1, 962, 4, 8, 59, 100, 101, 103, 108, 110, 112,
      114, 16788, 16790, 16795, 16806, 16817, 16828, 16832, 16838, 1, 8764, 111, 116, 59, 1, 10858,
      4, 2, 59, 113, 16801, 16803, 1, 8771, 59, 1, 8771, 4, 2, 59, 69, 16812, 16814, 1, 10910, 59,
      1, 10912, 4, 2, 59, 69, 16823, 16825, 1, 10909, 59, 1, 10911, 101, 59, 1, 8774, 108, 117, 115,
      59, 1, 10788, 97, 114, 114, 59, 1, 10610, 97, 114, 114, 59, 1, 8592, 4, 4, 97, 101, 105, 116,
      16860, 16883, 16891, 16904, 4, 2, 108, 115, 16866, 16878, 108, 115, 101, 116, 109, 105, 110,
      117, 115, 59, 1, 8726, 104, 112, 59, 1, 10803, 112, 97, 114, 115, 108, 59, 1, 10724, 4, 2,
      100, 108, 16897, 16900, 59, 1, 8739, 101, 59, 1, 8995, 4, 2, 59, 101, 16910, 16912, 1, 10922,
      4, 2, 59, 115, 16918, 16920, 1, 10924, 59, 3, 10924, 65024, 4, 3, 102, 108, 112, 16932, 16938,
      16958, 116, 99, 121, 59, 1, 1100, 4, 2, 59, 98, 16944, 16946, 1, 47, 4, 2, 59, 97, 16952,
      16954, 1, 10692, 114, 59, 1, 9023, 102, 59, 3, 55349, 56676, 97, 4, 2, 100, 114, 16970, 16985,
      101, 115, 4, 2, 59, 117, 16978, 16980, 1, 9824, 105, 116, 59, 1, 9824, 59, 1, 8741, 4, 3, 99,
      115, 117, 16996, 17028, 17089, 4, 2, 97, 117, 17002, 17015, 112, 4, 2, 59, 115, 17009, 17011,
      1, 8851, 59, 3, 8851, 65024, 112, 4, 2, 59, 115, 17022, 17024, 1, 8852, 59, 3, 8852, 65024,
      117, 4, 2, 98, 112, 17035, 17062, 4, 3, 59, 101, 115, 17043, 17045, 17048, 1, 8847, 59, 1,
      8849, 101, 116, 4, 2, 59, 101, 17056, 17058, 1, 8847, 113, 59, 1, 8849, 4, 3, 59, 101, 115,
      17070, 17072, 17075, 1, 8848, 59, 1, 8850, 101, 116, 4, 2, 59, 101, 17083, 17085, 1, 8848,
      113, 59, 1, 8850, 4, 3, 59, 97, 102, 17097, 17099, 17112, 1, 9633, 114, 4, 2, 101, 102, 17106,
      17109, 59, 1, 9633, 59, 1, 9642, 59, 1, 9642, 97, 114, 114, 59, 1, 8594, 4, 4, 99, 101, 109,
      116, 17131, 17136, 17142, 17148, 114, 59, 3, 55349, 56520, 116, 109, 110, 59, 1, 8726, 105,
      108, 101, 59, 1, 8995, 97, 114, 102, 59, 1, 8902, 4, 2, 97, 114, 17160, 17172, 114, 4, 2, 59,
      102, 17167, 17169, 1, 9734, 59, 1, 9733, 4, 2, 97, 110, 17178, 17202, 105, 103, 104, 116, 4,
      2, 101, 112, 17188, 17197, 112, 115, 105, 108, 111, 110, 59, 1, 1013, 104, 105, 59, 1, 981,
      115, 59, 1, 175, 4, 5, 98, 99, 109, 110, 112, 17218, 17351, 17420, 17423, 17427, 4, 9, 59, 69,
      100, 101, 109, 110, 112, 114, 115, 17238, 17240, 17243, 17248, 17261, 17267, 17279, 17285,
      17291, 1, 8834, 59, 1, 10949, 111, 116, 59, 1, 10941, 4, 2, 59, 100, 17254, 17256, 1, 8838,
      111, 116, 59, 1, 10947, 117, 108, 116, 59, 1, 10945, 4, 2, 69, 101, 17273, 17276, 59, 1,
      10955, 59, 1, 8842, 108, 117, 115, 59, 1, 10943, 97, 114, 114, 59, 1, 10617, 4, 3, 101, 105,
      117, 17299, 17335, 17339, 116, 4, 3, 59, 101, 110, 17308, 17310, 17322, 1, 8834, 113, 4, 2,
      59, 113, 17317, 17319, 1, 8838, 59, 1, 10949, 101, 113, 4, 2, 59, 113, 17330, 17332, 1, 8842,
      59, 1, 10955, 109, 59, 1, 10951, 4, 2, 98, 112, 17345, 17348, 59, 1, 10965, 59, 1, 10963, 99,
      4, 6, 59, 97, 99, 101, 110, 115, 17366, 17368, 17376, 17385, 17389, 17415, 1, 8827, 112, 112,
      114, 111, 120, 59, 1, 10936, 117, 114, 108, 121, 101, 113, 59, 1, 8829, 113, 59, 1, 10928, 4,
      3, 97, 101, 115, 17397, 17405, 17410, 112, 112, 114, 111, 120, 59, 1, 10938, 113, 113, 59, 1,
      10934, 105, 109, 59, 1, 8937, 105, 109, 59, 1, 8831, 59, 1, 8721, 103, 59, 1, 9834, 4, 13, 49,
      50, 51, 59, 69, 100, 101, 104, 108, 109, 110, 112, 115, 17455, 17462, 17469, 17476, 17478,
      17481, 17496, 17509, 17524, 17530, 17536, 17548, 17554, 5, 185, 1, 59, 17460, 1, 185, 5, 178,
      1, 59, 17467, 1, 178, 5, 179, 1, 59, 17474, 1, 179, 1, 8835, 59, 1, 10950, 4, 2, 111, 115,
      17487, 17491, 116, 59, 1, 10942, 117, 98, 59, 1, 10968, 4, 2, 59, 100, 17502, 17504, 1, 8839,
      111, 116, 59, 1, 10948, 115, 4, 2, 111, 117, 17516, 17520, 108, 59, 1, 10185, 98, 59, 1,
      10967, 97, 114, 114, 59, 1, 10619, 117, 108, 116, 59, 1, 10946, 4, 2, 69, 101, 17542, 17545,
      59, 1, 10956, 59, 1, 8843, 108, 117, 115, 59, 1, 10944, 4, 3, 101, 105, 117, 17562, 17598,
      17602, 116, 4, 3, 59, 101, 110, 17571, 17573, 17585, 1, 8835, 113, 4, 2, 59, 113, 17580,
      17582, 1, 8839, 59, 1, 10950, 101, 113, 4, 2, 59, 113, 17593, 17595, 1, 8843, 59, 1, 10956,
      109, 59, 1, 10952, 4, 2, 98, 112, 17608, 17611, 59, 1, 10964, 59, 1, 10966, 4, 3, 65, 97, 110,
      17622, 17627, 17650, 114, 114, 59, 1, 8665, 114, 4, 2, 104, 114, 17634, 17638, 107, 59, 1,
      10534, 4, 2, 59, 111, 17644, 17646, 1, 8601, 119, 59, 1, 8601, 119, 97, 114, 59, 1, 10538,
      108, 105, 103, 5, 223, 1, 59, 17664, 1, 223, 4, 13, 97, 98, 99, 100, 101, 102, 104, 105, 111,
      112, 114, 115, 119, 17694, 17709, 17714, 17737, 17742, 17749, 17754, 17860, 17905, 17957,
      17964, 18090, 18122, 4, 2, 114, 117, 17700, 17706, 103, 101, 116, 59, 1, 8982, 59, 1, 964,
      114, 107, 59, 1, 9140, 4, 3, 97, 101, 121, 17722, 17728, 17734, 114, 111, 110, 59, 1, 357,
      100, 105, 108, 59, 1, 355, 59, 1, 1090, 111, 116, 59, 1, 8411, 108, 114, 101, 99, 59, 1, 8981,
      114, 59, 3, 55349, 56625, 4, 4, 101, 105, 107, 111, 17764, 17805, 17836, 17851, 4, 2, 114,
      116, 17770, 17786, 101, 4, 2, 52, 102, 17777, 17780, 59, 1, 8756, 111, 114, 101, 59, 1, 8756,
      97, 4, 3, 59, 115, 118, 17795, 17797, 17802, 1, 952, 121, 109, 59, 1, 977, 59, 1, 977, 4, 2,
      99, 110, 17811, 17831, 107, 4, 2, 97, 115, 17818, 17826, 112, 112, 114, 111, 120, 59, 1, 8776,
      105, 109, 59, 1, 8764, 115, 112, 59, 1, 8201, 4, 2, 97, 115, 17842, 17846, 112, 59, 1, 8776,
      105, 109, 59, 1, 8764, 114, 110, 5, 254, 1, 59, 17858, 1, 254, 4, 3, 108, 109, 110, 17868,
      17873, 17901, 100, 101, 59, 1, 732, 101, 115, 5, 215, 3, 59, 98, 100, 17884, 17886, 17898, 1,
      215, 4, 2, 59, 97, 17892, 17894, 1, 8864, 114, 59, 1, 10801, 59, 1, 10800, 116, 59, 1, 8749,
      4, 3, 101, 112, 115, 17913, 17917, 17953, 97, 59, 1, 10536, 4, 4, 59, 98, 99, 102, 17927,
      17929, 17934, 17939, 1, 8868, 111, 116, 59, 1, 9014, 105, 114, 59, 1, 10993, 4, 2, 59, 111,
      17945, 17948, 3, 55349, 56677, 114, 107, 59, 1, 10970, 97, 59, 1, 10537, 114, 105, 109, 101,
      59, 1, 8244, 4, 3, 97, 105, 112, 17972, 17977, 18082, 100, 101, 59, 1, 8482, 4, 7, 97, 100,
      101, 109, 112, 115, 116, 17993, 18051, 18056, 18059, 18066, 18072, 18076, 110, 103, 108, 101,
      4, 5, 59, 100, 108, 113, 114, 18009, 18011, 18017, 18032, 18035, 1, 9653, 111, 119, 110, 59,
      1, 9663, 101, 102, 116, 4, 2, 59, 101, 18026, 18028, 1, 9667, 113, 59, 1, 8884, 59, 1, 8796,
      105, 103, 104, 116, 4, 2, 59, 101, 18045, 18047, 1, 9657, 113, 59, 1, 8885, 111, 116, 59, 1,
      9708, 59, 1, 8796, 105, 110, 117, 115, 59, 1, 10810, 108, 117, 115, 59, 1, 10809, 98, 59, 1,
      10701, 105, 109, 101, 59, 1, 10811, 101, 122, 105, 117, 109, 59, 1, 9186, 4, 3, 99, 104, 116,
      18098, 18111, 18116, 4, 2, 114, 121, 18104, 18108, 59, 3, 55349, 56521, 59, 1, 1094, 99, 121,
      59, 1, 1115, 114, 111, 107, 59, 1, 359, 4, 2, 105, 111, 18128, 18133, 120, 116, 59, 1, 8812,
      104, 101, 97, 100, 4, 2, 108, 114, 18143, 18154, 101, 102, 116, 97, 114, 114, 111, 119, 59, 1,
      8606, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8608, 4, 18, 65, 72, 97, 98, 99, 100,
      102, 103, 104, 108, 109, 111, 112, 114, 115, 116, 117, 119, 18204, 18209, 18214, 18234, 18250,
      18268, 18292, 18308, 18319, 18343, 18379, 18397, 18413, 18504, 18547, 18553, 18584, 18603,
      114, 114, 59, 1, 8657, 97, 114, 59, 1, 10595, 4, 2, 99, 114, 18220, 18230, 117, 116, 101, 5,
      250, 1, 59, 18228, 1, 250, 114, 59, 1, 8593, 114, 4, 2, 99, 101, 18241, 18245, 121, 59, 1,
      1118, 118, 101, 59, 1, 365, 4, 2, 105, 121, 18256, 18265, 114, 99, 5, 251, 1, 59, 18263, 1,
      251, 59, 1, 1091, 4, 3, 97, 98, 104, 18276, 18281, 18287, 114, 114, 59, 1, 8645, 108, 97, 99,
      59, 1, 369, 97, 114, 59, 1, 10606, 4, 2, 105, 114, 18298, 18304, 115, 104, 116, 59, 1, 10622,
      59, 3, 55349, 56626, 114, 97, 118, 101, 5, 249, 1, 59, 18317, 1, 249, 4, 2, 97, 98, 18325,
      18338, 114, 4, 2, 108, 114, 18332, 18335, 59, 1, 8639, 59, 1, 8638, 108, 107, 59, 1, 9600, 4,
      2, 99, 116, 18349, 18374, 4, 2, 111, 114, 18355, 18369, 114, 110, 4, 2, 59, 101, 18363, 18365,
      1, 8988, 114, 59, 1, 8988, 111, 112, 59, 1, 8975, 114, 105, 59, 1, 9720, 4, 2, 97, 108, 18385,
      18390, 99, 114, 59, 1, 363, 5, 168, 1, 59, 18395, 1, 168, 4, 2, 103, 112, 18403, 18408, 111,
      110, 59, 1, 371, 102, 59, 3, 55349, 56678, 4, 6, 97, 100, 104, 108, 115, 117, 18427, 18434,
      18445, 18470, 18475, 18494, 114, 114, 111, 119, 59, 1, 8593, 111, 119, 110, 97, 114, 114, 111,
      119, 59, 1, 8597, 97, 114, 112, 111, 111, 110, 4, 2, 108, 114, 18457, 18463, 101, 102, 116,
      59, 1, 8639, 105, 103, 104, 116, 59, 1, 8638, 117, 115, 59, 1, 8846, 105, 4, 3, 59, 104, 108,
      18484, 18486, 18489, 1, 965, 59, 1, 978, 111, 110, 59, 1, 965, 112, 97, 114, 114, 111, 119,
      115, 59, 1, 8648, 4, 3, 99, 105, 116, 18512, 18537, 18542, 4, 2, 111, 114, 18518, 18532, 114,
      110, 4, 2, 59, 101, 18526, 18528, 1, 8989, 114, 59, 1, 8989, 111, 112, 59, 1, 8974, 110, 103,
      59, 1, 367, 114, 105, 59, 1, 9721, 99, 114, 59, 3, 55349, 56522, 4, 3, 100, 105, 114, 18561,
      18566, 18572, 111, 116, 59, 1, 8944, 108, 100, 101, 59, 1, 361, 105, 4, 2, 59, 102, 18579,
      18581, 1, 9653, 59, 1, 9652, 4, 2, 97, 109, 18590, 18595, 114, 114, 59, 1, 8648, 108, 5, 252,
      1, 59, 18601, 1, 252, 97, 110, 103, 108, 101, 59, 1, 10663, 4, 15, 65, 66, 68, 97, 99, 100,
      101, 102, 108, 110, 111, 112, 114, 115, 122, 18643, 18648, 18661, 18667, 18847, 18851, 18857,
      18904, 18909, 18915, 18931, 18937, 18943, 18949, 18996, 114, 114, 59, 1, 8661, 97, 114, 4, 2,
      59, 118, 18656, 18658, 1, 10984, 59, 1, 10985, 97, 115, 104, 59, 1, 8872, 4, 2, 110, 114,
      18673, 18679, 103, 114, 116, 59, 1, 10652, 4, 7, 101, 107, 110, 112, 114, 115, 116, 18695,
      18704, 18711, 18720, 18742, 18754, 18810, 112, 115, 105, 108, 111, 110, 59, 1, 1013, 97, 112,
      112, 97, 59, 1, 1008, 111, 116, 104, 105, 110, 103, 59, 1, 8709, 4, 3, 104, 105, 114, 18728,
      18732, 18735, 105, 59, 1, 981, 59, 1, 982, 111, 112, 116, 111, 59, 1, 8733, 4, 2, 59, 104,
      18748, 18750, 1, 8597, 111, 59, 1, 1009, 4, 2, 105, 117, 18760, 18766, 103, 109, 97, 59, 1,
      962, 4, 2, 98, 112, 18772, 18791, 115, 101, 116, 110, 101, 113, 4, 2, 59, 113, 18784, 18787,
      3, 8842, 65024, 59, 3, 10955, 65024, 115, 101, 116, 110, 101, 113, 4, 2, 59, 113, 18803,
      18806, 3, 8843, 65024, 59, 3, 10956, 65024, 4, 2, 104, 114, 18816, 18822, 101, 116, 97, 59, 1,
      977, 105, 97, 110, 103, 108, 101, 4, 2, 108, 114, 18834, 18840, 101, 102, 116, 59, 1, 8882,
      105, 103, 104, 116, 59, 1, 8883, 121, 59, 1, 1074, 97, 115, 104, 59, 1, 8866, 4, 3, 101, 108,
      114, 18865, 18884, 18890, 4, 3, 59, 98, 101, 18873, 18875, 18880, 1, 8744, 97, 114, 59, 1,
      8891, 113, 59, 1, 8794, 108, 105, 112, 59, 1, 8942, 4, 2, 98, 116, 18896, 18901, 97, 114, 59,
      1, 124, 59, 1, 124, 114, 59, 3, 55349, 56627, 116, 114, 105, 59, 1, 8882, 115, 117, 4, 2, 98,
      112, 18923, 18927, 59, 3, 8834, 8402, 59, 3, 8835, 8402, 112, 102, 59, 3, 55349, 56679, 114,
      111, 112, 59, 1, 8733, 116, 114, 105, 59, 1, 8883, 4, 2, 99, 117, 18955, 18960, 114, 59, 3,
      55349, 56523, 4, 2, 98, 112, 18966, 18981, 110, 4, 2, 69, 101, 18973, 18977, 59, 3, 10955,
      65024, 59, 3, 8842, 65024, 110, 4, 2, 69, 101, 18988, 18992, 59, 3, 10956, 65024, 59, 3, 8843,
      65024, 105, 103, 122, 97, 103, 59, 1, 10650, 4, 7, 99, 101, 102, 111, 112, 114, 115, 19020,
      19026, 19061, 19066, 19072, 19075, 19089, 105, 114, 99, 59, 1, 373, 4, 2, 100, 105, 19032,
      19055, 4, 2, 98, 103, 19038, 19043, 97, 114, 59, 1, 10847, 101, 4, 2, 59, 113, 19050, 19052,
      1, 8743, 59, 1, 8793, 101, 114, 112, 59, 1, 8472, 114, 59, 3, 55349, 56628, 112, 102, 59, 3,
      55349, 56680, 59, 1, 8472, 4, 2, 59, 101, 19081, 19083, 1, 8768, 97, 116, 104, 59, 1, 8768,
      99, 114, 59, 3, 55349, 56524, 4, 14, 99, 100, 102, 104, 105, 108, 109, 110, 111, 114, 115,
      117, 118, 119, 19125, 19146, 19152, 19157, 19173, 19176, 19192, 19197, 19202, 19236, 19252,
      19269, 19286, 19291, 4, 3, 97, 105, 117, 19133, 19137, 19142, 112, 59, 1, 8898, 114, 99, 59,
      1, 9711, 112, 59, 1, 8899, 116, 114, 105, 59, 1, 9661, 114, 59, 3, 55349, 56629, 4, 2, 65, 97,
      19163, 19168, 114, 114, 59, 1, 10234, 114, 114, 59, 1, 10231, 59, 1, 958, 4, 2, 65, 97, 19182,
      19187, 114, 114, 59, 1, 10232, 114, 114, 59, 1, 10229, 97, 112, 59, 1, 10236, 105, 115, 59, 1,
      8955, 4, 3, 100, 112, 116, 19210, 19215, 19230, 111, 116, 59, 1, 10752, 4, 2, 102, 108, 19221,
      19225, 59, 3, 55349, 56681, 117, 115, 59, 1, 10753, 105, 109, 101, 59, 1, 10754, 4, 2, 65, 97,
      19242, 19247, 114, 114, 59, 1, 10233, 114, 114, 59, 1, 10230, 4, 2, 99, 113, 19258, 19263,
      114, 59, 3, 55349, 56525, 99, 117, 112, 59, 1, 10758, 4, 2, 112, 116, 19275, 19281, 108, 117,
      115, 59, 1, 10756, 114, 105, 59, 1, 9651, 101, 101, 59, 1, 8897, 101, 100, 103, 101, 59, 1,
      8896, 4, 8, 97, 99, 101, 102, 105, 111, 115, 117, 19316, 19335, 19349, 19357, 19362, 19367,
      19373, 19379, 99, 4, 2, 117, 121, 19323, 19332, 116, 101, 5, 253, 1, 59, 19330, 1, 253, 59, 1,
      1103, 4, 2, 105, 121, 19341, 19346, 114, 99, 59, 1, 375, 59, 1, 1099, 110, 5, 165, 1, 59,
      19355, 1, 165, 114, 59, 3, 55349, 56630, 99, 121, 59, 1, 1111, 112, 102, 59, 3, 55349, 56682,
      99, 114, 59, 3, 55349, 56526, 4, 2, 99, 109, 19385, 19389, 121, 59, 1, 1102, 108, 5, 255, 1,
      59, 19395, 1, 255, 4, 10, 97, 99, 100, 101, 102, 104, 105, 111, 115, 119, 19419, 19426, 19441,
      19446, 19462, 19467, 19472, 19480, 19486, 19492, 99, 117, 116, 101, 59, 1, 378, 4, 2, 97, 121,
      19432, 19438, 114, 111, 110, 59, 1, 382, 59, 1, 1079, 111, 116, 59, 1, 380, 4, 2, 101, 116,
      19452, 19458, 116, 114, 102, 59, 1, 8488, 97, 59, 1, 950, 114, 59, 3, 55349, 56631, 99, 121,
      59, 1, 1078, 103, 114, 97, 114, 114, 59, 1, 8669, 112, 102, 59, 3, 55349, 56683, 99, 114, 59,
      3, 55349, 56527, 4, 2, 106, 110, 19498, 19501, 59, 1, 8205, 106, 59, 1, 8204,
    ]);
  },
  6540: (e, t, r) => {
    const a = r(9481);
    const n = r(5906);
    const i = a.CODE_POINTS;
    const o = 1 << 16;
    class Preprocessor {
      constructor() {
        this.html = null;
        this.pos = -1;
        this.lastGapPos = -1;
        this.lastCharPos = -1;
        this.gapStack = [];
        this.skipNextNewLine = false;
        this.lastChunkWritten = false;
        this.endOfChunkHit = false;
        this.bufferWaterline = o;
      }
      _err() {}
      _addGap() {
        this.gapStack.push(this.lastGapPos);
        this.lastGapPos = this.pos;
      }
      _processSurrogate(e) {
        if (this.pos !== this.lastCharPos) {
          const t = this.html.charCodeAt(this.pos + 1);
          if (a.isSurrogatePair(t)) {
            this.pos++;
            this._addGap();
            return a.getSurrogatePairCodePoint(e, t);
          }
        } else if (!this.lastChunkWritten) {
          this.endOfChunkHit = true;
          return i.EOF;
        }
        this._err(n.surrogateInInputStream);
        return e;
      }
      dropParsedChunk() {
        if (this.pos > this.bufferWaterline) {
          this.lastCharPos -= this.pos;
          this.html = this.html.substring(this.pos);
          this.pos = 0;
          this.lastGapPos = -1;
          this.gapStack = [];
        }
      }
      write(e, t) {
        if (this.html) {
          this.html += e;
        } else {
          this.html = e;
        }
        this.lastCharPos = this.html.length - 1;
        this.endOfChunkHit = false;
        this.lastChunkWritten = t;
      }
      insertHtmlAtCurrentPos(e) {
        this.html =
          this.html.substring(0, this.pos + 1) +
          e +
          this.html.substring(this.pos + 1, this.html.length);
        this.lastCharPos = this.html.length - 1;
        this.endOfChunkHit = false;
      }
      advance() {
        this.pos++;
        if (this.pos > this.lastCharPos) {
          this.endOfChunkHit = !this.lastChunkWritten;
          return i.EOF;
        }
        let e = this.html.charCodeAt(this.pos);
        if (this.skipNextNewLine && e === i.LINE_FEED) {
          this.skipNextNewLine = false;
          this._addGap();
          return this.advance();
        }
        if (e === i.CARRIAGE_RETURN) {
          this.skipNextNewLine = true;
          return i.LINE_FEED;
        }
        this.skipNextNewLine = false;
        if (a.isSurrogate(e)) {
          e = this._processSurrogate(e);
        }
        const t =
          (e > 31 && e < 127) ||
          e === i.LINE_FEED ||
          e === i.CARRIAGE_RETURN ||
          (e > 159 && e < 64976);
        if (!t) {
          this._checkForProblematicCharacters(e);
        }
        return e;
      }
      _checkForProblematicCharacters(e) {
        if (a.isControlCodePoint(e)) {
          this._err(n.controlCharacterInInputStream);
        } else if (a.isUndefinedCodePoint(e)) {
          this._err(n.noncharacterInInputStream);
        }
      }
      retreat() {
        if (this.pos === this.lastGapPos) {
          this.lastGapPos = this.gapStack.pop();
          this.pos--;
        }
        this.pos--;
      }
    }
    e.exports = Preprocessor;
  },
  6306: (e, t, r) => {
    const { DOCUMENT_MODE: a } = r(9338);
    t.createDocument = function () {
      return { nodeName: '#document', mode: a.NO_QUIRKS, childNodes: [] };
    };
    t.createDocumentFragment = function () {
      return { nodeName: '#document-fragment', childNodes: [] };
    };
    t.createElement = function (e, t, r) {
      return {
        nodeName: e,
        tagName: e,
        attrs: r,
        namespaceURI: t,
        childNodes: [],
        parentNode: null,
      };
    };
    t.createCommentNode = function (e) {
      return { nodeName: '#comment', data: e, parentNode: null };
    };
    const createTextNode = function (e) {
      return { nodeName: '#text', value: e, parentNode: null };
    };
    const n = (t.appendChild = function (e, t) {
      e.childNodes.push(t);
      t.parentNode = e;
    });
    const i = (t.insertBefore = function (e, t, r) {
      const a = e.childNodes.indexOf(r);
      e.childNodes.splice(a, 0, t);
      t.parentNode = e;
    });
    t.setTemplateContent = function (e, t) {
      e.content = t;
    };
    t.getTemplateContent = function (e) {
      return e.content;
    };
    t.setDocumentType = function (e, t, r, a) {
      let i = null;
      for (let t = 0; t < e.childNodes.length; t++) {
        if (e.childNodes[t].nodeName === '#documentType') {
          i = e.childNodes[t];
          break;
        }
      }
      if (i) {
        i.name = t;
        i.publicId = r;
        i.systemId = a;
      } else {
        n(e, { nodeName: '#documentType', name: t, publicId: r, systemId: a });
      }
    };
    t.setDocumentMode = function (e, t) {
      e.mode = t;
    };
    t.getDocumentMode = function (e) {
      return e.mode;
    };
    t.detachNode = function (e) {
      if (e.parentNode) {
        const t = e.parentNode.childNodes.indexOf(e);
        e.parentNode.childNodes.splice(t, 1);
        e.parentNode = null;
      }
    };
    t.insertText = function (e, t) {
      if (e.childNodes.length) {
        const r = e.childNodes[e.childNodes.length - 1];
        if (r.nodeName === '#text') {
          r.value += t;
          return;
        }
      }
      n(e, createTextNode(t));
    };
    t.insertTextBefore = function (e, t, r) {
      const a = e.childNodes[e.childNodes.indexOf(r) - 1];
      if (a && a.nodeName === '#text') {
        a.value += t;
      } else {
        i(e, createTextNode(t), r);
      }
    };
    t.adoptAttributes = function (e, t) {
      const r = [];
      for (let t = 0; t < e.attrs.length; t++) {
        r.push(e.attrs[t].name);
      }
      for (let a = 0; a < t.length; a++) {
        if (r.indexOf(t[a].name) === -1) {
          e.attrs.push(t[a]);
        }
      }
    };
    t.getFirstChild = function (e) {
      return e.childNodes[0];
    };
    t.getChildNodes = function (e) {
      return e.childNodes;
    };
    t.getParentNode = function (e) {
      return e.parentNode;
    };
    t.getAttrList = function (e) {
      return e.attrs;
    };
    t.getTagName = function (e) {
      return e.tagName;
    };
    t.getNamespaceURI = function (e) {
      return e.namespaceURI;
    };
    t.getTextNodeContent = function (e) {
      return e.value;
    };
    t.getCommentNodeContent = function (e) {
      return e.data;
    };
    t.getDocumentTypeNodeName = function (e) {
      return e.name;
    };
    t.getDocumentTypeNodePublicId = function (e) {
      return e.publicId;
    };
    t.getDocumentTypeNodeSystemId = function (e) {
      return e.systemId;
    };
    t.isTextNode = function (e) {
      return e.nodeName === '#text';
    };
    t.isCommentNode = function (e) {
      return e.nodeName === '#comment';
    };
    t.isDocumentTypeNode = function (e) {
      return e.nodeName === '#documentType';
    };
    t.isElementNode = function (e) {
      return !!e.tagName;
    };
    t.setNodeSourceCodeLocation = function (e, t) {
      e.sourceCodeLocation = t;
    };
    t.getNodeSourceCodeLocation = function (e) {
      return e.sourceCodeLocation;
    };
  },
  2772: (e) => {
    e.exports = function mergeOptions(e, t) {
      t = t || Object.create(null);
      return [e, t].reduce((e, t) => {
        Object.keys(t).forEach((r) => {
          e[r] = t[r];
        });
        return e;
      }, Object.create(null));
    };
  },
  2079: (e) => {
    class Mixin {
      constructor(e) {
        const t = {};
        const r = this._getOverriddenMethods(this, t);
        for (const a of Object.keys(r)) {
          if (typeof r[a] === 'function') {
            t[a] = e[a];
            e[a] = r[a];
          }
        }
      }
      _getOverriddenMethods() {
        throw new Error('Not implemented');
      }
    }
    Mixin.install = function (e, t, r) {
      if (!e.__mixins) {
        e.__mixins = [];
      }
      for (let r = 0; r < e.__mixins.length; r++) {
        if (e.__mixins[r].constructor === t) {
          return e.__mixins[r];
        }
      }
      const a = new t(e, r);
      e.__mixins.push(a);
      return a;
    };
    e.exports = Mixin;
  },
  3657: (e, t, r) => {
    var a = r(5144);
    var n = r(1018);
    var i = r(1828);
    var o = 'data';
    e.exports = find;
    var s = /^data[-\w.:]+$/i;
    var p = /-[a-z]/g;
    var d = /[A-Z]/g;
    function find(e, t) {
      var r = a(t);
      var p = t;
      var d = i;
      if (r in e.normal) {
        return e.property[e.normal[r]];
      }
      if (r.length > 4 && r.slice(0, 4) === o && s.test(t)) {
        if (t.charAt(4) === '-') {
          p = datasetToProperty(t);
        } else {
          t = datasetToAttribute(t);
        }
        d = n;
      }
      return new d(p, t);
    }
    function datasetToProperty(e) {
      var t = e.slice(5).replace(p, camelcase);
      return o + t.charAt(0).toUpperCase() + t.slice(1);
    }
    function datasetToAttribute(e) {
      var t = e.slice(4);
      if (p.test(t)) {
        return e;
      }
      t = t.replace(d, kebab);
      if (t.charAt(0) !== '-') {
        t = '-' + t;
      }
      return o + t;
    }
    function kebab(e) {
      return '-' + e.toLowerCase();
    }
    function camelcase(e) {
      return e.charAt(1).toUpperCase();
    }
  },
  9515: (e, t, r) => {
    var a = r(7261);
    var n = r(2528);
    var i = r(1638);
    var o = r(5733);
    var s = r(7871);
    var p = r(3020);
    e.exports = a([i, n, o, s, p]);
  },
  7871: (e, t, r) => {
    var a = r(581);
    var n = r(2852);
    var i = a.booleanish;
    var o = a.number;
    var s = a.spaceSeparated;
    e.exports = n({
      transform: ariaTransform,
      properties: {
        ariaActiveDescendant: null,
        ariaAtomic: i,
        ariaAutoComplete: null,
        ariaBusy: i,
        ariaChecked: i,
        ariaColCount: o,
        ariaColIndex: o,
        ariaColSpan: o,
        ariaControls: s,
        ariaCurrent: null,
        ariaDescribedBy: s,
        ariaDetails: null,
        ariaDisabled: i,
        ariaDropEffect: s,
        ariaErrorMessage: null,
        ariaExpanded: i,
        ariaFlowTo: s,
        ariaGrabbed: i,
        ariaHasPopup: null,
        ariaHidden: i,
        ariaInvalid: null,
        ariaKeyShortcuts: null,
        ariaLabel: null,
        ariaLabelledBy: s,
        ariaLevel: o,
        ariaLive: null,
        ariaModal: i,
        ariaMultiLine: i,
        ariaMultiSelectable: i,
        ariaOrientation: null,
        ariaOwns: s,
        ariaPlaceholder: null,
        ariaPosInSet: o,
        ariaPressed: i,
        ariaReadOnly: i,
        ariaRelevant: null,
        ariaRequired: i,
        ariaRoleDescription: s,
        ariaRowCount: o,
        ariaRowIndex: o,
        ariaRowSpan: o,
        ariaSelected: i,
        ariaSetSize: o,
        ariaSort: null,
        ariaValueMax: o,
        ariaValueMin: o,
        ariaValueNow: o,
        ariaValueText: null,
        role: null,
      },
    });
    function ariaTransform(e, t) {
      return t === 'role' ? t : 'aria-' + t.slice(4).toLowerCase();
    }
  },
  3020: (e, t, r) => {
    var a = r(581);
    var n = r(2852);
    var i = r(3082);
    var o = a.boolean;
    var s = a.overloadedBoolean;
    var p = a.booleanish;
    var d = a.number;
    var l = a.spaceSeparated;
    var m = a.commaSeparated;
    e.exports = n({
      space: 'html',
      attributes: {
        acceptcharset: 'accept-charset',
        classname: 'class',
        htmlfor: 'for',
        httpequiv: 'http-equiv',
      },
      transform: i,
      mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
      properties: {
        abbr: null,
        accept: m,
        acceptCharset: l,
        accessKey: l,
        action: null,
        allow: null,
        allowFullScreen: o,
        allowPaymentRequest: o,
        allowUserMedia: o,
        alt: null,
        as: null,
        async: o,
        autoCapitalize: null,
        autoComplete: l,
        autoFocus: o,
        autoPlay: o,
        capture: o,
        charSet: null,
        checked: o,
        cite: null,
        className: l,
        cols: d,
        colSpan: null,
        content: null,
        contentEditable: p,
        controls: o,
        controlsList: l,
        coords: d | m,
        crossOrigin: null,
        data: null,
        dateTime: null,
        decoding: null,
        default: o,
        defer: o,
        dir: null,
        dirName: null,
        disabled: o,
        download: s,
        draggable: p,
        encType: null,
        enterKeyHint: null,
        form: null,
        formAction: null,
        formEncType: null,
        formMethod: null,
        formNoValidate: o,
        formTarget: null,
        headers: l,
        height: d,
        hidden: o,
        high: d,
        href: null,
        hrefLang: null,
        htmlFor: l,
        httpEquiv: l,
        id: null,
        imageSizes: null,
        imageSrcSet: m,
        inputMode: null,
        integrity: null,
        is: null,
        isMap: o,
        itemId: null,
        itemProp: l,
        itemRef: l,
        itemScope: o,
        itemType: l,
        kind: null,
        label: null,
        lang: null,
        language: null,
        list: null,
        loading: null,
        loop: o,
        low: d,
        manifest: null,
        max: null,
        maxLength: d,
        media: null,
        method: null,
        min: null,
        minLength: d,
        multiple: o,
        muted: o,
        name: null,
        nonce: null,
        noModule: o,
        noValidate: o,
        onAbort: null,
        onAfterPrint: null,
        onAuxClick: null,
        onBeforePrint: null,
        onBeforeUnload: null,
        onBlur: null,
        onCancel: null,
        onCanPlay: null,
        onCanPlayThrough: null,
        onChange: null,
        onClick: null,
        onClose: null,
        onContextMenu: null,
        onCopy: null,
        onCueChange: null,
        onCut: null,
        onDblClick: null,
        onDrag: null,
        onDragEnd: null,
        onDragEnter: null,
        onDragExit: null,
        onDragLeave: null,
        onDragOver: null,
        onDragStart: null,
        onDrop: null,
        onDurationChange: null,
        onEmptied: null,
        onEnded: null,
        onError: null,
        onFocus: null,
        onFormData: null,
        onHashChange: null,
        onInput: null,
        onInvalid: null,
        onKeyDown: null,
        onKeyPress: null,
        onKeyUp: null,
        onLanguageChange: null,
        onLoad: null,
        onLoadedData: null,
        onLoadedMetadata: null,
        onLoadEnd: null,
        onLoadStart: null,
        onMessage: null,
        onMessageError: null,
        onMouseDown: null,
        onMouseEnter: null,
        onMouseLeave: null,
        onMouseMove: null,
        onMouseOut: null,
        onMouseOver: null,
        onMouseUp: null,
        onOffline: null,
        onOnline: null,
        onPageHide: null,
        onPageShow: null,
        onPaste: null,
        onPause: null,
        onPlay: null,
        onPlaying: null,
        onPopState: null,
        onProgress: null,
        onRateChange: null,
        onRejectionHandled: null,
        onReset: null,
        onResize: null,
        onScroll: null,
        onSecurityPolicyViolation: null,
        onSeeked: null,
        onSeeking: null,
        onSelect: null,
        onSlotChange: null,
        onStalled: null,
        onStorage: null,
        onSubmit: null,
        onSuspend: null,
        onTimeUpdate: null,
        onToggle: null,
        onUnhandledRejection: null,
        onUnload: null,
        onVolumeChange: null,
        onWaiting: null,
        onWheel: null,
        open: o,
        optimum: d,
        pattern: null,
        ping: l,
        placeholder: null,
        playsInline: o,
        poster: null,
        preload: null,
        readOnly: o,
        referrerPolicy: null,
        rel: l,
        required: o,
        reversed: o,
        rows: d,
        rowSpan: d,
        sandbox: l,
        scope: null,
        scoped: o,
        seamless: o,
        selected: o,
        shape: null,
        size: d,
        sizes: null,
        slot: null,
        span: d,
        spellCheck: p,
        src: null,
        srcDoc: null,
        srcLang: null,
        srcSet: m,
        start: d,
        step: null,
        style: null,
        tabIndex: d,
        target: null,
        title: null,
        translate: null,
        type: null,
        typeMustMatch: o,
        useMap: null,
        value: p,
        width: d,
        wrap: null,
        align: null,
        aLink: null,
        archive: l,
        axis: null,
        background: null,
        bgColor: null,
        border: d,
        borderColor: null,
        bottomMargin: d,
        cellPadding: null,
        cellSpacing: null,
        char: null,
        charOff: null,
        classId: null,
        clear: null,
        code: null,
        codeBase: null,
        codeType: null,
        color: null,
        compact: o,
        declare: o,
        event: null,
        face: null,
        frame: null,
        frameBorder: null,
        hSpace: d,
        leftMargin: d,
        link: null,
        longDesc: null,
        lowSrc: null,
        marginHeight: d,
        marginWidth: d,
        noResize: o,
        noHref: o,
        noShade: o,
        noWrap: o,
        object: null,
        profile: null,
        prompt: null,
        rev: null,
        rightMargin: d,
        rules: null,
        scheme: null,
        scrolling: p,
        standby: null,
        summary: null,
        text: null,
        topMargin: d,
        valueType: null,
        version: null,
        vAlign: null,
        vLink: null,
        vSpace: d,
        allowTransparency: null,
        autoCorrect: null,
        autoSave: null,
        disablePictureInPicture: o,
        disableRemotePlayback: o,
        prefix: null,
        property: null,
        results: d,
        security: null,
        unselectable: null,
      },
    });
  },
  2100: (e, t, r) => {
    var a = r(581);
    var n = r(2852);
    var i = r(8187);
    var o = a.boolean;
    var s = a.number;
    var p = a.spaceSeparated;
    var d = a.commaSeparated;
    var l = a.commaOrSpaceSeparated;
    e.exports = n({
      space: 'svg',
      attributes: {
        accentHeight: 'accent-height',
        alignmentBaseline: 'alignment-baseline',
        arabicForm: 'arabic-form',
        baselineShift: 'baseline-shift',
        capHeight: 'cap-height',
        className: 'class',
        clipPath: 'clip-path',
        clipRule: 'clip-rule',
        colorInterpolation: 'color-interpolation',
        colorInterpolationFilters: 'color-interpolation-filters',
        colorProfile: 'color-profile',
        colorRendering: 'color-rendering',
        crossOrigin: 'crossorigin',
        dataType: 'datatype',
        dominantBaseline: 'dominant-baseline',
        enableBackground: 'enable-background',
        fillOpacity: 'fill-opacity',
        fillRule: 'fill-rule',
        floodColor: 'flood-color',
        floodOpacity: 'flood-opacity',
        fontFamily: 'font-family',
        fontSize: 'font-size',
        fontSizeAdjust: 'font-size-adjust',
        fontStretch: 'font-stretch',
        fontStyle: 'font-style',
        fontVariant: 'font-variant',
        fontWeight: 'font-weight',
        glyphName: 'glyph-name',
        glyphOrientationHorizontal: 'glyph-orientation-horizontal',
        glyphOrientationVertical: 'glyph-orientation-vertical',
        hrefLang: 'hreflang',
        horizAdvX: 'horiz-adv-x',
        horizOriginX: 'horiz-origin-x',
        horizOriginY: 'horiz-origin-y',
        imageRendering: 'image-rendering',
        letterSpacing: 'letter-spacing',
        lightingColor: 'lighting-color',
        markerEnd: 'marker-end',
        markerMid: 'marker-mid',
        markerStart: 'marker-start',
        navDown: 'nav-down',
        navDownLeft: 'nav-down-left',
        navDownRight: 'nav-down-right',
        navLeft: 'nav-left',
        navNext: 'nav-next',
        navPrev: 'nav-prev',
        navRight: 'nav-right',
        navUp: 'nav-up',
        navUpLeft: 'nav-up-left',
        navUpRight: 'nav-up-right',
        onAbort: 'onabort',
        onActivate: 'onactivate',
        onAfterPrint: 'onafterprint',
        onBeforePrint: 'onbeforeprint',
        onBegin: 'onbegin',
        onCancel: 'oncancel',
        onCanPlay: 'oncanplay',
        onCanPlayThrough: 'oncanplaythrough',
        onChange: 'onchange',
        onClick: 'onclick',
        onClose: 'onclose',
        onCopy: 'oncopy',
        onCueChange: 'oncuechange',
        onCut: 'oncut',
        onDblClick: 'ondblclick',
        onDrag: 'ondrag',
        onDragEnd: 'ondragend',
        onDragEnter: 'ondragenter',
        onDragExit: 'ondragexit',
        onDragLeave: 'ondragleave',
        onDragOver: 'ondragover',
        onDragStart: 'ondragstart',
        onDrop: 'ondrop',
        onDurationChange: 'ondurationchange',
        onEmptied: 'onemptied',
        onEnd: 'onend',
        onEnded: 'onended',
        onError: 'onerror',
        onFocus: 'onfocus',
        onFocusIn: 'onfocusin',
        onFocusOut: 'onfocusout',
        onHashChange: 'onhashchange',
        onInput: 'oninput',
        onInvalid: 'oninvalid',
        onKeyDown: 'onkeydown',
        onKeyPress: 'onkeypress',
        onKeyUp: 'onkeyup',
        onLoad: 'onload',
        onLoadedData: 'onloadeddata',
        onLoadedMetadata: 'onloadedmetadata',
        onLoadStart: 'onloadstart',
        onMessage: 'onmessage',
        onMouseDown: 'onmousedown',
        onMouseEnter: 'onmouseenter',
        onMouseLeave: 'onmouseleave',
        onMouseMove: 'onmousemove',
        onMouseOut: 'onmouseout',
        onMouseOver: 'onmouseover',
        onMouseUp: 'onmouseup',
        onMouseWheel: 'onmousewheel',
        onOffline: 'onoffline',
        onOnline: 'ononline',
        onPageHide: 'onpagehide',
        onPageShow: 'onpageshow',
        onPaste: 'onpaste',
        onPause: 'onpause',
        onPlay: 'onplay',
        onPlaying: 'onplaying',
        onPopState: 'onpopstate',
        onProgress: 'onprogress',
        onRateChange: 'onratechange',
        onRepeat: 'onrepeat',
        onReset: 'onreset',
        onResize: 'onresize',
        onScroll: 'onscroll',
        onSeeked: 'onseeked',
        onSeeking: 'onseeking',
        onSelect: 'onselect',
        onShow: 'onshow',
        onStalled: 'onstalled',
        onStorage: 'onstorage',
        onSubmit: 'onsubmit',
        onSuspend: 'onsuspend',
        onTimeUpdate: 'ontimeupdate',
        onToggle: 'ontoggle',
        onUnload: 'onunload',
        onVolumeChange: 'onvolumechange',
        onWaiting: 'onwaiting',
        onZoom: 'onzoom',
        overlinePosition: 'overline-position',
        overlineThickness: 'overline-thickness',
        paintOrder: 'paint-order',
        panose1: 'panose-1',
        pointerEvents: 'pointer-events',
        referrerPolicy: 'referrerpolicy',
        renderingIntent: 'rendering-intent',
        shapeRendering: 'shape-rendering',
        stopColor: 'stop-color',
        stopOpacity: 'stop-opacity',
        strikethroughPosition: 'strikethrough-position',
        strikethroughThickness: 'strikethrough-thickness',
        strokeDashArray: 'stroke-dasharray',
        strokeDashOffset: 'stroke-dashoffset',
        strokeLineCap: 'stroke-linecap',
        strokeLineJoin: 'stroke-linejoin',
        strokeMiterLimit: 'stroke-miterlimit',
        strokeOpacity: 'stroke-opacity',
        strokeWidth: 'stroke-width',
        tabIndex: 'tabindex',
        textAnchor: 'text-anchor',
        textDecoration: 'text-decoration',
        textRendering: 'text-rendering',
        typeOf: 'typeof',
        underlinePosition: 'underline-position',
        underlineThickness: 'underline-thickness',
        unicodeBidi: 'unicode-bidi',
        unicodeRange: 'unicode-range',
        unitsPerEm: 'units-per-em',
        vAlphabetic: 'v-alphabetic',
        vHanging: 'v-hanging',
        vIdeographic: 'v-ideographic',
        vMathematical: 'v-mathematical',
        vectorEffect: 'vector-effect',
        vertAdvY: 'vert-adv-y',
        vertOriginX: 'vert-origin-x',
        vertOriginY: 'vert-origin-y',
        wordSpacing: 'word-spacing',
        writingMode: 'writing-mode',
        xHeight: 'x-height',
        playbackOrder: 'playbackorder',
        timelineBegin: 'timelinebegin',
      },
      transform: i,
      properties: {
        about: l,
        accentHeight: s,
        accumulate: null,
        additive: null,
        alignmentBaseline: null,
        alphabetic: s,
        amplitude: s,
        arabicForm: null,
        ascent: s,
        attributeName: null,
        attributeType: null,
        azimuth: s,
        bandwidth: null,
        baselineShift: null,
        baseFrequency: null,
        baseProfile: null,
        bbox: null,
        begin: null,
        bias: s,
        by: null,
        calcMode: null,
        capHeight: s,
        className: p,
        clip: null,
        clipPath: null,
        clipPathUnits: null,
        clipRule: null,
        color: null,
        colorInterpolation: null,
        colorInterpolationFilters: null,
        colorProfile: null,
        colorRendering: null,
        content: null,
        contentScriptType: null,
        contentStyleType: null,
        crossOrigin: null,
        cursor: null,
        cx: null,
        cy: null,
        d: null,
        dataType: null,
        defaultAction: null,
        descent: s,
        diffuseConstant: s,
        direction: null,
        display: null,
        dur: null,
        divisor: s,
        dominantBaseline: null,
        download: o,
        dx: null,
        dy: null,
        edgeMode: null,
        editable: null,
        elevation: s,
        enableBackground: null,
        end: null,
        event: null,
        exponent: s,
        externalResourcesRequired: null,
        fill: null,
        fillOpacity: s,
        fillRule: null,
        filter: null,
        filterRes: null,
        filterUnits: null,
        floodColor: null,
        floodOpacity: null,
        focusable: null,
        focusHighlight: null,
        fontFamily: null,
        fontSize: null,
        fontSizeAdjust: null,
        fontStretch: null,
        fontStyle: null,
        fontVariant: null,
        fontWeight: null,
        format: null,
        fr: null,
        from: null,
        fx: null,
        fy: null,
        g1: d,
        g2: d,
        glyphName: d,
        glyphOrientationHorizontal: null,
        glyphOrientationVertical: null,
        glyphRef: null,
        gradientTransform: null,
        gradientUnits: null,
        handler: null,
        hanging: s,
        hatchContentUnits: null,
        hatchUnits: null,
        height: null,
        href: null,
        hrefLang: null,
        horizAdvX: s,
        horizOriginX: s,
        horizOriginY: s,
        id: null,
        ideographic: s,
        imageRendering: null,
        initialVisibility: null,
        in: null,
        in2: null,
        intercept: s,
        k: s,
        k1: s,
        k2: s,
        k3: s,
        k4: s,
        kernelMatrix: l,
        kernelUnitLength: null,
        keyPoints: null,
        keySplines: null,
        keyTimes: null,
        kerning: null,
        lang: null,
        lengthAdjust: null,
        letterSpacing: null,
        lightingColor: null,
        limitingConeAngle: s,
        local: null,
        markerEnd: null,
        markerMid: null,
        markerStart: null,
        markerHeight: null,
        markerUnits: null,
        markerWidth: null,
        mask: null,
        maskContentUnits: null,
        maskUnits: null,
        mathematical: null,
        max: null,
        media: null,
        mediaCharacterEncoding: null,
        mediaContentEncodings: null,
        mediaSize: s,
        mediaTime: null,
        method: null,
        min: null,
        mode: null,
        name: null,
        navDown: null,
        navDownLeft: null,
        navDownRight: null,
        navLeft: null,
        navNext: null,
        navPrev: null,
        navRight: null,
        navUp: null,
        navUpLeft: null,
        navUpRight: null,
        numOctaves: null,
        observer: null,
        offset: null,
        onAbort: null,
        onActivate: null,
        onAfterPrint: null,
        onBeforePrint: null,
        onBegin: null,
        onCancel: null,
        onCanPlay: null,
        onCanPlayThrough: null,
        onChange: null,
        onClick: null,
        onClose: null,
        onCopy: null,
        onCueChange: null,
        onCut: null,
        onDblClick: null,
        onDrag: null,
        onDragEnd: null,
        onDragEnter: null,
        onDragExit: null,
        onDragLeave: null,
        onDragOver: null,
        onDragStart: null,
        onDrop: null,
        onDurationChange: null,
        onEmptied: null,
        onEnd: null,
        onEnded: null,
        onError: null,
        onFocus: null,
        onFocusIn: null,
        onFocusOut: null,
        onHashChange: null,
        onInput: null,
        onInvalid: null,
        onKeyDown: null,
        onKeyPress: null,
        onKeyUp: null,
        onLoad: null,
        onLoadedData: null,
        onLoadedMetadata: null,
        onLoadStart: null,
        onMessage: null,
        onMouseDown: null,
        onMouseEnter: null,
        onMouseLeave: null,
        onMouseMove: null,
        onMouseOut: null,
        onMouseOver: null,
        onMouseUp: null,
        onMouseWheel: null,
        onOffline: null,
        onOnline: null,
        onPageHide: null,
        onPageShow: null,
        onPaste: null,
        onPause: null,
        onPlay: null,
        onPlaying: null,
        onPopState: null,
        onProgress: null,
        onRateChange: null,
        onRepeat: null,
        onReset: null,
        onResize: null,
        onScroll: null,
        onSeeked: null,
        onSeeking: null,
        onSelect: null,
        onShow: null,
        onStalled: null,
        onStorage: null,
        onSubmit: null,
        onSuspend: null,
        onTimeUpdate: null,
        onToggle: null,
        onUnload: null,
        onVolumeChange: null,
        onWaiting: null,
        onZoom: null,
        opacity: null,
        operator: null,
        order: null,
        orient: null,
        orientation: null,
        origin: null,
        overflow: null,
        overlay: null,
        overlinePosition: s,
        overlineThickness: s,
        paintOrder: null,
        panose1: null,
        path: null,
        pathLength: s,
        patternContentUnits: null,
        patternTransform: null,
        patternUnits: null,
        phase: null,
        ping: p,
        pitch: null,
        playbackOrder: null,
        pointerEvents: null,
        points: null,
        pointsAtX: s,
        pointsAtY: s,
        pointsAtZ: s,
        preserveAlpha: null,
        preserveAspectRatio: null,
        primitiveUnits: null,
        propagate: null,
        property: l,
        r: null,
        radius: null,
        referrerPolicy: null,
        refX: null,
        refY: null,
        rel: l,
        rev: l,
        renderingIntent: null,
        repeatCount: null,
        repeatDur: null,
        requiredExtensions: l,
        requiredFeatures: l,
        requiredFonts: l,
        requiredFormats: l,
        resource: null,
        restart: null,
        result: null,
        rotate: null,
        rx: null,
        ry: null,
        scale: null,
        seed: null,
        shapeRendering: null,
        side: null,
        slope: null,
        snapshotTime: null,
        specularConstant: s,
        specularExponent: s,
        spreadMethod: null,
        spacing: null,
        startOffset: null,
        stdDeviation: null,
        stemh: null,
        stemv: null,
        stitchTiles: null,
        stopColor: null,
        stopOpacity: null,
        strikethroughPosition: s,
        strikethroughThickness: s,
        string: null,
        stroke: null,
        strokeDashArray: l,
        strokeDashOffset: null,
        strokeLineCap: null,
        strokeLineJoin: null,
        strokeMiterLimit: s,
        strokeOpacity: s,
        strokeWidth: null,
        style: null,
        surfaceScale: s,
        syncBehavior: null,
        syncBehaviorDefault: null,
        syncMaster: null,
        syncTolerance: null,
        syncToleranceDefault: null,
        systemLanguage: l,
        tabIndex: s,
        tableValues: null,
        target: null,
        targetX: s,
        targetY: s,
        textAnchor: null,
        textDecoration: null,
        textRendering: null,
        textLength: null,
        timelineBegin: null,
        title: null,
        transformBehavior: null,
        type: null,
        typeOf: l,
        to: null,
        transform: null,
        u1: null,
        u2: null,
        underlinePosition: s,
        underlineThickness: s,
        unicode: null,
        unicodeBidi: null,
        unicodeRange: null,
        unitsPerEm: s,
        values: null,
        vAlphabetic: s,
        vMathematical: s,
        vectorEffect: null,
        vHanging: s,
        vIdeographic: s,
        version: null,
        vertAdvY: s,
        vertOriginX: s,
        vertOriginY: s,
        viewBox: null,
        viewTarget: null,
        visibility: null,
        width: null,
        widths: null,
        wordSpacing: null,
        writingMode: null,
        x: null,
        x1: null,
        x2: null,
        xChannelSelector: null,
        xHeight: s,
        y: null,
        y1: null,
        y2: null,
        yChannelSelector: null,
        z: null,
        zoomAndPan: null,
      },
    });
  },
  3082: (e, t, r) => {
    var a = r(8187);
    e.exports = caseInsensitiveTransform;
    function caseInsensitiveTransform(e, t) {
      return a(e, t.toLowerCase());
    }
  },
  8187: (e) => {
    e.exports = caseSensitiveTransform;
    function caseSensitiveTransform(e, t) {
      return t in e ? e[t] : t;
    }
  },
  2852: (e, t, r) => {
    var a = r(5144);
    var n = r(6101);
    var i = r(1018);
    e.exports = create;
    function create(e) {
      var t = e.space;
      var r = e.mustUseProperty || [];
      var o = e.attributes || {};
      var s = e.properties;
      var p = e.transform;
      var d = {};
      var l = {};
      var m;
      var c;
      for (m in s) {
        c = new i(m, p(o, m), s[m], t);
        if (r.indexOf(m) !== -1) {
          c.mustUseProperty = true;
        }
        d[m] = c;
        l[a(m)] = m;
        l[a(c.attribute)] = m;
      }
      return new n(d, l, t);
    }
  },
  1018: (e, t, r) => {
    var a = r(1828);
    var n = r(581);
    e.exports = DefinedInfo;
    DefinedInfo.prototype = new a();
    DefinedInfo.prototype.defined = true;
    var i = [
      'boolean',
      'booleanish',
      'overloadedBoolean',
      'number',
      'commaSeparated',
      'spaceSeparated',
      'commaOrSpaceSeparated',
    ];
    var o = i.length;
    function DefinedInfo(e, t, r, s) {
      var p = -1;
      var d;
      mark(this, 'space', s);
      a.call(this, e, t);
      while (++p < o) {
        d = i[p];
        mark(this, d, (r & n[d]) === n[d]);
      }
    }
    function mark(e, t, r) {
      if (r) {
        e[t] = r;
      }
    }
  },
  1828: (e) => {
    e.exports = Info;
    var t = Info.prototype;
    t.space = null;
    t.attribute = null;
    t.property = null;
    t.boolean = false;
    t.booleanish = false;
    t.overloadedBoolean = false;
    t.number = false;
    t.commaSeparated = false;
    t.spaceSeparated = false;
    t.commaOrSpaceSeparated = false;
    t.mustUseProperty = false;
    t.defined = false;
    function Info(e, t) {
      this.property = e;
      this.attribute = t;
    }
  },
  7261: (e, t, r) => {
    var a = r(1208);
    var n = r(6101);
    e.exports = merge;
    function merge(e) {
      var t = e.length;
      var r = [];
      var i = [];
      var o = -1;
      var s;
      var p;
      while (++o < t) {
        s = e[o];
        r.push(s.property);
        i.push(s.normal);
        p = s.space;
      }
      return new n(a.apply(null, r), a.apply(null, i), p);
    }
  },
  6101: (e) => {
    e.exports = Schema;
    var t = Schema.prototype;
    t.space = null;
    t.normal = {};
    t.property = {};
    function Schema(e, t, r) {
      this.property = e;
      this.normal = t;
      if (r) {
        this.space = r;
      }
    }
  },
  581: (e, t) => {
    var r = 0;
    t.boolean = increment();
    t.booleanish = increment();
    t.overloadedBoolean = increment();
    t.number = increment();
    t.spaceSeparated = increment();
    t.commaSeparated = increment();
    t.commaOrSpaceSeparated = increment();
    function increment() {
      return Math.pow(2, ++r);
    }
  },
  2528: (e, t, r) => {
    var a = r(2852);
    e.exports = a({
      space: 'xlink',
      transform: xlinkTransform,
      properties: {
        xLinkActuate: null,
        xLinkArcRole: null,
        xLinkHref: null,
        xLinkRole: null,
        xLinkShow: null,
        xLinkTitle: null,
        xLinkType: null,
      },
    });
    function xlinkTransform(e, t) {
      return 'xlink:' + t.slice(5).toLowerCase();
    }
  },
  1638: (e, t, r) => {
    var a = r(2852);
    e.exports = a({
      space: 'xml',
      transform: xmlTransform,
      properties: { xmlLang: null, xmlBase: null, xmlSpace: null },
    });
    function xmlTransform(e, t) {
      return 'xml:' + t.slice(3).toLowerCase();
    }
  },
  5733: (e, t, r) => {
    var a = r(2852);
    var n = r(3082);
    e.exports = a({
      space: 'xmlns',
      attributes: { xmlnsxlink: 'xmlns:xlink' },
      transform: n,
      properties: { xmlns: null, xmlnsXLink: null },
    });
  },
  5144: (e) => {
    e.exports = normalize;
    function normalize(e) {
      return e.toLowerCase();
    }
  },
  4589: (e, t, r) => {
    var a = r(7261);
    var n = r(2528);
    var i = r(1638);
    var o = r(5733);
    var s = r(7871);
    var p = r(2100);
    e.exports = a([i, n, o, s, p]);
  },
  9830: (e, t, r) => {
    var a = r(3233);
    e.exports = raw;
    function raw() {
      return a;
    }
  },
  4859: (e, t, r) => {
    var a = r(6623);
    var n = r(1208);
    var i = r(2683);
    e.exports = parse;
    parse.Parser = i;
    function parse(e) {
      var t = this.data('settings');
      var r = a(i);
      r.prototype.options = n(r.prototype.options, t, e);
      this.Parser = r;
    }
  },
  7311: (e) => {
    e.exports = [
      'address',
      'article',
      'aside',
      'base',
      'basefont',
      'blockquote',
      'body',
      'caption',
      'center',
      'col',
      'colgroup',
      'dd',
      'details',
      'dialog',
      'dir',
      'div',
      'dl',
      'dt',
      'fieldset',
      'figcaption',
      'figure',
      'footer',
      'form',
      'frame',
      'frameset',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'head',
      'header',
      'hgroup',
      'hr',
      'html',
      'iframe',
      'legend',
      'li',
      'link',
      'main',
      'menu',
      'menuitem',
      'meta',
      'nav',
      'noframes',
      'ol',
      'optgroup',
      'option',
      'p',
      'param',
      'pre',
      'section',
      'source',
      'title',
      'summary',
      'table',
      'tbody',
      'td',
      'tfoot',
      'th',
      'thead',
      'title',
      'tr',
      'track',
      'ul',
    ];
  },
  3811: (e, t, r) => {
    var a = r(1208);
    var n = r(8859);
    e.exports = factory;
    function factory(e) {
      decoder.raw = decodeRaw;
      return decoder;
      function normalize(t) {
        var r = e.offset;
        var a = t.line;
        var n = [];
        while (++a) {
          if (!(a in r)) {
            break;
          }
          n.push((r[a] || 0) + 1);
        }
        return { start: t, indent: n };
      }
      function decoder(t, r, a) {
        n(t, {
          position: normalize(r),
          warning: handleWarning,
          text: a,
          reference: a,
          textContext: e,
          referenceContext: e,
        });
      }
      function decodeRaw(e, t, r) {
        return n(e, a(r, { position: normalize(t), warning: handleWarning }));
      }
      function handleWarning(t, r, a) {
        if (a !== 3) {
          e.file.message(t, r);
        }
      }
    }
  },
  2557: (e, t, r) => {
    e.exports = {
      position: true,
      gfm: true,
      commonmark: false,
      footnotes: false,
      pedantic: false,
      blocks: r(7311),
    };
  },
  6603: (e) => {
    e.exports = locate;
    function locate(e, t) {
      var r = e.indexOf('\n', t);
      while (r > t) {
        if (e.charAt(r - 1) !== ' ') {
          break;
        }
        r--;
      }
      return r;
    }
  },
  4222: (e) => {
    e.exports = locate;
    function locate(e, t) {
      return e.indexOf('`', t);
    }
  },
  8419: (e) => {
    e.exports = locate;
    function locate(e, t) {
      return e.indexOf('~~', t);
    }
  },
  366: (e) => {
    e.exports = locate;
    function locate(e, t) {
      var r = e.indexOf('*', t);
      var a = e.indexOf('_', t);
      if (a === -1) {
        return r;
      }
      if (r === -1) {
        return a;
      }
      return a < r ? a : r;
    }
  },
  6230: (e) => {
    e.exports = locate;
    function locate(e, t) {
      return e.indexOf('\\', t);
    }
  },
  2532: (e) => {
    e.exports = locate;
    function locate(e, t) {
      var r = e.indexOf('[', t);
      var a = e.indexOf('![', t);
      if (a === -1) {
        return r;
      }
      return r < a ? r : a;
    }
  },
  5514: (e) => {
    e.exports = locate;
    function locate(e, t) {
      var r = e.indexOf('**', t);
      var a = e.indexOf('__', t);
      if (a === -1) {
        return r;
      }
      if (r === -1) {
        return a;
      }
      return a < r ? a : r;
    }
  },
  6330: (e) => {
    e.exports = locate;
    function locate(e, t) {
      return e.indexOf('<', t);
    }
  },
  327: (e) => {
    e.exports = locate;
    var t = ['https://', 'http://', 'mailto:'];
    function locate(e, r) {
      var a = t.length;
      var n = -1;
      var i = -1;
      var o;
      if (!this.options.gfm) {
        return -1;
      }
      while (++n < a) {
        o = e.indexOf(t[n], r);
        if (o !== -1 && (o < i || i === -1)) {
          i = o;
        }
      }
      return i;
    }
  },
  7329: (e, t, r) => {
    var a = r(1208);
    var n = r(7970);
    e.exports = parse;
    var i = '\n';
    var o = /\r\n|\r/g;
    function parse() {
      var e = this;
      var t = String(e.file);
      var r = { line: 1, column: 1, offset: 0 };
      var s = a(r);
      var p;
      t = t.replace(o, i);
      if (t.charCodeAt(0) === 65279) {
        t = t.slice(1);
        s.column++;
        s.offset++;
      }
      p = {
        type: 'root',
        children: e.tokenizeBlock(t, s),
        position: { start: r, end: e.eof || a(r) },
      };
      if (!e.options.position) {
        n(p, true);
      }
      return p;
    }
  },
  2683: (e, t, r) => {
    var a = r(1208);
    var n = r(6435);
    var i = r(2403);
    var o = r(4063);
    var s = r(3811);
    var p = r(8970);
    e.exports = Parser;
    function Parser(e, t) {
      this.file = t;
      this.offset = {};
      this.options = a(this.options);
      this.setOptions({});
      this.inList = false;
      this.inBlock = false;
      this.inLink = false;
      this.atStart = true;
      this.toOffset = i(t).toOffset;
      this.unescape = o(this, 'escape');
      this.decode = s(this);
    }
    var d = Parser.prototype;
    d.setOptions = r(9449);
    d.parse = r(7329);
    d.options = r(2557);
    d.exitStart = n('atStart', true);
    d.enterList = n('inList', false);
    d.enterLink = n('inLink', false);
    d.enterBlock = n('inBlock', false);
    d.interruptParagraph = [
      ['thematicBreak'],
      ['atxHeading'],
      ['fencedCode'],
      ['blockquote'],
      ['html'],
      ['setextHeading', { commonmark: false }],
      ['definition', { commonmark: false }],
      ['footnote', { commonmark: false }],
    ];
    d.interruptList = [
      ['atxHeading', { pedantic: false }],
      ['fencedCode', { pedantic: false }],
      ['thematicBreak', { pedantic: false }],
      ['definition', { commonmark: false }],
      ['footnote', { commonmark: false }],
    ];
    d.interruptBlockquote = [
      ['indentedCode', { commonmark: true }],
      ['fencedCode', { commonmark: true }],
      ['atxHeading', { commonmark: true }],
      ['setextHeading', { commonmark: true }],
      ['thematicBreak', { commonmark: true }],
      ['html', { commonmark: true }],
      ['list', { commonmark: true }],
      ['definition', { commonmark: false }],
      ['footnote', { commonmark: false }],
    ];
    d.blockTokenizers = {
      newline: r(8742),
      indentedCode: r(5813),
      fencedCode: r(1553),
      blockquote: r(2614),
      atxHeading: r(5544),
      thematicBreak: r(2763),
      list: r(3766),
      setextHeading: r(7263),
      html: r(8514),
      footnote: r(2515),
      definition: r(7387),
      table: r(3274),
      paragraph: r(2082),
    };
    d.inlineTokenizers = {
      escape: r(950),
      autoLink: r(3763),
      url: r(5069),
      html: r(9155),
      link: r(8337),
      reference: r(3699),
      strong: r(9569),
      emphasis: r(4133),
      deletion: r(5052),
      code: r(7215),
      break: r(2822),
      text: r(9916),
    };
    d.blockMethods = keys(d.blockTokenizers);
    d.inlineMethods = keys(d.inlineTokenizers);
    d.tokenizeBlock = p('block');
    d.tokenizeInline = p('inline');
    d.tokenizeFactory = p;
    function keys(e) {
      var t = [];
      var r;
      for (r in e) {
        t.push(r);
      }
      return t;
    }
  },
  9449: (e, t, r) => {
    var a = r(1208);
    var n = r(8805);
    var i = r(2557);
    e.exports = setOptions;
    function setOptions(e) {
      var t = this;
      var r = t.options;
      var o;
      var s;
      if (e == null) {
        e = {};
      } else if (typeof e === 'object') {
        e = a(e);
      } else {
        throw new Error('Invalid value `' + e + '` for setting `options`');
      }
      for (o in i) {
        s = e[o];
        if (s == null) {
          s = r[o];
        }
        if (
          (o !== 'blocks' && typeof s !== 'boolean') ||
          (o === 'blocks' && typeof s !== 'object')
        ) {
          throw new Error('Invalid value `' + s + '` for setting `options.' + o + '`');
        }
        e[o] = s;
      }
      t.options = e;
      t.escape = n(e);
      return t;
    }
  },
  3763: (e, t, r) => {
    var a = r(8473);
    var n = r(8859);
    var i = r(6330);
    e.exports = autoLink;
    autoLink.locator = i;
    autoLink.notInLink = true;
    var o = '<';
    var s = '>';
    var p = '@';
    var d = '/';
    var l = 'mailto:';
    var m = l.length;
    function autoLink(e, t, r) {
      var i = this;
      var c = '';
      var g = t.length;
      var v = 0;
      var T = '';
      var E = false;
      var _ = '';
      var w;
      var A;
      var b;
      var y;
      var S;
      if (t.charAt(0) !== o) {
        return;
      }
      v++;
      c = o;
      while (v < g) {
        w = t.charAt(v);
        if (a(w) || w === s || w === p || (w === ':' && t.charAt(v + 1) === d)) {
          break;
        }
        T += w;
        v++;
      }
      if (!T) {
        return;
      }
      _ += T;
      T = '';
      w = t.charAt(v);
      _ += w;
      v++;
      if (w === p) {
        E = true;
      } else {
        if (w !== ':' || t.charAt(v + 1) !== d) {
          return;
        }
        _ += d;
        v++;
      }
      while (v < g) {
        w = t.charAt(v);
        if (a(w) || w === s) {
          break;
        }
        T += w;
        v++;
      }
      w = t.charAt(v);
      if (!T || w !== s) {
        return;
      }
      if (r) {
        return true;
      }
      _ += T;
      b = _;
      c += _ + w;
      A = e.now();
      A.column++;
      A.offset++;
      if (E) {
        if (_.slice(0, m).toLowerCase() === l) {
          b = b.substr(m);
          A.column += m;
          A.offset += m;
        } else {
          _ = l + _;
        }
      }
      y = i.inlineTokenizers;
      i.inlineTokenizers = { text: y.text };
      S = i.enterLink();
      b = i.tokenizeInline(b, A);
      i.inlineTokenizers = y;
      S();
      return e(c)({ type: 'link', title: null, url: n(_, { nonTerminated: false }), children: b });
    }
  },
  2614: (e, t, r) => {
    var a = r(4065);
    var n = r(1783);
    e.exports = blockquote;
    var i = '\n';
    var o = '\t';
    var s = ' ';
    var p = '>';
    function blockquote(e, t, r) {
      var d = this;
      var l = d.offset;
      var m = d.blockTokenizers;
      var c = d.interruptBlockquote;
      var g = e.now();
      var v = g.line;
      var T = t.length;
      var E = [];
      var _ = [];
      var w = [];
      var A;
      var b = 0;
      var y;
      var S;
      var C;
      var k;
      var N;
      var D;
      var O;
      var I;
      while (b < T) {
        y = t.charAt(b);
        if (y !== s && y !== o) {
          break;
        }
        b++;
      }
      if (t.charAt(b) !== p) {
        return;
      }
      if (r) {
        return true;
      }
      b = 0;
      while (b < T) {
        C = t.indexOf(i, b);
        D = b;
        O = false;
        if (C === -1) {
          C = T;
        }
        while (b < T) {
          y = t.charAt(b);
          if (y !== s && y !== o) {
            break;
          }
          b++;
        }
        if (t.charAt(b) === p) {
          b++;
          O = true;
          if (t.charAt(b) === s) {
            b++;
          }
        } else {
          b = D;
        }
        k = t.slice(b, C);
        if (!O && !a(k)) {
          b = D;
          break;
        }
        if (!O) {
          S = t.slice(b);
          if (n(c, m, d, [e, S, true])) {
            break;
          }
        }
        N = D === b ? k : t.slice(D, C);
        w.push(b - D);
        E.push(N);
        _.push(k);
        b = C + 1;
      }
      b = -1;
      T = w.length;
      A = e(E.join(i));
      while (++b < T) {
        l[v] = (l[v] || 0) + w[b];
        v++;
      }
      I = d.enterBlock();
      _ = d.tokenizeBlock(_.join(i), g);
      I();
      return A({ type: 'blockquote', children: _ });
    }
  },
  2822: (e, t, r) => {
    var a = r(6603);
    e.exports = hardBreak;
    hardBreak.locator = a;
    var n = ' ';
    var i = '\n';
    var o = 2;
    function hardBreak(e, t, r) {
      var a = t.length;
      var s = -1;
      var p = '';
      var d;
      while (++s < a) {
        d = t.charAt(s);
        if (d === i) {
          if (s < o) {
            return;
          }
          if (r) {
            return true;
          }
          p += d;
          return e(p)({ type: 'break' });
        }
        if (d !== n) {
          return;
        }
        p += d;
      }
    }
  },
  1553: (e) => {
    e.exports = fencedCode;
    var t = '\n';
    var r = '\t';
    var a = ' ';
    var n = '~';
    var i = '`';
    var o = 3;
    var s = 4;
    function fencedCode(e, p, d) {
      var l = this;
      var m = l.options.gfm;
      var c = p.length + 1;
      var g = 0;
      var v = '';
      var T;
      var E;
      var _;
      var w;
      var A;
      var b;
      var y;
      var S;
      var C;
      var k;
      var N;
      var D;
      var O;
      if (!m) {
        return;
      }
      while (g < c) {
        _ = p.charAt(g);
        if (_ !== a && _ !== r) {
          break;
        }
        v += _;
        g++;
      }
      D = g;
      _ = p.charAt(g);
      if (_ !== n && _ !== i) {
        return;
      }
      g++;
      E = _;
      T = 1;
      v += _;
      while (g < c) {
        _ = p.charAt(g);
        if (_ !== E) {
          break;
        }
        v += _;
        T++;
        g++;
      }
      if (T < o) {
        return;
      }
      while (g < c) {
        _ = p.charAt(g);
        if (_ !== a && _ !== r) {
          break;
        }
        v += _;
        g++;
      }
      w = '';
      y = '';
      while (g < c) {
        _ = p.charAt(g);
        if (_ === t || (E === i && _ === E)) {
          break;
        }
        if (_ === a || _ === r) {
          y += _;
        } else {
          w += y + _;
          y = '';
        }
        g++;
      }
      _ = p.charAt(g);
      if (_ && _ !== t) {
        return;
      }
      if (d) {
        return true;
      }
      O = e.now();
      O.column += v.length;
      O.offset += v.length;
      v += w;
      w = l.decode.raw(l.unescape(w), O);
      if (y) {
        v += y;
      }
      y = '';
      k = '';
      N = '';
      S = '';
      C = '';
      var I = true;
      while (g < c) {
        _ = p.charAt(g);
        S += k;
        C += N;
        k = '';
        N = '';
        if (_ !== t) {
          S += _;
          N += _;
          g++;
          continue;
        }
        if (I) {
          v += _;
          I = false;
        } else {
          k += _;
          N += _;
        }
        y = '';
        g++;
        while (g < c) {
          _ = p.charAt(g);
          if (_ !== a) {
            break;
          }
          y += _;
          g++;
        }
        k += y;
        N += y.slice(D);
        if (y.length >= s) {
          continue;
        }
        y = '';
        while (g < c) {
          _ = p.charAt(g);
          if (_ !== E) {
            break;
          }
          y += _;
          g++;
        }
        k += y;
        N += y;
        if (y.length < T) {
          continue;
        }
        y = '';
        while (g < c) {
          _ = p.charAt(g);
          if (_ !== a && _ !== r) {
            break;
          }
          k += _;
          N += _;
          g++;
        }
        if (!_ || _ === t) {
          break;
        }
      }
      v += S + k;
      g = -1;
      c = w.length;
      while (++g < c) {
        _ = w.charAt(g);
        if (_ === a || _ === r) {
          if (!A) {
            A = w.slice(0, g);
          }
        } else if (A) {
          b = w.slice(g);
          break;
        }
      }
      return e(v)({ type: 'code', lang: A || w || null, meta: b || null, value: C });
    }
  },
  5813: (e, t, r) => {
    var a = r(6976);
    var n = r(3199);
    e.exports = indentedCode;
    var i = '\n';
    var o = '\t';
    var s = ' ';
    var p = 4;
    var d = a(s, p);
    function indentedCode(e, t, r) {
      var a = -1;
      var p = t.length;
      var l = '';
      var m = '';
      var c = '';
      var g = '';
      var v;
      var T;
      var E;
      while (++a < p) {
        v = t.charAt(a);
        if (E) {
          E = false;
          l += c;
          m += g;
          c = '';
          g = '';
          if (v === i) {
            c = v;
            g = v;
          } else {
            l += v;
            m += v;
            while (++a < p) {
              v = t.charAt(a);
              if (!v || v === i) {
                g = v;
                c = v;
                break;
              }
              l += v;
              m += v;
            }
          }
        } else if (
          v === s &&
          t.charAt(a + 1) === v &&
          t.charAt(a + 2) === v &&
          t.charAt(a + 3) === v
        ) {
          c += d;
          a += 3;
          E = true;
        } else if (v === o) {
          c += v;
          E = true;
        } else {
          T = '';
          while (v === o || v === s) {
            T += v;
            v = t.charAt(++a);
          }
          if (v !== i) {
            break;
          }
          c += T + v;
          g += v;
        }
      }
      if (m) {
        if (r) {
          return true;
        }
        return e(l)({ type: 'code', lang: null, meta: null, value: n(m) });
      }
    }
  },
  7215: (e, t, r) => {
    var a = r(4222);
    e.exports = inlineCode;
    inlineCode.locator = a;
    var n = 10;
    var i = 32;
    var o = 96;
    function inlineCode(e, t, r) {
      var a = t.length;
      var s = 0;
      var p;
      var d;
      var l;
      var m;
      var c;
      var g;
      while (s < a) {
        if (t.charCodeAt(s) !== o) {
          break;
        }
        s++;
      }
      if (s === 0 || s === a) {
        return;
      }
      p = s;
      c = t.charCodeAt(s);
      while (s < a) {
        m = c;
        c = t.charCodeAt(s + 1);
        if (m === o) {
          if (d === undefined) {
            d = s;
          }
          l = s + 1;
          if (c !== o && l - d === p) {
            g = true;
            break;
          }
        } else if (d !== undefined) {
          d = undefined;
          l = undefined;
        }
        s++;
      }
      if (!g) {
        return;
      }
      if (r) {
        return true;
      }
      s = p;
      a = d;
      m = t.charCodeAt(s);
      c = t.charCodeAt(a - 1);
      g = false;
      if (a - s > 2 && (m === i || m === n) && (c === i || c === n)) {
        s++;
        a--;
        while (s < a) {
          m = t.charCodeAt(s);
          if (m !== i && m !== n) {
            g = true;
            break;
          }
          s++;
        }
        if (g === true) {
          p++;
          d--;
        }
      }
      return e(t.slice(0, l))({ type: 'inlineCode', value: t.slice(p, d) });
    }
  },
  7387: (e, t, r) => {
    var a = r(8473);
    var n = r(2482);
    e.exports = definition;
    var i = '"';
    var o = "'";
    var s = '\\';
    var p = '\n';
    var d = '\t';
    var l = ' ';
    var m = '[';
    var c = ']';
    var g = '(';
    var v = ')';
    var T = ':';
    var E = '<';
    var _ = '>';
    function definition(e, t, r) {
      var a = this;
      var _ = a.options.commonmark;
      var w = 0;
      var A = t.length;
      var b = '';
      var y;
      var S;
      var C;
      var k;
      var N;
      var D;
      var O;
      var I;
      while (w < A) {
        k = t.charAt(w);
        if (k !== l && k !== d) {
          break;
        }
        b += k;
        w++;
      }
      k = t.charAt(w);
      if (k !== m) {
        return;
      }
      w++;
      b += k;
      C = '';
      while (w < A) {
        k = t.charAt(w);
        if (k === c) {
          break;
        } else if (k === s) {
          C += k;
          w++;
          k = t.charAt(w);
        }
        C += k;
        w++;
      }
      if (!C || t.charAt(w) !== c || t.charAt(w + 1) !== T) {
        return;
      }
      D = C;
      b += C + c + T;
      w = b.length;
      C = '';
      while (w < A) {
        k = t.charAt(w);
        if (k !== d && k !== l && k !== p) {
          break;
        }
        b += k;
        w++;
      }
      k = t.charAt(w);
      C = '';
      y = b;
      if (k === E) {
        w++;
        while (w < A) {
          k = t.charAt(w);
          if (!isEnclosedURLCharacter(k)) {
            break;
          }
          C += k;
          w++;
        }
        k = t.charAt(w);
        if (k === isEnclosedURLCharacter.delimiter) {
          b += E + C + k;
          w++;
        } else {
          if (_) {
            return;
          }
          w -= C.length + 1;
          C = '';
        }
      }
      if (!C) {
        while (w < A) {
          k = t.charAt(w);
          if (!isUnclosedURLCharacter(k)) {
            break;
          }
          C += k;
          w++;
        }
        b += C;
      }
      if (!C) {
        return;
      }
      O = C;
      C = '';
      while (w < A) {
        k = t.charAt(w);
        if (k !== d && k !== l && k !== p) {
          break;
        }
        C += k;
        w++;
      }
      k = t.charAt(w);
      N = null;
      if (k === i) {
        N = i;
      } else if (k === o) {
        N = o;
      } else if (k === g) {
        N = v;
      }
      if (!N) {
        C = '';
        w = b.length;
      } else if (C) {
        b += C + k;
        w = b.length;
        C = '';
        while (w < A) {
          k = t.charAt(w);
          if (k === N) {
            break;
          }
          if (k === p) {
            w++;
            k = t.charAt(w);
            if (k === p || k === N) {
              return;
            }
            C += p;
          }
          C += k;
          w++;
        }
        k = t.charAt(w);
        if (k !== N) {
          return;
        }
        S = b;
        b += C + k;
        w++;
        I = C;
        C = '';
      } else {
        return;
      }
      while (w < A) {
        k = t.charAt(w);
        if (k !== d && k !== l) {
          break;
        }
        b += k;
        w++;
      }
      k = t.charAt(w);
      if (!k || k === p) {
        if (r) {
          return true;
        }
        y = e(y).test().end;
        O = a.decode.raw(a.unescape(O), y, { nonTerminated: false });
        if (I) {
          S = e(S).test().end;
          I = a.decode.raw(a.unescape(I), S);
        }
        return e(b)({ type: 'definition', identifier: n(D), label: D, title: I || null, url: O });
      }
    }
    function isEnclosedURLCharacter(e) {
      return e !== _ && e !== m && e !== c;
    }
    isEnclosedURLCharacter.delimiter = _;
    function isUnclosedURLCharacter(e) {
      return e !== m && e !== c && !a(e);
    }
  },
  5052: (e, t, r) => {
    var a = r(8473);
    var n = r(8419);
    e.exports = strikethrough;
    strikethrough.locator = n;
    var i = '~';
    var o = '~~';
    function strikethrough(e, t, r) {
      var n = this;
      var s = '';
      var p = '';
      var d = '';
      var l = '';
      var m;
      var c;
      var g;
      if (!n.options.gfm || t.charAt(0) !== i || t.charAt(1) !== i || a(t.charAt(2))) {
        return;
      }
      m = 1;
      c = t.length;
      g = e.now();
      g.column += 2;
      g.offset += 2;
      while (++m < c) {
        s = t.charAt(m);
        if (s === i && p === i && (!d || !a(d))) {
          if (r) {
            return true;
          }
          return e(o + l + o)({ type: 'delete', children: n.tokenizeInline(l, g) });
        }
        l += p;
        d = p;
        p = s;
      }
    }
  },
  4133: (e, t, r) => {
    var a = r(4065);
    var n = r(1623);
    var i = r(8473);
    var o = r(366);
    e.exports = emphasis;
    emphasis.locator = o;
    var s = '*';
    var p = '_';
    var d = '\\';
    function emphasis(e, t, r) {
      var o = this;
      var l = 0;
      var m = t.charAt(l);
      var c;
      var g;
      var v;
      var T;
      var E;
      var _;
      var w;
      if (m !== s && m !== p) {
        return;
      }
      g = o.options.pedantic;
      E = m;
      v = m;
      _ = t.length;
      l++;
      T = '';
      m = '';
      if (g && i(t.charAt(l))) {
        return;
      }
      while (l < _) {
        w = m;
        m = t.charAt(l);
        if (m === v && (!g || !i(w))) {
          m = t.charAt(++l);
          if (m !== v) {
            if (!a(T) || w === v) {
              return;
            }
            if (!g && v === p && n(m)) {
              T += v;
              continue;
            }
            if (r) {
              return true;
            }
            c = e.now();
            c.column++;
            c.offset++;
            return e(E + T + v)({ type: 'emphasis', children: o.tokenizeInline(T, c) });
          }
          T += v;
        }
        if (!g && m === d) {
          T += m;
          m = t.charAt(++l);
        }
        T += m;
        l++;
      }
    }
  },
  950: (e, t, r) => {
    var a = r(6230);
    e.exports = escape;
    escape.locator = a;
    var n = '\n';
    var i = '\\';
    function escape(e, t, r) {
      var a = this;
      var o;
      var s;
      if (t.charAt(0) === i) {
        o = t.charAt(1);
        if (a.escape.indexOf(o) !== -1) {
          if (r) {
            return true;
          }
          if (o === n) {
            s = { type: 'break' };
          } else {
            s = { type: 'text', value: o };
          }
          return e(i + o)(s);
        }
      }
    }
  },
  2515: (e, t, r) => {
    var a = r(8473);
    var n = r(2482);
    e.exports = footnoteDefinition;
    footnoteDefinition.notInList = true;
    footnoteDefinition.notInBlock = true;
    var i = '\\';
    var o = '\n';
    var s = '\t';
    var p = ' ';
    var d = '[';
    var l = ']';
    var m = '^';
    var c = ':';
    var g = /^( {4}|\t)?/gm;
    function footnoteDefinition(e, t, r) {
      var v = this;
      var T = v.offset;
      var E;
      var _;
      var w;
      var A;
      var b;
      var y;
      var S;
      var C;
      var k;
      var N;
      var D;
      var O;
      if (!v.options.footnotes) {
        return;
      }
      E = 0;
      _ = t.length;
      w = '';
      A = e.now();
      b = A.line;
      while (E < _) {
        k = t.charAt(E);
        if (!a(k)) {
          break;
        }
        w += k;
        E++;
      }
      if (t.charAt(E) !== d || t.charAt(E + 1) !== m) {
        return;
      }
      w += d + m;
      E = w.length;
      S = '';
      while (E < _) {
        k = t.charAt(E);
        if (k === l) {
          break;
        } else if (k === i) {
          S += k;
          E++;
          k = t.charAt(E);
        }
        S += k;
        E++;
      }
      if (!S || t.charAt(E) !== l || t.charAt(E + 1) !== c) {
        return;
      }
      if (r) {
        return true;
      }
      N = S;
      w += S + l + c;
      E = w.length;
      while (E < _) {
        k = t.charAt(E);
        if (k !== s && k !== p) {
          break;
        }
        w += k;
        E++;
      }
      A.column += w.length;
      A.offset += w.length;
      S = '';
      y = '';
      C = '';
      while (E < _) {
        k = t.charAt(E);
        if (k === o) {
          C = k;
          E++;
          while (E < _) {
            k = t.charAt(E);
            if (k !== o) {
              break;
            }
            C += k;
            E++;
          }
          S += C;
          C = '';
          while (E < _) {
            k = t.charAt(E);
            if (k !== p) {
              break;
            }
            C += k;
            E++;
          }
          if (C.length === 0) {
            break;
          }
          S += C;
        }
        if (S) {
          y += S;
          S = '';
        }
        y += k;
        E++;
      }
      w += y;
      y = y.replace(g, function (e) {
        T[b] = (T[b] || 0) + e.length;
        b++;
        return '';
      });
      D = e(w);
      O = v.enterBlock();
      y = v.tokenizeBlock(y, A);
      O();
      return D({ type: 'footnoteDefinition', identifier: n(N), label: N, children: y });
    }
  },
  5544: (e) => {
    e.exports = atxHeading;
    var t = '\n';
    var r = '\t';
    var a = ' ';
    var n = '#';
    var i = 6;
    function atxHeading(e, o, s) {
      var p = this;
      var d = p.options.pedantic;
      var l = o.length + 1;
      var m = -1;
      var c = e.now();
      var g = '';
      var v = '';
      var T;
      var E;
      var _;
      while (++m < l) {
        T = o.charAt(m);
        if (T !== a && T !== r) {
          m--;
          break;
        }
        g += T;
      }
      _ = 0;
      while (++m <= l) {
        T = o.charAt(m);
        if (T !== n) {
          m--;
          break;
        }
        g += T;
        _++;
      }
      if (_ > i) {
        return;
      }
      if (!_ || (!d && o.charAt(m + 1) === n)) {
        return;
      }
      l = o.length + 1;
      E = '';
      while (++m < l) {
        T = o.charAt(m);
        if (T !== a && T !== r) {
          m--;
          break;
        }
        E += T;
      }
      if (!d && E.length === 0 && T && T !== t) {
        return;
      }
      if (s) {
        return true;
      }
      g += E;
      E = '';
      v = '';
      while (++m < l) {
        T = o.charAt(m);
        if (!T || T === t) {
          break;
        }
        if (T !== a && T !== r && T !== n) {
          v += E + T;
          E = '';
          continue;
        }
        while (T === a || T === r) {
          E += T;
          T = o.charAt(++m);
        }
        if (!d && v && !E && T === n) {
          v += T;
          continue;
        }
        while (T === n) {
          E += T;
          T = o.charAt(++m);
        }
        while (T === a || T === r) {
          E += T;
          T = o.charAt(++m);
        }
        m--;
      }
      c.column += g.length;
      c.offset += g.length;
      g += v + E;
      return e(g)({ type: 'heading', depth: _, children: p.tokenizeInline(v, c) });
    }
  },
  7263: (e) => {
    e.exports = setextHeading;
    var t = '\n';
    var r = '\t';
    var a = ' ';
    var n = '=';
    var i = '-';
    var o = 3;
    var s = 1;
    var p = 2;
    function setextHeading(e, d, l) {
      var m = this;
      var c = e.now();
      var g = d.length;
      var v = -1;
      var T = '';
      var E;
      var _;
      var w;
      var A;
      var b;
      while (++v < g) {
        w = d.charAt(v);
        if (w !== a || v >= o) {
          v--;
          break;
        }
        T += w;
      }
      E = '';
      _ = '';
      while (++v < g) {
        w = d.charAt(v);
        if (w === t) {
          v--;
          break;
        }
        if (w === a || w === r) {
          _ += w;
        } else {
          E += _ + w;
          _ = '';
        }
      }
      c.column += T.length;
      c.offset += T.length;
      T += E + _;
      w = d.charAt(++v);
      A = d.charAt(++v);
      if (w !== t || (A !== n && A !== i)) {
        return;
      }
      T += w;
      _ = A;
      b = A === n ? s : p;
      while (++v < g) {
        w = d.charAt(v);
        if (w !== A) {
          if (w !== t) {
            return;
          }
          v--;
          break;
        }
        _ += w;
      }
      if (l) {
        return true;
      }
      return e(T + _)({ type: 'heading', depth: b, children: m.tokenizeInline(E, c) });
    }
  },
  8514: (e, t, r) => {
    var a = r(9181).g;
    e.exports = blockHtml;
    var n = '\t';
    var i = ' ';
    var o = '\n';
    var s = '<';
    var p = /^<(script|pre|style)(?=(\s|>|$))/i;
    var d = /<\/(script|pre|style)>/i;
    var l = /^<!--/;
    var m = /-->/;
    var c = /^<\?/;
    var g = /\?>/;
    var v = /^<![A-Za-z]/;
    var T = />/;
    var E = /^<!\[CDATA\[/;
    var _ = /\]\]>/;
    var w = /^$/;
    var A = new RegExp(a.source + '\\s*$');
    function blockHtml(e, t, r) {
      var a = this;
      var b = a.options.blocks.join('|');
      var y = new RegExp('^</?(' + b + ')(?=(\\s|/?>|$))', 'i');
      var S = t.length;
      var C = 0;
      var k;
      var N;
      var D;
      var O;
      var I;
      var R;
      var P;
      var L = [
        [p, d, true],
        [l, m, true],
        [c, g, true],
        [v, T, true],
        [E, _, true],
        [y, w, true],
        [A, w, false],
      ];
      while (C < S) {
        O = t.charAt(C);
        if (O !== n && O !== i) {
          break;
        }
        C++;
      }
      if (t.charAt(C) !== s) {
        return;
      }
      k = t.indexOf(o, C + 1);
      k = k === -1 ? S : k;
      N = t.slice(C, k);
      D = -1;
      I = L.length;
      while (++D < I) {
        if (L[D][0].test(N)) {
          R = L[D];
          break;
        }
      }
      if (!R) {
        return;
      }
      if (r) {
        return R[2];
      }
      C = k;
      if (!R[1].test(N)) {
        while (C < S) {
          k = t.indexOf(o, C + 1);
          k = k === -1 ? S : k;
          N = t.slice(C + 1, k);
          if (R[1].test(N)) {
            if (N) {
              C = k;
            }
            break;
          }
          C = k;
        }
      }
      P = t.slice(0, C);
      return e(P)({ type: 'html', value: P });
    }
  },
  9155: (e, t, r) => {
    var a = r(1997);
    var n = r(6330);
    var i = r(9181)._;
    e.exports = inlineHTML;
    inlineHTML.locator = n;
    var o = '<';
    var s = '?';
    var p = '!';
    var d = '/';
    var l = /^<a /i;
    var m = /^<\/a>/i;
    function inlineHTML(e, t, r) {
      var n = this;
      var c = t.length;
      var g;
      var v;
      if (t.charAt(0) !== o || c < 3) {
        return;
      }
      g = t.charAt(1);
      if (!a(g) && g !== s && g !== p && g !== d) {
        return;
      }
      v = t.match(i);
      if (!v) {
        return;
      }
      if (r) {
        return true;
      }
      v = v[0];
      if (!n.inLink && l.test(v)) {
        n.inLink = true;
      } else if (n.inLink && m.test(v)) {
        n.inLink = false;
      }
      return e(v)({ type: 'html', value: v });
    }
  },
  8337: (e, t, r) => {
    var a = r(8473);
    var n = r(2532);
    e.exports = link;
    link.locator = n;
    var i = '\n';
    var o = '!';
    var s = '"';
    var p = "'";
    var d = '(';
    var l = ')';
    var m = '<';
    var c = '>';
    var g = '[';
    var v = '\\';
    var T = ']';
    var E = '`';
    function link(e, t, r) {
      var n = this;
      var _ = '';
      var w = 0;
      var A = t.charAt(0);
      var b = n.options.pedantic;
      var y = n.options.commonmark;
      var S = n.options.gfm;
      var C;
      var k;
      var N;
      var D;
      var O;
      var I;
      var R;
      var P;
      var L;
      var x;
      var F;
      var M;
      var B;
      var G;
      var U;
      var H;
      var V;
      var q;
      if (A === o) {
        P = true;
        _ = A;
        A = t.charAt(++w);
      }
      if (A !== g) {
        return;
      }
      if (!P && n.inLink) {
        return;
      }
      _ += A;
      G = '';
      w++;
      F = t.length;
      H = e.now();
      B = 0;
      H.column += w;
      H.offset += w;
      while (w < F) {
        A = t.charAt(w);
        I = A;
        if (A === E) {
          k = 1;
          while (t.charAt(w + 1) === E) {
            I += A;
            w++;
            k++;
          }
          if (!N) {
            N = k;
          } else if (k >= N) {
            N = 0;
          }
        } else if (A === v) {
          w++;
          I += t.charAt(w);
        } else if ((!N || S) && A === g) {
          B++;
        } else if ((!N || S) && A === T) {
          if (B) {
            B--;
          } else {
            if (!b) {
              while (w < F) {
                A = t.charAt(w + 1);
                if (!a(A)) {
                  break;
                }
                I += A;
                w++;
              }
            }
            if (t.charAt(w + 1) !== d) {
              return;
            }
            I += d;
            C = true;
            w++;
            break;
          }
        }
        G += I;
        I = '';
        w++;
      }
      if (!C) {
        return;
      }
      L = G;
      _ += G + I;
      w++;
      while (w < F) {
        A = t.charAt(w);
        if (!a(A)) {
          break;
        }
        _ += A;
        w++;
      }
      A = t.charAt(w);
      G = '';
      D = _;
      if (A === m) {
        w++;
        D += m;
        while (w < F) {
          A = t.charAt(w);
          if (A === c) {
            break;
          }
          if (y && A === i) {
            return;
          }
          G += A;
          w++;
        }
        if (t.charAt(w) !== c) {
          return;
        }
        _ += m + G + c;
        U = G;
        w++;
      } else {
        A = null;
        I = '';
        while (w < F) {
          A = t.charAt(w);
          if (I && (A === s || A === p || (y && A === d))) {
            break;
          }
          if (a(A)) {
            if (!b) {
              break;
            }
            I += A;
          } else {
            if (A === d) {
              B++;
            } else if (A === l) {
              if (B === 0) {
                break;
              }
              B--;
            }
            G += I;
            I = '';
            if (A === v) {
              G += v;
              A = t.charAt(++w);
            }
            G += A;
          }
          w++;
        }
        _ += G;
        U = G;
        w = _.length;
      }
      G = '';
      while (w < F) {
        A = t.charAt(w);
        if (!a(A)) {
          break;
        }
        G += A;
        w++;
      }
      A = t.charAt(w);
      _ += G;
      if (G && (A === s || A === p || (y && A === d))) {
        w++;
        _ += A;
        G = '';
        x = A === d ? l : A;
        O = _;
        if (y) {
          while (w < F) {
            A = t.charAt(w);
            if (A === x) {
              break;
            }
            if (A === v) {
              G += v;
              A = t.charAt(++w);
            }
            w++;
            G += A;
          }
          A = t.charAt(w);
          if (A !== x) {
            return;
          }
          M = G;
          _ += G + A;
          w++;
          while (w < F) {
            A = t.charAt(w);
            if (!a(A)) {
              break;
            }
            _ += A;
            w++;
          }
        } else {
          I = '';
          while (w < F) {
            A = t.charAt(w);
            if (A === x) {
              if (R) {
                G += x + I;
                I = '';
              }
              R = true;
            } else if (!R) {
              G += A;
            } else if (A === l) {
              _ += G + x + I;
              M = G;
              break;
            } else if (a(A)) {
              I += A;
            } else {
              G += x + I + A;
              I = '';
              R = false;
            }
            w++;
          }
        }
      }
      if (t.charAt(w) !== l) {
        return;
      }
      if (r) {
        return true;
      }
      _ += l;
      U = n.decode.raw(n.unescape(U), e(D).test().end, { nonTerminated: false });
      if (M) {
        O = e(O).test().end;
        M = n.decode.raw(n.unescape(M), O);
      }
      q = { type: P ? 'image' : 'link', title: M || null, url: U };
      if (P) {
        q.alt = n.decode.raw(n.unescape(L), H) || null;
      } else {
        V = n.enterLink();
        q.children = n.tokenizeInline(L, H);
        V();
      }
      return e(_)(q);
    }
  },
  3766: (e, t, r) => {
    var a = r(4065);
    var n = r(6976);
    var i = r(5552);
    var o = r(8059);
    var s = r(1180);
    var p = r(1783);
    e.exports = list;
    var d = '*';
    var l = '_';
    var m = '+';
    var c = '-';
    var g = '.';
    var v = ' ';
    var T = '\n';
    var E = '\t';
    var _ = ')';
    var w = 'x';
    var A = 4;
    var b = /\n\n(?!\s*$)/;
    var y = /^\[([ \t]|x|X)][ \t]/;
    var S = /^([ \t]*)([*+-]|\d+[.)])( {1,4}(?! )| |\t|$|(?=\n))([^\n]*)/;
    var C = /^([ \t]*)([*+-]|\d+[.)])([ \t]+)/;
    var k = /^( {1,4}|\t)?/gm;
    function list(e, t, r) {
      var n = this;
      var o = n.options.commonmark;
      var s = n.options.pedantic;
      var w = n.blockTokenizers;
      var b = n.interruptList;
      var y = 0;
      var S = t.length;
      var C = null;
      var k = 0;
      var N;
      var D;
      var O;
      var I;
      var R;
      var P;
      var L;
      var x;
      var F;
      var M;
      var B;
      var G;
      var U;
      var H;
      var V;
      var q;
      var j;
      var K;
      var z = false;
      var W;
      var Y;
      var $;
      var Q;
      while (y < S) {
        O = t.charAt(y);
        if (O === E) {
          k += A - (k % A);
        } else if (O === v) {
          k++;
        } else {
          break;
        }
        y++;
      }
      if (k >= A) {
        return;
      }
      O = t.charAt(y);
      if (O === d || O === m || O === c) {
        I = O;
        D = false;
      } else {
        D = true;
        N = '';
        while (y < S) {
          O = t.charAt(y);
          if (!i(O)) {
            break;
          }
          N += O;
          y++;
        }
        O = t.charAt(y);
        if (!N || !(O === g || (o && O === _))) {
          return;
        }
        C = parseInt(N, 10);
        I = O;
      }
      O = t.charAt(++y);
      if (O !== v && O !== E && (s || (O !== T && O !== ''))) {
        return;
      }
      if (r) {
        return true;
      }
      y = 0;
      U = [];
      H = [];
      V = [];
      while (y < S) {
        R = t.indexOf(T, y);
        P = y;
        L = false;
        Q = false;
        if (R === -1) {
          R = S;
        }
        $ = y + A;
        k = 0;
        while (y < S) {
          O = t.charAt(y);
          if (O === E) {
            k += A - (k % A);
          } else if (O === v) {
            k++;
          } else {
            break;
          }
          y++;
        }
        if (k >= A) {
          Q = true;
        }
        if (q && k >= q.indent) {
          Q = true;
        }
        O = t.charAt(y);
        x = null;
        if (!Q) {
          if (O === d || O === m || O === c) {
            x = O;
            y++;
            k++;
          } else {
            N = '';
            while (y < S) {
              O = t.charAt(y);
              if (!i(O)) {
                break;
              }
              N += O;
              y++;
            }
            O = t.charAt(y);
            y++;
            if (N && (O === g || (o && O === _))) {
              x = O;
              k += N.length + 1;
            }
          }
          if (x) {
            O = t.charAt(y);
            if (O === E) {
              k += A - (k % A);
              y++;
            } else if (O === v) {
              $ = y + A;
              while (y < $) {
                if (t.charAt(y) !== v) {
                  break;
                }
                y++;
                k++;
              }
              if (y === $ && t.charAt(y) === v) {
                y -= A - 1;
                k -= A - 1;
              }
            } else if (O !== T && O !== '') {
              x = null;
            }
          }
        }
        if (x) {
          if (!s && I !== x) {
            break;
          }
          L = true;
        } else {
          if (!o && !Q && t.charAt(P) === v) {
            Q = true;
          } else if (o && q) {
            Q = k >= q.indent || k > A;
          }
          L = false;
          y = P;
        }
        M = t.slice(P, R);
        F = P === y ? M : t.slice(y, R);
        if (x === d || x === l || x === c) {
          if (w.thematicBreak.call(n, e, M, true)) {
            break;
          }
        }
        B = G;
        G = !L && !a(F).length;
        if (Q && q) {
          q.value = q.value.concat(V, M);
          H = H.concat(V, M);
          V = [];
        } else if (L) {
          if (V.length !== 0) {
            z = true;
            q.value.push('');
            q.trail = V.concat();
          }
          q = { value: [M], indent: k, trail: [] };
          U.push(q);
          H = H.concat(V, M);
          V = [];
        } else if (G) {
          if (B && !o) {
            break;
          }
          V.push(M);
        } else {
          if (B) {
            break;
          }
          if (p(b, w, n, [e, M, true])) {
            break;
          }
          q.value = q.value.concat(V, M);
          H = H.concat(V, M);
          V = [];
        }
        y = R + 1;
      }
      W = e(H.join(T)).reset({ type: 'list', ordered: D, start: C, spread: z, children: [] });
      j = n.enterList();
      K = n.enterBlock();
      y = -1;
      S = U.length;
      while (++y < S) {
        q = U[y].value.join(T);
        Y = e.now();
        e(q)(listItem(n, q, Y), W);
        q = U[y].trail.join(T);
        if (y !== S - 1) {
          q += T;
        }
        e(q);
      }
      j();
      K();
      return W;
    }
    function listItem(e, t, r) {
      var a = e.offset;
      var n = e.options.pedantic ? pedanticListItem : normalListItem;
      var i = null;
      var o;
      var s;
      t = n.apply(null, arguments);
      if (e.options.gfm) {
        o = t.match(y);
        if (o) {
          s = o[0].length;
          i = o[1].toLowerCase() === w;
          a[r.line] += s;
          t = t.slice(s);
        }
      }
      return { type: 'listItem', spread: b.test(t), checked: i, children: e.tokenizeBlock(t, r) };
    }
    function pedanticListItem(e, t, r) {
      var a = e.offset;
      var n = r.line;
      t = t.replace(C, replacer);
      n = r.line;
      return t.replace(k, replacer);
      function replacer(e) {
        a[n] = (a[n] || 0) + e.length;
        n++;
        return '';
      }
    }
    function normalListItem(e, t, r) {
      var a = e.offset;
      var i = r.line;
      var p;
      var d;
      var l;
      var m;
      var c;
      var g;
      var E;
      t = t.replace(S, replacer);
      m = t.split(T);
      c = s(t, o(p).indent).split(T);
      c[0] = l;
      a[i] = (a[i] || 0) + d.length;
      i++;
      g = 0;
      E = m.length;
      while (++g < E) {
        a[i] = (a[i] || 0) + m[g].length - c[g].length;
        i++;
      }
      return c.join(T);
      function replacer(e, t, r, a, i) {
        d = t + r + a;
        l = i;
        if (Number(r) < 10 && d.length % 2 === 1) {
          r = v + r;
        }
        p = t + n(v, r.length) + a;
        return p + l;
      }
    }
  },
  8742: (e, t, r) => {
    var a = r(8473);
    e.exports = newline;
    var n = '\n';
    function newline(e, t, r) {
      var i = t.charAt(0);
      var o;
      var s;
      var p;
      var d;
      if (i !== n) {
        return;
      }
      if (r) {
        return true;
      }
      d = 1;
      o = t.length;
      s = i;
      p = '';
      while (d < o) {
        i = t.charAt(d);
        if (!a(i)) {
          break;
        }
        p += i;
        if (i === n) {
          s += p;
          p = '';
        }
        d++;
      }
      e(s);
    }
  },
  2082: (e, t, r) => {
    var a = r(4065);
    var n = r(5552);
    var i = r(3199);
    var o = r(1783);
    e.exports = paragraph;
    var s = '\t';
    var p = '\n';
    var d = ' ';
    var l = 4;
    function paragraph(e, t, r) {
      var m = this;
      var c = m.options;
      var g = c.commonmark;
      var v = c.gfm;
      var T = m.blockTokenizers;
      var E = m.interruptParagraph;
      var _ = t.indexOf(p);
      var w = t.length;
      var A;
      var b;
      var y;
      var S;
      var C;
      while (_ < w) {
        if (_ === -1) {
          _ = w;
          break;
        }
        if (t.charAt(_ + 1) === p) {
          break;
        }
        if (g) {
          S = 0;
          A = _ + 1;
          while (A < w) {
            y = t.charAt(A);
            if (y === s) {
              S = l;
              break;
            } else if (y === d) {
              S++;
            } else {
              break;
            }
            A++;
          }
          if (S >= l && y !== p) {
            _ = t.indexOf(p, _ + 1);
            continue;
          }
        }
        b = t.slice(_ + 1);
        if (o(E, T, m, [e, b, true])) {
          break;
        }
        if (T.list.call(m, e, b, true) && (m.inList || g || (v && !n(a.left(b).charAt(0))))) {
          break;
        }
        A = _;
        _ = t.indexOf(p, _ + 1);
        if (_ !== -1 && a(t.slice(A, _)) === '') {
          _ = A;
          break;
        }
      }
      b = t.slice(0, _);
      if (a(b) === '') {
        e(b);
        return null;
      }
      if (r) {
        return true;
      }
      C = e.now();
      b = i(b);
      return e(b)({ type: 'paragraph', children: m.tokenizeInline(b, C) });
    }
  },
  3699: (e, t, r) => {
    var a = r(8473);
    var n = r(2532);
    var i = r(2482);
    e.exports = reference;
    reference.locator = n;
    var o = 'link';
    var s = 'image';
    var p = 'footnote';
    var d = 'shortcut';
    var l = 'collapsed';
    var m = 'full';
    var c = ' ';
    var g = '!';
    var v = '[';
    var T = '\\';
    var E = ']';
    var _ = '^';
    function reference(e, t, r) {
      var n = this;
      var w = n.options.commonmark;
      var A = n.options.footnotes;
      var b = t.charAt(0);
      var y = 0;
      var S = t.length;
      var C = '';
      var k = '';
      var N = o;
      var D = d;
      var O;
      var I;
      var R;
      var P;
      var L;
      var x;
      var F;
      var M;
      if (b === g) {
        N = s;
        k = b;
        b = t.charAt(++y);
      }
      if (b !== v) {
        return;
      }
      y++;
      k += b;
      x = '';
      if (A && t.charAt(y) === _) {
        if (N === s) {
          return;
        }
        k += _;
        y++;
        N = p;
      }
      M = 0;
      while (y < S) {
        b = t.charAt(y);
        if (b === v) {
          F = true;
          M++;
        } else if (b === E) {
          if (!M) {
            break;
          }
          M--;
        }
        if (b === T) {
          x += T;
          b = t.charAt(++y);
        }
        x += b;
        y++;
      }
      C = x;
      O = x;
      b = t.charAt(y);
      if (b !== E) {
        return;
      }
      y++;
      C += b;
      x = '';
      if (!w) {
        while (y < S) {
          b = t.charAt(y);
          if (!a(b)) {
            break;
          }
          x += b;
          y++;
        }
      }
      b = t.charAt(y);
      if (N !== p && b === v && (!A || t.charAt(y + 1) !== _)) {
        I = '';
        x += b;
        y++;
        while (y < S) {
          b = t.charAt(y);
          if (b === v || b === E) {
            break;
          }
          if (b === T) {
            I += T;
            b = t.charAt(++y);
          }
          I += b;
          y++;
        }
        b = t.charAt(y);
        if (b === E) {
          D = I ? m : l;
          x += I + b;
          y++;
        } else {
          I = '';
        }
        C += x;
        x = '';
      } else {
        if (!O) {
          return;
        }
        I = O;
      }
      if (D !== m && F) {
        return;
      }
      C = k + C;
      if (N === o && n.inLink) {
        return null;
      }
      if (r) {
        return true;
      }
      if (N === p && O.indexOf(c) !== -1) {
        return e(C)({ type: p, children: this.tokenizeInline(O, e.now()) });
      }
      R = e.now();
      R.column += k.length;
      R.offset += k.length;
      I = D === m ? I : O;
      P = { type: N + 'Reference', identifier: i(I), label: I };
      if (N === o || N === s) {
        P.referenceType = D;
      }
      if (N === o) {
        L = n.enterLink();
        P.children = n.tokenizeInline(O, R);
        L();
      } else if (N === s) {
        P.alt = n.decode.raw(n.unescape(O), R) || null;
      }
      return e(C)(P);
    }
  },
  9569: (e, t, r) => {
    var a = r(4065);
    var n = r(8473);
    var i = r(5514);
    e.exports = strong;
    strong.locator = i;
    var o = '\\';
    var s = '*';
    var p = '_';
    function strong(e, t, r) {
      var i = this;
      var d = 0;
      var l = t.charAt(d);
      var m;
      var c;
      var g;
      var v;
      var T;
      var E;
      var _;
      if ((l !== s && l !== p) || t.charAt(++d) !== l) {
        return;
      }
      c = i.options.pedantic;
      g = l;
      T = g + g;
      E = t.length;
      d++;
      v = '';
      l = '';
      if (c && n(t.charAt(d))) {
        return;
      }
      while (d < E) {
        _ = l;
        l = t.charAt(d);
        if (l === g && t.charAt(d + 1) === g && (!c || !n(_))) {
          l = t.charAt(d + 2);
          if (l !== g) {
            if (!a(v)) {
              return;
            }
            if (r) {
              return true;
            }
            m = e.now();
            m.column += 2;
            m.offset += 2;
            return e(T + v + T)({ type: 'strong', children: i.tokenizeInline(v, m) });
          }
        }
        if (!c && l === o) {
          v += l;
          l = t.charAt(++d);
        }
        v += l;
        d++;
      }
    }
  },
  3274: (e, t, r) => {
    var a = r(8473);
    e.exports = table;
    var n = '\t';
    var i = '\n';
    var o = ' ';
    var s = '-';
    var p = ':';
    var d = '\\';
    var l = '|';
    var m = 1;
    var c = 2;
    var g = 'left';
    var v = 'center';
    var T = 'right';
    function table(e, t, r) {
      var E = this;
      var _;
      var w;
      var A;
      var b;
      var y;
      var S;
      var C;
      var k;
      var N;
      var D;
      var O;
      var I;
      var R;
      var P;
      var L;
      var x;
      var F;
      var M;
      var B;
      var G;
      var U;
      var H;
      if (!E.options.gfm) {
        return;
      }
      _ = 0;
      x = 0;
      S = t.length + 1;
      C = [];
      while (_ < S) {
        G = t.indexOf(i, _);
        U = t.indexOf(l, _ + 1);
        if (G === -1) {
          G = t.length;
        }
        if (U === -1 || U > G) {
          if (x < c) {
            return;
          }
          break;
        }
        C.push(t.slice(_, G));
        x++;
        _ = G + 1;
      }
      b = C.join(i);
      w = C.splice(1, 1)[0] || [];
      _ = 0;
      S = w.length;
      x--;
      A = false;
      O = [];
      while (_ < S) {
        N = w.charAt(_);
        if (N === l) {
          D = null;
          if (A === false) {
            if (H === false) {
              return;
            }
          } else {
            O.push(A);
            A = false;
          }
          H = false;
        } else if (N === s) {
          D = true;
          A = A || null;
        } else if (N === p) {
          if (A === g) {
            A = v;
          } else if (D && A === null) {
            A = T;
          } else {
            A = g;
          }
        } else if (!a(N)) {
          return;
        }
        _++;
      }
      if (A !== false) {
        O.push(A);
      }
      if (O.length < m) {
        return;
      }
      if (r) {
        return true;
      }
      L = -1;
      M = [];
      B = e(b).reset({ type: 'table', align: O, children: M });
      while (++L < x) {
        F = C[L];
        y = { type: 'tableRow', children: [] };
        if (L) {
          e(i);
        }
        e(F).reset(y, B);
        S = F.length + 1;
        _ = 0;
        k = '';
        I = '';
        R = true;
        while (_ < S) {
          N = F.charAt(_);
          if (N === n || N === o) {
            if (I) {
              k += N;
            } else {
              e(N);
            }
            _++;
            continue;
          }
          if (N === '' || N === l) {
            if (R) {
              e(N);
            } else {
              if ((I || N) && !R) {
                b = I;
                if (k.length > 1) {
                  if (N) {
                    b += k.slice(0, k.length - 1);
                    k = k.charAt(k.length - 1);
                  } else {
                    b += k;
                    k = '';
                  }
                }
                P = e.now();
                e(b)({ type: 'tableCell', children: E.tokenizeInline(I, P) }, y);
              }
              e(k + N);
              k = '';
              I = '';
            }
          } else {
            if (k) {
              I += k;
              k = '';
            }
            I += N;
            if (N === d && _ !== S - 2) {
              I += F.charAt(_ + 1);
              _++;
            }
          }
          R = false;
          _++;
        }
        if (!L) {
          e(i + w);
        }
      }
      return B;
    }
  },
  9916: (e) => {
    e.exports = text;
    function text(e, t, r) {
      var a = this;
      var n;
      var i;
      var o;
      var s;
      var p;
      var d;
      var l;
      var m;
      var c;
      var g;
      if (r) {
        return true;
      }
      n = a.inlineMethods;
      s = n.length;
      i = a.inlineTokenizers;
      o = -1;
      c = t.length;
      while (++o < s) {
        m = n[o];
        if (m === 'text' || !i[m]) {
          continue;
        }
        l = i[m].locator;
        if (!l) {
          e.file.fail('Missing locator: `' + m + '`');
        }
        d = l.call(a, t, 1);
        if (d !== -1 && d < c) {
          c = d;
        }
      }
      p = t.slice(0, c);
      g = e.now();
      a.decode(p, g, handler);
      function handler(t, r, a) {
        e(a || t)({ type: 'text', value: t });
      }
    }
  },
  2763: (e) => {
    e.exports = thematicBreak;
    var t = '\t';
    var r = '\n';
    var a = ' ';
    var n = '*';
    var i = '-';
    var o = '_';
    var s = 3;
    function thematicBreak(e, p, d) {
      var l = -1;
      var m = p.length + 1;
      var c = '';
      var g;
      var v;
      var T;
      var E;
      while (++l < m) {
        g = p.charAt(l);
        if (g !== t && g !== a) {
          break;
        }
        c += g;
      }
      if (g !== n && g !== i && g !== o) {
        return;
      }
      v = g;
      c += g;
      T = 1;
      E = '';
      while (++l < m) {
        g = p.charAt(l);
        if (g === v) {
          T++;
          c += E + v;
          E = '';
        } else if (g === a) {
          E += g;
        } else if (T >= s && (!g || g === r)) {
          c += E;
          if (d) {
            return true;
          }
          return e(c)({ type: 'thematicBreak' });
        } else {
          return;
        }
      }
    }
  },
  5069: (e, t, r) => {
    var a = r(8859);
    var n = r(8473);
    var i = r(327);
    e.exports = url;
    url.locator = i;
    url.notInLink = true;
    var o = '"';
    var s = "'";
    var p = '(';
    var d = ')';
    var l = ',';
    var m = '.';
    var c = ':';
    var g = ';';
    var v = '<';
    var T = '@';
    var E = '[';
    var _ = ']';
    var w = 'http://';
    var A = 'https://';
    var b = 'mailto:';
    var y = [w, A, b];
    var S = y.length;
    function url(e, t, r) {
      var i = this;
      var w;
      var A;
      var C;
      var k;
      var N;
      var D;
      var O;
      var I;
      var R;
      var P;
      var L;
      var x;
      var F;
      if (!i.options.gfm) {
        return;
      }
      w = '';
      k = -1;
      while (++k < S) {
        D = y[k];
        O = t.slice(0, D.length);
        if (O.toLowerCase() === D) {
          w = O;
          break;
        }
      }
      if (!w) {
        return;
      }
      k = w.length;
      I = t.length;
      R = '';
      P = 0;
      while (k < I) {
        C = t.charAt(k);
        if (n(C) || C === v) {
          break;
        }
        if (C === m || C === l || C === c || C === g || C === o || C === s || C === d || C === _) {
          L = t.charAt(k + 1);
          if (!L || n(L)) {
            break;
          }
        }
        if (C === p || C === E) {
          P++;
        }
        if (C === d || C === _) {
          P--;
          if (P < 0) {
            break;
          }
        }
        R += C;
        k++;
      }
      if (!R) {
        return;
      }
      w += R;
      A = w;
      if (D === b) {
        N = R.indexOf(T);
        if (N === -1 || N === I - 1) {
          return;
        }
        A = A.substr(b.length);
      }
      if (r) {
        return true;
      }
      F = i.enterLink();
      x = i.inlineTokenizers;
      i.inlineTokenizers = { text: x.text };
      A = i.tokenizeInline(A, e.now());
      i.inlineTokenizers = x;
      F();
      return e(w)({ type: 'link', title: null, url: a(w, { nonTerminated: false }), children: A });
    }
  },
  8970: (e) => {
    e.exports = factory;
    function factory(e) {
      return tokenize;
      function tokenize(t, r) {
        var a = this;
        var n = a.offset;
        var i = [];
        var o = a[e + 'Methods'];
        var s = a[e + 'Tokenizers'];
        var p = r.line;
        var d = r.column;
        var l;
        var m;
        var c;
        var g;
        var v;
        var T;
        if (!t) {
          return i;
        }
        eat.now = now;
        eat.file = a.file;
        updatePosition('');
        while (t) {
          l = -1;
          m = o.length;
          v = false;
          while (++l < m) {
            g = o[l];
            c = s[g];
            if (
              c &&
              (!c.onlyAtStart || a.atStart) &&
              (!c.notInList || !a.inList) &&
              (!c.notInBlock || !a.inBlock) &&
              (!c.notInLink || !a.inLink)
            ) {
              T = t.length;
              c.apply(a, [eat, t]);
              v = T !== t.length;
              if (v) {
                break;
              }
            }
          }
          if (!v) {
            a.file.fail(new Error('Infinite loop'), eat.now());
          }
        }
        a.eof = now();
        return i;
        function updatePosition(e) {
          var t = -1;
          var r = e.indexOf('\n');
          while (r !== -1) {
            p++;
            t = r;
            r = e.indexOf('\n', r + 1);
          }
          if (t === -1) {
            d += e.length;
          } else {
            d = e.length - t;
          }
          if (p in n) {
            if (t !== -1) {
              d += n[p];
            } else if (d <= n[p]) {
              d = n[p] + 1;
            }
          }
        }
        function getOffset() {
          var e = [];
          var t = p + 1;
          return function () {
            var r = p + 1;
            while (t < r) {
              e.push((n[t] || 0) + 1);
              t++;
            }
            return e;
          };
        }
        function now() {
          var e = { line: p, column: d };
          e.offset = a.toOffset(e);
          return e;
        }
        function Position(e) {
          this.start = e;
          this.end = now();
        }
        function validateEat(e) {
          if (t.substring(0, e.length) !== e) {
            a.file.fail(
              new Error(
                'Incorrectly eaten value: please report this warning on https://git.io/vg5Ft',
              ),
              now(),
            );
          }
        }
        function position() {
          var e = now();
          return update;
          function update(t, r) {
            var a = t.position;
            var i = a ? a.start : e;
            var o = [];
            var s = a && a.end.line;
            var p = e.line;
            t.position = new Position(i);
            if (a && r && a.indent) {
              o = a.indent;
              if (s < p) {
                while (++s < p) {
                  o.push((n[s] || 0) + 1);
                }
                o.push(e.column);
              }
              r = o.concat(r);
            }
            t.position.indent = r || [];
            return t;
          }
        }
        function add(e, t) {
          var r = t ? t.children : i;
          var n = r[r.length - 1];
          var o;
          if (
            n &&
            e.type === n.type &&
            (e.type === 'text' || e.type === 'blockquote') &&
            mergeable(n) &&
            mergeable(e)
          ) {
            o = e.type === 'text' ? mergeText : mergeBlockquote;
            e = o.call(a, n, e);
          }
          if (e !== n) {
            r.push(e);
          }
          if (a.atStart && i.length !== 0) {
            a.exitStart();
          }
          return e;
        }
        function eat(e) {
          var r = getOffset();
          var a = position();
          var n = now();
          validateEat(e);
          apply.reset = reset;
          reset.test = test;
          apply.test = test;
          t = t.substring(e.length);
          updatePosition(e);
          r = r();
          return apply;
          function apply(e, t) {
            return a(add(a(e), t), r);
          }
          function reset() {
            var r = apply.apply(null, arguments);
            p = n.line;
            d = n.column;
            t = e + t;
            return r;
          }
          function test() {
            var r = a({});
            p = n.line;
            d = n.column;
            t = e + t;
            return r.position;
          }
        }
      }
    }
    function mergeable(e) {
      var t;
      var r;
      if (e.type !== 'text' || !e.position) {
        return true;
      }
      t = e.position.start;
      r = e.position.end;
      return t.line !== r.line || r.column - t.column === e.value.length;
    }
    function mergeText(e, t) {
      e.value += t.value;
      return e;
    }
    function mergeBlockquote(e, t) {
      if (this.options.commonmark || this.options.gfm) {
        return t;
      }
      e.children = e.children.concat(t.children);
      return e;
    }
  },
  4063: (e) => {
    e.exports = factory;
    var t = '\\';
    function factory(e, r) {
      return unescape;
      function unescape(a) {
        var n = 0;
        var i = a.indexOf(t);
        var o = e[r];
        var s = [];
        var p;
        while (i !== -1) {
          s.push(a.slice(n, i));
          n = i + 1;
          p = a.charAt(n);
          if (!p || o.indexOf(p) === -1) {
            s.push(t);
          }
          i = a.indexOf(t, n + 1);
        }
        s.push(a.slice(n));
        return s.join('');
      }
    }
  },
  8059: (e) => {
    e.exports = indentation;
    var t = '\t';
    var r = ' ';
    var a = 1;
    var n = 4;
    function indentation(e) {
      var i = 0;
      var o = 0;
      var s = e.charAt(i);
      var p = {};
      var d;
      while (s === t || s === r) {
        d = s === t ? n : a;
        o += d;
        if (d > 1) {
          o = Math.floor(o / d) * d;
        }
        p[o] = i;
        s = e.charAt(++i);
      }
      return { indent: o, stops: p };
    }
  },
  9181: (e, t) => {
    var r = '[a-zA-Z_:][a-zA-Z0-9:._-]*';
    var a = '[^"\'=<>`\\u0000-\\u0020]+';
    var n = "'[^']*'";
    var i = '"[^"]*"';
    var o = '(?:' + a + '|' + n + '|' + i + ')';
    var s = '(?:\\s+' + r + '(?:\\s*=\\s*' + o + ')?)';
    var p = '<[A-Za-z][A-Za-z0-9\\-]*' + s + '*\\s*\\/?>';
    var d = '<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>';
    var l = '\x3c!----\x3e|\x3c!--(?:-?[^>-])(?:-?[^-])*--\x3e';
    var m = '<[?].*?[?]>';
    var c = '<![A-Za-z]+\\s+[^>]*>';
    var g = '<!\\[CDATA\\[[\\s\\S]*?\\]\\]>';
    t.g = new RegExp('^(?:' + p + '|' + d + ')');
    t._ = new RegExp('^(?:' + p + '|' + d + '|' + l + '|' + m + '|' + c + '|' + g + ')');
  },
  1783: (e) => {
    e.exports = interrupt;
    function interrupt(e, t, r, a) {
      var n = e.length;
      var i = -1;
      var o;
      var s;
      while (++i < n) {
        o = e[i];
        s = o[1] || {};
        if (s.pedantic !== undefined && s.pedantic !== r.options.pedantic) {
          continue;
        }
        if (s.commonmark !== undefined && s.commonmark !== r.options.commonmark) {
          continue;
        }
        if (t[o[0]].apply(r, a)) {
          return true;
        }
      }
      return false;
    }
  },
  2482: (e, t, r) => {
    var a = r(8201);
    e.exports = normalize;
    function normalize(e) {
      return a(e).toLowerCase();
    }
  },
  1180: (e, t, r) => {
    var a = r(4065);
    var n = r(6976);
    var i = r(8059);
    e.exports = indentation;
    var o = '\t';
    var s = '\n';
    var p = ' ';
    var d = '!';
    function indentation(e, t) {
      var r = e.split(s);
      var l = r.length + 1;
      var m = Infinity;
      var c = [];
      var g;
      var v;
      var T;
      var E;
      r.unshift(n(p, t) + d);
      while (l--) {
        v = i(r[l]);
        c[l] = v.stops;
        if (a(r[l]).length === 0) {
          continue;
        }
        if (v.indent) {
          if (v.indent > 0 && v.indent < m) {
            m = v.indent;
          }
        } else {
          m = Infinity;
          break;
        }
      }
      if (m !== Infinity) {
        l = r.length;
        while (l--) {
          T = c[l];
          g = m;
          while (g && !(g in T)) {
            g--;
          }
          if (a(r[l]).length !== 0 && m && g !== m) {
            E = o;
          } else {
            E = '';
          }
          r[l] = E + r[l].slice(g in T ? T[g] + 1 : 0);
        }
      }
      r.shift();
      return r.join(s);
    }
  },
  4892: (e, t, r) => {
    var a = r(7780);
    e.exports = remark2rehype;
    function remark2rehype(e, t) {
      if (e && !e.process) {
        t = e;
        e = null;
      }
      return e ? bridge(e, t) : mutate(t);
    }
    function bridge(e, t) {
      return transformer;
      function transformer(r, n, i) {
        e.run(a(r, t), n, done);
        function done(e) {
          i(e);
        }
      }
    }
    function mutate(e) {
      return transformer;
      function transformer(t) {
        return a(t, e);
      }
    }
  },
  6976: (e) => {
    /*!
     * repeat-string <https://github.com/jonschlinkert/repeat-string>
     *
     * Copyright (c) 2014-2015, Jon Schlinkert.
     * Licensed under the MIT License.
     */
    var t = '';
    var r;
    e.exports = repeat;
    function repeat(e, a) {
      if (typeof e !== 'string') {
        throw new TypeError('expected a string');
      }
      if (a === 1) return e;
      if (a === 2) return e + e;
      var n = e.length * a;
      if (r !== e || typeof r === 'undefined') {
        r = e;
        t = '';
      } else if (t.length >= n) {
        return t.substr(0, n);
      }
      while (n > t.length && a > 1) {
        if (a & 1) {
          t += e;
        }
        a >>= 1;
        e += e;
      }
      t += e;
      t = t.substr(0, n);
      return t;
    }
  },
  1762: (e, t, r) => {
    var a = r(6961);
    var n = r(7512);
    e.exports = function (e, t) {
      if (typeof t === 'function') {
        t = { parse: t };
      }
      var r = toObject(e);
      var a = { section_delimiter: '---', parse: identity };
      var i = n({}, a, t);
      var o = i.section_delimiter;
      var s = r.content.split(/\r?\n/);
      var p = null;
      var d = createSection();
      var l = [];
      var m = [];
      function initSections(e) {
        r.content = e;
        p = [];
        l = [];
      }
      function closeSection(e) {
        if (m.length) {
          d.key = getKey(m[0], o);
          d.content = e;
          i.parse(d, p);
          p.push(d);
          d = createSection();
          l = [];
          m = [];
        }
      }
      for (var c = 0; c < s.length; c++) {
        var g = s[c];
        var v = m.length;
        var T = g.trim();
        if (isDelimiter(T, o)) {
          if (T.length === 3 && c !== 0) {
            if (v === 0 || v === 2) {
              l.push(g);
              continue;
            }
            m.push(T);
            d.data = l.join('\n');
            l = [];
            continue;
          }
          if (p === null) {
            initSections(l.join('\n'));
          }
          if (v === 2) {
            closeSection(l.join('\n'));
          }
          m.push(T);
          continue;
        }
        l.push(g);
      }
      if (p === null) {
        initSections(l.join('\n'));
      } else {
        closeSection(l.join('\n'));
      }
      r.sections = p;
      return r;
    };
    function isDelimiter(e, t) {
      if (e.slice(0, t.length) !== t) {
        return false;
      }
      if (e.charAt(t.length + 1) === t.slice(-1)) {
        return false;
      }
      return true;
    }
    function toObject(e) {
      if (a(e) !== 'object') {
        e = { content: e };
      }
      if (typeof e.content !== 'string' && !isBuffer(e.content)) {
        throw new TypeError('expected a buffer or string');
      }
      e.content = e.content.toString();
      e.sections = [];
      return e;
    }
    function getKey(e, t) {
      return e ? e.slice(t.length).trim() : '';
    }
    function createSection() {
      return { key: '', data: '', content: '' };
    }
    function identity(e) {
      return e;
    }
    function isBuffer(e) {
      if (e && e.constructor && typeof e.constructor.isBuffer === 'function') {
        return e.constructor.isBuffer(e);
      }
      return false;
    }
  },
  4158: (e, t) => {
    t.parse = parse;
    t.stringify = stringify;
    var r = '';
    var a = ' ';
    var n = /[ \t\n\r\f]+/g;
    function parse(e) {
      var t = String(e || r).trim();
      return t === r ? [] : t.split(n);
    }
    function stringify(e) {
      return e.join(a).trim();
    }
  },
  6435: (e) => {
    e.exports = factory;
    function factory(e, t, r) {
      return enter;
      function enter() {
        var a = r || this;
        var n = a[e];
        a[e] = !t;
        return exit;
        function exit() {
          a[e] = n;
        }
      }
    }
  },
  6550: (e) => {
    /*!
     * strip-bom-string <https://github.com/jonschlinkert/strip-bom-string>
     *
     * Copyright (c) 2015, 2017, Jon Schlinkert.
     * Released under the MIT License.
     */
    e.exports = function (e) {
      if (typeof e === 'string' && e.charAt(0) === '\ufeff') {
        return e.slice(1);
      }
      return e;
    };
  },
  6204: (e, t, r) => {
    var a = r(3328);
    function StyleToObject(e, t) {
      var r = null;
      if (!e || typeof e !== 'string') {
        return r;
      }
      var n;
      var i = a(e);
      var o = typeof t === 'function';
      var s;
      var p;
      for (var d = 0, l = i.length; d < l; d++) {
        n = i[d];
        s = n.property;
        p = n.value;
        if (o) {
          t(s, p, n);
        } else if (p) {
          r || (r = {});
          r[s] = p;
        }
      }
      return r;
    }
    e.exports = StyleToObject;
  },
  4256: (e, t, r) => {
    var a = r(5477);
    var n = r(2020);
    var i = { TRANSITIONAL: 0, NONTRANSITIONAL: 1 };
    function normalize(e) {
      return e
        .split('\0')
        .map(function (e) {
          return e.normalize('NFC');
        })
        .join('\0');
    }
    function findStatus(e) {
      var t = 0;
      var r = n.length - 1;
      while (t <= r) {
        var a = Math.floor((t + r) / 2);
        var i = n[a];
        if (i[0][0] <= e && i[0][1] >= e) {
          return i;
        } else if (i[0][0] > e) {
          r = a - 1;
        } else {
          t = a + 1;
        }
      }
      return null;
    }
    var o = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
    function countSymbols(e) {
      return e.replace(o, '_').length;
    }
    function mapChars(e, t, r) {
      var a = false;
      var n = '';
      var o = countSymbols(e);
      for (var s = 0; s < o; ++s) {
        var p = e.codePointAt(s);
        var d = findStatus(p);
        switch (d[1]) {
          case 'disallowed':
            a = true;
            n += String.fromCodePoint(p);
            break;
          case 'ignored':
            break;
          case 'mapped':
            n += String.fromCodePoint.apply(String, d[2]);
            break;
          case 'deviation':
            if (r === i.TRANSITIONAL) {
              n += String.fromCodePoint.apply(String, d[2]);
            } else {
              n += String.fromCodePoint(p);
            }
            break;
          case 'valid':
            n += String.fromCodePoint(p);
            break;
          case 'disallowed_STD3_mapped':
            if (t) {
              a = true;
              n += String.fromCodePoint(p);
            } else {
              n += String.fromCodePoint.apply(String, d[2]);
            }
            break;
          case 'disallowed_STD3_valid':
            if (t) {
              a = true;
            }
            n += String.fromCodePoint(p);
            break;
        }
      }
      return { string: n, error: a };
    }
    var s =
      /[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08E4-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D01-\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u18A9\u1920-\u192B\u1930-\u193B\u19B0-\u19C0\u19C8\u19C9\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFC-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C4\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2D]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD804[\uDC00-\uDC02\uDC38-\uDC46\uDC7F-\uDC82\uDCB0-\uDCBA\uDD00-\uDD02\uDD27-\uDD34\uDD73\uDD80-\uDD82\uDDB3-\uDDC0\uDE2C-\uDE37\uDEDF-\uDEEA\uDF01-\uDF03\uDF3C\uDF3E-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDCB0-\uDCC3\uDDAF-\uDDB5\uDDB8-\uDDC0\uDE30-\uDE40\uDEAB-\uDEB7]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF51-\uDF7E\uDF8F-\uDF92]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD83A[\uDCD0-\uDCD6]|\uDB40[\uDD00-\uDDEF]/;
    function validateLabel(e, t) {
      if (e.substr(0, 4) === 'xn--') {
        e = a.toUnicode(e);
        t = i.NONTRANSITIONAL;
      }
      var r = false;
      if (
        normalize(e) !== e ||
        (e[3] === '-' && e[4] === '-') ||
        e[0] === '-' ||
        e[e.length - 1] === '-' ||
        e.indexOf('.') !== -1 ||
        e.search(s) === 0
      ) {
        r = true;
      }
      var n = countSymbols(e);
      for (var o = 0; o < n; ++o) {
        var p = findStatus(e.codePointAt(o));
        if (
          (processing === i.TRANSITIONAL && p[1] !== 'valid') ||
          (processing === i.NONTRANSITIONAL && p[1] !== 'valid' && p[1] !== 'deviation')
        ) {
          r = true;
          break;
        }
      }
      return { label: e, error: r };
    }
    function processing(e, t, r) {
      var a = mapChars(e, t, r);
      a.string = normalize(a.string);
      var n = a.string.split('.');
      for (var i = 0; i < n.length; ++i) {
        try {
          var o = validateLabel(n[i]);
          n[i] = o.label;
          a.error = a.error || o.error;
        } catch (e) {
          a.error = true;
        }
      }
      return { string: n.join('.'), error: a.error };
    }
    e.exports.toASCII = function (e, t, r, n) {
      var i = processing(e, t, r);
      var o = i.string.split('.');
      o = o.map(function (e) {
        try {
          return a.toASCII(e);
        } catch (t) {
          i.error = true;
          return e;
        }
      });
      if (n) {
        var s = o.slice(0, o.length - 1).join('.').length;
        if (s.length > 253 || s.length === 0) {
          i.error = true;
        }
        for (var p = 0; p < o.length; ++p) {
          if (o.length > 63 || o.length === 0) {
            i.error = true;
            break;
          }
        }
      }
      if (i.error) return null;
      return o.join('.');
    };
    e.exports.toUnicode = function (e, t) {
      var r = processing(e, t, i.NONTRANSITIONAL);
      return { domain: r.string, error: r.error };
    };
    e.exports.PROCESSING_OPTIONS = i;
  },
  8213: (e) => {
    e.exports = trimLines;
    var t = /[ \t]*\n+[ \t]*/g;
    var r = '\n';
    function trimLines(e) {
      return String(e).replace(t, r);
    }
  },
  3199: (e) => {
    e.exports = trimTrailingLines;
    function trimTrailingLines(e) {
      return String(e).replace(/\n+$/, '');
    }
  },
  4065: (e, t) => {
    t = e.exports = trim;
    function trim(e) {
      return e.replace(/^\s*|\s*$/g, '');
    }
    t.left = function (e) {
      return e.replace(/^\s*/, '');
    };
    t.right = function (e) {
      return e.replace(/\s*$/, '');
    };
  },
  3604: (e, t, r) => {
    var a = r(3458);
    e.exports = trough;
    trough.wrap = a;
    var n = [].slice;
    function trough() {
      var e = [];
      var t = {};
      t.run = run;
      t.use = use;
      return t;
      function run() {
        var t = -1;
        var r = n.call(arguments, 0, -1);
        var i = arguments[arguments.length - 1];
        if (typeof i !== 'function') {
          throw new Error('Expected function as last argument, not ' + i);
        }
        next.apply(null, [null].concat(r));
        function next(o) {
          var s = e[++t];
          var p = n.call(arguments, 0);
          var d = p.slice(1);
          var l = r.length;
          var m = -1;
          if (o) {
            i(o);
            return;
          }
          while (++m < l) {
            if (d[m] === null || d[m] === undefined) {
              d[m] = r[m];
            }
          }
          r = d;
          if (s) {
            a(s, next).apply(null, r);
          } else {
            i.apply(null, [null].concat(r));
          }
        }
      }
      function use(r) {
        if (typeof r !== 'function') {
          throw new Error('Expected `fn` to be a function, not ' + r);
        }
        e.push(r);
        return t;
      }
    }
  },
  3458: (e) => {
    var t = [].slice;
    e.exports = wrap;
    function wrap(e, r) {
      var a;
      return wrapped;
      function wrapped() {
        var r = t.call(arguments, 0);
        var n = e.length > r.length;
        var i;
        if (n) {
          r.push(done);
        }
        try {
          i = e.apply(null, r);
        } catch (e) {
          if (n && a) {
            throw e;
          }
          return done(e);
        }
        if (!n) {
          if (i && typeof i.then === 'function') {
            i.then(then, done);
          } else if (i instanceof Error) {
            done(i);
          } else {
            then(i);
          }
        }
      }
      function done() {
        if (!a) {
          a = true;
          r.apply(null, arguments);
        }
      }
      function then(e) {
        done(null, e);
      }
    }
  },
  4294: (e, t, r) => {
    e.exports = r(4219);
  },
  4219: (e, t, r) => {
    var a = r(1808);
    var n = r(4404);
    var i = r(3685);
    var o = r(5687);
    var s = r(2361);
    var p = r(9491);
    var d = r(3837);
    t.httpOverHttp = httpOverHttp;
    t.httpsOverHttp = httpsOverHttp;
    t.httpOverHttps = httpOverHttps;
    t.httpsOverHttps = httpsOverHttps;
    function httpOverHttp(e) {
      var t = new TunnelingAgent(e);
      t.request = i.request;
      return t;
    }
    function httpsOverHttp(e) {
      var t = new TunnelingAgent(e);
      t.request = i.request;
      t.createSocket = createSecureSocket;
      t.defaultPort = 443;
      return t;
    }
    function httpOverHttps(e) {
      var t = new TunnelingAgent(e);
      t.request = o.request;
      return t;
    }
    function httpsOverHttps(e) {
      var t = new TunnelingAgent(e);
      t.request = o.request;
      t.createSocket = createSecureSocket;
      t.defaultPort = 443;
      return t;
    }
    function TunnelingAgent(e) {
      var t = this;
      t.options = e || {};
      t.proxyOptions = t.options.proxy || {};
      t.maxSockets = t.options.maxSockets || i.Agent.defaultMaxSockets;
      t.requests = [];
      t.sockets = [];
      t.on('free', function onFree(e, r, a, n) {
        var i = toOptions(r, a, n);
        for (var o = 0, s = t.requests.length; o < s; ++o) {
          var p = t.requests[o];
          if (p.host === i.host && p.port === i.port) {
            t.requests.splice(o, 1);
            p.request.onSocket(e);
            return;
          }
        }
        e.destroy();
        t.removeSocket(e);
      });
    }
    d.inherits(TunnelingAgent, s.EventEmitter);
    TunnelingAgent.prototype.addRequest = function addRequest(e, t, r, a) {
      var n = this;
      var i = mergeOptions({ request: e }, n.options, toOptions(t, r, a));
      if (n.sockets.length >= this.maxSockets) {
        n.requests.push(i);
        return;
      }
      n.createSocket(i, function (t) {
        t.on('free', onFree);
        t.on('close', onCloseOrRemove);
        t.on('agentRemove', onCloseOrRemove);
        e.onSocket(t);
        function onFree() {
          n.emit('free', t, i);
        }
        function onCloseOrRemove(e) {
          n.removeSocket(t);
          t.removeListener('free', onFree);
          t.removeListener('close', onCloseOrRemove);
          t.removeListener('agentRemove', onCloseOrRemove);
        }
      });
    };
    TunnelingAgent.prototype.createSocket = function createSocket(e, t) {
      var r = this;
      var a = {};
      r.sockets.push(a);
      var n = mergeOptions({}, r.proxyOptions, {
        method: 'CONNECT',
        path: e.host + ':' + e.port,
        agent: false,
        headers: { host: e.host + ':' + e.port },
      });
      if (e.localAddress) {
        n.localAddress = e.localAddress;
      }
      if (n.proxyAuth) {
        n.headers = n.headers || {};
        n.headers['Proxy-Authorization'] = 'Basic ' + new Buffer(n.proxyAuth).toString('base64');
      }
      l('making CONNECT request');
      var i = r.request(n);
      i.useChunkedEncodingByDefault = false;
      i.once('response', onResponse);
      i.once('upgrade', onUpgrade);
      i.once('connect', onConnect);
      i.once('error', onError);
      i.end();
      function onResponse(e) {
        e.upgrade = true;
      }
      function onUpgrade(e, t, r) {
        process.nextTick(function () {
          onConnect(e, t, r);
        });
      }
      function onConnect(n, o, s) {
        i.removeAllListeners();
        o.removeAllListeners();
        if (n.statusCode !== 200) {
          l('tunneling socket could not be established, statusCode=%d', n.statusCode);
          o.destroy();
          var p = new Error(
            'tunneling socket could not be established, ' + 'statusCode=' + n.statusCode,
          );
          p.code = 'ECONNRESET';
          e.request.emit('error', p);
          r.removeSocket(a);
          return;
        }
        if (s.length > 0) {
          l('got illegal response body from proxy');
          o.destroy();
          var p = new Error('got illegal response body from proxy');
          p.code = 'ECONNRESET';
          e.request.emit('error', p);
          r.removeSocket(a);
          return;
        }
        l('tunneling connection has established');
        r.sockets[r.sockets.indexOf(a)] = o;
        return t(o);
      }
      function onError(t) {
        i.removeAllListeners();
        l('tunneling socket could not be established, cause=%s\n', t.message, t.stack);
        var n = new Error('tunneling socket could not be established, ' + 'cause=' + t.message);
        n.code = 'ECONNRESET';
        e.request.emit('error', n);
        r.removeSocket(a);
      }
    };
    TunnelingAgent.prototype.removeSocket = function removeSocket(e) {
      var t = this.sockets.indexOf(e);
      if (t === -1) {
        return;
      }
      this.sockets.splice(t, 1);
      var r = this.requests.shift();
      if (r) {
        this.createSocket(r, function (e) {
          r.request.onSocket(e);
        });
      }
    };
    function createSecureSocket(e, t) {
      var r = this;
      TunnelingAgent.prototype.createSocket.call(r, e, function (a) {
        var i = e.request.getHeader('host');
        var o = mergeOptions({}, r.options, {
          socket: a,
          servername: i ? i.replace(/:.*$/, '') : e.host,
        });
        var s = n.connect(0, o);
        r.sockets[r.sockets.indexOf(a)] = s;
        t(s);
      });
    }
    function toOptions(e, t, r) {
      if (typeof e === 'string') {
        return { host: e, port: t, localAddress: r };
      }
      return e;
    }
    function mergeOptions(e) {
      for (var t = 1, r = arguments.length; t < r; ++t) {
        var a = arguments[t];
        if (typeof a === 'object') {
          var n = Object.keys(a);
          for (var i = 0, o = n.length; i < o; ++i) {
            var s = n[i];
            if (a[s] !== undefined) {
              e[s] = a[s];
            }
          }
        }
      }
      return e;
    }
    var l;
    if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {
      l = function () {
        var e = Array.prototype.slice.call(arguments);
        if (typeof e[0] === 'string') {
          e[0] = 'TUNNEL: ' + e[0];
        } else {
          e.unshift('TUNNEL:');
        }
        console.error.apply(console, e);
      };
    } else {
      l = function () {};
    }
    t.debug = l;
  },
  6623: (e, t, r) => {
    var a = r(1208);
    var n = r(4124);
    e.exports = unherit;
    function unherit(e) {
      var t;
      var r;
      var i;
      n(Of, e);
      n(From, Of);
      t = Of.prototype;
      for (r in t) {
        i = t[r];
        if (i && typeof i === 'object') {
          t[r] = 'concat' in i ? i.concat() : a(i);
        }
      }
      return Of;
      function From(t) {
        return e.apply(this, t);
      }
      function Of() {
        if (!(this instanceof Of)) {
          return new From(arguments);
        }
        return e.apply(this, arguments);
      }
    }
  },
  5075: (e, t, r) => {
    var a = r(8171);
    var n = r(7240);
    var i = r(4860);
    var o = r(3604);
    var s = r(864);
    e.exports = unified().freeze();
    var p = [].slice;
    var d = {}.hasOwnProperty;
    var l = o().use(pipelineParse).use(pipelineRun).use(pipelineStringify);
    function pipelineParse(e, t) {
      t.tree = e.parse(t.file);
    }
    function pipelineRun(e, t, r) {
      e.run(t.tree, t.file, done);
      function done(e, a, n) {
        if (e) {
          r(e);
        } else {
          t.tree = a;
          t.file = n;
          r();
        }
      }
    }
    function pipelineStringify(e, t) {
      t.file.contents = e.stringify(t.tree, t.file);
    }
    function unified() {
      var e = [];
      var t = o();
      var r = {};
      var m = false;
      var c = -1;
      processor.data = data;
      processor.freeze = freeze;
      processor.attachers = e;
      processor.use = use;
      processor.parse = parse;
      processor.stringify = stringify;
      processor.run = run;
      processor.runSync = runSync;
      processor.process = process;
      processor.processSync = processSync;
      return processor;
      function processor() {
        var t = unified();
        var n = e.length;
        var i = -1;
        while (++i < n) {
          t.use.apply(null, e[i]);
        }
        t.data(a(true, {}, r));
        return t;
      }
      function freeze() {
        var r;
        var a;
        var n;
        var i;
        if (m) {
          return processor;
        }
        while (++c < e.length) {
          r = e[c];
          a = r[0];
          n = r[1];
          i = null;
          if (n === false) {
            continue;
          }
          if (n === true) {
            r[1] = undefined;
          }
          i = a.apply(processor, r.slice(1));
          if (typeof i === 'function') {
            t.use(i);
          }
        }
        m = true;
        c = Infinity;
        return processor;
      }
      function data(e, t) {
        if (typeof e === 'string') {
          if (arguments.length === 2) {
            assertUnfrozen('data', m);
            r[e] = t;
            return processor;
          }
          return (d.call(r, e) && r[e]) || null;
        }
        if (e) {
          assertUnfrozen('data', m);
          r = e;
          return processor;
        }
        return r;
      }
      function use(t) {
        var n;
        assertUnfrozen('use', m);
        if (t === null || t === undefined) {
        } else if (typeof t === 'function') {
          addPlugin.apply(null, arguments);
        } else if (typeof t === 'object') {
          if ('length' in t) {
            addList(t);
          } else {
            addPreset(t);
          }
        } else {
          throw new Error('Expected usable value, not `' + t + '`');
        }
        if (n) {
          r.settings = a(r.settings || {}, n);
        }
        return processor;
        function addPreset(e) {
          addList(e.plugins);
          if (e.settings) {
            n = a(n || {}, e.settings);
          }
        }
        function add(e) {
          if (typeof e === 'function') {
            addPlugin(e);
          } else if (typeof e === 'object') {
            if ('length' in e) {
              addPlugin.apply(null, e);
            } else {
              addPreset(e);
            }
          } else {
            throw new Error('Expected usable value, not `' + e + '`');
          }
        }
        function addList(e) {
          var t;
          var r;
          if (e === null || e === undefined) {
          } else if (typeof e === 'object' && 'length' in e) {
            t = e.length;
            r = -1;
            while (++r < t) {
              add(e[r]);
            }
          } else {
            throw new Error('Expected a list of plugins, not `' + e + '`');
          }
        }
        function addPlugin(t, r) {
          var n = find(t);
          if (n) {
            if (s(n[1]) && s(r)) {
              r = a(n[1], r);
            }
            n[1] = r;
          } else {
            e.push(p.call(arguments));
          }
        }
      }
      function find(t) {
        var r = e.length;
        var a = -1;
        var n;
        while (++a < r) {
          n = e[a];
          if (n[0] === t) {
            return n;
          }
        }
      }
      function parse(e) {
        var t = i(e);
        var r;
        freeze();
        r = processor.Parser;
        assertParser('parse', r);
        if (newable(r, 'parse')) {
          return new r(String(t), t).parse();
        }
        return r(String(t), t);
      }
      function run(e, r, a) {
        assertNode(e);
        freeze();
        if (!a && typeof r === 'function') {
          a = r;
          r = null;
        }
        if (!a) {
          return new Promise(executor);
        }
        executor(null, a);
        function executor(n, o) {
          t.run(e, i(r), done);
          function done(t, r, i) {
            r = r || e;
            if (t) {
              o(t);
            } else if (n) {
              n(r);
            } else {
              a(null, r, i);
            }
          }
        }
      }
      function runSync(e, t) {
        var r = false;
        var a;
        run(e, t, done);
        assertDone('runSync', 'run', r);
        return a;
        function done(e, t) {
          r = true;
          n(e);
          a = t;
        }
      }
      function stringify(e, t) {
        var r = i(t);
        var a;
        freeze();
        a = processor.Compiler;
        assertCompiler('stringify', a);
        assertNode(e);
        if (newable(a, 'compile')) {
          return new a(e, r).compile();
        }
        return a(e, r);
      }
      function process(e, t) {
        freeze();
        assertParser('process', processor.Parser);
        assertCompiler('process', processor.Compiler);
        if (!t) {
          return new Promise(executor);
        }
        executor(null, t);
        function executor(r, a) {
          var n = i(e);
          l.run(processor, { file: n }, done);
          function done(e) {
            if (e) {
              a(e);
            } else if (r) {
              r(n);
            } else {
              t(null, n);
            }
          }
        }
      }
      function processSync(e) {
        var t = false;
        var r;
        freeze();
        assertParser('processSync', processor.Parser);
        assertCompiler('processSync', processor.Compiler);
        r = i(e);
        process(r, done);
        assertDone('processSync', 'process', t);
        return r;
        function done(e) {
          t = true;
          n(e);
        }
      }
    }
    function newable(e, t) {
      return typeof e === 'function' && e.prototype && (keys(e.prototype) || t in e.prototype);
    }
    function keys(e) {
      var t;
      for (t in e) {
        return true;
      }
      return false;
    }
    function assertParser(e, t) {
      if (typeof t !== 'function') {
        throw new Error('Cannot `' + e + '` without `Parser`');
      }
    }
    function assertCompiler(e, t) {
      if (typeof t !== 'function') {
        throw new Error('Cannot `' + e + '` without `Compiler`');
      }
    }
    function assertUnfrozen(e, t) {
      if (t) {
        throw new Error(
          'Cannot invoke `' +
            e +
            '` on a frozen processor.\nCreate a new processor first, by invoking it: use `processor()` instead of `processor`.',
        );
      }
    }
    function assertNode(e) {
      if (!e || typeof e.type !== 'string') {
        throw new Error('Expected node, got `' + e + '`');
      }
    }
    function assertDone(e, t, r) {
      if (!r) {
        throw new Error('`' + e + '` finished async. Use `' + t + '` instead');
      }
    }
  },
  2637: (e, t, r) => {
    var a = r(7426);
    e.exports = u;
    function u(e, t, r) {
      var n;
      if ((r === null || r === undefined) && (typeof t !== 'object' || Array.isArray(t))) {
        r = t;
        t = {};
      }
      n = a({ type: String(e) }, t);
      if (Array.isArray(r)) {
        n.children = r;
      } else if (r !== null && r !== undefined) {
        n.value = String(r);
      }
      return n;
    }
  },
  5084: (e) => {
    e.exports = generated;
    function generated(e) {
      return (
        !e ||
        !e.position ||
        !e.position.start ||
        !e.position.start.line ||
        !e.position.start.column ||
        !e.position.end ||
        !e.position.end.line ||
        !e.position.end.column
      );
    }
  },
  4070: (e) => {
    e.exports = convert;
    function convert(e) {
      if (typeof e === 'string') {
        return typeFactory(e);
      }
      if (e === null || e === undefined) {
        return ok;
      }
      if (typeof e === 'object') {
        return ('length' in e ? anyFactory : matchesFactory)(e);
      }
      if (typeof e === 'function') {
        return e;
      }
      throw new Error('Expected function, string, or object as test');
    }
    function convertAll(e) {
      var t = [];
      var r = e.length;
      var a = -1;
      while (++a < r) {
        t[a] = convert(e[a]);
      }
      return t;
    }
    function matchesFactory(e) {
      return matches;
      function matches(t) {
        var r;
        for (r in e) {
          if (t[r] !== e[r]) {
            return false;
          }
        }
        return true;
      }
    }
    function anyFactory(e) {
      var t = convertAll(e);
      var r = t.length;
      return matches;
      function matches() {
        var e = -1;
        while (++e < r) {
          if (t[e].apply(this, arguments)) {
            return true;
          }
        }
        return false;
      }
    }
    function typeFactory(e) {
      return type;
      function type(t) {
        return Boolean(t && t.type === e);
      }
    }
    function ok() {
      return true;
    }
  },
  1133: (e) => {
    var t = factory('start');
    var r = factory('end');
    e.exports = position;
    position.start = t;
    position.end = r;
    function position(e) {
      return { start: t(e), end: r(e) };
    }
    function factory(e) {
      point.displayName = e;
      return point;
      function point(t) {
        var r = (t && t.position && t.position[e]) || {};
        return {
          line: r.line || null,
          column: r.column || null,
          offset: isNaN(r.offset) ? null : r.offset,
        };
      }
    }
  },
  7970: (e, t, r) => {
    var a = r(5259);
    e.exports = removePosition;
    function removePosition(e, t) {
      a(e, t ? hard : soft);
      return e;
    }
    function hard(e) {
      delete e.position;
    }
    function soft(e) {
      e.position = undefined;
    }
  },
  4571: (e, t, r) => {
    e.exports = visitParents;
    var a = r(4070);
    var n = true;
    var i = 'skip';
    var o = false;
    visitParents.CONTINUE = n;
    visitParents.SKIP = i;
    visitParents.EXIT = o;
    function visitParents(e, t, r, n) {
      var s;
      if (typeof t === 'function' && typeof r !== 'function') {
        n = r;
        r = t;
        t = null;
      }
      s = a(t);
      one(e, null, []);
      function one(e, a, n) {
        var p = [];
        var d;
        if (!t || s(e, a, n[n.length - 1] || null)) {
          p = toResult(r(e, n));
          if (p[0] === o) {
            return p;
          }
        }
        if (e.children && p[0] !== i) {
          d = toResult(all(e.children, n.concat(e)));
          return d[0] === o ? d : p;
        }
        return p;
      }
      function all(e, t) {
        var r = -1;
        var a = n ? -1 : 1;
        var i = (n ? e.length : r) + a;
        var s;
        while (i > r && i < e.length) {
          s = one(e[i], i, t);
          if (s[0] === o) {
            return s;
          }
          i = typeof s[1] === 'number' ? s[1] : i + a;
        }
      }
    }
    function toResult(e) {
      if (e !== null && typeof e === 'object' && 'length' in e) {
        return e;
      }
      if (typeof e === 'number') {
        return [n, e];
      }
      return [e];
    }
  },
  5259: (e, t, r) => {
    e.exports = visit;
    var a = r(4571);
    var n = a.CONTINUE;
    var i = a.SKIP;
    var o = a.EXIT;
    visit.CONTINUE = n;
    visit.SKIP = i;
    visit.EXIT = o;
    function visit(e, t, r, n) {
      if (typeof t === 'function' && typeof r !== 'function') {
        n = r;
        r = t;
        t = null;
      }
      a(e, t, overload, n);
      function overload(e, t) {
        var a = t[t.length - 1];
        var n = a ? a.children.indexOf(e) : null;
        return r(e, n, a);
      }
    }
  },
  1957: (e) => {
    var t = {}.hasOwnProperty;
    e.exports = stringify;
    function stringify(e) {
      if (!e || typeof e !== 'object') {
        return '';
      }
      if (t.call(e, 'position') || t.call(e, 'type')) {
        return position(e.position);
      }
      if (t.call(e, 'start') || t.call(e, 'end')) {
        return position(e);
      }
      if (t.call(e, 'line') || t.call(e, 'column')) {
        return point(e);
      }
      return '';
    }
    function point(e) {
      if (!e || typeof e !== 'object') {
        e = {};
      }
      return index(e.line) + ':' + index(e.column);
    }
    function position(e) {
      if (!e || typeof e !== 'object') {
        e = {};
      }
      return point(e.start) + '-' + point(e.end);
    }
    function index(e) {
      return e && typeof e === 'number' ? e : 1;
    }
  },
  9906: (e) => {
    e.exports = color;
    function color(e) {
      return '[33m' + e + '[39m';
    }
  },
  3246: (e, t, r) => {
    e.exports = visitParents;
    var a = r(4048);
    var n = r(9906);
    var i = true;
    var o = 'skip';
    var s = false;
    visitParents.CONTINUE = i;
    visitParents.SKIP = o;
    visitParents.EXIT = s;
    function visitParents(e, t, r, i) {
      var p;
      var d;
      if (typeof t === 'function' && typeof r !== 'function') {
        i = r;
        r = t;
        t = null;
      }
      d = a(t);
      p = i ? -1 : 1;
      factory(e, null, [])();
      function factory(e, a, l) {
        var m = typeof e === 'object' && e !== null ? e : {};
        var c;
        if (typeof m.type === 'string') {
          c =
            typeof m.tagName === 'string'
              ? m.tagName
              : typeof m.name === 'string'
              ? m.name
              : undefined;
          visit.displayName = 'node (' + n(m.type + (c ? '<' + c + '>' : '')) + ')';
        }
        return visit;
        function visit() {
          var n = l.concat(e);
          var m = [];
          var c;
          var g;
          if (!t || d(e, a, l[l.length - 1] || null)) {
            m = toResult(r(e, l));
            if (m[0] === s) {
              return m;
            }
          }
          if (e.children && m[0] !== o) {
            g = (i ? e.children.length : -1) + p;
            while (g > -1 && g < e.children.length) {
              c = factory(e.children[g], g, n)();
              if (c[0] === s) {
                return c;
              }
              g = typeof c[1] === 'number' ? c[1] : g + p;
            }
          }
          return m;
        }
      }
    }
    function toResult(e) {
      if (e !== null && typeof e === 'object' && 'length' in e) {
        return e;
      }
      if (typeof e === 'number') {
        return [i, e];
      }
      return [e];
    }
  },
  4048: (e) => {
    e.exports = convert;
    function convert(e) {
      if (e == null) {
        return ok;
      }
      if (typeof e === 'string') {
        return typeFactory(e);
      }
      if (typeof e === 'object') {
        return 'length' in e ? anyFactory(e) : allFactory(e);
      }
      if (typeof e === 'function') {
        return e;
      }
      throw new Error('Expected function, string, or object as test');
    }
    function allFactory(e) {
      return all;
      function all(t) {
        var r;
        for (r in e) {
          if (t[r] !== e[r]) return false;
        }
        return true;
      }
    }
    function anyFactory(e) {
      var t = [];
      var r = -1;
      while (++r < e.length) {
        t[r] = convert(e[r]);
      }
      return any;
      function any() {
        var e = -1;
        while (++e < t.length) {
          if (t[e].apply(this, arguments)) {
            return true;
          }
        }
        return false;
      }
    }
    function typeFactory(e) {
      return type;
      function type(t) {
        return Boolean(t && t.type === e);
      }
    }
    function ok() {
      return true;
    }
  },
  199: (e, t, r) => {
    e.exports = visit;
    var a = r(3246);
    var n = a.CONTINUE;
    var i = a.SKIP;
    var o = a.EXIT;
    visit.CONTINUE = n;
    visit.SKIP = i;
    visit.EXIT = o;
    function visit(e, t, r, n) {
      if (typeof t === 'function' && typeof r !== 'function') {
        n = r;
        r = t;
        t = null;
      }
      a(e, t, overload, n);
      function overload(e, t) {
        var a = t[t.length - 1];
        var n = a ? a.children.indexOf(e) : null;
        return r(e, n, a);
      }
    }
  },
  5030: (e, t) => {
    Object.defineProperty(t, '__esModule', { value: true });
    function getUserAgent() {
      if (typeof navigator === 'object' && 'userAgent' in navigator) {
        return navigator.userAgent;
      }
      if (typeof process === 'object' && 'version' in process) {
        return `Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})`;
      }
      return '<environment undetectable>';
    }
    t.getUserAgent = getUserAgent;
  },
  2403: (e) => {
    e.exports = factory;
    function factory(e) {
      var t = indices(String(e));
      return { toPosition: offsetToPositionFactory(t), toOffset: positionToOffsetFactory(t) };
    }
    function offsetToPositionFactory(e) {
      return offsetToPosition;
      function offsetToPosition(t) {
        var r = -1;
        var a = e.length;
        if (t < 0) {
          return {};
        }
        while (++r < a) {
          if (e[r] > t) {
            return { line: r + 1, column: t - (e[r - 1] || 0) + 1, offset: t };
          }
        }
        return {};
      }
    }
    function positionToOffsetFactory(e) {
      return positionToOffset;
      function positionToOffset(t) {
        var r = t && t.line;
        var a = t && t.column;
        if (!isNaN(r) && !isNaN(a) && r - 1 in e) {
          return (e[r - 2] || 0) + a - 1 || 0;
        }
        return -1;
      }
    }
    function indices(e) {
      var t = [];
      var r = e.indexOf('\n');
      while (r !== -1) {
        t.push(r + 1);
        r = e.indexOf('\n', r + 1);
      }
      t.push(e.length + 1);
      return t;
    }
  },
  4108: (e, t, r) => {
    var a = r(1957);
    e.exports = VMessage;
    function VMessagePrototype() {}
    VMessagePrototype.prototype = Error.prototype;
    VMessage.prototype = new VMessagePrototype();
    var n = VMessage.prototype;
    n.file = '';
    n.name = '';
    n.reason = '';
    n.message = '';
    n.stack = '';
    n.fatal = null;
    n.column = null;
    n.line = null;
    function VMessage(e, t, r) {
      var n;
      var i;
      var o;
      if (typeof t === 'string') {
        r = t;
        t = null;
      }
      n = parseOrigin(r);
      i = a(t) || '1:1';
      o = { start: { line: null, column: null }, end: { line: null, column: null } };
      if (t && t.position) {
        t = t.position;
      }
      if (t) {
        if (t.start) {
          o = t;
          t = t.start;
        } else {
          o.start = t;
        }
      }
      if (e.stack) {
        this.stack = e.stack;
        e = e.message;
      }
      this.message = e;
      this.name = i;
      this.reason = e;
      this.line = t ? t.line : null;
      this.column = t ? t.column : null;
      this.location = o;
      this.source = n[0];
      this.ruleId = n[1];
    }
    function parseOrigin(e) {
      var t = [null, null];
      var r;
      if (typeof e === 'string') {
        r = e.indexOf(':');
        if (r === -1) {
          t[1] = e;
        } else {
          t[0] = e.slice(0, r);
          t[1] = e.slice(r + 1);
        }
      }
      return t;
    }
  },
  4860: (e, t, r) => {
    e.exports = r(77);
  },
  9523: (e, t, r) => {
    var a = r(9239);
    var n = r(6070);
    var i = r(5625);
    e.exports = VFile;
    var o = {}.hasOwnProperty;
    var s = ['history', 'path', 'basename', 'stem', 'extname', 'dirname'];
    VFile.prototype.toString = toString;
    Object.defineProperty(VFile.prototype, 'path', { get: getPath, set: setPath });
    Object.defineProperty(VFile.prototype, 'dirname', { get: getDirname, set: setDirname });
    Object.defineProperty(VFile.prototype, 'basename', { get: getBasename, set: setBasename });
    Object.defineProperty(VFile.prototype, 'extname', { get: getExtname, set: setExtname });
    Object.defineProperty(VFile.prototype, 'stem', { get: getStem, set: setStem });
    function VFile(e) {
      var t;
      var r;
      if (!e) {
        e = {};
      } else if (typeof e === 'string' || i(e)) {
        e = { contents: e };
      } else if ('message' in e && 'messages' in e) {
        return e;
      }
      if (!(this instanceof VFile)) {
        return new VFile(e);
      }
      this.data = {};
      this.messages = [];
      this.history = [];
      this.cwd = n.cwd();
      r = -1;
      while (++r < s.length) {
        t = s[r];
        if (o.call(e, t)) {
          this[t] = e[t];
        }
      }
      for (t in e) {
        if (s.indexOf(t) < 0) {
          this[t] = e[t];
        }
      }
    }
    function getPath() {
      return this.history[this.history.length - 1];
    }
    function setPath(e) {
      assertNonEmpty(e, 'path');
      if (this.path !== e) {
        this.history.push(e);
      }
    }
    function getDirname() {
      return typeof this.path === 'string' ? a.dirname(this.path) : undefined;
    }
    function setDirname(e) {
      assertPath(this.path, 'dirname');
      this.path = a.join(e || '', this.basename);
    }
    function getBasename() {
      return typeof this.path === 'string' ? a.basename(this.path) : undefined;
    }
    function setBasename(e) {
      assertNonEmpty(e, 'basename');
      assertPart(e, 'basename');
      this.path = a.join(this.dirname || '', e);
    }
    function getExtname() {
      return typeof this.path === 'string' ? a.extname(this.path) : undefined;
    }
    function setExtname(e) {
      assertPart(e, 'extname');
      assertPath(this.path, 'extname');
      if (e) {
        if (e.charCodeAt(0) !== 46) {
          throw new Error('`extname` must start with `.`');
        }
        if (e.indexOf('.', 1) > -1) {
          throw new Error('`extname` cannot contain multiple dots');
        }
      }
      this.path = a.join(this.dirname, this.stem + (e || ''));
    }
    function getStem() {
      return typeof this.path === 'string' ? a.basename(this.path, this.extname) : undefined;
    }
    function setStem(e) {
      assertNonEmpty(e, 'stem');
      assertPart(e, 'stem');
      this.path = a.join(this.dirname || '', e + (this.extname || ''));
    }
    function toString(e) {
      return (this.contents || '').toString(e);
    }
    function assertPart(e, t) {
      if (e && e.indexOf(a.sep) > -1) {
        throw new Error('`' + t + '` cannot be a path: did not expect `' + a.sep + '`');
      }
    }
    function assertNonEmpty(e, t) {
      if (!e) {
        throw new Error('`' + t + '` cannot be empty');
      }
    }
    function assertPath(e, t) {
      if (!e) {
        throw new Error('Setting `' + t + '` requires `path` to be set too');
      }
    }
  },
  77: (e, t, r) => {
    var a = r(4108);
    var n = r(9523);
    e.exports = n;
    n.prototype.message = message;
    n.prototype.info = info;
    n.prototype.fail = fail;
    function message(e, t, r) {
      var n = new a(e, t, r);
      if (this.path) {
        n.name = this.path + ':' + n.name;
        n.file = this.path;
      }
      n.fatal = false;
      this.messages.push(n);
      return n;
    }
    function fail() {
      var e = this.message.apply(this, arguments);
      e.fatal = true;
      throw e;
    }
    function info() {
      var e = this.message.apply(this, arguments);
      e.fatal = null;
      return e;
    }
  },
  9239: (e, t, r) => {
    e.exports = r(1017);
  },
  6070: (e) => {
    e.exports = process;
  },
  4886: (e) => {
    var t = {};
    e.exports = t;
    function sign(e) {
      return e < 0 ? -1 : 1;
    }
    function evenRound(e) {
      if (e % 1 === 0.5 && (e & 1) === 0) {
        return Math.floor(e);
      } else {
        return Math.round(e);
      }
    }
    function createNumberConversion(e, t) {
      if (!t.unsigned) {
        --e;
      }
      const r = t.unsigned ? 0 : -Math.pow(2, e);
      const a = Math.pow(2, e) - 1;
      const n = t.moduloBitLength ? Math.pow(2, t.moduloBitLength) : Math.pow(2, e);
      const i = t.moduloBitLength ? Math.pow(2, t.moduloBitLength - 1) : Math.pow(2, e - 1);
      return function (e, o) {
        if (!o) o = {};
        let s = +e;
        if (o.enforceRange) {
          if (!Number.isFinite(s)) {
            throw new TypeError('Argument is not a finite number');
          }
          s = sign(s) * Math.floor(Math.abs(s));
          if (s < r || s > a) {
            throw new TypeError('Argument is not in byte range');
          }
          return s;
        }
        if (!isNaN(s) && o.clamp) {
          s = evenRound(s);
          if (s < r) s = r;
          if (s > a) s = a;
          return s;
        }
        if (!Number.isFinite(s) || s === 0) {
          return 0;
        }
        s = sign(s) * Math.floor(Math.abs(s));
        s = s % n;
        if (!t.unsigned && s >= i) {
          return s - n;
        } else if (t.unsigned) {
          if (s < 0) {
            s += n;
          } else if (s === -0) {
            return 0;
          }
        }
        return s;
      };
    }
    t['void'] = function () {
      return undefined;
    };
    t['boolean'] = function (e) {
      return !!e;
    };
    t['byte'] = createNumberConversion(8, { unsigned: false });
    t['octet'] = createNumberConversion(8, { unsigned: true });
    t['short'] = createNumberConversion(16, { unsigned: false });
    t['unsigned short'] = createNumberConversion(16, { unsigned: true });
    t['long'] = createNumberConversion(32, { unsigned: false });
    t['unsigned long'] = createNumberConversion(32, { unsigned: true });
    t['long long'] = createNumberConversion(32, { unsigned: false, moduloBitLength: 64 });
    t['unsigned long long'] = createNumberConversion(32, { unsigned: true, moduloBitLength: 64 });
    t['double'] = function (e) {
      const t = +e;
      if (!Number.isFinite(t)) {
        throw new TypeError('Argument is not a finite floating-point value');
      }
      return t;
    };
    t['unrestricted double'] = function (e) {
      const t = +e;
      if (isNaN(t)) {
        throw new TypeError('Argument is NaN');
      }
      return t;
    };
    t['float'] = t['double'];
    t['unrestricted float'] = t['unrestricted double'];
    t['DOMString'] = function (e, t) {
      if (!t) t = {};
      if (t.treatNullAsEmptyString && e === null) {
        return '';
      }
      return String(e);
    };
    t['ByteString'] = function (e, t) {
      const r = String(e);
      let a = undefined;
      for (let e = 0; (a = r.codePointAt(e)) !== undefined; ++e) {
        if (a > 255) {
          throw new TypeError('Argument is not a valid bytestring');
        }
      }
      return r;
    };
    t['USVString'] = function (e) {
      const t = String(e);
      const r = t.length;
      const a = [];
      for (let e = 0; e < r; ++e) {
        const n = t.charCodeAt(e);
        if (n < 55296 || n > 57343) {
          a.push(String.fromCodePoint(n));
        } else if (56320 <= n && n <= 57343) {
          a.push(String.fromCodePoint(65533));
        } else {
          if (e === r - 1) {
            a.push(String.fromCodePoint(65533));
          } else {
            const r = t.charCodeAt(e + 1);
            if (56320 <= r && r <= 57343) {
              const t = n & 1023;
              const i = r & 1023;
              a.push(String.fromCodePoint((2 << 15) + (2 << 9) * t + i));
              ++e;
            } else {
              a.push(String.fromCodePoint(65533));
            }
          }
        }
      }
      return a.join('');
    };
    t['Date'] = function (e, t) {
      if (!(e instanceof Date)) {
        throw new TypeError('Argument is not a Date object');
      }
      if (isNaN(e)) {
        return undefined;
      }
      return e;
    };
    t['RegExp'] = function (e, t) {
      if (!(e instanceof RegExp)) {
        e = new RegExp(e);
      }
      return e;
    };
  },
  7537: (e, t, r) => {
    const a = r(2158);
    t.implementation = class URLImpl {
      constructor(e) {
        const t = e[0];
        const r = e[1];
        let n = null;
        if (r !== undefined) {
          n = a.basicURLParse(r);
          if (n === 'failure') {
            throw new TypeError('Invalid base URL');
          }
        }
        const i = a.basicURLParse(t, { baseURL: n });
        if (i === 'failure') {
          throw new TypeError('Invalid URL');
        }
        this._url = i;
      }
      get href() {
        return a.serializeURL(this._url);
      }
      set href(e) {
        const t = a.basicURLParse(e);
        if (t === 'failure') {
          throw new TypeError('Invalid URL');
        }
        this._url = t;
      }
      get origin() {
        return a.serializeURLOrigin(this._url);
      }
      get protocol() {
        return this._url.scheme + ':';
      }
      set protocol(e) {
        a.basicURLParse(e + ':', { url: this._url, stateOverride: 'scheme start' });
      }
      get username() {
        return this._url.username;
      }
      set username(e) {
        if (a.cannotHaveAUsernamePasswordPort(this._url)) {
          return;
        }
        a.setTheUsername(this._url, e);
      }
      get password() {
        return this._url.password;
      }
      set password(e) {
        if (a.cannotHaveAUsernamePasswordPort(this._url)) {
          return;
        }
        a.setThePassword(this._url, e);
      }
      get host() {
        const e = this._url;
        if (e.host === null) {
          return '';
        }
        if (e.port === null) {
          return a.serializeHost(e.host);
        }
        return a.serializeHost(e.host) + ':' + a.serializeInteger(e.port);
      }
      set host(e) {
        if (this._url.cannotBeABaseURL) {
          return;
        }
        a.basicURLParse(e, { url: this._url, stateOverride: 'host' });
      }
      get hostname() {
        if (this._url.host === null) {
          return '';
        }
        return a.serializeHost(this._url.host);
      }
      set hostname(e) {
        if (this._url.cannotBeABaseURL) {
          return;
        }
        a.basicURLParse(e, { url: this._url, stateOverride: 'hostname' });
      }
      get port() {
        if (this._url.port === null) {
          return '';
        }
        return a.serializeInteger(this._url.port);
      }
      set port(e) {
        if (a.cannotHaveAUsernamePasswordPort(this._url)) {
          return;
        }
        if (e === '') {
          this._url.port = null;
        } else {
          a.basicURLParse(e, { url: this._url, stateOverride: 'port' });
        }
      }
      get pathname() {
        if (this._url.cannotBeABaseURL) {
          return this._url.path[0];
        }
        if (this._url.path.length === 0) {
          return '';
        }
        return '/' + this._url.path.join('/');
      }
      set pathname(e) {
        if (this._url.cannotBeABaseURL) {
          return;
        }
        this._url.path = [];
        a.basicURLParse(e, { url: this._url, stateOverride: 'path start' });
      }
      get search() {
        if (this._url.query === null || this._url.query === '') {
          return '';
        }
        return '?' + this._url.query;
      }
      set search(e) {
        const t = this._url;
        if (e === '') {
          t.query = null;
          return;
        }
        const r = e[0] === '?' ? e.substring(1) : e;
        t.query = '';
        a.basicURLParse(r, { url: t, stateOverride: 'query' });
      }
      get hash() {
        if (this._url.fragment === null || this._url.fragment === '') {
          return '';
        }
        return '#' + this._url.fragment;
      }
      set hash(e) {
        if (e === '') {
          this._url.fragment = null;
          return;
        }
        const t = e[0] === '#' ? e.substring(1) : e;
        this._url.fragment = '';
        a.basicURLParse(t, { url: this._url, stateOverride: 'fragment' });
      }
      toJSON() {
        return this.href;
      }
    };
  },
  3394: (e, t, r) => {
    const a = r(4886);
    const n = r(3185);
    const i = r(7537);
    const o = n.implSymbol;
    function URL(t) {
      if (!this || this[o] || !(this instanceof URL)) {
        throw new TypeError(
          "Failed to construct 'URL': Please use the 'new' operator, this DOM object constructor cannot be called as a function.",
        );
      }
      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to construct 'URL': 1 argument required, but only " +
            arguments.length +
            ' present.',
        );
      }
      const r = [];
      for (let e = 0; e < arguments.length && e < 2; ++e) {
        r[e] = arguments[e];
      }
      r[0] = a['USVString'](r[0]);
      if (r[1] !== undefined) {
        r[1] = a['USVString'](r[1]);
      }
      e.exports.setup(this, r);
    }
    URL.prototype.toJSON = function toJSON() {
      if (!this || !e.exports.is(this)) {
        throw new TypeError('Illegal invocation');
      }
      const t = [];
      for (let e = 0; e < arguments.length && e < 0; ++e) {
        t[e] = arguments[e];
      }
      return this[o].toJSON.apply(this[o], t);
    };
    Object.defineProperty(URL.prototype, 'href', {
      get() {
        return this[o].href;
      },
      set(e) {
        e = a['USVString'](e);
        this[o].href = e;
      },
      enumerable: true,
      configurable: true,
    });
    URL.prototype.toString = function () {
      if (!this || !e.exports.is(this)) {
        throw new TypeError('Illegal invocation');
      }
      return this.href;
    };
    Object.defineProperty(URL.prototype, 'origin', {
      get() {
        return this[o].origin;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(URL.prototype, 'protocol', {
      get() {
        return this[o].protocol;
      },
      set(e) {
        e = a['USVString'](e);
        this[o].protocol = e;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(URL.prototype, 'username', {
      get() {
        return this[o].username;
      },
      set(e) {
        e = a['USVString'](e);
        this[o].username = e;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(URL.prototype, 'password', {
      get() {
        return this[o].password;
      },
      set(e) {
        e = a['USVString'](e);
        this[o].password = e;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(URL.prototype, 'host', {
      get() {
        return this[o].host;
      },
      set(e) {
        e = a['USVString'](e);
        this[o].host = e;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(URL.prototype, 'hostname', {
      get() {
        return this[o].hostname;
      },
      set(e) {
        e = a['USVString'](e);
        this[o].hostname = e;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(URL.prototype, 'port', {
      get() {
        return this[o].port;
      },
      set(e) {
        e = a['USVString'](e);
        this[o].port = e;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(URL.prototype, 'pathname', {
      get() {
        return this[o].pathname;
      },
      set(e) {
        e = a['USVString'](e);
        this[o].pathname = e;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(URL.prototype, 'search', {
      get() {
        return this[o].search;
      },
      set(e) {
        e = a['USVString'](e);
        this[o].search = e;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(URL.prototype, 'hash', {
      get() {
        return this[o].hash;
      },
      set(e) {
        e = a['USVString'](e);
        this[o].hash = e;
      },
      enumerable: true,
      configurable: true,
    });
    e.exports = {
      is(e) {
        return !!e && e[o] instanceof i.implementation;
      },
      create(e, t) {
        let r = Object.create(URL.prototype);
        this.setup(r, e, t);
        return r;
      },
      setup(e, t, r) {
        if (!r) r = {};
        r.wrapper = e;
        e[o] = new i.implementation(t, r);
        e[o][n.wrapperSymbol] = e;
      },
      interface: URL,
      expose: { Window: { URL: URL }, Worker: { URL: URL } },
    };
  },
  8665: (e, t, r) => {
    t.URL = r(3394)['interface'];
    t.serializeURL = r(2158).serializeURL;
    t.serializeURLOrigin = r(2158).serializeURLOrigin;
    t.basicURLParse = r(2158).basicURLParse;
    t.setTheUsername = r(2158).setTheUsername;
    t.setThePassword = r(2158).setThePassword;
    t.serializeHost = r(2158).serializeHost;
    t.serializeInteger = r(2158).serializeInteger;
    t.parseURL = r(2158).parseURL;
  },
  2158: (e, t, r) => {
    const a = r(5477);
    const n = r(4256);
    const i = { ftp: 21, file: null, gopher: 70, http: 80, https: 443, ws: 80, wss: 443 };
    const o = Symbol('failure');
    function countSymbols(e) {
      return a.ucs2.decode(e).length;
    }
    function at(e, t) {
      const r = e[t];
      return isNaN(r) ? undefined : String.fromCodePoint(r);
    }
    function isASCIIDigit(e) {
      return e >= 48 && e <= 57;
    }
    function isASCIIAlpha(e) {
      return (e >= 65 && e <= 90) || (e >= 97 && e <= 122);
    }
    function isASCIIAlphanumeric(e) {
      return isASCIIAlpha(e) || isASCIIDigit(e);
    }
    function isASCIIHex(e) {
      return isASCIIDigit(e) || (e >= 65 && e <= 70) || (e >= 97 && e <= 102);
    }
    function isSingleDot(e) {
      return e === '.' || e.toLowerCase() === '%2e';
    }
    function isDoubleDot(e) {
      e = e.toLowerCase();
      return e === '..' || e === '%2e.' || e === '.%2e' || e === '%2e%2e';
    }
    function isWindowsDriveLetterCodePoints(e, t) {
      return isASCIIAlpha(e) && (t === 58 || t === 124);
    }
    function isWindowsDriveLetterString(e) {
      return e.length === 2 && isASCIIAlpha(e.codePointAt(0)) && (e[1] === ':' || e[1] === '|');
    }
    function isNormalizedWindowsDriveLetterString(e) {
      return e.length === 2 && isASCIIAlpha(e.codePointAt(0)) && e[1] === ':';
    }
    function containsForbiddenHostCodePoint(e) {
      return e.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|%|\/|:|\?|@|\[|\\|\]/) !== -1;
    }
    function containsForbiddenHostCodePointExcludingPercent(e) {
      return e.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|\/|:|\?|@|\[|\\|\]/) !== -1;
    }
    function isSpecialScheme(e) {
      return i[e] !== undefined;
    }
    function isSpecial(e) {
      return isSpecialScheme(e.scheme);
    }
    function defaultPort(e) {
      return i[e];
    }
    function percentEncode(e) {
      let t = e.toString(16).toUpperCase();
      if (t.length === 1) {
        t = '0' + t;
      }
      return '%' + t;
    }
    function utf8PercentEncode(e) {
      const t = new Buffer(e);
      let r = '';
      for (let e = 0; e < t.length; ++e) {
        r += percentEncode(t[e]);
      }
      return r;
    }
    function utf8PercentDecode(e) {
      const t = new Buffer(e);
      const r = [];
      for (let e = 0; e < t.length; ++e) {
        if (t[e] !== 37) {
          r.push(t[e]);
        } else if (t[e] === 37 && isASCIIHex(t[e + 1]) && isASCIIHex(t[e + 2])) {
          r.push(parseInt(t.slice(e + 1, e + 3).toString(), 16));
          e += 2;
        } else {
          r.push(t[e]);
        }
      }
      return new Buffer(r).toString();
    }
    function isC0ControlPercentEncode(e) {
      return e <= 31 || e > 126;
    }
    const s = new Set([32, 34, 35, 60, 62, 63, 96, 123, 125]);
    function isPathPercentEncode(e) {
      return isC0ControlPercentEncode(e) || s.has(e);
    }
    const p = new Set([47, 58, 59, 61, 64, 91, 92, 93, 94, 124]);
    function isUserinfoPercentEncode(e) {
      return isPathPercentEncode(e) || p.has(e);
    }
    function percentEncodeChar(e, t) {
      const r = String.fromCodePoint(e);
      if (t(e)) {
        return utf8PercentEncode(r);
      }
      return r;
    }
    function parseIPv4Number(e) {
      let t = 10;
      if (e.length >= 2 && e.charAt(0) === '0' && e.charAt(1).toLowerCase() === 'x') {
        e = e.substring(2);
        t = 16;
      } else if (e.length >= 2 && e.charAt(0) === '0') {
        e = e.substring(1);
        t = 8;
      }
      if (e === '') {
        return 0;
      }
      const r = t === 10 ? /[^0-9]/ : t === 16 ? /[^0-9A-Fa-f]/ : /[^0-7]/;
      if (r.test(e)) {
        return o;
      }
      return parseInt(e, t);
    }
    function parseIPv4(e) {
      const t = e.split('.');
      if (t[t.length - 1] === '') {
        if (t.length > 1) {
          t.pop();
        }
      }
      if (t.length > 4) {
        return e;
      }
      const r = [];
      for (const a of t) {
        if (a === '') {
          return e;
        }
        const t = parseIPv4Number(a);
        if (t === o) {
          return e;
        }
        r.push(t);
      }
      for (let e = 0; e < r.length - 1; ++e) {
        if (r[e] > 255) {
          return o;
        }
      }
      if (r[r.length - 1] >= Math.pow(256, 5 - r.length)) {
        return o;
      }
      let a = r.pop();
      let n = 0;
      for (const e of r) {
        a += e * Math.pow(256, 3 - n);
        ++n;
      }
      return a;
    }
    function serializeIPv4(e) {
      let t = '';
      let r = e;
      for (let e = 1; e <= 4; ++e) {
        t = String(r % 256) + t;
        if (e !== 4) {
          t = '.' + t;
        }
        r = Math.floor(r / 256);
      }
      return t;
    }
    function parseIPv6(e) {
      const t = [0, 0, 0, 0, 0, 0, 0, 0];
      let r = 0;
      let n = null;
      let i = 0;
      e = a.ucs2.decode(e);
      if (e[i] === 58) {
        if (e[i + 1] !== 58) {
          return o;
        }
        i += 2;
        ++r;
        n = r;
      }
      while (i < e.length) {
        if (r === 8) {
          return o;
        }
        if (e[i] === 58) {
          if (n !== null) {
            return o;
          }
          ++i;
          ++r;
          n = r;
          continue;
        }
        let a = 0;
        let s = 0;
        while (s < 4 && isASCIIHex(e[i])) {
          a = a * 16 + parseInt(at(e, i), 16);
          ++i;
          ++s;
        }
        if (e[i] === 46) {
          if (s === 0) {
            return o;
          }
          i -= s;
          if (r > 6) {
            return o;
          }
          let a = 0;
          while (e[i] !== undefined) {
            let n = null;
            if (a > 0) {
              if (e[i] === 46 && a < 4) {
                ++i;
              } else {
                return o;
              }
            }
            if (!isASCIIDigit(e[i])) {
              return o;
            }
            while (isASCIIDigit(e[i])) {
              const t = parseInt(at(e, i));
              if (n === null) {
                n = t;
              } else if (n === 0) {
                return o;
              } else {
                n = n * 10 + t;
              }
              if (n > 255) {
                return o;
              }
              ++i;
            }
            t[r] = t[r] * 256 + n;
            ++a;
            if (a === 2 || a === 4) {
              ++r;
            }
          }
          if (a !== 4) {
            return o;
          }
          break;
        } else if (e[i] === 58) {
          ++i;
          if (e[i] === undefined) {
            return o;
          }
        } else if (e[i] !== undefined) {
          return o;
        }
        t[r] = a;
        ++r;
      }
      if (n !== null) {
        let e = r - n;
        r = 7;
        while (r !== 0 && e > 0) {
          const a = t[n + e - 1];
          t[n + e - 1] = t[r];
          t[r] = a;
          --r;
          --e;
        }
      } else if (n === null && r !== 8) {
        return o;
      }
      return t;
    }
    function serializeIPv6(e) {
      let t = '';
      const r = findLongestZeroSequence(e);
      const a = r.idx;
      let n = false;
      for (let r = 0; r <= 7; ++r) {
        if (n && e[r] === 0) {
          continue;
        } else if (n) {
          n = false;
        }
        if (a === r) {
          const e = r === 0 ? '::' : ':';
          t += e;
          n = true;
          continue;
        }
        t += e[r].toString(16);
        if (r !== 7) {
          t += ':';
        }
      }
      return t;
    }
    function parseHost(e, t) {
      if (e[0] === '[') {
        if (e[e.length - 1] !== ']') {
          return o;
        }
        return parseIPv6(e.substring(1, e.length - 1));
      }
      if (!t) {
        return parseOpaqueHost(e);
      }
      const r = utf8PercentDecode(e);
      const a = n.toASCII(r, false, n.PROCESSING_OPTIONS.NONTRANSITIONAL, false);
      if (a === null) {
        return o;
      }
      if (containsForbiddenHostCodePoint(a)) {
        return o;
      }
      const i = parseIPv4(a);
      if (typeof i === 'number' || i === o) {
        return i;
      }
      return a;
    }
    function parseOpaqueHost(e) {
      if (containsForbiddenHostCodePointExcludingPercent(e)) {
        return o;
      }
      let t = '';
      const r = a.ucs2.decode(e);
      for (let e = 0; e < r.length; ++e) {
        t += percentEncodeChar(r[e], isC0ControlPercentEncode);
      }
      return t;
    }
    function findLongestZeroSequence(e) {
      let t = null;
      let r = 1;
      let a = null;
      let n = 0;
      for (let i = 0; i < e.length; ++i) {
        if (e[i] !== 0) {
          if (n > r) {
            t = a;
            r = n;
          }
          a = null;
          n = 0;
        } else {
          if (a === null) {
            a = i;
          }
          ++n;
        }
      }
      if (n > r) {
        t = a;
        r = n;
      }
      return { idx: t, len: r };
    }
    function serializeHost(e) {
      if (typeof e === 'number') {
        return serializeIPv4(e);
      }
      if (e instanceof Array) {
        return '[' + serializeIPv6(e) + ']';
      }
      return e;
    }
    function trimControlChars(e) {
      return e.replace(/^[\u0000-\u001F\u0020]+|[\u0000-\u001F\u0020]+$/g, '');
    }
    function trimTabAndNewline(e) {
      return e.replace(/\u0009|\u000A|\u000D/g, '');
    }
    function shortenPath(e) {
      const t = e.path;
      if (t.length === 0) {
        return;
      }
      if (e.scheme === 'file' && t.length === 1 && isNormalizedWindowsDriveLetter(t[0])) {
        return;
      }
      t.pop();
    }
    function includesCredentials(e) {
      return e.username !== '' || e.password !== '';
    }
    function cannotHaveAUsernamePasswordPort(e) {
      return e.host === null || e.host === '' || e.cannotBeABaseURL || e.scheme === 'file';
    }
    function isNormalizedWindowsDriveLetter(e) {
      return /^[A-Za-z]:$/.test(e);
    }
    function URLStateMachine(e, t, r, n, i) {
      this.pointer = 0;
      this.input = e;
      this.base = t || null;
      this.encodingOverride = r || 'utf-8';
      this.stateOverride = i;
      this.url = n;
      this.failure = false;
      this.parseError = false;
      if (!this.url) {
        this.url = {
          scheme: '',
          username: '',
          password: '',
          host: null,
          port: null,
          path: [],
          query: null,
          fragment: null,
          cannotBeABaseURL: false,
        };
        const e = trimControlChars(this.input);
        if (e !== this.input) {
          this.parseError = true;
        }
        this.input = e;
      }
      const s = trimTabAndNewline(this.input);
      if (s !== this.input) {
        this.parseError = true;
      }
      this.input = s;
      this.state = i || 'scheme start';
      this.buffer = '';
      this.atFlag = false;
      this.arrFlag = false;
      this.passwordTokenSeenFlag = false;
      this.input = a.ucs2.decode(this.input);
      for (; this.pointer <= this.input.length; ++this.pointer) {
        const e = this.input[this.pointer];
        const t = isNaN(e) ? undefined : String.fromCodePoint(e);
        const r = this['parse ' + this.state](e, t);
        if (!r) {
          break;
        } else if (r === o) {
          this.failure = true;
          break;
        }
      }
    }
    URLStateMachine.prototype['parse scheme start'] = function parseSchemeStart(e, t) {
      if (isASCIIAlpha(e)) {
        this.buffer += t.toLowerCase();
        this.state = 'scheme';
      } else if (!this.stateOverride) {
        this.state = 'no scheme';
        --this.pointer;
      } else {
        this.parseError = true;
        return o;
      }
      return true;
    };
    URLStateMachine.prototype['parse scheme'] = function parseScheme(e, t) {
      if (isASCIIAlphanumeric(e) || e === 43 || e === 45 || e === 46) {
        this.buffer += t.toLowerCase();
      } else if (e === 58) {
        if (this.stateOverride) {
          if (isSpecial(this.url) && !isSpecialScheme(this.buffer)) {
            return false;
          }
          if (!isSpecial(this.url) && isSpecialScheme(this.buffer)) {
            return false;
          }
          if ((includesCredentials(this.url) || this.url.port !== null) && this.buffer === 'file') {
            return false;
          }
          if (this.url.scheme === 'file' && (this.url.host === '' || this.url.host === null)) {
            return false;
          }
        }
        this.url.scheme = this.buffer;
        this.buffer = '';
        if (this.stateOverride) {
          return false;
        }
        if (this.url.scheme === 'file') {
          if (this.input[this.pointer + 1] !== 47 || this.input[this.pointer + 2] !== 47) {
            this.parseError = true;
          }
          this.state = 'file';
        } else if (
          isSpecial(this.url) &&
          this.base !== null &&
          this.base.scheme === this.url.scheme
        ) {
          this.state = 'special relative or authority';
        } else if (isSpecial(this.url)) {
          this.state = 'special authority slashes';
        } else if (this.input[this.pointer + 1] === 47) {
          this.state = 'path or authority';
          ++this.pointer;
        } else {
          this.url.cannotBeABaseURL = true;
          this.url.path.push('');
          this.state = 'cannot-be-a-base-URL path';
        }
      } else if (!this.stateOverride) {
        this.buffer = '';
        this.state = 'no scheme';
        this.pointer = -1;
      } else {
        this.parseError = true;
        return o;
      }
      return true;
    };
    URLStateMachine.prototype['parse no scheme'] = function parseNoScheme(e) {
      if (this.base === null || (this.base.cannotBeABaseURL && e !== 35)) {
        return o;
      } else if (this.base.cannotBeABaseURL && e === 35) {
        this.url.scheme = this.base.scheme;
        this.url.path = this.base.path.slice();
        this.url.query = this.base.query;
        this.url.fragment = '';
        this.url.cannotBeABaseURL = true;
        this.state = 'fragment';
      } else if (this.base.scheme === 'file') {
        this.state = 'file';
        --this.pointer;
      } else {
        this.state = 'relative';
        --this.pointer;
      }
      return true;
    };
    URLStateMachine.prototype['parse special relative or authority'] =
      function parseSpecialRelativeOrAuthority(e) {
        if (e === 47 && this.input[this.pointer + 1] === 47) {
          this.state = 'special authority ignore slashes';
          ++this.pointer;
        } else {
          this.parseError = true;
          this.state = 'relative';
          --this.pointer;
        }
        return true;
      };
    URLStateMachine.prototype['parse path or authority'] = function parsePathOrAuthority(e) {
      if (e === 47) {
        this.state = 'authority';
      } else {
        this.state = 'path';
        --this.pointer;
      }
      return true;
    };
    URLStateMachine.prototype['parse relative'] = function parseRelative(e) {
      this.url.scheme = this.base.scheme;
      if (isNaN(e)) {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.url.path = this.base.path.slice();
        this.url.query = this.base.query;
      } else if (e === 47) {
        this.state = 'relative slash';
      } else if (e === 63) {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.url.path = this.base.path.slice();
        this.url.query = '';
        this.state = 'query';
      } else if (e === 35) {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.url.path = this.base.path.slice();
        this.url.query = this.base.query;
        this.url.fragment = '';
        this.state = 'fragment';
      } else if (isSpecial(this.url) && e === 92) {
        this.parseError = true;
        this.state = 'relative slash';
      } else {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.url.path = this.base.path.slice(0, this.base.path.length - 1);
        this.state = 'path';
        --this.pointer;
      }
      return true;
    };
    URLStateMachine.prototype['parse relative slash'] = function parseRelativeSlash(e) {
      if (isSpecial(this.url) && (e === 47 || e === 92)) {
        if (e === 92) {
          this.parseError = true;
        }
        this.state = 'special authority ignore slashes';
      } else if (e === 47) {
        this.state = 'authority';
      } else {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.state = 'path';
        --this.pointer;
      }
      return true;
    };
    URLStateMachine.prototype['parse special authority slashes'] =
      function parseSpecialAuthoritySlashes(e) {
        if (e === 47 && this.input[this.pointer + 1] === 47) {
          this.state = 'special authority ignore slashes';
          ++this.pointer;
        } else {
          this.parseError = true;
          this.state = 'special authority ignore slashes';
          --this.pointer;
        }
        return true;
      };
    URLStateMachine.prototype['parse special authority ignore slashes'] =
      function parseSpecialAuthorityIgnoreSlashes(e) {
        if (e !== 47 && e !== 92) {
          this.state = 'authority';
          --this.pointer;
        } else {
          this.parseError = true;
        }
        return true;
      };
    URLStateMachine.prototype['parse authority'] = function parseAuthority(e, t) {
      if (e === 64) {
        this.parseError = true;
        if (this.atFlag) {
          this.buffer = '%40' + this.buffer;
        }
        this.atFlag = true;
        const e = countSymbols(this.buffer);
        for (let t = 0; t < e; ++t) {
          const e = this.buffer.codePointAt(t);
          if (e === 58 && !this.passwordTokenSeenFlag) {
            this.passwordTokenSeenFlag = true;
            continue;
          }
          const r = percentEncodeChar(e, isUserinfoPercentEncode);
          if (this.passwordTokenSeenFlag) {
            this.url.password += r;
          } else {
            this.url.username += r;
          }
        }
        this.buffer = '';
      } else if (
        isNaN(e) ||
        e === 47 ||
        e === 63 ||
        e === 35 ||
        (isSpecial(this.url) && e === 92)
      ) {
        if (this.atFlag && this.buffer === '') {
          this.parseError = true;
          return o;
        }
        this.pointer -= countSymbols(this.buffer) + 1;
        this.buffer = '';
        this.state = 'host';
      } else {
        this.buffer += t;
      }
      return true;
    };
    URLStateMachine.prototype['parse hostname'] = URLStateMachine.prototype['parse host'] =
      function parseHostName(e, t) {
        if (this.stateOverride && this.url.scheme === 'file') {
          --this.pointer;
          this.state = 'file host';
        } else if (e === 58 && !this.arrFlag) {
          if (this.buffer === '') {
            this.parseError = true;
            return o;
          }
          const e = parseHost(this.buffer, isSpecial(this.url));
          if (e === o) {
            return o;
          }
          this.url.host = e;
          this.buffer = '';
          this.state = 'port';
          if (this.stateOverride === 'hostname') {
            return false;
          }
        } else if (
          isNaN(e) ||
          e === 47 ||
          e === 63 ||
          e === 35 ||
          (isSpecial(this.url) && e === 92)
        ) {
          --this.pointer;
          if (isSpecial(this.url) && this.buffer === '') {
            this.parseError = true;
            return o;
          } else if (
            this.stateOverride &&
            this.buffer === '' &&
            (includesCredentials(this.url) || this.url.port !== null)
          ) {
            this.parseError = true;
            return false;
          }
          const e = parseHost(this.buffer, isSpecial(this.url));
          if (e === o) {
            return o;
          }
          this.url.host = e;
          this.buffer = '';
          this.state = 'path start';
          if (this.stateOverride) {
            return false;
          }
        } else {
          if (e === 91) {
            this.arrFlag = true;
          } else if (e === 93) {
            this.arrFlag = false;
          }
          this.buffer += t;
        }
        return true;
      };
    URLStateMachine.prototype['parse port'] = function parsePort(e, t) {
      if (isASCIIDigit(e)) {
        this.buffer += t;
      } else if (
        isNaN(e) ||
        e === 47 ||
        e === 63 ||
        e === 35 ||
        (isSpecial(this.url) && e === 92) ||
        this.stateOverride
      ) {
        if (this.buffer !== '') {
          const e = parseInt(this.buffer);
          if (e > Math.pow(2, 16) - 1) {
            this.parseError = true;
            return o;
          }
          this.url.port = e === defaultPort(this.url.scheme) ? null : e;
          this.buffer = '';
        }
        if (this.stateOverride) {
          return false;
        }
        this.state = 'path start';
        --this.pointer;
      } else {
        this.parseError = true;
        return o;
      }
      return true;
    };
    const d = new Set([47, 92, 63, 35]);
    URLStateMachine.prototype['parse file'] = function parseFile(e) {
      this.url.scheme = 'file';
      if (e === 47 || e === 92) {
        if (e === 92) {
          this.parseError = true;
        }
        this.state = 'file slash';
      } else if (this.base !== null && this.base.scheme === 'file') {
        if (isNaN(e)) {
          this.url.host = this.base.host;
          this.url.path = this.base.path.slice();
          this.url.query = this.base.query;
        } else if (e === 63) {
          this.url.host = this.base.host;
          this.url.path = this.base.path.slice();
          this.url.query = '';
          this.state = 'query';
        } else if (e === 35) {
          this.url.host = this.base.host;
          this.url.path = this.base.path.slice();
          this.url.query = this.base.query;
          this.url.fragment = '';
          this.state = 'fragment';
        } else {
          if (
            this.input.length - this.pointer - 1 === 0 ||
            !isWindowsDriveLetterCodePoints(e, this.input[this.pointer + 1]) ||
            (this.input.length - this.pointer - 1 >= 2 && !d.has(this.input[this.pointer + 2]))
          ) {
            this.url.host = this.base.host;
            this.url.path = this.base.path.slice();
            shortenPath(this.url);
          } else {
            this.parseError = true;
          }
          this.state = 'path';
          --this.pointer;
        }
      } else {
        this.state = 'path';
        --this.pointer;
      }
      return true;
    };
    URLStateMachine.prototype['parse file slash'] = function parseFileSlash(e) {
      if (e === 47 || e === 92) {
        if (e === 92) {
          this.parseError = true;
        }
        this.state = 'file host';
      } else {
        if (this.base !== null && this.base.scheme === 'file') {
          if (isNormalizedWindowsDriveLetterString(this.base.path[0])) {
            this.url.path.push(this.base.path[0]);
          } else {
            this.url.host = this.base.host;
          }
        }
        this.state = 'path';
        --this.pointer;
      }
      return true;
    };
    URLStateMachine.prototype['parse file host'] = function parseFileHost(e, t) {
      if (isNaN(e) || e === 47 || e === 92 || e === 63 || e === 35) {
        --this.pointer;
        if (!this.stateOverride && isWindowsDriveLetterString(this.buffer)) {
          this.parseError = true;
          this.state = 'path';
        } else if (this.buffer === '') {
          this.url.host = '';
          if (this.stateOverride) {
            return false;
          }
          this.state = 'path start';
        } else {
          let e = parseHost(this.buffer, isSpecial(this.url));
          if (e === o) {
            return o;
          }
          if (e === 'localhost') {
            e = '';
          }
          this.url.host = e;
          if (this.stateOverride) {
            return false;
          }
          this.buffer = '';
          this.state = 'path start';
        }
      } else {
        this.buffer += t;
      }
      return true;
    };
    URLStateMachine.prototype['parse path start'] = function parsePathStart(e) {
      if (isSpecial(this.url)) {
        if (e === 92) {
          this.parseError = true;
        }
        this.state = 'path';
        if (e !== 47 && e !== 92) {
          --this.pointer;
        }
      } else if (!this.stateOverride && e === 63) {
        this.url.query = '';
        this.state = 'query';
      } else if (!this.stateOverride && e === 35) {
        this.url.fragment = '';
        this.state = 'fragment';
      } else if (e !== undefined) {
        this.state = 'path';
        if (e !== 47) {
          --this.pointer;
        }
      }
      return true;
    };
    URLStateMachine.prototype['parse path'] = function parsePath(e) {
      if (
        isNaN(e) ||
        e === 47 ||
        (isSpecial(this.url) && e === 92) ||
        (!this.stateOverride && (e === 63 || e === 35))
      ) {
        if (isSpecial(this.url) && e === 92) {
          this.parseError = true;
        }
        if (isDoubleDot(this.buffer)) {
          shortenPath(this.url);
          if (e !== 47 && !(isSpecial(this.url) && e === 92)) {
            this.url.path.push('');
          }
        } else if (isSingleDot(this.buffer) && e !== 47 && !(isSpecial(this.url) && e === 92)) {
          this.url.path.push('');
        } else if (!isSingleDot(this.buffer)) {
          if (
            this.url.scheme === 'file' &&
            this.url.path.length === 0 &&
            isWindowsDriveLetterString(this.buffer)
          ) {
            if (this.url.host !== '' && this.url.host !== null) {
              this.parseError = true;
              this.url.host = '';
            }
            this.buffer = this.buffer[0] + ':';
          }
          this.url.path.push(this.buffer);
        }
        this.buffer = '';
        if (this.url.scheme === 'file' && (e === undefined || e === 63 || e === 35)) {
          while (this.url.path.length > 1 && this.url.path[0] === '') {
            this.parseError = true;
            this.url.path.shift();
          }
        }
        if (e === 63) {
          this.url.query = '';
          this.state = 'query';
        }
        if (e === 35) {
          this.url.fragment = '';
          this.state = 'fragment';
        }
      } else {
        if (
          e === 37 &&
          (!isASCIIHex(this.input[this.pointer + 1]) || !isASCIIHex(this.input[this.pointer + 2]))
        ) {
          this.parseError = true;
        }
        this.buffer += percentEncodeChar(e, isPathPercentEncode);
      }
      return true;
    };
    URLStateMachine.prototype['parse cannot-be-a-base-URL path'] =
      function parseCannotBeABaseURLPath(e) {
        if (e === 63) {
          this.url.query = '';
          this.state = 'query';
        } else if (e === 35) {
          this.url.fragment = '';
          this.state = 'fragment';
        } else {
          if (!isNaN(e) && e !== 37) {
            this.parseError = true;
          }
          if (
            e === 37 &&
            (!isASCIIHex(this.input[this.pointer + 1]) || !isASCIIHex(this.input[this.pointer + 2]))
          ) {
            this.parseError = true;
          }
          if (!isNaN(e)) {
            this.url.path[0] = this.url.path[0] + percentEncodeChar(e, isC0ControlPercentEncode);
          }
        }
        return true;
      };
    URLStateMachine.prototype['parse query'] = function parseQuery(e, t) {
      if (isNaN(e) || (!this.stateOverride && e === 35)) {
        if (!isSpecial(this.url) || this.url.scheme === 'ws' || this.url.scheme === 'wss') {
          this.encodingOverride = 'utf-8';
        }
        const t = new Buffer(this.buffer);
        for (let e = 0; e < t.length; ++e) {
          if (t[e] < 33 || t[e] > 126 || t[e] === 34 || t[e] === 35 || t[e] === 60 || t[e] === 62) {
            this.url.query += percentEncode(t[e]);
          } else {
            this.url.query += String.fromCodePoint(t[e]);
          }
        }
        this.buffer = '';
        if (e === 35) {
          this.url.fragment = '';
          this.state = 'fragment';
        }
      } else {
        if (
          e === 37 &&
          (!isASCIIHex(this.input[this.pointer + 1]) || !isASCIIHex(this.input[this.pointer + 2]))
        ) {
          this.parseError = true;
        }
        this.buffer += t;
      }
      return true;
    };
    URLStateMachine.prototype['parse fragment'] = function parseFragment(e) {
      if (isNaN(e)) {
      } else if (e === 0) {
        this.parseError = true;
      } else {
        if (
          e === 37 &&
          (!isASCIIHex(this.input[this.pointer + 1]) || !isASCIIHex(this.input[this.pointer + 2]))
        ) {
          this.parseError = true;
        }
        this.url.fragment += percentEncodeChar(e, isC0ControlPercentEncode);
      }
      return true;
    };
    function serializeURL(e, t) {
      let r = e.scheme + ':';
      if (e.host !== null) {
        r += '//';
        if (e.username !== '' || e.password !== '') {
          r += e.username;
          if (e.password !== '') {
            r += ':' + e.password;
          }
          r += '@';
        }
        r += serializeHost(e.host);
        if (e.port !== null) {
          r += ':' + e.port;
        }
      } else if (e.host === null && e.scheme === 'file') {
        r += '//';
      }
      if (e.cannotBeABaseURL) {
        r += e.path[0];
      } else {
        for (const t of e.path) {
          r += '/' + t;
        }
      }
      if (e.query !== null) {
        r += '?' + e.query;
      }
      if (!t && e.fragment !== null) {
        r += '#' + e.fragment;
      }
      return r;
    }
    function serializeOrigin(e) {
      let t = e.scheme + '://';
      t += serializeHost(e.host);
      if (e.port !== null) {
        t += ':' + e.port;
      }
      return t;
    }
    e.exports.serializeURL = serializeURL;
    e.exports.serializeURLOrigin = function (t) {
      switch (t.scheme) {
        case 'blob':
          try {
            return e.exports.serializeURLOrigin(e.exports.parseURL(t.path[0]));
          } catch (e) {
            return 'null';
          }
        case 'ftp':
        case 'gopher':
        case 'http':
        case 'https':
        case 'ws':
        case 'wss':
          return serializeOrigin({ scheme: t.scheme, host: t.host, port: t.port });
        case 'file':
          return 'file://';
        default:
          return 'null';
      }
    };
    e.exports.basicURLParse = function (e, t) {
      if (t === undefined) {
        t = {};
      }
      const r = new URLStateMachine(e, t.baseURL, t.encodingOverride, t.url, t.stateOverride);
      if (r.failure) {
        return 'failure';
      }
      return r.url;
    };
    e.exports.setTheUsername = function (e, t) {
      e.username = '';
      const r = a.ucs2.decode(t);
      for (let t = 0; t < r.length; ++t) {
        e.username += percentEncodeChar(r[t], isUserinfoPercentEncode);
      }
    };
    e.exports.setThePassword = function (e, t) {
      e.password = '';
      const r = a.ucs2.decode(t);
      for (let t = 0; t < r.length; ++t) {
        e.password += percentEncodeChar(r[t], isUserinfoPercentEncode);
      }
    };
    e.exports.serializeHost = serializeHost;
    e.exports.cannotHaveAUsernamePasswordPort = cannotHaveAUsernamePasswordPort;
    e.exports.serializeInteger = function (e) {
      return String(e);
    };
    e.exports.parseURL = function (t, r) {
      if (r === undefined) {
        r = {};
      }
      return e.exports.basicURLParse(t, {
        baseURL: r.baseURL,
        encodingOverride: r.encodingOverride,
      });
    };
  },
  3185: (e) => {
    e.exports.mixin = function mixin(e, t) {
      const r = Object.getOwnPropertyNames(t);
      for (let a = 0; a < r.length; ++a) {
        Object.defineProperty(e, r[a], Object.getOwnPropertyDescriptor(t, r[a]));
      }
    };
    e.exports.wrapperSymbol = Symbol('wrapper');
    e.exports.implSymbol = Symbol('impl');
    e.exports.wrapperForImpl = function (t) {
      return t[e.exports.wrapperSymbol];
    };
    e.exports.implForWrapper = function (t) {
      return t[e.exports.implSymbol];
    };
  },
  2940: (e) => {
    e.exports = wrappy;
    function wrappy(e, t) {
      if (e && t) return wrappy(e)(t);
      if (typeof e !== 'function') throw new TypeError('need wrapper function');
      Object.keys(e).forEach(function (t) {
        wrapper[t] = e[t];
      });
      return wrapper;
      function wrapper() {
        var t = new Array(arguments.length);
        for (var r = 0; r < t.length; r++) {
          t[r] = arguments[r];
        }
        var a = e.apply(this, t);
        var n = t[t.length - 1];
        if (typeof a === 'function' && a !== n) {
          Object.keys(n).forEach(function (e) {
            a[e] = n[e];
          });
        }
        return a;
      }
    }
  },
  1208: (e) => {
    e.exports = extend;
    var t = Object.prototype.hasOwnProperty;
    function extend() {
      var e = {};
      for (var r = 0; r < arguments.length; r++) {
        var a = arguments[r];
        for (var n in a) {
          if (t.call(a, n)) {
            e[n] = a[n];
          }
        }
      }
      return e;
    }
  },
  1067: (e) => {
    e.exports = factory;
    var t = Function.prototype;
    var r = {}.hasOwnProperty;
    function factory(e, a) {
      var n = a || {};
      function one(a) {
        var n = one.invalid;
        var i = one.handlers;
        if (a && r.call(a, e)) {
          n = r.call(i, a[e]) ? i[a[e]] : one.unknown;
        }
        return (n || t).apply(this, arguments);
      }
      one.handlers = n.handlers || {};
      one.invalid = n.invalid;
      one.unknown = n.unknown;
      return one;
    }
  },
  2877: (module) => {
    module.exports = eval('require')('encoding');
  },
  9491: (e) => {
    e.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)('assert');
  },
  2361: (e) => {
    e.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)('events');
  },
  7147: (e) => {
    e.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)('fs');
  },
  3685: (e) => {
    e.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)('http');
  },
  5687: (e) => {
    e.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)('https');
  },
  1808: (e) => {
    e.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)('net');
  },
  2037: (e) => {
    e.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)('os');
  },
  1017: (e) => {
    e.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)('path');
  },
  5477: (e) => {
    e.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)('punycode');
  },
  2781: (e) => {
    e.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)('stream');
  },
  4404: (e) => {
    e.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)('tls');
  },
  7310: (e) => {
    e.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)('url');
  },
  3837: (e) => {
    e.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)('util');
  },
  9796: (e) => {
    e.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)('zlib');
  },
  7452: (e) => {
    e.exports = JSON.parse(
      '{"AElig":"Æ","AMP":"&","Aacute":"Á","Acirc":"Â","Agrave":"À","Aring":"Å","Atilde":"Ã","Auml":"Ä","COPY":"©","Ccedil":"Ç","ETH":"Ð","Eacute":"É","Ecirc":"Ê","Egrave":"È","Euml":"Ë","GT":">","Iacute":"Í","Icirc":"Î","Igrave":"Ì","Iuml":"Ï","LT":"<","Ntilde":"Ñ","Oacute":"Ó","Ocirc":"Ô","Ograve":"Ò","Oslash":"Ø","Otilde":"Õ","Ouml":"Ö","QUOT":"\\"","REG":"®","THORN":"Þ","Uacute":"Ú","Ucirc":"Û","Ugrave":"Ù","Uuml":"Ü","Yacute":"Ý","aacute":"á","acirc":"â","acute":"´","aelig":"æ","agrave":"à","amp":"&","aring":"å","atilde":"ã","auml":"ä","brvbar":"¦","ccedil":"ç","cedil":"¸","cent":"¢","copy":"©","curren":"¤","deg":"°","divide":"÷","eacute":"é","ecirc":"ê","egrave":"è","eth":"ð","euml":"ë","frac12":"½","frac14":"¼","frac34":"¾","gt":">","iacute":"í","icirc":"î","iexcl":"¡","igrave":"ì","iquest":"¿","iuml":"ï","laquo":"«","lt":"<","macr":"¯","micro":"µ","middot":"·","nbsp":" ","not":"¬","ntilde":"ñ","oacute":"ó","ocirc":"ô","ograve":"ò","ordf":"ª","ordm":"º","oslash":"ø","otilde":"õ","ouml":"ö","para":"¶","plusmn":"±","pound":"£","quot":"\\"","raquo":"»","reg":"®","sect":"§","shy":"­","sup1":"¹","sup2":"²","sup3":"³","szlig":"ß","thorn":"þ","times":"×","uacute":"ú","ucirc":"û","ugrave":"ù","uml":"¨","uuml":"ü","yacute":"ý","yen":"¥","yuml":"ÿ"}',
    );
  },
  2661: (e) => {
    e.exports = JSON.parse(
      '{"AEli":"Æ","AElig":"Æ","AM":"&","AMP":"&","Aacut":"Á","Aacute":"Á","Abreve":"Ă","Acir":"Â","Acirc":"Â","Acy":"А","Afr":"𝔄","Agrav":"À","Agrave":"À","Alpha":"Α","Amacr":"Ā","And":"⩓","Aogon":"Ą","Aopf":"𝔸","ApplyFunction":"⁡","Arin":"Å","Aring":"Å","Ascr":"𝒜","Assign":"≔","Atild":"Ã","Atilde":"Ã","Aum":"Ä","Auml":"Ä","Backslash":"∖","Barv":"⫧","Barwed":"⌆","Bcy":"Б","Because":"∵","Bernoullis":"ℬ","Beta":"Β","Bfr":"𝔅","Bopf":"𝔹","Breve":"˘","Bscr":"ℬ","Bumpeq":"≎","CHcy":"Ч","COP":"©","COPY":"©","Cacute":"Ć","Cap":"⋒","CapitalDifferentialD":"ⅅ","Cayleys":"ℭ","Ccaron":"Č","Ccedi":"Ç","Ccedil":"Ç","Ccirc":"Ĉ","Cconint":"∰","Cdot":"Ċ","Cedilla":"¸","CenterDot":"·","Cfr":"ℭ","Chi":"Χ","CircleDot":"⊙","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","Colon":"∷","Colone":"⩴","Congruent":"≡","Conint":"∯","ContourIntegral":"∮","Copf":"ℂ","Coproduct":"∐","CounterClockwiseContourIntegral":"∳","Cross":"⨯","Cscr":"𝒞","Cup":"⋓","CupCap":"≍","DD":"ⅅ","DDotrahd":"⤑","DJcy":"Ђ","DScy":"Ѕ","DZcy":"Џ","Dagger":"‡","Darr":"↡","Dashv":"⫤","Dcaron":"Ď","Dcy":"Д","Del":"∇","Delta":"Δ","Dfr":"𝔇","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","Diamond":"⋄","DifferentialD":"ⅆ","Dopf":"𝔻","Dot":"¨","DotDot":"⃜","DotEqual":"≐","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrow":"↓","DownArrowBar":"⤓","DownArrowUpArrow":"⇵","DownBreve":"̑","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVector":"↽","DownLeftVectorBar":"⥖","DownRightTeeVector":"⥟","DownRightVector":"⇁","DownRightVectorBar":"⥗","DownTee":"⊤","DownTeeArrow":"↧","Downarrow":"⇓","Dscr":"𝒟","Dstrok":"Đ","ENG":"Ŋ","ET":"Ð","ETH":"Ð","Eacut":"É","Eacute":"É","Ecaron":"Ě","Ecir":"Ê","Ecirc":"Ê","Ecy":"Э","Edot":"Ė","Efr":"𝔈","Egrav":"È","Egrave":"È","Element":"∈","Emacr":"Ē","EmptySmallSquare":"◻","EmptyVerySmallSquare":"▫","Eogon":"Ę","Eopf":"𝔼","Epsilon":"Ε","Equal":"⩵","EqualTilde":"≂","Equilibrium":"⇌","Escr":"ℰ","Esim":"⩳","Eta":"Η","Eum":"Ë","Euml":"Ë","Exists":"∃","ExponentialE":"ⅇ","Fcy":"Ф","Ffr":"𝔉","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","Fopf":"𝔽","ForAll":"∀","Fouriertrf":"ℱ","Fscr":"ℱ","GJcy":"Ѓ","G":">","GT":">","Gamma":"Γ","Gammad":"Ϝ","Gbreve":"Ğ","Gcedil":"Ģ","Gcirc":"Ĝ","Gcy":"Г","Gdot":"Ġ","Gfr":"𝔊","Gg":"⋙","Gopf":"𝔾","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","Gt":"≫","HARDcy":"Ъ","Hacek":"ˇ","Hat":"^","Hcirc":"Ĥ","Hfr":"ℌ","HilbertSpace":"ℋ","Hopf":"ℍ","HorizontalLine":"─","Hscr":"ℋ","Hstrok":"Ħ","HumpDownHump":"≎","HumpEqual":"≏","IEcy":"Е","IJlig":"Ĳ","IOcy":"Ё","Iacut":"Í","Iacute":"Í","Icir":"Î","Icirc":"Î","Icy":"И","Idot":"İ","Ifr":"ℑ","Igrav":"Ì","Igrave":"Ì","Im":"ℑ","Imacr":"Ī","ImaginaryI":"ⅈ","Implies":"⇒","Int":"∬","Integral":"∫","Intersection":"⋂","InvisibleComma":"⁣","InvisibleTimes":"⁢","Iogon":"Į","Iopf":"𝕀","Iota":"Ι","Iscr":"ℐ","Itilde":"Ĩ","Iukcy":"І","Ium":"Ï","Iuml":"Ï","Jcirc":"Ĵ","Jcy":"Й","Jfr":"𝔍","Jopf":"𝕁","Jscr":"𝒥","Jsercy":"Ј","Jukcy":"Є","KHcy":"Х","KJcy":"Ќ","Kappa":"Κ","Kcedil":"Ķ","Kcy":"К","Kfr":"𝔎","Kopf":"𝕂","Kscr":"𝒦","LJcy":"Љ","L":"<","LT":"<","Lacute":"Ĺ","Lambda":"Λ","Lang":"⟪","Laplacetrf":"ℒ","Larr":"↞","Lcaron":"Ľ","Lcedil":"Ļ","Lcy":"Л","LeftAngleBracket":"⟨","LeftArrow":"←","LeftArrowBar":"⇤","LeftArrowRightArrow":"⇆","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVector":"⇃","LeftDownVectorBar":"⥙","LeftFloor":"⌊","LeftRightArrow":"↔","LeftRightVector":"⥎","LeftTee":"⊣","LeftTeeArrow":"↤","LeftTeeVector":"⥚","LeftTriangle":"⊲","LeftTriangleBar":"⧏","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVector":"↿","LeftUpVectorBar":"⥘","LeftVector":"↼","LeftVectorBar":"⥒","Leftarrow":"⇐","Leftrightarrow":"⇔","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","LessLess":"⪡","LessSlantEqual":"⩽","LessTilde":"≲","Lfr":"𝔏","Ll":"⋘","Lleftarrow":"⇚","Lmidot":"Ŀ","LongLeftArrow":"⟵","LongLeftRightArrow":"⟷","LongRightArrow":"⟶","Longleftarrow":"⟸","Longleftrightarrow":"⟺","Longrightarrow":"⟹","Lopf":"𝕃","LowerLeftArrow":"↙","LowerRightArrow":"↘","Lscr":"ℒ","Lsh":"↰","Lstrok":"Ł","Lt":"≪","Map":"⤅","Mcy":"М","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","MinusPlus":"∓","Mopf":"𝕄","Mscr":"ℳ","Mu":"Μ","NJcy":"Њ","Nacute":"Ń","Ncaron":"Ň","Ncedil":"Ņ","Ncy":"Н","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\\n","Nfr":"𝔑","NoBreak":"⁠","NonBreakingSpace":" ","Nopf":"ℕ","Not":"⫬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","NotLeftTriangle":"⋪","NotLeftTriangleBar":"⧏̸","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangle":"⋫","NotRightTriangleBar":"⧐̸","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","Nscr":"𝒩","Ntild":"Ñ","Ntilde":"Ñ","Nu":"Ν","OElig":"Œ","Oacut":"Ó","Oacute":"Ó","Ocir":"Ô","Ocirc":"Ô","Ocy":"О","Odblac":"Ő","Ofr":"𝔒","Ograv":"Ò","Ograve":"Ò","Omacr":"Ō","Omega":"Ω","Omicron":"Ο","Oopf":"𝕆","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","Or":"⩔","Oscr":"𝒪","Oslas":"Ø","Oslash":"Ø","Otild":"Õ","Otilde":"Õ","Otimes":"⨷","Oum":"Ö","Ouml":"Ö","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","PartialD":"∂","Pcy":"П","Pfr":"𝔓","Phi":"Φ","Pi":"Π","PlusMinus":"±","Poincareplane":"ℌ","Popf":"ℙ","Pr":"⪻","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","Prime":"″","Product":"∏","Proportion":"∷","Proportional":"∝","Pscr":"𝒫","Psi":"Ψ","QUO":"\\"","QUOT":"\\"","Qfr":"𝔔","Qopf":"ℚ","Qscr":"𝒬","RBarr":"⤐","RE":"®","REG":"®","Racute":"Ŕ","Rang":"⟫","Rarr":"↠","Rarrtl":"⤖","Rcaron":"Ř","Rcedil":"Ŗ","Rcy":"Р","Re":"ℜ","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","Rfr":"ℜ","Rho":"Ρ","RightAngleBracket":"⟩","RightArrow":"→","RightArrowBar":"⇥","RightArrowLeftArrow":"⇄","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVector":"⇂","RightDownVectorBar":"⥕","RightFloor":"⌋","RightTee":"⊢","RightTeeArrow":"↦","RightTeeVector":"⥛","RightTriangle":"⊳","RightTriangleBar":"⧐","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVector":"↾","RightUpVectorBar":"⥔","RightVector":"⇀","RightVectorBar":"⥓","Rightarrow":"⇒","Ropf":"ℝ","RoundImplies":"⥰","Rrightarrow":"⇛","Rscr":"ℛ","Rsh":"↱","RuleDelayed":"⧴","SHCHcy":"Щ","SHcy":"Ш","SOFTcy":"Ь","Sacute":"Ś","Sc":"⪼","Scaron":"Š","Scedil":"Ş","Scirc":"Ŝ","Scy":"С","Sfr":"𝔖","ShortDownArrow":"↓","ShortLeftArrow":"←","ShortRightArrow":"→","ShortUpArrow":"↑","Sigma":"Σ","SmallCircle":"∘","Sopf":"𝕊","Sqrt":"√","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","Sscr":"𝒮","Star":"⋆","Sub":"⋐","Subset":"⋐","SubsetEqual":"⊆","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","SuchThat":"∋","Sum":"∑","Sup":"⋑","Superset":"⊃","SupersetEqual":"⊇","Supset":"⋑","THOR":"Þ","THORN":"Þ","TRADE":"™","TSHcy":"Ћ","TScy":"Ц","Tab":"\\t","Tau":"Τ","Tcaron":"Ť","Tcedil":"Ţ","Tcy":"Т","Tfr":"𝔗","Therefore":"∴","Theta":"Θ","ThickSpace":"  ","ThinSpace":" ","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","Topf":"𝕋","TripleDot":"⃛","Tscr":"𝒯","Tstrok":"Ŧ","Uacut":"Ú","Uacute":"Ú","Uarr":"↟","Uarrocir":"⥉","Ubrcy":"Ў","Ubreve":"Ŭ","Ucir":"Û","Ucirc":"Û","Ucy":"У","Udblac":"Ű","Ufr":"𝔘","Ugrav":"Ù","Ugrave":"Ù","Umacr":"Ū","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","Uopf":"𝕌","UpArrow":"↑","UpArrowBar":"⤒","UpArrowDownArrow":"⇅","UpDownArrow":"↕","UpEquilibrium":"⥮","UpTee":"⊥","UpTeeArrow":"↥","Uparrow":"⇑","Updownarrow":"⇕","UpperLeftArrow":"↖","UpperRightArrow":"↗","Upsi":"ϒ","Upsilon":"Υ","Uring":"Ů","Uscr":"𝒰","Utilde":"Ũ","Uum":"Ü","Uuml":"Ü","VDash":"⊫","Vbar":"⫫","Vcy":"В","Vdash":"⊩","Vdashl":"⫦","Vee":"⋁","Verbar":"‖","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","Vopf":"𝕍","Vscr":"𝒱","Vvdash":"⊪","Wcirc":"Ŵ","Wedge":"⋀","Wfr":"𝔚","Wopf":"𝕎","Wscr":"𝒲","Xfr":"𝔛","Xi":"Ξ","Xopf":"𝕏","Xscr":"𝒳","YAcy":"Я","YIcy":"Ї","YUcy":"Ю","Yacut":"Ý","Yacute":"Ý","Ycirc":"Ŷ","Ycy":"Ы","Yfr":"𝔜","Yopf":"𝕐","Yscr":"𝒴","Yuml":"Ÿ","ZHcy":"Ж","Zacute":"Ź","Zcaron":"Ž","Zcy":"З","Zdot":"Ż","ZeroWidthSpace":"​","Zeta":"Ζ","Zfr":"ℨ","Zopf":"ℤ","Zscr":"𝒵","aacut":"á","aacute":"á","abreve":"ă","ac":"∾","acE":"∾̳","acd":"∿","acir":"â","acirc":"â","acut":"´","acute":"´","acy":"а","aeli":"æ","aelig":"æ","af":"⁡","afr":"𝔞","agrav":"à","agrave":"à","alefsym":"ℵ","aleph":"ℵ","alpha":"α","amacr":"ā","amalg":"⨿","am":"&","amp":"&","and":"∧","andand":"⩕","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsd":"∡","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","aogon":"ą","aopf":"𝕒","ap":"≈","apE":"⩰","apacir":"⩯","ape":"≊","apid":"≋","apos":"\'","approx":"≈","approxeq":"≊","arin":"å","aring":"å","ascr":"𝒶","ast":"*","asymp":"≈","asympeq":"≍","atild":"ã","atilde":"ã","aum":"ä","auml":"ä","awconint":"∳","awint":"⨑","bNot":"⫭","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","barvee":"⊽","barwed":"⌅","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","beta":"β","beth":"ℶ","between":"≬","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bnot":"⌐","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxDL":"╗","boxDR":"╔","boxDl":"╖","boxDr":"╓","boxH":"═","boxHD":"╦","boxHU":"╩","boxHd":"╤","boxHu":"╧","boxUL":"╝","boxUR":"╚","boxUl":"╜","boxUr":"╙","boxV":"║","boxVH":"╬","boxVL":"╣","boxVR":"╠","boxVh":"╫","boxVl":"╢","boxVr":"╟","boxbox":"⧉","boxdL":"╕","boxdR":"╒","boxdl":"┐","boxdr":"┌","boxh":"─","boxhD":"╥","boxhU":"╨","boxhd":"┬","boxhu":"┴","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxuL":"╛","boxuR":"╘","boxul":"┘","boxur":"└","boxv":"│","boxvH":"╪","boxvL":"╡","boxvR":"╞","boxvh":"┼","boxvl":"┤","boxvr":"├","bprime":"‵","breve":"˘","brvba":"¦","brvbar":"¦","bscr":"𝒷","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsol":"\\\\","bsolb":"⧅","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","bumpeq":"≏","cacute":"ć","cap":"∩","capand":"⩄","capbrcup":"⩉","capcap":"⩋","capcup":"⩇","capdot":"⩀","caps":"∩︀","caret":"⁁","caron":"ˇ","ccaps":"⩍","ccaron":"č","ccedi":"ç","ccedil":"ç","ccirc":"ĉ","ccups":"⩌","ccupssm":"⩐","cdot":"ċ","cedi":"¸","cedil":"¸","cemptyv":"⦲","cen":"¢","cent":"¢","centerdot":"·","cfr":"𝔠","chcy":"ч","check":"✓","checkmark":"✓","chi":"χ","cir":"○","cirE":"⧃","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledR":"®","circledS":"Ⓢ","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","clubs":"♣","clubsuit":"♣","colon":":","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","conint":"∮","copf":"𝕔","coprod":"∐","cop":"©","copy":"©","copysr":"℗","crarr":"↵","cross":"✗","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cup":"∪","cupbrcap":"⩈","cupcap":"⩆","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curre":"¤","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dArr":"⇓","dHar":"⥥","dagger":"†","daleth":"ℸ","darr":"↓","dash":"‐","dashv":"⊣","dbkarow":"⤏","dblac":"˝","dcaron":"ď","dcy":"д","dd":"ⅆ","ddagger":"‡","ddarr":"⇊","ddotseq":"⩷","de":"°","deg":"°","delta":"δ","demptyv":"⦱","dfisht":"⥿","dfr":"𝔡","dharl":"⇃","dharr":"⇂","diam":"⋄","diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","digamma":"ϝ","disin":"⋲","div":"÷","divid":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","dopf":"𝕕","dot":"˙","doteq":"≐","doteqdot":"≑","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","downarrow":"↓","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","dscr":"𝒹","dscy":"ѕ","dsol":"⧶","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","dzcy":"џ","dzigrarr":"⟿","eDDot":"⩷","eDot":"≑","eacut":"é","eacute":"é","easter":"⩮","ecaron":"ě","ecir":"ê","ecirc":"ê","ecolon":"≕","ecy":"э","edot":"ė","ee":"ⅇ","efDot":"≒","efr":"𝔢","eg":"⪚","egrav":"è","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","emacr":"ē","empty":"∅","emptyset":"∅","emptyv":"∅","emsp13":" ","emsp14":" ","emsp":" ","eng":"ŋ","ensp":" ","eogon":"ę","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","equals":"=","equest":"≟","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erDot":"≓","erarr":"⥱","escr":"ℯ","esdot":"≐","esim":"≂","eta":"η","et":"ð","eth":"ð","eum":"ë","euml":"ë","euro":"€","excl":"!","exist":"∃","expectation":"ℰ","exponentiale":"ⅇ","fallingdotseq":"≒","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","ffr":"𝔣","filig":"ﬁ","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","fopf":"𝕗","forall":"∀","fork":"⋔","forkv":"⫙","fpartint":"⨍","frac1":"¼","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac3":"¾","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","gE":"≧","gEl":"⪌","gacute":"ǵ","gamma":"γ","gammad":"ϝ","gap":"⪆","gbreve":"ğ","gcirc":"ĝ","gcy":"г","gdot":"ġ","ge":"≥","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","ges":"⩾","gescc":"⪩","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","gfr":"𝔤","gg":"≫","ggg":"⋙","gimel":"ℷ","gjcy":"ѓ","gl":"≷","glE":"⪒","gla":"⪥","glj":"⪤","gnE":"≩","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gneq":"⪈","gneqq":"≩","gnsim":"⋧","gopf":"𝕘","grave":"`","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","g":">","gt":">","gtcc":"⪧","gtcir":"⩺","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","hArr":"⇔","hairsp":" ","half":"½","hamilt":"ℋ","hardcy":"ъ","harr":"↔","harrcir":"⥈","harrw":"↭","hbar":"ℏ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","horbar":"―","hscr":"𝒽","hslash":"ℏ","hstrok":"ħ","hybull":"⁃","hyphen":"‐","iacut":"í","iacute":"í","ic":"⁣","icir":"î","icirc":"î","icy":"и","iecy":"е","iexc":"¡","iexcl":"¡","iff":"⇔","ifr":"𝔦","igrav":"ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","ijlig":"ĳ","imacr":"ī","image":"ℑ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","imof":"⊷","imped":"Ƶ","in":"∈","incare":"℅","infin":"∞","infintie":"⧝","inodot":"ı","int":"∫","intcal":"⊺","integers":"ℤ","intercal":"⊺","intlarhk":"⨗","intprod":"⨼","iocy":"ё","iogon":"į","iopf":"𝕚","iota":"ι","iprod":"⨼","iques":"¿","iquest":"¿","iscr":"𝒾","isin":"∈","isinE":"⋹","isindot":"⋵","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","itilde":"ĩ","iukcy":"і","ium":"ï","iuml":"ï","jcirc":"ĵ","jcy":"й","jfr":"𝔧","jmath":"ȷ","jopf":"𝕛","jscr":"𝒿","jsercy":"ј","jukcy":"є","kappa":"κ","kappav":"ϰ","kcedil":"ķ","kcy":"к","kfr":"𝔨","kgreen":"ĸ","khcy":"х","kjcy":"ќ","kopf":"𝕜","kscr":"𝓀","lAarr":"⇚","lArr":"⇐","lAtail":"⤛","lBarr":"⤎","lE":"≦","lEg":"⪋","lHar":"⥢","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","lambda":"λ","lang":"⟨","langd":"⦑","langle":"⟨","lap":"⪅","laqu":"«","laquo":"«","larr":"←","larrb":"⇤","larrbfs":"⤟","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","lat":"⪫","latail":"⤙","late":"⪭","lates":"⪭︀","lbarr":"⤌","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","lcaron":"ľ","lcedil":"ļ","lceil":"⌈","lcub":"{","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","leftarrow":"←","leftarrowtail":"↢","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","leftthreetimes":"⋋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","les":"⩽","lescc":"⪨","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","lessgtr":"≶","lesssim":"≲","lfisht":"⥼","lfloor":"⌊","lfr":"𝔩","lg":"≶","lgE":"⪑","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","ljcy":"љ","ll":"≪","llarr":"⇇","llcorner":"⌞","llhard":"⥫","lltri":"◺","lmidot":"ŀ","lmoust":"⎰","lmoustache":"⎰","lnE":"≨","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","longleftrightarrow":"⟷","longmapsto":"⟼","longrightarrow":"⟶","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","lstrok":"ł","l":"<","lt":"<","ltcc":"⪦","ltcir":"⩹","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltrPar":"⦖","ltri":"◃","ltrie":"⊴","ltrif":"◂","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","mDDot":"∺","mac":"¯","macr":"¯","male":"♂","malt":"✠","maltese":"✠","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","mcy":"м","mdash":"—","measuredangle":"∡","mfr":"𝔪","mho":"℧","micr":"µ","micro":"µ","mid":"∣","midast":"*","midcir":"⫰","middo":"·","middot":"·","minus":"−","minusb":"⊟","minusd":"∸","minusdu":"⨪","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","mopf":"𝕞","mp":"∓","mscr":"𝓂","mstpos":"∾","mu":"μ","multimap":"⊸","mumap":"⊸","nGg":"⋙̸","nGt":"≫⃒","nGtv":"≫̸","nLeftarrow":"⇍","nLeftrightarrow":"⇎","nLl":"⋘̸","nLt":"≪⃒","nLtv":"≪̸","nRightarrow":"⇏","nVDash":"⊯","nVdash":"⊮","nabla":"∇","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natur":"♮","natural":"♮","naturals":"ℕ","nbs":" ","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","ncaron":"ň","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","ncy":"н","ndash":"–","ne":"≠","neArr":"⇗","nearhk":"⤤","nearr":"↗","nearrow":"↗","nedot":"≐̸","nequiv":"≢","nesear":"⤨","nesim":"≂̸","nexist":"∄","nexists":"∄","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","ngsim":"≵","ngt":"≯","ngtr":"≯","nhArr":"⇎","nharr":"↮","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","njcy":"њ","nlArr":"⇍","nlE":"≦̸","nlarr":"↚","nldr":"‥","nle":"≰","nleftarrow":"↚","nleftrightarrow":"↮","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nlsim":"≴","nlt":"≮","nltri":"⋪","nltrie":"⋬","nmid":"∤","nopf":"𝕟","no":"¬","not":"¬","notin":"∉","notinE":"⋹̸","notindot":"⋵̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","npar":"∦","nparallel":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","npre":"⪯̸","nprec":"⊀","npreceq":"⪯̸","nrArr":"⇏","nrarr":"↛","nrarrc":"⤳̸","nrarrw":"↝̸","nrightarrow":"↛","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","ntild":"ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","nu":"ν","num":"#","numero":"№","numsp":" ","nvDash":"⊭","nvHarr":"⤄","nvap":"≍⃒","nvdash":"⊬","nvge":"≥⃒","nvgt":">⃒","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwArr":"⇖","nwarhk":"⤣","nwarr":"↖","nwarrow":"↖","nwnear":"⤧","oS":"Ⓢ","oacut":"ó","oacute":"ó","oast":"⊛","ocir":"ô","ocirc":"ô","ocy":"о","odash":"⊝","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","oelig":"œ","ofcir":"⦿","ofr":"𝔬","ogon":"˛","ograv":"ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","omacr":"ō","omega":"ω","omicron":"ο","omid":"⦶","ominus":"⊖","oopf":"𝕠","opar":"⦷","operp":"⦹","oplus":"⊕","or":"∨","orarr":"↻","ord":"º","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oscr":"ℴ","oslas":"ø","oslash":"ø","osol":"⊘","otild":"õ","otilde":"õ","otimes":"⊗","otimesas":"⨶","oum":"ö","ouml":"ö","ovbar":"⌽","par":"¶","para":"¶","parallel":"∥","parsim":"⫳","parsl":"⫽","part":"∂","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","pfr":"𝔭","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plus":"+","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plusdo":"∔","plusdu":"⨥","pluse":"⩲","plusm":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","pointint":"⨕","popf":"𝕡","poun":"£","pound":"£","pr":"≺","prE":"⪳","prap":"⪷","prcue":"≼","pre":"⪯","prec":"≺","precapprox":"⪷","preccurlyeq":"≼","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","precsim":"≾","prime":"′","primes":"ℙ","prnE":"⪵","prnap":"⪹","prnsim":"⋨","prod":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","propto":"∝","prsim":"≾","prurel":"⊰","pscr":"𝓅","psi":"ψ","puncsp":" ","qfr":"𝔮","qint":"⨌","qopf":"𝕢","qprime":"⁗","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quo":"\\"","quot":"\\"","rAarr":"⇛","rArr":"⇒","rAtail":"⤜","rBarr":"⤏","rHar":"⥤","race":"∽̱","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","rangd":"⦒","range":"⦥","rangle":"⟩","raqu":"»","raquo":"»","rarr":"→","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","rarrtl":"↣","rarrw":"↝","ratail":"⤚","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","rcaron":"ř","rcedil":"ŗ","rceil":"⌉","rcub":"}","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","rect":"▭","re":"®","reg":"®","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","rhard":"⇁","rharu":"⇀","rharul":"⥬","rho":"ρ","rhov":"ϱ","rightarrow":"→","rightarrowtail":"↣","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","rightthreetimes":"⋌","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoust":"⎱","rmoustache":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","roplus":"⨮","rotimes":"⨵","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","rsaquo":"›","rscr":"𝓇","rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","ruluhar":"⥨","rx":"℞","sacute":"ś","sbquo":"‚","sc":"≻","scE":"⪴","scap":"⪸","scaron":"š","sccue":"≽","sce":"⪰","scedil":"ş","scirc":"ŝ","scnE":"⪶","scnap":"⪺","scnsim":"⋩","scpolint":"⨓","scsim":"≿","scy":"с","sdot":"⋅","sdotb":"⊡","sdote":"⩦","seArr":"⇘","searhk":"⤥","searr":"↘","searrow":"↘","sec":"§","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","sfr":"𝔰","sfrown":"⌢","sharp":"♯","shchcy":"щ","shcy":"ш","shortmid":"∣","shortparallel":"∥","sh":"­","shy":"­","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","softcy":"ь","sol":"/","solb":"⧄","solbar":"⌿","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","squ":"□","square":"□","squarf":"▪","squf":"▪","srarr":"→","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","subE":"⫅","subdot":"⪽","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","subseteq":"⊆","subseteqq":"⫅","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succ":"≻","succapprox":"⪸","succcurlyeq":"≽","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","sum":"∑","sung":"♪","sup":"⊃","sup1":"¹","sup2":"²","sup3":"³","supE":"⫆","supdot":"⪾","supdsub":"⫘","supe":"⊇","supedot":"⫄","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swArr":"⇙","swarhk":"⤦","swarr":"↙","swarrow":"↙","swnwar":"⤪","szli":"ß","szlig":"ß","target":"⌖","tau":"τ","tbrk":"⎴","tcaron":"ť","tcedil":"ţ","tcy":"т","tdot":"⃛","telrec":"⌕","tfr":"𝔱","there4":"∴","therefore":"∴","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","thinsp":" ","thkap":"≈","thksim":"∼","thor":"þ","thorn":"þ","tilde":"˜","time":"×","times":"×","timesb":"⊠","timesbar":"⨱","timesd":"⨰","tint":"∭","toea":"⤨","top":"⊤","topbot":"⌶","topcir":"⫱","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","tscr":"𝓉","tscy":"ц","tshcy":"ћ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","uArr":"⇑","uHar":"⥣","uacut":"ú","uacute":"ú","uarr":"↑","ubrcy":"ў","ubreve":"ŭ","ucir":"û","ucirc":"û","ucy":"у","udarr":"⇅","udblac":"ű","udhar":"⥮","ufisht":"⥾","ufr":"𝔲","ugrav":"ù","ugrave":"ù","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","umacr":"ū","um":"¨","uml":"¨","uogon":"ų","uopf":"𝕦","uparrow":"↑","updownarrow":"↕","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","upsi":"υ","upsih":"ϒ","upsilon":"υ","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","uring":"ů","urtri":"◹","uscr":"𝓊","utdot":"⋰","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","uum":"ü","uuml":"ü","uwangle":"⦧","vArr":"⇕","vBar":"⫨","vBarv":"⫩","vDash":"⊨","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vcy":"в","vdash":"⊢","vee":"∨","veebar":"⊻","veeeq":"≚","vellip":"⋮","verbar":"|","vert":"|","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","vopf":"𝕧","vprop":"∝","vrtri":"⊳","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","vzigzag":"⦚","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","wedgeq":"≙","weierp":"℘","wfr":"𝔴","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","xfr":"𝔵","xhArr":"⟺","xharr":"⟷","xi":"ξ","xlArr":"⟸","xlarr":"⟵","xmap":"⟼","xnis":"⋻","xodot":"⨀","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrArr":"⟹","xrarr":"⟶","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","yacut":"ý","yacute":"ý","yacy":"я","ycirc":"ŷ","ycy":"ы","ye":"¥","yen":"¥","yfr":"𝔶","yicy":"ї","yopf":"𝕪","yscr":"𝓎","yucy":"ю","yum":"ÿ","yuml":"ÿ","zacute":"ź","zcaron":"ž","zcy":"з","zdot":"ż","zeetrf":"ℨ","zeta":"ζ","zfr":"𝔷","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","zscr":"𝓏","zwj":"‍","zwnj":"‌"}',
    );
  },
  3580: (e) => {
    e.exports = JSON.parse(
      '{"0":"�","128":"€","130":"‚","131":"ƒ","132":"„","133":"…","134":"†","135":"‡","136":"ˆ","137":"‰","138":"Š","139":"‹","140":"Œ","142":"Ž","145":"‘","146":"’","147":"“","148":"”","149":"•","150":"–","151":"—","152":"˜","153":"™","154":"š","155":"›","156":"œ","158":"ž","159":"Ÿ"}',
    );
  },
  6947: (e) => {
    e.exports = JSON.parse(
      '["altGlyph","altGlyphDef","altGlyphItem","animateColor","animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","glyphRef","linearGradient","radialGradient","solidColor","textArea","textPath"]',
    );
  },
  9878: (e) => {
    e.exports = JSON.parse(
      '["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","isindex","keygen","link","menuitem","meta","nextid","param","source","track","wbr"]',
    );
  },
  9640: (e) => {
    e.exports = JSON.parse(
      '{"classId":"classID","dataType":"datatype","itemId":"itemID","strokeDashArray":"strokeDasharray","strokeDashOffset":"strokeDashoffset","strokeLineCap":"strokeLinecap","strokeLineJoin":"strokeLinejoin","strokeMiterLimit":"strokeMiterlimit","typeOf":"typeof","xLinkActuate":"xlinkActuate","xLinkArcRole":"xlinkArcrole","xLinkHref":"xlinkHref","xLinkRole":"xlinkRole","xLinkShow":"xlinkShow","xLinkTitle":"xlinkTitle","xLinkType":"xlinkType","xmlnsXLink":"xmlnsXlink"}',
    );
  },
  2020: (e) => {
    e.exports = JSON.parse(
    );
  },
  6: (e) => {
    e.exports = JSON.parse(
      '{"html":"http://www.w3.org/1999/xhtml","mathml":"http://www.w3.org/1998/Math/MathML","svg":"http://www.w3.org/2000/svg","xlink":"http://www.w3.org/1999/xlink","xml":"http://www.w3.org/XML/1998/namespace","xmlns":"http://www.w3.org/2000/xmlns/"}',
    );
  },
};
var __webpack_module_cache__ = {};
function __nccwpck_require__(e) {
  var t = __webpack_module_cache__[e];
  if (t !== undefined) {
    return t.exports;
  }
  var r = (__webpack_module_cache__[e] = { exports: {} });
  var a = true;
  try {
    __webpack_modules__[e].call(r.exports, r, r.exports, __nccwpck_require__);
    a = false;
  } finally {
    if (a) delete __webpack_module_cache__[e];
  }
  return r.exports;
}
(() => {
  __nccwpck_require__.n = (e) => {
    var t = e && e.__esModule ? () => e['default'] : () => e;
    __nccwpck_require__.d(t, { a: t });
    return t;
  };
})();
(() => {
  __nccwpck_require__.d = (e, t) => {
    for (var r in t) {
      if (__nccwpck_require__.o(t, r) && !__nccwpck_require__.o(e, r)) {
        Object.defineProperty(e, r, { enumerable: true, get: t[r] });
      }
    }
  };
})();
(() => {
  __nccwpck_require__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
})();
if (typeof __nccwpck_require__ !== 'undefined')
  __nccwpck_require__.ab =
    new URL('.', import.meta.url).pathname.slice(
      import.meta.url.match(/^file:\/\/\/\w:/) ? 1 : 0,
      -1,
    ) + '/';
var __webpack_exports__ = {};
(() => {
  const e = __WEBPACK_EXTERNAL_createRequire(import.meta.url)('fs/promises');
  var t = __nccwpck_require__.n(e);
  var r = __nccwpck_require__(1017);
  var a = __nccwpck_require__.n(r);
  var n = __nccwpck_require__(5075);
  var i = __nccwpck_require__.n(n);
  var o = __nccwpck_require__(4859);
  var s = __nccwpck_require__.n(o);
  var p = __nccwpck_require__(4892);
  var d = __nccwpck_require__.n(p);
  var l = __nccwpck_require__(9830);
  var m = __nccwpck_require__.n(l);
  var c = __nccwpck_require__(199);
  var g = __nccwpck_require__.n(c);
  var v = __nccwpck_require__(237);
  var T = __nccwpck_require__.n(v);
  var E = __nccwpck_require__(5382);
  var _ = __nccwpck_require__.n(E);
  var w = __nccwpck_require__(5438);
  const A = '/docs/';
  const b = ['/docs/messages/'];
  const y = ['top'];
  const S = '\x3c!-- LINK_CHECKER_COMMENT --\x3e';
  const { context: C, getOctokit: k } = w;
  const N = k(process.env.GITHUB_TOKEN);
  const { owner: D, repo: O } = C.repo;
  const I = C.payload.pull_request;
  const R = I.head.sha;
  const P = new (T())();
  async function getMdxFiles(e, r = []) {
    const n = await t().readdir(e);
    for (const i of n) {
      const n = a().join(e, i);
      const o = await t().stat(n);
      if (o.isDirectory()) {
        r = await getMdxFiles(n, r);
      } else if (a().extname(i) === '.mdx') {
        r.push(n);
      }
    }
    return r;
  }
  function getHeadingsFromMarkdownTree(e) {
    const t = [];
    P.reset();
    g()(e, 'heading', (e) => {
      let r = '';
      g()(e, (e) => {
        if (e.value) {
          r += e.value;
        }
      });
      t.push(P.slug(r));
    });
    return t;
  }
  const L = i()()
    .use(s())
    .use(d(), { allowDangerousHTML: true })
    .use(m())
    .use(function compiler() {
      this.Compiler = function treeCompiler(e) {
        return e;
      };
    });
  let x;
  async function prepareDocumentMapEntry(e) {
    const r = a().relative('.' + A, e);
    const n = r
      .replace(/(\d\d-)/g, '')
      .replace('.mdx', '')
      .replace('/index', '');
    const i = await t().readFile(e, 'utf8');
    const { content: o, data: s } = _()(i);
    const p = L.parse(o);
    const d = getHeadingsFromMarkdownTree(p);
    return [n, { body: o, path: e, headings: d, ...s }];
  }
  function validateInternalLink(e, t) {
    const [r, a] = t.replace(A, '').split('#');
    const n = x.get(r);
    if (!n) {
      e.brokenLinks.push(`${A}${r}${a ? '#' + a : ''}`);
    } else if (a && !y.includes(a)) {
      const t = n.source ? x.get(n.source) : undefined;
      const i = (t || n).headings.includes(a);
      if (!i) {
        e.brokenHashes.push(`${A}${r}${a ? '#' + a : ''}`);
      }
    }
  }
  function validateHashLink(e, t, r) {
    const a = t.replace('#', '');
    if (!y.includes(a) && !r.headings.includes(a)) {
      e.brokenHashes.push(t);
    }
  }
  function validateSourceLinks(e, t) {
    if (e.source && !x.get(e.source)) {
      t.brokenSourceLinks.push(e.source);
    }
  }
  function validateRelatedLinks(e, t) {
    if (e.related && e.related.links) {
      e.related.links.forEach((e) => {
        if (!x.get(e)) {
          t.brokenRelatedLinks.push(e);
        }
      });
    }
  }
  function traverseTreeAndValidateLinks(e, t) {
    const r = {
      doc: t,
      brokenLinks: [],
      brokenHashes: [],
      brokenSourceLinks: [],
      brokenRelatedLinks: [],
    };
    g()(e, (e) => {
      if (e.type === 'element' && e.tagName === 'a') {
        const a = e.properties.href;
        if (!a) return;
        if (a.startsWith(A) && !b.some((e) => a.startsWith(e))) {
          validateInternalLink(r, a);
        } else if (a.startsWith('#')) {
          validateHashLink(r, a, t);
        }
      }
    });
    validateSourceLinks(t, r);
    validateRelatedLinks(t, r);
    return r;
  }
  async function findBotComment() {
    const { data: e } = await N.rest.issues.listComments({
      owner: D,
      repo: O,
      issue_number: C.payload.pull_request?.number,
    });
    return e.find((e) => e.body?.includes(S));
  }
  async function updateComment(e, t) {
    const { data: r } = await N.rest.issues.updateComment({
      owner: D,
      repo: O,
      comment_id: t.id,
      body: e,
    });
    return r.html_url;
  }
  async function createComment(e) {
    const { data: t } = await N.rest.issues.createComment({
      owner: D,
      repo: O,
      issue_number: C.payload.pull_request?.number,
      body: e,
    });
    return t.html_url;
  }
  const formatTableRow = (e, t) =>
    `| ${e} | [/${t}](https://github.com/vercel/next.js/blob/${R}/${t}) | \n`;
  async function createCommitStatus(e, t) {
    const r = e ? 'failure' : 'success';
    const a = e
      ? 'This PR introduces broken links to the docs. Click details for a list.'
      : 'All broken links are now fixed, thank you!';
    await N.rest.repos.createCommitStatus({
      owner: D,
      repo: O,
      sha: R,
      state: r,
      description: a,
      context: 'Link Validation',
      target_url: t,
    });
  }
  async function validateAllInternalLinks() {
    const e = await getMdxFiles('.' + A);
    x = new Map(await Promise.all(e.map(prepareDocumentMapEntry)));
    const t = Array.from(x.values()).map(async (e) => {
      const t = (await L.process(e.body)).contents;
      return traverseTreeAndValidateLinks(t, e);
    });
    const r = await Promise.all(t);
    let a =
      'Hi there :wave:\n\nIt looks like this PR introduces broken links to the docs, please take a moment to fix them before merging:\n\n| :heavy_multiplication_x: Broken link | :page_facing_up: File | \n| ----------- | ----------- | \n';
    r.forEach((e) => {
      const {
        doc: { path: t },
        brokenLinks: r,
        brokenHashes: n,
        brokenSourceLinks: i,
        brokenRelatedLinks: o,
      } = e;
      if (r.length > 0) {
        r.forEach((e) => {
          a += formatTableRow(e, t);
        });
      }
      if (n.length > 0) {
        n.forEach((e) => {
          a += formatTableRow(e, t);
        });
      }
      if (i.length > 0) {
        i.forEach((e) => {
          a += formatTableRow(e, t);
        });
      }
      if (o.length > 0) {
        o.forEach((e) => {
          a += formatTableRow(e, t);
        });
      }
    });
    a += '\nThank you :pray:';
    const n = r.some(
      (e) =>
        e.brokenLinks.length > 0 ||
        e.brokenHashes.length > 0 ||
        e.brokenSourceLinks.length > 0 ||
        e.brokenRelatedLinks.length > 0,
    );
    const i = await findBotComment();
    let o;
    if (n) {
      const e = `${S}\n${a}`;
      if (i) {
        o = await updateComment(e, i);
      } else {
        o = await createComment(e);
      }
    } else {
      const e = `${S}\nAll broken links are now fixed, thank you!`;
      if (i) {
        o = await updateComment(e, i);
      } else {
        o = await createComment(e);
      }
    }
    console.log({ commentUrl: o, errorsExist: n, errorComment: a, botComment: i });
    try {
      await createCommitStatus(n, o);
    } catch (e) {
      console.error('Failed to create commit status: ', e);
    }
  }
  validateAllInternalLinks();
})();