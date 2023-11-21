import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
// import { MailerModule } from '@nestjs-modules/mailer';
// import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { ConfigModule } from '@nestjs/config';
// import { join } from 'path';
import { EmailController } from './mail.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import { join } from 'path';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MailerModule.forRoot({
      transport: {
        host: process.env.SMPT_EMAIL_LONG,
        port: 465,
        secure: true, // use SSLs
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS_16
        },
      },
      defaults: {
        from: '"No Reply" <tasky.digital@gmail.com>',
      },
      template: {
        dir: join(__dirname, 'templates'),
        adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
        options: {
          strict: true,
        },

      }
      
    }),
  ],
  controllers: [EmailController],
  providers: [MailService],
  exports: [MailService]
})
export class MailModule {}
