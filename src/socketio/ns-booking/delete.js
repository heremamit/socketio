import { Namespace, Server, Socket } from "socket.io"

handleConnection
{
  '/booking#13XXeXHOrAnlC46iAAAA': Socket {
    nsp = {
      name: '/booking',
      server: [Server],
      sockets: [Circular],
      connected: [Object],
      fns: [],
      ids: 0,
      rooms: [],
      flags: {},
      adapter: [Adapter],
      _events: [Object: null prototype],
      _eventsCount: 1
    },
    server ={
      nsps: [Object],

      _path: '/socket.io',
      _serveClient: true,
      parser: [Object],
      encoder: Encoder {},

      _origins: '*:*',


    },
    adapter: Adapter {
      nsp: [Namespace],
      rooms: [Object],
      sids: [Object],
      encoder: Encoder {}
    },
    id: '/booking#13XXeXHOrAnlC46iAAAA',
    client: Client {
      server: [Server],
      conn: [Socket],
      encoder: Encoder {},
      decoder: [Decoder],
      id: '13XXeXHOrAnlC46iAAAA',
      request: [IncomingMessage],
      onclose: [Function: bound ],
      ondata: [Function: bound ],
      onerror: [Function: bound ],
      ondecoded: [Function: bound ],
      sockets: [Object],
      nsps: [Object],
      connectBuffer: []
    },
    conn: Socket {
      id: '13XXeXHOrAnlC46iAAAA',
      server: [Server],
      upgrading: false,
      upgraded: true,
      readyState: 'open',
      writeBuffer: [],
      packetsFn: [],
      sentCallbackFn: [],
      cleanupFn: [Array],
      request: [IncomingMessage],
      remoteAddress: '::1',
      checkIntervalTimer: null,
      upgradeTimeoutTimer: null,
      pingTimeoutTimer: Timeout {
        _idleTimeout: 30000,
        _idlePrev: [TimersList],
        _idleNext: [Timeout],
        _idleStart: 5037,
        _onTimeout: [Function],
        _timerArgs: undefined,
        _repeat: null,
        _destroyed: false,
        [Symbol(refed)]: true,
        [Symbol(asyncId)]: 130,
        [Symbol(triggerId)]: 40
      },
      transport: [WebSocket],
      _events: [Object: null prototype],
      _eventsCount: 3
    },
    rooms: {
      '/booking#13XXeXHOrAnlC46iAAAA': '/booking#13XXeXHOrAnlC46iAAAA'
    },
    acks: {},
    connected: true,
    disconnected: false,
    handshake: {
      headers: [Object],
      time: 'Tue Jan 19 2021 19:38:47 GMT+0530 (India Standard Time)',
      address: '::1',
      xdomain: true,
      secure: false,
      issued: 1611065327286,
      url: '/socket.io/?EIO=3&transport=polling&t=NSQ-UwI',
      query: [Object]
    },
    fns: [],
    flags: {},
    _rooms: [],
    _events: [Object: null prototype] {
      disconnect: [Array],
      createRoom: [Function: handler]
    },
    _eventsCount: 2
  }
}
