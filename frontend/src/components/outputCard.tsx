import { Gauge } from '@mui/x-charts/Gauge'

export const OutputCard = ({ emotion, confidence }: { emotion: string, confidence: number }) => {
    return (
        <div className="w-full flex flex-col bg-blue-200 rounded-xl shadow-orange-400 shadow-md md:p-10 p-4">
            <span className="text-blue-700 md:text-lg font-bold sm:text-balance text-sm">Your Analyzed Emotion</span>
            <span className="mb-1">Emotion: <strong>{emotion}</strong></span>
            <span>Confidence: <strong>{(confidence * 100)}</strong>{"%"}</span>

            <Gauge
                valueMax={100}
                value={confidence*100}
                startAngle={-110}
                endAngle={110}
                text={({ value, valueMax }) => `${value} / ${valueMax}`}
            />
        </div>
    )
}