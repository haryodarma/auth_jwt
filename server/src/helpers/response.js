const HttpStatusHelper = {
  // Informational responses (1xx)
  CONTINUE: {
    code: 100,
    message: "CONTINUE",
    description: "Permintaan diterima, klien harus melanjutkan proses.",
  },
  SWITCHING_PROTOCOLS: {
    code: 101,
    message: "SWITCHING_PROTOCOLS",
    description:
      "Server setuju untuk mengganti protokol sesuai permintaan klien.",
  },
  PROCESSING: {
    code: 102,
    message: "PROCESSING",
    description: "Server sedang memproses permintaan.",
  },
  EARLY_HINTS: {
    code: 103,
    message: "EARLY_HINTS",
    description: "Memberikan header awal sebelum respons final.",
  },

  // Success responses (2xx)
  OK: {
    code: 200,
    message: "OK",
    description: "Permintaan berhasil diproses.",
  },
  CREATED: {
    code: 201,
    message: "CREATED",
    description: "Permintaan berhasil dan sumber daya baru dibuat.",
  },
  ACCEPTED: {
    code: 202,
    message: "ACCEPTED",
    description: "Permintaan diterima tetapi belum diproses sepenuhnya.",
  },
  NON_AUTHORITATIVE_INFORMATION: {
    code: 203,
    message: "NON_AUTHORITATIVE_INFORMATION",
    description: "Informasi dikembalikan dari sumber lain, bukan server asli.",
  },
  NO_CONTENT: {
    code: 204,
    message: "NO_CONTENT",
    description:
      "Permintaan berhasil tetapi tidak ada konten yang dikembalikan.",
  },
  RESET_CONTENT: {
    code: 205,
    message: "RESET_CONTENT",
    description: "Klien harus mereset tampilan.",
  },
  PARTIAL_CONTENT: {
    code: 206,
    message: "PARTIAL_CONTENT",
    description: "Hanya sebagian data dikembalikan karena permintaan range.",
  },
  MULTI_STATUS: {
    code: 207,
    message: "MULTI_STATUS",
    description: "Memberikan status untuk beberapa operasi berbeda.",
  },
  ALREADY_REPORTED: {
    code: 208,
    message: "ALREADY_REPORTED",
    description: "Sumber daya telah dilaporkan sebelumnya.",
  },
  IM_USED: {
    code: 226,
    message: "IM_USED",
    description:
      "Server telah memenuhi permintaan menggunakan sumber daya instan.",
  },

  // Redirection messages (3xx)
  MULTIPLE_CHOICES: {
    code: 300,
    message: "MULTIPLE_CHOICES",
    description: "Terdapat beberapa opsi untuk sumber daya yang diminta.",
  },
  MOVED_PERMANENTLY: {
    code: 301,
    message: "MOVED_PERMANENTLY",
    description: "Sumber daya telah dipindahkan secara permanen.",
  },
  FOUND: {
    code: 302,
    message: "FOUND",
    description: "Sumber daya sementara berada di lokasi lain.",
  },
  SEE_OTHER: {
    code: 303,
    message: "SEE_OTHER",
    description: "Klien harus mengakses sumber daya melalui URL lain.",
  },
  NOT_MODIFIED: {
    code: 304,
    message: "NOT_MODIFIED",
    description: "Sumber daya belum dimodifikasi sejak terakhir kali diakses.",
  },
  USE_PROXY: {
    code: 305,
    message: "USE_PROXY",
    description: "Klien harus menggunakan proxy untuk mengakses sumber daya.",
  },
  SWITCH_PROXY: {
    code: 306,
    message: "SWITCH_PROXY",
    description: "Kode ini tidak lagi digunakan.",
  },
  TEMPORARY_REDIRECT: {
    code: 307,
    message: "TEMPORARY_REDIRECT",
    description: "Sumber daya sementara berada di lokasi lain.",
  },
  PERMANENT_REDIRECT: {
    code: 308,
    message: "PERMANENT_REDIRECT",
    description: "Sumber daya secara permanen berada di lokasi lain.",
  },

  // Client error responses (4xx)
  BAD_REQUEST: {
    code: 400,
    message: "BAD_REQUEST",
    description:
      "Server tidak dapat memproses permintaan karena kesalahan klien.",
  },
  UNAUTHORIZED: {
    code: 401,
    message: "UNAUTHORIZED",
    description: "Klien harus melakukan autentikasi terlebih dahulu.",
  },
  PAYMENT_REQUIRED: {
    code: 402,
    message: "PAYMENT_REQUIRED",
    description: "Kode ini disediakan untuk penggunaan di masa depan.",
  },
  FORBIDDEN: {
    code: 403,
    message: "FORBIDDEN",
    description: "Klien tidak memiliki izin untuk mengakses sumber daya.",
  },
  NOT_FOUND: {
    code: 404,
    message: "NOT_FOUND",
    description: "Server tidak dapat menemukan sumber daya yang diminta.",
  },
  METHOD_NOT_ALLOWED: {
    code: 405,
    message: "METHOD_NOT_ALLOWED",
    description: "Metode permintaan tidak diizinkan untuk sumber daya ini.",
  },
  NOT_ACCEPTABLE: {
    code: 406,
    message: "NOT_ACCEPTABLE",
    description:
      "Server tidak dapat menghasilkan respons yang dapat diterima oleh klien.",
  },
  PROXY_AUTHENTICATION_REQUIRED: {
    code: 407,
    message: "PROXY_AUTHENTICATION_REQUIRED",
    description: "Klien harus melakukan autentikasi melalui proxy.",
  },
  REQUEST_TIMEOUT: {
    code: 408,
    message: "REQUEST_TIMEOUT",
    description: "Server kehabisan waktu untuk memproses permintaan.",
  },
  CONFLICT: {
    code: 409,
    message: "CONFLICT",
    description: "Permintaan konflik dengan status sumber daya saat ini.",
  },
  GONE: {
    code: 410,
    message: "GONE",
    description:
      "Sumber daya tidak lagi tersedia dan tidak memiliki alamat baru.",
  },
  LENGTH_REQUIRED: {
    code: 411,
    message: "LENGTH_REQUIRED",
    description: "Header Content-Length diperlukan tetapi tidak disediakan.",
  },
  PRECONDITION_FAILED: {
    code: 412,
    message: "PRECONDITION_FAILED",
    description:
      "Prasyarat yang ditetapkan dalam header permintaan gagal dipenuhi.",
  },
  PAYLOAD_TOO_LARGE: {
    code: 413,
    message: "PAYLOAD_TOO_LARGE",
    description: "Ukuran permintaan terlalu besar untuk diproses oleh server.",
  },
  URI_TOO_LONG: {
    code: 414,
    message: "URI_TOO_LONG",
    description: "URI permintaan terlalu panjang untuk diproses oleh server.",
  },
  UNSUPPORTED_MEDIA_TYPE: {
    code: 415,
    message: "UNSUPPORTED_MEDIA_TYPE",
    description: "Format media permintaan tidak didukung oleh server.",
  },
  RANGE_NOT_SATISFIABLE: {
    code: 416,
    message: "RANGE_NOT_SATISFIABLE",
    description: "Range yang diminta tidak dapat dipenuhi.",
  },
  EXPECTATION_FAILED: {
    code: 417,
    message: "EXPECTATION_FAILED",
    description:
      "Server tidak dapat memenuhi persyaratan Expect dari header permintaan.",
  },
  IM_A_TEAPOT: {
    code: 418,
    message: "IM_A_TEAPOT",
    description: "Saya teko, bukan server kopi.",
  },
  UPGRADE_REQUIRED: {
    code: 426,
    message: "UPGRADE_REQUIRED",
    description: "Klien harus beralih ke protokol lain.",
  },

  // Server error responses (5xx)
  INTERNAL_SERVER_ERROR: {
    code: 500,
    message: "INTERNAL_SERVER_ERROR",
    description: "Server mengalami kesalahan internal.",
  },
  NOT_IMPLEMENTED: {
    code: 501,
    message: "NOT_IMPLEMENTED",
    description: "Fungsi yang diminta belum tersedia di server.",
  },
  BAD_GATEWAY: {
    code: 502,
    message: "BAD_GATEWAY",
    description: "Server menerima respons tidak valid dari server hulu.",
  },
  SERVICE_UNAVAILABLE: {
    code: 503,
    message: "SERVICE_UNAVAILABLE",
    description: "Server tidak tersedia untuk sementara waktu.",
  },
  GATEWAY_TIMEOUT: {
    code: 504,
    message: "GATEWAY_TIMEOUT",
    description:
      "Server tidak mendapatkan respons tepat waktu dari server hulu.",
  },
  HTTP_VERSION_NOT_SUPPORTED: {
    code: 505,
    message: "HTTP_VERSION_NOT_SUPPORTED",
    description: "Versi HTTP yang digunakan tidak didukung oleh server.",
  },
};

export default HttpStatusHelper;
