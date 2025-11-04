import 'dotenv/config';
import { Strategy as JwtStrategy } from 'passport-jwt';
import { ExtractJwt as ExtractJwt } from 'passport-jwt';
import { PrismaClient } from './generated/prisma/client.js';

const prisma = new PrismaClient();

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

export default (passport) => {
  passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
      try {
        const user = await prisma.user.findUnique({
          where: {
            id: jwt_payload.id,
          },
        });
        if (user) return done(null, user);
        return done(null, false);
      } catch (err) {
        throw new Error(err);
      }
    }),
  );
};
