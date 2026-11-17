import { ImageResponse } from "next/og";
import { PROFILE } from "@/data/projects";

export const alt = `${PROFILE.name} | Websites, Bots & Automations`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#090A0F",
          padding: "64px",
          color: "#F3F4F6",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              backgroundColor: "#10B981",
              color: "#090A0F",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: "20px",
            }}
          >
            BM
          </div>
          <div style={{ fontSize: "24px", fontWeight: 700 }}>{PROFILE.name}</div>
          <div
            style={{
              marginLeft: "auto",
              padding: "8px 18px",
              borderRadius: "999px",
              border: "1px solid rgba(16, 185, 129, 0.4)",
              backgroundColor: "rgba(16, 185, 129, 0.12)",
              color: "#34D399",
              fontSize: "16px",
            }}
          >
            {PROFILE.location}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "54px",
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
            }}
          >
            {PROFILE.headline}
          </div>
          <div style={{ fontSize: "24px", color: "#9CA3AF" }}>
            Websites • Telegram &amp; WhatsApp Bots • n8n Automations
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "24px",
            fontSize: "18px",
            color: "#34D399",
          }}
        >
          <span>brianmaroa.dev</span>
          <span>120+ hrs saved / mo • &lt; 5s bot response</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
