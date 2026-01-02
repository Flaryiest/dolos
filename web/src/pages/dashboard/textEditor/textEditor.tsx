import { useEffect, useMemo, useRef, useState } from 'react';
import { useQuill } from 'react-quilljs';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import styles from './textEditor.module.css';

// Customize Font Attributor - using class approach from documentation
const FontAttributor = Quill.import('attributors/class/font') as any;
FontAttributor.whitelist = [
    'arial', 'helvetica', 'times-new-roman', 'courier-new', 'verdana',
    'georgia', 'palatino', 'garamond', 'bookman', 'comic-sans-ms',
    'trebuchet-ms', 'arial-black', 'impact'
];
Quill.register(FontAttributor, true);

// Customize Size Attributor - using style approach for pixel values
const SizeAttributor = Quill.import('attributors/style/size') as any;
SizeAttributor.whitelist = ['8px', '10px', '12px', '14px', '16px', '18px', '20px', '24px', '28px', '32px', '36px', '48px', '72px'];
Quill.register(SizeAttributor, true);

export default function TextEditor() {

    // Local state for title
    const [title, setTitle] = useState('');

    // Page metrics (Letter) and margins
    const inchPx = 96; // CSS pixel per inch assumption
    const pageWidthPx = 8.5 * inchPx;
    const pageHeightPx = 11 * inchPx;
    const minContentWidthPx = 1 * inchPx; // Minimum inner width

    const [leftMarginPx, setLeftMarginPx] = useState(0.75 * inchPx);
    const [rightMarginPx, setRightMarginPx] = useState(0.75 * inchPx);

    // Ruler dragging
    const rulerRef = useRef<HTMLDivElement>(null);
    const [dragging, setDragging] = useState<null | 'left' | 'right'>(null);
    useEffect(() => {
        const onMove = (e: MouseEvent) => {
            if (!dragging || !rulerRef.current) return;
            const rect = rulerRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left; // position within ruler
            const clamp = (val: number, min: number, max: number) => Math.max(min, Math.min(max, val));

            if (dragging === 'left') {
                const maxLeft = pageWidthPx - minContentWidthPx - rightMarginPx;
                setLeftMarginPx(clamp(x, 0, maxLeft));
            } else if (dragging === 'right') {
                // right handle represents distance from right edge
                const distFromRight = clamp(pageWidthPx - x, 0, pageWidthPx);
                const maxRight = pageWidthPx - minContentWidthPx - leftMarginPx;
                setRightMarginPx(clamp(distFromRight, 0, maxRight));
            }
        };
        const onUp = () => setDragging(null);
        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseup', onUp);
        return () => {
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseup', onUp);
        };
    }, [dragging, leftMarginPx, rightMarginPx, pageWidthPx]);

    // Quill configuration with font and size options
    const modules = useMemo(() => ({
        toolbar: {
            container: '#standalone-toolbar'
        },
    }), []);
    
    const formats = useMemo(() => (
        [
            'font', 'size',
            'bold', 'italic', 'underline', 'strike',
            'color', 'background',
            'list',
            'align',
            'link', 'code-block',
        ]
    ), []);

    const { quill, quillRef } = useQuill({ modules, formats, theme: 'snow' });

    // Set default font and size when editor loads
    useEffect(() => {
        if (quill) {
            // Set default formatting for new content
            quill.format('size', '12px');
            
            // If the editor is empty, insert a blank line with default formatting
            if (quill.getLength() === 1) { // 1 means just the newline character
                quill.insertText(0, '\n', { size: '12px' });
                quill.deleteText(1, 1); // Remove the extra newline
                quill.setSelection(0, 0); // Set cursor at the beginning
            }
        }
    }, [quill]);

    // Example effect: log content changes (placeholder for save logic)
    useEffect(() => {
        if (!quill) return;
        const handler = () => {
            // Access content if needed: quill.getContents() or quill.getText()
        };
        quill.on('text-change', handler);
        return () => { quill.off('text-change', handler); };
    }, [quill]);

    // Style variables for page sizing and margins
    const pageStyle = useMemo(() => ({
        ['--page-width' as any]: `${pageWidthPx}px`,
        ['--page-height' as any]: `${pageHeightPx}px`,
        ['--margin-left' as any]: `${leftMarginPx}px`,
        ['--margin-right' as any]: `${rightMarginPx}px`,
    ['--margin-top' as any]: `${0.50 * inchPx}px`,
        ['--margin-bottom' as any]: `${1 * inchPx}px`,
        ['--toolbar-h' as any]: '42px',
    }) as React.CSSProperties, [pageWidthPx, pageHeightPx, leftMarginPx, rightMarginPx]);

    // Build ticks for the ruler at quarter-inch intervals
    const ticks = useMemo(() => {
        const totalQuarters = Math.round(8.5 * 4);
        return new Array(totalQuarters + 1).fill(0).map((_, i) => {
            const x = (i * inchPx) / 4;
            const type = i % 4 === 0 ? 'large' : i % 2 === 0 ? 'medium' : 'small';
            const label = i % 4 === 0 && i !== 0 ? i / 4 : null;
            return { x, type, label };
        });
    }, []);

    return (
        <div className={styles.container}>
            {/* Document header with title and toolbar */}
            <div className={styles.documentHeader}>
                <div className={styles.documentInfo}>
                    <input
                        className={styles.titleInput}
                        placeholder={'Untitled document'}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <div className={styles.documentActions}>
                        <button className={styles.actionButton}>File</button>
                        <button className={styles.actionButton}>Edit</button>
                        <button className={styles.actionButton}>View</button>
                        <button className={styles.actionButton}>Insert</button>
                        <button className={styles.actionButton}>Format</button>
                        <button className={styles.actionButton}>Tools</button>
                    </div>
                </div>
                
                {/* Toolbar row - positioned below document info */}
                <div className={styles.toolbarRow}>
                    <div 
                        className={styles.customToolbar}
                        id="standalone-toolbar"
                    >
                        {/* QuillJS will populate this container directly */}
                        <span className="ql-formats">
                            <select className="ql-font">
                                <option value="arial">Arial</option>
                                <option value="helvetica">Helvetica</option>
                                <option value="times-new-roman">Times New Roman</option>
                                <option value="courier-new">Courier New</option>
                                <option value="verdana">Verdana</option>
                                <option value="georgia">Georgia</option>
                                <option value="palatino">Palatino</option>
                                <option value="garamond">Garamond</option>
                                <option value="bookman">Bookman</option>
                                <option value="comic-sans-ms">Comic Sans MS</option>
                                <option value="trebuchet-ms">Trebuchet MS</option>
                                <option value="arial-black">Arial Black</option>
                                <option value="impact">Impact</option>
                            </select>
                            <select className="ql-size">
                                <option value="8px">8</option>
                                <option value="10px">10</option>
                                <option value="12px">12</option>
                                <option value="14px">14</option>
                                <option value="16px">16</option>
                                <option value="18px">18</option>
                                <option value="20px">20</option>
                                <option value="24px">24</option>
                                <option value="28px">28</option>
                                <option value="32px">32</option>
                                <option value="36px">36</option>
                                <option value="48px">48</option>
                                <option value="72px">72</option>
                            </select>
                        </span>
                        <span className="ql-formats">
                            <button className="ql-bold"></button>
                            <button className="ql-italic"></button>
                            <button className="ql-underline"></button>
                            <button className="ql-strike"></button>
                        </span>
                        <span className="ql-formats">
                            <select className="ql-color"></select>
                            <select className="ql-background"></select>
                        </span>
                        <span className="ql-formats">
                            <button className="ql-list" value="ordered"></button>
                            <button className="ql-list" value="bullet"></button>
                        </span>
                        <span className="ql-formats">
                            <select className="ql-align"></select>
                        </span>
                        <span className="ql-formats">
                            <button className="ql-link"></button>
                            <button className="ql-code-block"></button>
                        </span>
                        <span className="ql-formats">
                            <button className="ql-clean"></button>
                        </span>
                    </div>
                </div>
            </div>
            
            <div className={styles.workspace}>
                <div className={styles.pageGroup} style={pageStyle}>
                    <div className={styles.rulerWrap}>
                        <div className={styles.ruler} ref={rulerRef}>
                        {ticks.map(t => (
                            <div
                                key={`tick-${t.x}`}
                                className={`${styles.tick} ${styles[t.type]}`}
                                style={{ left: `${t.x}px` }}
                            >
                                {t.label && <span className={styles.tickLabel}>{t.label}</span>}
                            </div>
                        ))}
                        {/* Left margin handle */}
                        <div
                            className={`${styles.handle} ${styles.leftHandle}`}
                            style={{ left: `${leftMarginPx}px` }}
                            onMouseDown={() => setDragging('left')}
                            title={`Left margin: ${(leftMarginPx / inchPx).toFixed(2)} in`}
                        />
                        {/* Right margin handle */}
                        <div
                            className={`${styles.handle} ${styles.rightHandle}`}
                            style={{ left: `${pageWidthPx - rightMarginPx}px` }}
                            onMouseDown={() => setDragging('right')}
                            title={`Right margin: ${(rightMarginPx / inchPx).toFixed(2)} in`}
                        />
                        </div>
                    </div>
                    <div className={styles.page}>
                        <div
                            ref={quillRef}
                            className={styles.editor}
                            style={{ minHeight: pageHeightPx, width: '100%' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}