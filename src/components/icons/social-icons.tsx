import { cn } from "@/lib/utils";

const SocialIcon = ({ className, children, ...props }: React.SVGProps<SVGSVGElement> & { children: React.ReactNode }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={cn("text-foreground hover:text-primary transition-colors", className)}
        {...props}
    >
        {children}
    </svg>
);


export const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <SocialIcon {...props}>
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
    </SocialIcon>
);

export const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <SocialIcon {...props}>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </SocialIcon>
);

export const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <SocialIcon {...props}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </SocialIcon>
);
