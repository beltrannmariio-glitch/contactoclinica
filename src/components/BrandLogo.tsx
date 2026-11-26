import React, { useState } from 'react';
import { ShieldCheck } from 'lucide-react';

interface BrandLogoProps {
  className?: string;
  size?: number;
}

/**
 * Logo institucional: prioriza el archivo proporcionado (/images/logoooo.jpg)
 * y mantiene respaldo vectorial fiel del escudo "ODONTOLOGÍA MEXICALI · UABC".
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 44,
}) => {
  const [imgError, setImgError] = useState(false);

  if (!imgError) {
    return (
      <img
        src="/images/logoooo.jpg"
        alt="Escudo institucional Odontología Mexicali UABC — Ciencia en la Salud Oral"
        width={size}
        height={Math.round(size * 1.24)}
        referrerPolicy="no-referrer"
        onError={() => setImgError(true)}
        className={`shrink-0 object-contain rounded-sm ${className}`}
      />
    );
  }

  return (
    <svg
      width={size}
      height={Math.round(size * 1.24)}
      viewBox="0 0 220 272"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Escudo institucional Odontología Mexicali UABC — Ciencia en la Salud Oral"
      className={`shrink-0 ${className}`}
    >
      {/* Fondo blanco sutil del contorno exterior tipo escudo */}
      <path
        d="M32 68C45 30 75 10 110 10C145 10 175 30 188 68L202 72V188C202 224 166 250 110 264C54 250 18 224 18 188V72L32 68Z"
        fill="#FFFFFF"
      />

      {/* Rayos solares dorados superiores */}
      <g fill="#D59E28">
        <path d="M104 16H116L114 42H106L104 16Z" />
        <path d="M84 19L96 17L100 43L91 45L84 19Z" />
        <path d="M124 17L136 19L129 45L120 43L124 17Z" />
        <path d="M64 28L76 22L85 47L76 51L64 28Z" />
        <path d="M144 22L156 28L144 51L135 47L144 22Z" />
        <path d="M47 42L58 33L71 55L63 61L47 42Z" />
        <path d="M162 33L173 42L157 61L149 55L162 33Z" />
        <path d="M35 60L43 49L60 66L54 73L35 60Z" />
        <path d="M177 49L185 60L166 73L160 66L177 49Z" />
      </g>

      {/* Silueta de montaña negra (El Centinela / horizonte Mexicali) */}
      <path
        d="M34 78L62 68L82 63L106 52L122 57L146 65L168 72L186 78H34Z"
        fill="#0F1419"
      />

      {/* Marco superior negro para título ODONTOLOGÍA MEXICALI */}
      <rect x="24" y="76" width="172" height="28" rx="2" fill="#0F1419" />
      <rect x="29" y="81" width="162" height="18" fill="#FFFFFF" />
      <text
        x="110"
        y="94"
        textAnchor="middle"
        fill="#1F2B6C"
        fontSize="12.5"
        fontWeight="800"
        fontFamily="Plus Jakarta Sans, sans-serif"
        letterSpacing="0.3"
      >
        ODONTOLOGÍA MEXICALI
      </text>

      {/* Cuerpo del escudo negro exterior */}
      <path
        d="M32 104H188V186C188 219 156 242 110 255C64 242 32 219 32 186V104Z"
        fill="#0F1419"
      />

      {/* Escudo interior blanco */}
      <path
        d="M50 108H170V178C170 202 145 220 110 231C75 220 50 202 50 178V108Z"
        fill="#FFFFFF"
      />

      {/* Escudo central verde institucional */}
      <path
        d="M56 113H164V176C164 197 141 213 110 223C79 213 56 197 56 176V113Z"
        fill="#138D35"
      />

      {/* Diente blanco estilizado central */}
      <path
        d="M91 153C91 144 99 140 106 143C109 144 111 144 114 143C121 140 129 144 129 153C129 162 124 170 123 180C122 190 120 198 115 198C112 198 111 190 110 184C109 190 108 198 105 198C100 198 98 190 97 180C96 170 91 162 91 153Z"
        fill="#E9F7FB"
      />

      {/* Caduceo / báculo central y alas doradas */}
      <g>
        {/* Flama superior */}
        <path
          d="M110 118C113 121 114 124 112 127C111 129 109 129 108 127C106 124 107 121 110 118Z"
          fill="#F4B41A"
        />
        {/* Báculo */}
        <rect x="108" y="130" width="4" height="84" rx="2" fill="#E9F7FB" />
        <rect x="104" y="129" width="12" height="3" rx="1.5" fill="#F4B41A" />

        {/* Alas doradas */}
        <path
          d="M105 133C92 126 75 127 63 130C68 135 76 137 86 137C75 139 68 140 66 141C74 144 86 143 96 140L105 136V133Z"
          fill="#F4B41A"
        />
        <path
          d="M115 133C128 126 145 127 157 130C152 135 144 137 134 137C145 139 152 140 154 141C146 144 134 143 124 140L115 136V133Z"
          fill="#F4B41A"
        />

        {/* Serpientes entrelazadas doradas */}
        <path
          d="M96 144C85 145 86 156 98 159C112 162 125 166 123 175C121 182 103 185 98 192C95 197 104 203 114 206"
          stroke="#F4B41A"
          strokeWidth="4.2"
          strokeLinecap="round"
        />
        <path
          d="M124 144C135 145 134 156 122 159C108 162 95 166 97 175C99 182 117 185 122 192C125 197 116 203 106 206"
          stroke="#F4B41A"
          strokeWidth="4.2"
          strokeLinecap="round"
        />
      </g>

      {/* Siglas UA - BC dentro del escudo */}
      <text
        x="77"
        y="174"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="20"
        fontWeight="800"
        fontFamily="Georgia, serif"
      >
        UA
      </text>
      <text
        x="143"
        y="174"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="20"
        fontWeight="800"
        fontFamily="Georgia, serif"
      >
        BC
      </text>

      {/* Lema en arco inferior del escudo negro: CIENCIA EN LA SALUD ORAL */}
      <defs>
        <path
          id="uabc-motto-arc"
          d="M 41 132 L 41 186 C 41 215 72 238 110 247 C 148 238 179 215 179 186 L 179 132"
        />
      </defs>
      <text
        fill="#FFFFFF"
        fontSize="10.2"
        fontWeight="600"
        fontFamily="Plus Jakarta Sans, sans-serif"
        letterSpacing="2.4"
      >
        <textPath href="#uabc-motto-arc" startOffset="50%" textAnchor="middle">
          CIENCIA EN LA SALUD ORAL
        </textPath>
      </text>
    </svg>
  );
};

interface ClinicalImageProps {
  src: string;
  alt: string;
  fallbackTitle: string;
  className?: string;
}

export const ClinicalImage: React.FC<ClinicalImageProps> = ({
  src,
  alt,
  fallbackTitle,
  className = 'w-full h-full object-cover',
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#142B45] via-[#1F5268] to-[#142B45] text-white p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <ShieldCheck className="w-8 h-8 text-[#39B7B0] mb-2" aria-hidden="true" />
        <span className="font-display text-sm font-semibold tracking-tight">
          {fallbackTitle}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      loading="lazy"
    />
  );
};
