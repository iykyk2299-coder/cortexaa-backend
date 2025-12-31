const corsOptions = {
  origin: true, // allow ALL origins (temporary)
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: false,
};

export default corsOptions;
