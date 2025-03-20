function BreakLine() {
    return (
        <div
            style={{
                borderTop: "var(--dashed-border)",
                borderImage: "linear-gradient(90deg, transparent, var(--text-color-third), transparent) 1",
            }}
        ></div>
    );
}

export default BreakLine;