import Chat from "@/components/Chat/Chat";
import AuthWrapper from "./AuthWrapper";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props) {
  const ogImageUrl = `https://OvFlowAI.com/api/og?id=${params.id}`;

  return {
    title: "OvFlowAI",
    description: "Search StackOverflow with the power of AI. Try now!",
    openGraph: {
      title: "OvFlowAI - Web Search AI",
      description: "Search StackOverflow with the power of AI. Try now!",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: "OvFlowAI - StackOverflow Search AI",
        },
      ],
      url: `https://OvFlowAI.ai/chat/${params.id}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "OvFlowAI - StackOverflow Search AI",
      description: "Search StackOverflow with the power of AI. Try now!",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: "OvFlowAI - StackOverflow Search AI",
        },
      ],
    },
  };
}

const ChatPage = ({ params }: Props) => {
  return (
    <AuthWrapper>
      <Chat id={params.id} />
    </AuthWrapper>
  );
};

export default ChatPage;
