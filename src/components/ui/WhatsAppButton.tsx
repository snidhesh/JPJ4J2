import { AGENT_WHATSAPP, PROJECT_NAME } from '@/lib/constants';

export function WhatsAppButton() {
  const text = encodeURIComponent(`Hi Riad, I'm interested in ${PROJECT_NAME} at Jumeirah Park.`);
  return (
    <a
      href={`https://wa.me/${AGENT_WHATSAPP}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-5 bottom-5 z-[120] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-105"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white" aria-hidden="true">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.38L1.05 31.3l6.124-1.958A15.9 15.9 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.318 22.594c-.386 1.09-1.92 1.994-3.142 2.258-.836.178-1.928.32-5.604-1.204-4.7-1.948-7.726-6.724-7.962-7.034-.226-.31-1.9-2.53-1.9-4.826 0-2.296 1.166-3.424 1.636-3.904.386-.394.842-.574 1.32-.574.154 0 .294.008.42.014.376.016.566.038.814.632.31.744 1.064 2.59 1.154 2.78.092.19.184.448.058.758-.118.32-.222.46-.444.708-.222.248-.434.438-.656.704-.202.232-.43.482-.174.922.256.43 1.138 1.876 2.444 3.04 1.684 1.5 3.05 1.97 3.534 2.17.36.15.79.114 1.054-.17.336-.366.75-.97 1.17-1.566.298-.426.674-.48 1.068-.332.402.144 2.54 1.198 2.976 1.416.436.218.726.324.832.504.106.184.106 1.05-.28 2.142z" />
      </svg>
    </a>
  );
}
