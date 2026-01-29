"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";

export interface ContentRendererProps {
    content: string;
    className?: string;
}

// Medium-style typography classes
const mediumProseClasses = [
    // Base prose
    "prose",
    "prose-xl",
    "dark:prose-invert",
    "max-w-none",

    // Headings - Clean, bold, proper spacing
    "prose-headings:font-bold",
    "prose-headings:tracking-tight",
    "prose-headings:text-foreground",
    "prose-h1:text-4xl",
    "prose-h1:mt-12",
    "prose-h1:mb-6",
    "prose-h2:text-3xl",
    "prose-h2:mt-10",
    "prose-h2:mb-4",
    "prose-h3:text-2xl",
    "prose-h3:mt-8",
    "prose-h3:mb-3",

    // Paragraphs - Readable, comfortable line height
    "prose-p:text-foreground/80",
    "prose-p:text-xl",
    "prose-p:leading-relaxed",
    "prose-p:mb-6",

    // Links - Subtle underline, primary color
    "prose-a:text-primary",
    "prose-a:font-medium",
    "prose-a:no-underline",
    "hover:prose-a:underline",

    // Lists - Clean spacing
    "prose-li:text-foreground/80",
    "prose-li:text-lg",
    "prose-li:leading-relaxed",
    "prose-ul:my-6",
    "prose-ol:my-6",

    // Blockquotes - Medium style (left border, italic)
    "prose-blockquote:border-l-4",
    "prose-blockquote:border-primary/30",
    "prose-blockquote:pl-6",
    "prose-blockquote:italic",
    "prose-blockquote:text-foreground/70",
    "prose-blockquote:my-8",

    // Images - Rounded, full width
    "prose-img:rounded-xl",
    "prose-img:shadow-lg",
    "prose-img:my-8",

    // Code blocks
    "prose-code:bg-muted",
    "prose-code:px-1.5",
    "prose-code:py-0.5",
    "prose-code:rounded",
    "prose-code:text-sm",
    "prose-code:font-mono",

    // Strong/Bold
    "prose-strong:font-bold",
    "prose-strong:text-foreground",
].join(" ");

/**
 * Read-only content renderer using Tiptap.
 * Uses Medium-style typography for clean, readable blog posts.
 */
export function ContentRenderer({ content, className }: ContentRendererProps) {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Link.configure({
                openOnClick: true,
            }),
            Image,
        ],
        content: content || "",
        editable: false,
        editorProps: {
            attributes: {
                class: className || mediumProseClasses,
            },
        },
    });

    if (!editor) {
        return null;
    }

    return <EditorContent editor={editor} />;
}

