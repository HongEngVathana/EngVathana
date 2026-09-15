import React from 'react';
import {
  SiAngular,
  SiFlutter,
  SiDart,
  SiDotnet,
  SiPostgresql,
  SiFirebase,
  SiDocker,
  SiGit,
  SiGithub,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiBootstrap,
  SiFigma,
  SiJira,
  SiPostman,
  SiSwagger,
  SiLinux,
  SiNginx,
  SiSqlite,
  SiTrello,
  SiReact,
  SiJest,
  SiGraphql,
  SiCplusplus,
  SiPython,
} from 'react-icons/si';
import { TbTerminal2, TbBrandCSharp, TbDatabase, TbServer, TbDeviceMobile, TbCode, TbCpu, TbBrandOpenai } from 'react-icons/tb';
import { Code, Terminal, Layers, Cpu, Sparkles } from 'lucide-react';

interface TechIconProps {
  name: string;
  className?: string;
  size?: number | string;
  showColor?: boolean;
}

export const TechIcon: React.FC<TechIconProps> = ({
  name,
  className = 'w-4 h-4',
  size,
  showColor = true,
}) => {
  const norm = name.toLowerCase().trim();

  const wrap = (IconComponent: React.ComponentType<{ size?: string | number }>, brandColorClass: string) => {
    return (
      <span
        className={`inline-flex items-center justify-center shrink-0 ${className} ${showColor ? brandColorClass : ''}`}
        aria-hidden="true"
      >
        <IconComponent size={size || '100%'} />
      </span>
    );
  };

  // Angular
  if (norm.includes('angular')) {
    return wrap(SiAngular, 'text-[#dd0031]');
  }

  // Flutter
  if (norm.includes('flutter')) {
    return wrap(SiFlutter, 'text-[#02569B]');
  }

  // Dart
  if (norm === 'dart' || norm.includes('dart')) {
    return wrap(SiDart, 'text-[#0175C2]');
  }

  // C#
  if (norm === 'c#' || norm === 'csharp' || norm.includes('c#')) {
    return wrap(TbBrandCSharp, 'text-[#7000ff]');
  }

  // .NET / ASP.NET
  if (norm.includes('.net') || norm.includes('dotnet') || norm.includes('asp')) {
    return wrap(SiDotnet, 'text-[#7000ff]');
  }

  // TypeScript
  if (norm.includes('typescript') || norm === 'ts') {
    return wrap(SiTypescript, 'text-[#3178C6]');
  }

  // JavaScript
  if (norm.includes('javascript') || norm === 'js') {
    return wrap(SiJavascript, 'text-[#F7DF1E]');
  }

  // PostgreSQL
  if (norm.includes('postgres') || norm.includes('psql')) {
    return wrap(SiPostgresql, 'text-[#4169E1]');
  }

  // SQLite
  if (norm.includes('sqlite')) {
    return wrap(SiSqlite, 'text-[#003B57]');
  }

  // SQL Server / SQL
  if (norm.includes('sql') || norm.includes('entity')) {
    return wrap(TbDatabase, 'text-[#CC292B]');
  }

  // Firebase
  if (norm.includes('firebase')) {
    return wrap(SiFirebase, 'text-[#FFCA28]');
  }

  // Docker
  if (norm.includes('docker')) {
    return wrap(SiDocker, 'text-[#2496ED]');
  }

  // Git
  if (norm === 'git') {
    return wrap(SiGit, 'text-[#F05032]');
  }

  // GitHub
  if (norm.includes('github')) {
    return wrap(SiGithub, 'text-white');
  }

  // Tailwind
  if (norm.includes('tailwind')) {
    return wrap(SiTailwindcss, 'text-[#06B6D4]');
  }

  // HTML
  if (norm.includes('html')) {
    return wrap(SiHtml5, 'text-[#E34F26]');
  }

  // Bootstrap
  if (norm.includes('bootstrap')) {
    return wrap(SiBootstrap, 'text-[#7952B3]');
  }

  // Figma
  if (norm.includes('figma')) {
    return wrap(SiFigma, 'text-[#F24E1E]');
  }

  // Jira
  if (norm.includes('jira')) {
    return wrap(SiJira, 'text-[#0052CC]');
  }

  // Trello
  if (norm.includes('trello')) {
    return wrap(SiTrello, 'text-[#0079BF]');
  }

  // Postman
  if (norm.includes('postman')) {
    return wrap(SiPostman, 'text-[#FF6C37]');
  }

  // Swagger / OpenAPI
  if (norm.includes('swagger') || norm.includes('openapi')) {
    return wrap(SiSwagger, 'text-[#85EA2D]');
  }

  // Linux
  if (norm.includes('linux') || norm.includes('bash')) {
    return wrap(SiLinux, 'text-[#FCC624]');
  }

  // Nginx
  if (norm.includes('nginx')) {
    return wrap(SiNginx, 'text-[#009639]');
  }

  // React
  if (norm.includes('react')) {
    return wrap(SiReact, 'text-[#61DAFB]');
  }

  // Testing / Jest / Unit test
  if (norm.includes('jest') || norm.includes('test') || norm.includes('xunit') || norm.includes('nunit')) {
    return wrap(SiJest, 'text-[#C21325]');
  }

  // C / C++
  if (norm.includes('c++') || norm === 'cpp') {
    return wrap(SiCplusplus, 'text-[#00599C]');
  }

  // Python
  if (norm.includes('python')) {
    return wrap(SiPython, 'text-[#3776AB]');
  }

  // GraphQL
  if (norm.includes('graphql')) {
    return wrap(SiGraphql, 'text-[#E10098]');
  }

  // Architecture / Design patterns fallback
  if (norm.includes('architecture') || norm.includes('pattern') || norm.includes('solid')) {
    return (
      <span className={`inline-flex items-center justify-center shrink-0 ${className} text-[#7000ff]`}>
        <Layers className="w-full h-full" />
      </span>
    );
  }

  // Default fallback
  return (
    <span className={`inline-flex items-center justify-center shrink-0 ${className} text-[#00d1ff]`}>
      <Cpu className="w-full h-full" />
    </span>
  );
};
