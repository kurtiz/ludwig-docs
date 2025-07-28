import React, {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Badge} from '@/components/ui/badge';
import {Card} from '@/components/ui/card';
import {useTheme} from "next-themes";
import {ArrowRight, Check, Code, Copy, Download, Globe, Shield, Star, Zap} from 'lucide-react';
import {GrGithub} from "react-icons/gr";
import {CodeBlock, CodeBlockCode, CodeBlockGroup} from "@/components/ui/code-block";
import {useRouter} from "next/navigation";

interface HeroSectionProps {
    frameworkName?: string;
    version?: string;
    description?: string;
    githubStars?: string;
    downloads?: string;
}

const HeroSection: React.FC<HeroSectionProps> = (
    {
        frameworkName = "Ludwig",
        version = "v0.1.0",
        description = `The modern, multi-platform development framework designed to let you build applications for Web, 
        Desktop, and Embedded/IoT systems using an elegant, intuitive syntax inspired by Python, Laravel, and C#`,
        githubStars = "45.2k",
        downloads = "2.1M"
    }) => {
    const router = useRouter();

    const features = [
        {
            icon: <Zap className="w-5 h-5"/>,
            title: "Lightning Fast",
            description: "Optimized performance with zero-config setup"
        },
        {
            icon: <Shield className="w-5 h-5"/>,
            title: "Secure by Default",
            description: "Built-in security features and best practices"
        },
        {
            icon: <Globe className="w-5 h-5"/>,
            title: "Global Scale",
            description: "Deploy anywhere with edge computing support"
        }
    ];

    const [copied, setCopied] = useState(false);
    const {theme} = useTheme();
    const handleCopy = async () => {
        await navigator.clipboard.writeText(codeExample)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const codeExample = `git clone https://github.com/NanaBright/ludwig.git 
cd ludwig
pip install -r requirements.txt  # Optional dev dependencies only`;

    return (
        <div className="relative min-h-screen bg-fd-background overflow-hidden">
            {/* Hero Content */}
            <div className="relative z-10 container mx-auto px-4 pt-20 pb-16">
                <div className="max-w-6xl mx-auto text-left">
                    {/* Header */}
                    <div className="text-center mb-16">
                        {/* Version Badge */}
                        <div className="flex justify-center mb-6">
                            <Badge variant="outline"
                                   className="px-4 py-2 text-sm font-medium bg-fd-primary/10 border-primary/20">
                                <Star className="w-4 h-4 mr-2"/>
                                {version}- First Official Release
                            </Badge>
                        </div>

                        {/* Main Title */}
                        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
                            <span
                                className="bg-gradient-to-r from-fd-primary to-fd-secondary bg-clip-text text-transparent">
                                {frameworkName}
                            </span>
                            <br/>
                            <span
                                className="text-3xl md:text-5xl dark:text-muted-foreground font-normal">
                                Multi-platform Framework
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg md:text-md text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                            {description}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <Button size="lg" className="px-8 py-6 font-semibold"
                                    onClick={() => router.push('/docs/getting-started')}>
                                Get Started
                                <ArrowRight className="w-5 h-5 ml-2"/>
                            </Button>
                            <Button variant="outline" size="lg" className="px-8 py-6"
                                    onClick={() => router.push('https://github.com/ludwig-framework/ludwig')}>
                                <GrGithub className="w-5 h-5 mr-2"/>
                                View on GitHub
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-col sm:flex-row gap-6 sm:justify-center justify-start text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <Star className="w-4 h-4"/>
                                <span>{githubStars} GitHub stars</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Download className="w-4 h-4"/>
                                <span>{downloads} monthly downloads</span>
                            </div>
                        </div>
                    </div>

                    {/* Code Example and Features Grid */}
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Code Example */}
                        <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                            <div className="flex items-center gap-2 mb-4">
                                <Code className="w-5 h-5 text-primary"/>
                                <span className="font-semibold text-foreground">Quick Start</span>
                            </div>
                            <CodeBlock>
                                <CodeBlockGroup className="border-border border-b py-2 pr-2 pl-4">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="bg-primary/10 text-primary rounded px-2 py-1 text-xs font-medium">
                                            Shell
                                        </div>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-8 w-8"
                                        onClick={handleCopy}
                                    >
                                        {copied ? (
                                            <Check className="h-4 w-4 text-green-500"/>
                                        ) : (
                                            <Copy className="h-4 w-4"/>
                                        )}
                                    </Button>
                                </CodeBlockGroup>
                                <CodeBlockCode
                                    code={codeExample} language="shell"
                                    theme={theme === "light" ? "github-light" : "github-dark"}/>
                            </CodeBlock>
                        </Card>

                        {/* Features */}
                        <div className="space-y-6 text-left">
                            <h3 className="text-2xl font-bold text-foreground mb-6">Why Choose {frameworkName}?</h3>
                            {features.map((feature, index) => (
                                <Card key={index}
                                      className="p-6 bg-card/30 backdrop-blur-sm border-border/50 hover:bg-card/50 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                                            <p className="text-muted-foreground">{feature.description}</p>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="text-center mt-16">
                        <p className="text-muted-foreground mb-4">
                            Ready to build something amazing?
                        </p>
                        <Button variant="outline" size="lg" className="px-8 py-6" onClick={() => router.push('/docs')}>
                            Read the Documentation
                            <ArrowRight className="w-5 h-5 ml-2"/>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
