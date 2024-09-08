import { Resend } from 'resend';

export type CreateEmailOptions = Parameters<Resend['emails']['create']>[0];

/** Remove mandatory 'from', defaulting to PROJECT_EMAIL
 * - Add react as required
 */
export type SendEmailProps = Omit<CreateEmailOptions, 'from'> &
	Partial<Pick<CreateEmailOptions, 'from'>>;

export type SendMultipleEmailProps = SendEmailProps[];
