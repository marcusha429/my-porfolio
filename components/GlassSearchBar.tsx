'use client';

import { useState, KeyboardEvent, useRef, useEffect } from 'react';
import '../app/glass-search.css';

export default function GlassSearchBar() {
    const [searchValue, setSearchValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && searchValue.trim()) {
            console.log('Search query:', searchValue);
            alert(`Searching for: ${searchValue}`);
        }
    };

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const menuItems = [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Education', href: '#education' },
        { label: 'Experience', href: '#experience' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact Me', href: '#contact' },
    ];

    return (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 w-[90%] md:w-[60%] lg:w-[50%] z-50">
            <div
                className={`glass-search-container ${isFocused ? 'focused' : ''}`}
            >
                {/* Search Icon */}
                <svg
                    className="search-icon"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                </svg>

                {/* Input Field */}
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className="glass-input"
                />

                {/* Clear Button (shows when typing) */}
                {searchValue && (
                    <button
                        onClick={() => setSearchValue('')}
                        className="clear-btn"
                        aria-label="Clear search"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                )}
                {/* Explore Button */}
                <div className="relative" ref={menuRef}>
                    <button
                        onMouseEnter={() => setIsMenuOpen(true)}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="explore-btn"
                    >
                        Explore
                        <svg
                            className={`chevron ${isMenuOpen ? 'rotate' : ''}`}
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </button>

                    {/* Dropdown Menu */}
                    {isMenuOpen && (
                        <div
                            className="explore-menu"
                            onMouseLeave={() => setIsMenuOpen(false)}
                        >
                            {menuItems.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    className="menu-item"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}