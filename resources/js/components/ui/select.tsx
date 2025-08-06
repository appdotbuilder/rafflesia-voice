import * as React from 'react';
import { cn } from '@/lib/utils';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    onValueChange?: (value: string) => void;
}

export interface SelectTriggerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export interface SelectContentProps {
    children: React.ReactNode;
}

export interface SelectItemProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
    children: React.ReactNode;
}

export interface SelectValueProps {
    placeholder?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
    ({ className, onValueChange, onChange, children, ...props }, ref) => {
        const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
            onChange?.(e);
            onValueChange?.(e.target.value);
        };

        return (
            <select
                className={cn(
                    'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
                    className
                )}
                ref={ref}
                onChange={handleChange}
                {...props}
            >
                {children}
            </select>
        );
    }
);
Select.displayName = 'Select';

const SelectTrigger = React.forwardRef<HTMLDivElement, SelectTriggerProps>(
    ({ className, children, ...props }, ref) => (
        <div ref={ref} className={className} {...props}>
            {children}
        </div>
    )
);
SelectTrigger.displayName = 'SelectTrigger';

const SelectContent: React.FC<SelectContentProps> = ({ children }) => (
    <>{children}</>
);

const SelectValue: React.FC<SelectValueProps> = ({ placeholder }) => (
    <option value="" disabled>
        {placeholder}
    </option>
);

const SelectItem = React.forwardRef<HTMLOptionElement, SelectItemProps>(
    ({ className, children, ...props }, ref) => (
        <option ref={ref} className={className} {...props}>
            {children}
        </option>
    )
);
SelectItem.displayName = 'SelectItem';

export { Select, SelectTrigger, SelectContent, SelectValue, SelectItem };